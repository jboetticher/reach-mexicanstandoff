import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import './index.css';
import * as backend from './build/index.main.mjs';
import * as reach from '@reach-sh/stdlib/ETH';
import Chat from "./chat.js";

const ACTIVEGAMES = "activegames";
const cowboy1 = "https://promo.dictatergame.com/images/mexstandoff/cowboy1.gif";
const tumbleweed1 = "https://promo.dictatergame.com/images/mexstandoff/tumbleweed1.gif";
const tumbleweed2 = "https://promo.dictatergame.com/images/mexstandoff/tumbleweed2.gif";

// TODO: turn on if algo
//reach.setSignStrategy('AlgoSigner');
//reach.setProviderByName('TestNet');

const { standardUnit, bigNumberToNumber, isBigNumber } = reach;
const bigNumParse = (val) => isBigNumber(val) ? bigNumberToNumber(val) : 0;
const defaults = { standardUnit };

//#region Setup Classes

// Root App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...defaults };
  }

  async componentDidMount() {
    console.log("Component mounting...");
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({ acc, bal });

    console.log("Component mounted.", this.state);
  }

  render() {
    return <Player {...this.state} />;
  }
}

// Definition of the Transactor participant
class Player extends React.Component {
  constructor(props) {
    // props exist here
    console.log("Constructor props:", props);
    super({ ...props, play: false, status: "Not connected to a Lobby." });

    this.setState({ transactionRequested: false, });

    this.getDonationAddress = "0x27B9C8d90ac9513100F01b2d3eF6F72871283B2d";
    this.wager = reach.parseCurrency(1);
  }

  async deploy() {
    // props don't exist here
    const ctc = this.props.acc.deploy(backend);

    backend.Alice(ctc, this);
    this.setState({ ctc: ctc });
    console.log("Alice deployment complete.");

    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({ ctcInfoStr, connected: true, user: 0 });
    console.log("Connection String: ", ctcInfoStr);

    // need to send data to firebase once we set that up

    this.setState({ status: <><div>Awaiting Players in Lobby:</div><div>{ctcInfoStr}</div></> });

    return ({ ctc, ctcInfoStr });
  }

  attachBob(ctcInfoStr) {
    console.log("Attaching as Bob...", ctcInfoStr);
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    console.log(ctc);
    backend.Bob(ctc, this);
    this.setState({ connected: true, user: 1 });

    this.setState({ status: <><div>Awaiting Players in Lobby:</div><div>{ctcInfoStr}</div></> });
  }

  attachCarl(ctcInfoStr) {
    console.log("Attaching as Carl...", ctcInfoStr);
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    console.log(ctc);
    backend.Carl(ctc, this);
    this.setState({ connected: true, user: 2 });

    this.setState({ status: <><div>Awaiting Players in Lobby:</div><div>{ctcInfoStr}</div></> });
  }

  //#region Interface

  random() { return reach.hasRandom.random(); }

  async getPlayerToShoot() {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(2000);
    console.log("It's time to shoot!");

    const transactionReq = await new Promise(resolveTransactionReq => {
      this.setState({ shotRequested: true, resolveTransactionReq });
    });

    this.setState({ shotRequested: false });
    return transactionReq;
  }

  informTimeout() {
    alert("You've been timed out. Lame.");
  }

  seeOutcome(data) {
    console.log(data);
    this.setState({ outcome: data });
  }

  log(e) {
    console.log(e);
    if (e == "Play") {
      this.setState({ play: true, status: <><div>Game started.</div><div>{this.state.ctcInfoStr}</div></> });
    }
  }

  acceptWager(wager) {
    console.log("accepting wager: " + wager);
    //alert("Heads up you're accepting the wager of " + wager);
  }


  //#endregion

  render() {
    return (
      <AppView
        {...this.state}
        deploy={this.deploy.bind(this)}
        attachBob={this.attachBob.bind(this)}
        attachCarl={this.attachCarl.bind(this)}
      />
    )
  }
}

//#endregion

