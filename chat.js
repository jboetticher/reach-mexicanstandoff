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
  console.log("Chat props: ", props);
  let [enabled, setEnabled] = useState(true);
  return (
    <>
      <button style={{ fontSize: "12px" }} onClick={() => { setEnabled(!enabled); }}>
        Toggle Chat
      </button>
      <section class="chat" style={{ display: enabled ? "block" : "none" }} >
        <ChatRoom {...props} />
      </section>
    </>
  );
}


let ChatRoom = props => {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');

  // for some reason this where didn't work, so instead we're going to have to do it in the frontend
  // i increased the limit to 35 from 25 to compensate
  // TODO: fix this firebase query
  const query = messagesRef
    //.where("address", "==", props.ctcInfoStr)
    .orderBy('createdAt')
    .limit(35);

  const [messages] = useCollectionData(query, { idField: 'id' });
  console.log("Messages + Query", messages, query);

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      player: props.user,
      address: props.ctcInfoStr
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <div class="chat-message-container">

      {messages && messages.map(msg => (msg.address == props.ctcInfoStr ? <ChatMessage key={msg.id} message={msg} /> : <></> ))}

      <span ref={dummy}></span>

    </div>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Negotiate here!" />

      <button type="submit" disabled={!formValue}>Send</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, player } = props.message;

  return (<>
    <div className={`message d-flex`}>
      <p>P{player + 1}: {text}</p>
    </div>
  </>)
}


export default Chat;