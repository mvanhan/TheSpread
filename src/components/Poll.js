import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; 
import { ref, onValue, update } from 'firebase/database';
import './Poll.css'

const Poll = () => {
  const [votes, setVotes] = useState({ optionA: 0, optionB: 0 });

  useEffect(() => {
    const votesRef = ref(db, 'polls/pollData');
    onValue(votesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setVotes(data);
      }
    });
  }, []);

  const handleVote = (option) => {
    const newVotes = { ...votes, [option]: votes[option] + 1 };
    const updates = {};
    updates['/polls/pollData'] = newVotes;
    update(ref(db), updates);
  };

  return (
    <div className="poll-container">
      <div className="poll-item">
        <img src="/LeBron.webp" alt="Option A" className="poll-image" />
        <button onClick={() => handleVote('optionA')}>Bron</button>
        <p className='poll-count'>{votes.optionA}</p>
      </div>
      <div className="poll-item">
        <img src="/Luka.webp" alt="Option B" className="poll-image" />
        <button onClick={() => handleVote('optionB')}>Luka</button>
        <p className='poll-count'>{votes.optionB}</p>
      </div>
    </div>
  );
};


export default Poll;
