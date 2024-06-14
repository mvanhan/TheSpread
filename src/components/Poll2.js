import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; 
import { ref, onValue, update } from 'firebase/database';
import './Poll.css'

const Poll2 = () => {
  const [votes, setVotes] = useState({ optionA: 0, optionB: 0 });

  useEffect(() => {
    const votesRef = ref(db, 'poll2/pollData'); // Updated reference to poll2
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
    updates['/poll2/pollData'] = newVotes; // Updated reference to poll2
    update(ref(db), updates);
  };

  return (
    <div className="poll-container">
      <div className="poll-item">
        <img src="/DerrickWhite.webp" alt="Option A" className="poll2-image" />
        <button onClick={() => handleVote('optionA')}>Derrick</button>
        <p className="poll-count">{votes.optionA}</p>
      </div>
      <div className="poll-item">
        <img src="/HerbJones.png" alt="Option B" className="poll2-image" />
        <button onClick={() => handleVote('optionB')}>Herb J</button>
        <p className="poll-count">{votes.optionB}</p>
      </div>
    </div>
  );
};

export default Poll2;
