import { loadStdlib, } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const PLAYER = ['Alice', 'Bob', 'Carl'];

(async () => {
    const stdlib = await loadStdlib(process.env);
    const startingBalance = stdlib.parseCurrency(10);
    const fmt = (x) => stdlib.formatCurrency(x, 4);
    const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

    const alice = await stdlib.newTestAccount(startingBalance);
    const bob = await stdlib.newTestAccount(startingBalance);
    const carl = await stdlib.newTestAccount(startingBalance);
    const defaultAcc = await stdlib.newTestAccount(startingBalance);
    const defaultAccAddress = defaultAcc.getAddress();

    console.log("Default account address: " + defaultAccAddress);

    const defaultBefore = await getBalance(defaultAcc);
    const aliceBalance = await getBalance(alice);
    const bobBalance = await getBalance(bob);
    const carlBalance = await getBalance(carl);
    console.log(`Initial Balances:\nDefault: ${defaultBefore}, Alice: ${aliceBalance}, Bob: ${bobBalance}, Carl: ${carlBalance}`);

    console.log("Alice is deploying the backend...");
    const ctcAlice = alice.deploy(backend);
    console.log("Bob is connecting to the backend...");
    const ctcBob = bob.attach(backend, ctcAlice.getInfo());
    console.log("Carl is connecting to the backend...");
    const ctcCarl = carl.attach(backend, ctcAlice.getInfo());

    const Player = (Who) => ({
        ...stdlib.hasRandom,
        getDonationAddress: defaultAccAddress,
        getPlayerToShoot: async() => {
            const player = Math.floor(Math.random() * 3);
            console.log(`${Who} played ${PLAYER[player]}`);
            return player;
        },
        seeOutcome: (outcome) => {
            console.log(`${Who} saw outcome: ${outcome[0]}, ${outcome[1]}, ${outcome[2]}, ${outcome[3]}, ${outcome[4]}, ${outcome[5]}`);
        },
        informTimeout: () => { console.log("You were timed out.") },
        log: (e) =>  console.log(e)
    });

    await Promise.all([
        backend.Alice(ctcAlice, {
            ...Player(PLAYER[0]),
            wager: stdlib.parseCurrency(1),
        }),
        backend.Bob(ctcBob, {
            ...Player(PLAYER[1]),
            acceptWager: (amt) => {
                console.log(`Bob accepts the wager of ${amt}`);
            }
        }),
        backend.Carl(ctcCarl, {
            ...Player(PLAYER[2]),
            getDonationAddress: defaultAccAddress,
            acceptWager: (amt) => {
                console.log(`Carl accepts the wager of ${amt}`);
            }
        })
    ]);

    const defaultAfter = await getBalance(defaultAcc);
    const aliceAfter = await getBalance(alice);
    const bobAfter = await getBalance(bob);
    const carlAfter = await getBalance(carl);
    console.log(`End Balances:\nDefault: ${defaultAfter}, Alice: ${aliceAfter}, Bob: ${bobAfter}, Carl: ${carlAfter}`);
})();