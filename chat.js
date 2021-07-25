import React, { useRef, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import fbconfig from './fbconfig.json';
import "./chat.css";

import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp(fbconfig);
const firestore = firebase.firestore();


let Chat = props => {
  return (
    <section class="chat">
      <ChatRoom {...props} />
    </section>
  );
}


let ChatRoom = props => {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.where("address", "==", props.ctcInfoStr).orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      player: props.player,
      address: props.ctcInfoStr
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <div>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </div>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>Send</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, player } = props.message;

  return (<>
    <div className={`message d-flex`}>
      <p>P{player + 1} {text}</p>
    </div>
  </>)
}


export default Chat;