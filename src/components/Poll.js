import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; // Correct the import path
import { ref, onValue, update } from 'firebase/database';

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
    <div>
      <button onClick={() => handleVote('optionA')}>Vote for Luke</button>
      <button onClick={() => handleVote('optionB')}>Vote for LeGoat</button>
      <div>
        <img src="/LeBron.webp" alt="LeBron" className="image" />
        <img src="/Luka.webp" alt="Luka" className="image" />
        <p>Option A: {votes.optionA}</p>
        <p>Option B: {votes.optionB}</p>
      </div>
    </div>
  );
};

export default Poll;