// What's Displayed
let AppView = props => {
  const musicURL = "https://promo.dictatergame.com/images/mexstandoff/rattlesnakerailroad.mp3";
  let [infoMenu, setInfoMenu] = useState(true);
  let [enemy, setEnemy] = useState(0);
  let [modal, setModal] = useState(false);
  let [manual, setManual] = useState();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        MEXICAN STANDOFF
      </h1>

      <audio autoPlay loop id="music">
        <source src={musicURL} type="audio/mp3" />
      </audio>

      {!props.play ? <></> :
        <>
          <img src={cowboy1}
            style={{ position: 'absolute', bottom: '55%', right: '60%' }}
            class="cowboy"
            onClick={() => { setEnemy(0); if (props.shotRequested) setModal(true); }}
          />
          <img src={cowboy1}
            style={{ position: 'absolute', bottom: '55%', left: '60%' }}
            class="cowboy"
            onClick={() => { setEnemy(1); if (props.shotRequested) setModal(true); }}
          />
        </>
      }

      <img src={tumbleweed1} style={{ position: 'absolute', top: '35%', left: '20%', transform: 'scale(1.5)', pointerEvents: 'none' }} />
      <img src={tumbleweed2} style={{ position: 'absolute', top: '45%', right: '20%', transform: 'scale(1.5)', pointerEvents: 'none' }} />

      <div style={{ position: 'absolute', bottom: '15%', left: '50%' }}>
        <img src={cowboy1}
          style={{ position: 'relative', left: '-50%' }}
          class="cowboy"
          onClick={() => { setEnemy(2); if (props.shotRequested) setModal(true); }}
        />
      </div>

      {props.play ? <Chat {...props} /> : <></>}

      {infoMenu ?
        <div class="info-panel">
          <span class="d-flex">
            <button onClick={() => { setInfoMenu(false) }}>X</button>
            <h3 style={{ flexGrow: 1, textAlign: 'center' }}>Info</h3>
          </span>
          <p>This is a blockchain game made on Algorand.</p>
          <a href="https://github.com/jboetticher/reach-mexicanstandoff#readme" target="_blank">Troubleshoot + Extra Info</a>
          <p>Rules:</p>
          <ul>
            <li>3 players pay 1 ALGO each.</li>
            <li>Each player picks a player to shoot.</li>
            <li>1 Player Survives: that player gains 2 ALGO.</li>
            <li>2 Players Survive: both regain 1 ALGO.</li>
            <li>3 Players Die: no ALGO is given to players.</li>
            <li>All ALGO left over is automatically donated to charity.</li>
          </ul>
          {props.connected ? <></> : <>
            <button
              style={{ display: "flex", marginRight: "auto", marginLeft: "auto" }}
              onClick={async () => {
                let info = await props.deploy();
              }}>
              Create Game
            </button>
            <p>Manual Join:</p>
            <input onChange={e => { console.log(e); setManual(e.target.value); }}></input>
            <button onClick={() => { props.attachBob(manual); }}>
              P2
            </button>
            <button onClick={() => { props.attachCarl(manual); }}>
              P3
            </button>
          </>}

        </div> :
        <button onClick={() => { setInfoMenu(true) }}
          style={{ top: "100px", right: "0%", position: 'absolute', padding: '8px' }}>
          Menu
        </button>
      }

      {props.play ?
        <h3 style={{ textAlign: "center" }} >
          {props.shotRequested ?
            "Click the player to shoot!" :
            "Waiting for other desperados to make their decision."}
        </h3> : <></>
      }

      <div style={{ position: 'absolute', bottom: '0%', fontSize: '12px' }}>
        Status: <br />
        {props.status}
      </div>


      <AskModal enemy={enemy} user={props.user} enabled={modal} setEnabled={setModal} resolveTransactionReq={props.resolveTransactionReq} />
      <EndingModal user={props.user} enabled={props.outcome != null} outcome={props.outcome} />
    </>
  );
}

let AskModal = props => {
  const selectedEnemy = props.enemy;
  const questionText = props.enemy == props.user ? "Are you sure you want to shoot yourself in the foot?" :
    "Are you sure you want to shoot player " + (props.enemy + 1) + "?";

  return (!props.enabled ? <></> :
    <div style={{ position: "absolute", top: '0', height: "100%", width: "100%", backgroundColor: "rgba(1, 1, 1, .5)" }}>\
      <h3 style={{ textAlign: "center", marginTop: "300px" }}>{questionText}</h3>
      <div class="d-flex" style={{ justifyContent: "center" }}>
        <button onClick={() => { props.resolveTransactionReq(selectedEnemy); props.setEnabled(false); }}>Yes</button>
        <button onClick={() => { props.setEnabled(false); }}>No</button>
      </div>
    </div>
  );
}

