'reach 0.1';

//#region Constants and Definitions

const DEADLINE = 30;
const PLAYERCNT = 3;

const PlayerInterface = {
  ...hasRandom,
  getPlayerToShoot: Fun([], UInt),
  seeOutcome: Fun([Array(UInt, PLAYERCNT * 2)], Null),
  informTimeout: Fun([], Null),
  getDonationAddress: Address,
  log: Fun(true, Null)
}

const PublisherInterface = {
  ...PlayerInterface,
  // I recommend the frontend should make sure that this is a low cost of entry
  wager: UInt
};

const AttacherInterface = {
  ...PlayerInterface,
  acceptWager: Fun([UInt], Null)
}

//#endregion

export const main = Reach.App(() => {

  const A = Participant('Alice', PublisherInterface);
  const B = Participant('Bob', AttacherInterface);
  const C = Participant('Carl', AttacherInterface);
  deploy();

  // maybe also make a private lobby version too
  // https://gist.github.com/Zetsuboii/ec534c2f23aa4c19fd38d2adb3d8667d

  const informTimeout = () => {
    each([A, B, C], () => { interact.informTimeout(); });
  };

  // setup + wager paying
  A.only(() => {
    const wager = declassify(interact.wager);
    const donationA = declassify(interact.getDonationAddress);
  });
  A.publish(wager, donationA).pay(wager);
  commit();

  B.only(() => {
    interact.acceptWager(wager);
    const donationB = declassify(interact.getDonationAddress);
  });
  B.publish(donationB)
    .pay(wager)
    .timeout(DEADLINE, () => { closeTo(A, informTimeout); });
  commit();

  C.only(() => {
    interact.acceptWager(wager);
    const donationC = declassify(interact.getDonationAddress);
  });
  C.publish(donationC)
    .pay(wager)
    .timeout(DEADLINE, () => {
      // TODO: make a better timeout, because it should give to both A and B
      closeTo(B, informTimeout);
    });

  if (donationA != donationB || donationA != donationC) {
    // TODO: make a better timeout, because it should give to both A and B and C
    commit();
    closeTo(A, informTimeout);
  }

  // you can make a while loop if you figure out how to make a proper timeout
  //invariant(balance() >= 0);
  //while (desireToPlayAgain) {
  commit();

  // A takes a shot
  A.only(() => {
    const _enemyA = interact.getPlayerToShoot();
    const [_commitA, _saltA] = makeCommitment(interact, _enemyA);
    const commitA = declassify(_commitA);
  });
  A.publish(commitA)
    // TODO: make a better timeout, because it should give to both B and C
    .timeout(DEADLINE, () => { closeTo(B, informTimeout); });
  commit();
  unknowable(B, A(_enemyA, _saltA));
  unknowable(C, A(_enemyA, _saltA));

  // B takes a shot
  B.only(() => {
    const _enemyB = interact.getPlayerToShoot();
    const [_commitB, _saltB] = makeCommitment(interact, _enemyB);
    const commitB = declassify(_commitB);
  });
  B.publish(commitB)
    // TODO: make a better timeout
    .timeout(DEADLINE, () => { closeTo(C, informTimeout); });
  commit();
  unknowable(A, B(_enemyB, _saltB));
  unknowable(C, B(_enemyB, _saltB));

  // C takes a shot
  C.only(() => {
    const enemyC = declassify(interact.getPlayerToShoot());
  });
  C.publish(enemyC)
    // TODO: make a better timeout
    .timeout(DEADLINE, () => { closeTo(A, informTimeout); });
  commit();

  // reveals A's shot
  A.only(() => {
    const [saltA, enemyA] = declassify([_saltA, _enemyA]);
  });
  A.publish(saltA, enemyA)
    // TODO: make a better timeout
    .timeout(DEADLINE, () => closeTo(C, informTimeout));
  commit();

  // reveals B's shot
  B.only(() => {
    const [saltB, enemyB] = declassify([_saltB, _enemyB]);
  });
  B.publish(saltB, enemyB)
    // TODO: make a better timeout
    .timeout(DEADLINE, () => closeTo(A, informTimeout));

  // determines payouts
  const aWon = (enemyA % PLAYERCNT) == 0 ? 0 : (enemyB % PLAYERCNT == 0 || enemyC % PLAYERCNT == 0) ? 0 : 1;
  const bWon = (enemyB % PLAYERCNT) == 1 ? 0 : (enemyA % PLAYERCNT == 1 || enemyC % PLAYERCNT == 1) ? 0 : 1;
  const cWon = (enemyC % PLAYERCNT) == 2 ? 0 : (enemyA % PLAYERCNT == 2 || enemyB % PLAYERCNT == 2) ? 0 : 1;
  const winnerTotal = aWon + bWon + cWon;

  assert(aWon <= 1);
  assert(bWon <= 1);
  assert(cWon <= 1);
  assert(winnerTotal < 3);

  transfer(aWon == 0 ? 0 : (bWon == 0 && cWon == 0) ? wager * 2 : wager).to(A);
  transfer(bWon == 0 ? 0 : (aWon == 0 && cWon == 0) ? wager * 2 : wager).to(B);
  transfer(cWon == 0 ? 0 : (aWon == 0 && bWon == 0) ? wager * 2 : wager).to(C);
  transfer(winnerTotal == 0 ? wager * 3 : wager).to(donationA);
  // }

  each([A, B, C], () => {
    interact.seeOutcome(array(UInt, [ aWon, enemyA, bWon, enemyB, cWon, enemyC ]));
  });

  assert(balance() == 0);
  commit();
  exit();
});