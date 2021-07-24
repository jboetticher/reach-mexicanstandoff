import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import './index.css';
import * as backend from './build/index.main.mjs';
import * as reach from '@reach-sh/stdlib/ETH';
import firebase from 'firebase';
import fbconfig from './fbconfig.json';

firebase.initializeApp(fbconfig);
firebase.analytics();
const db = firebase.firestore();

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
    super(props);
    this.setState({ transactionRequested: false, play: false });



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
    this.setState({ ctcInfoStr, connected: true });
    console.log("Connection String: ", ctcInfoStr);

    // need to send data to firebase once we set that up
    db.collection("activegames").add({
      address: ctcInfoStr,
      players: 1,
      created: Date.now()
    });

    return ({ ctc, ctcInfoStr });
  }

  attachBob(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    console.log(ctc);
    backend.Bob(ctc, this);
    this.setState({ connected: true });
  }

  attachCarl(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    backend.Carl(ctc, this);
    this.setState({ connected: true });
  }

  //#region Interface

  random() { return reach.hasRandom.random(); }

  async getPlayerToShoot() {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(2000);

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
      this.setState({ play: true });
    }
  }

  acceptWager(wager) {
    alert("Heads up you're accepting the wager of " + wager);
  }


  //#endregion

  render() {
    return (
      <AppView {...this.state} deploy={this.deploy.bind(this)} />
    )
  }
}

//#endregion

// What's Displayed
let AppView = props => {
  const cowboy1 = "https://promo.dictatergame.com/images/mexstandoff/cowboy1.gif";
  const musicURL = "https://promo.dictatergame.com/images/mexstandoff/rattlesnakerailroad.mp3";
  let [status, setStatus] = useState("Not Connected to a Lobby.");
  let [infoMenu, setInfoMenu] = useState(true);


  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        MEXICAN STANDOFF
      </h1>

      <audio autoPlay loop id="music">
        <source src={musicURL} type="audio/mp3" />
      </audio>

      <img src={cowboy1}
        style={{ position: 'absolute', bottom: '55%', left: '60%' }}
        class="cowboy"
      />
      <img src={cowboy1}
        style={{ position: 'absolute', bottom: '55%', right: '60%' }}
        class="cowboy"
      />
      <div style={{ position: 'absolute', bottom: '15%', left: '50%' }}>
        <img src={cowboy1}
          style={{ position: 'relative', left: '-50%' }}
          class="cowboy"
        />
      </div>

      {infoMenu ?
        <div class="info-panel">
          <span class="d-flex">
            <button onClick={ () => { setInfoMenu(false) } }>X</button>
            <h3 style={{ flexGrow: 1, textAlign: 'center' }}>Info</h3>
          </span>
          <p>This is a blockchain game made on Algorand.</p>
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
                setStatus(<><div>"Awaiting Players in Lobby:</div><div>{info.ctcInfoStr}</div></>);
              }}>
              Create Game
            </button>
            <h3 style={{ textAlign: "center", marginTop: "16px" }}>Active Lobbies</h3>
            <div style={{ marginTop: "8px", overflow: "auto", display: "flex", flexFlow: "column", maxHeight: "35%" }}>
              <p>this is where we would await a firebase call and get all of the lobbies.</p>
              <p>actually we'd probably do that earlier</p>
            </div>
          </>}

        </div> :
        <button onClick={ () => { setInfoMenu(true) } }
          style={{ top: "0%", right: "0%", position: 'absolute', padding: '8px' }}>
          Info
        </button>
      }

      <div style={{ position: 'absolute', bottom: '0%', fontSize: '12px' }}>
        Status: <br />
        {status}
      </div>
    </>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
