// Chat.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { ref, push, onValue, serverTimestamp } from "firebase/database";
import { generateRandomUsername } from './randomUsername';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const newUsername = generateRandomUsername();
    setUsername(newUsername);

    const messagesRef = ref(db, 'messages');
    onValue(messagesRef, (snapshot) => {
      const messagesArray = [];
      snapshot.forEach((childSnapshot) => {
        messagesArray.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });
      messagesArray.sort((a, b) => b.timestamp - a.timestamp);
      setMessages(messagesArray);
    });
  }, []);

  const addMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '' && username !== '') {
      push(ref(db, 'messages'), {
        username: username,
        text: newMessage,
        timestamp: serverTimestamp()
      });
      setNewMessage('');
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <form onSubmit={addMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Write a message..."
          required
        />
        <button type="submit">Send</button>
      </form>
      <div>
        {messages.map(({ id, username, text }) => (
          <div key={id}>
            <p><strong>{username}:</strong> {text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