let EndingModal = props => {
  const outcome = props.outcome;
  const user = props.user;

  const player1Alive = outcome?.[0] == 1;
  const player1Shot = outcome?.[1];
  const player2Alive = outcome?.[2] == 1;
  const player2Shot = outcome?.[3];
  const player3Alive = outcome?.[4] == 1;
  const player3Shot = outcome?.[5];
  const totalWinners = outcome?.[0] + outcome?.[2] + outcome?.[4];

  const shotText = player => {
    let shot = outcome[player * 2 + 1];
    const shotThemself = shot == player;
    if (reach.isBigNumber(shot)) shot = bigNumberToNumber(shot);
    if (shotThemself) return "Shot themself.";
    else return "Shot Player " + (shot + 1);
  }

  let endingText = "Looks like you aren't walking away this time...";
  if (outcome?.[props.user * 2] == 1) {
    if (totalWinners == 1) {
      endingText = "Yeehaw! The true desperado emerges victorious.";
    }
    else endingText = "Two left standing. You walk away with your life and your ALGO.";
  }
  else if (totalWinners == 0)
    endingText = "Everyone died. Guess the treasure goes to charity!";

  return (!props.enabled ? <></> :
    <div style={{ position: "absolute", top: '0', height: "100%", width: "100%", backgroundColor: "rgba(1, 1, 1, .8)" }}>\
      <h3 style={{ textAlign: "center", marginTop: "175px", color: "crimson" }}>{endingText}</h3>
      <div class="d-flex" style={{ justifyContent: "center" }}>
        <div class="final-box">
          <p>{user == 0 ? "You" : "Player 1"}</p>
          <img src={cowboy1}
            class="cowboy"
          />
          <p>{shotText(0)}</p>
          {player1Alive ? <></> :
            <div style={{ position: "relative", height: "0px", width: "0px" }}>
              <div style={{ position: "absolute", left: "15px", bottom: "15px", fontSize: "250px", color: "crimson" }}>
                X
              </div>
            </div>
          }
        </div>
        <div class="final-box">
          <p>{user == 1 ? "You" : "Player 2"}</p>
          <img src={cowboy1}
            class="cowboy"
          />
          <p>{shotText(1)}</p>
          {player2Alive ? <></> :
            <div style={{ position: "relative", height: "0px", width: "0px" }}>
              <div style={{ position: "absolute", left: "15px", bottom: "15px", fontSize: "250px", color: "crimson" }}>
                X
              </div>
            </div>
          }
        </div>
        <div class="final-box">
          <p>{user == 2 ? "You" : "Player 3"}</p>
          <img src={cowboy1}
            class="cowboy"
          />
          <p>{shotText(2)}</p>
          {player3Alive ? <></> :
            <div style={{ position: "relative", height: "0px", width: "0px" }}>
              <div style={{ position: "absolute", left: "15px", bottom: "15px", fontSize: "250px", color: "crimson" }}>
                X
              </div>
            </div>
          }
        </div>
      </div>
      <div class="d-flex" style={{ justifyContent: "center" }}>
        <button onClick={() => { window.location.reload() }}>Back to Main Screen</button>
      </div>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



/* Unfinished Public Lobbies Code

  <h3 style={{ textAlign: "center", marginTop: "16px" }}>Active Lobbies</h3>
  <div style={{ marginTop: "8px", overflow: "auto", display: "flex", flexFlow: "column", maxHeight: "25%" }}>
    {lobbies.map(x => (x.players < 3 ?
      <div style={{ marginBottom: "16px" }}>
        <p>{x.address}</p>
        <p>{x.players} / 3 Players</p>
        <button onClick={() => {
          if (x.players == 1) {
            console.log("attaching bob");
            props.attachBob(x.address);
          }
          else {
            console.log("attaching carl");
            props.attachCarl(x.address);
          }
        }}>
          Join
        </button>
      </div>
      : <></>))}
  </div>
*/