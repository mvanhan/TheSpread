import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; 
import { ref, onValue, update } from 'firebase/database';
import './Poll.css';

const Poll2 = () => {
  const [votes, setVotes] = useState({ optionA: 0, optionB: 0 });
  const [userVote, setUserVote] = useState(localStorage.getItem('userVotePoll2'));

  useEffect(() => {
    const votesRef = ref(db, 'poll2/pollData');
    onValue(votesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setVotes(data);
      }
    });
  }, []);

  const handleVote = (option) => {
    const newVotes = { ...votes };

    if (userVote === option) {
      
      newVotes[option] = votes[option] - 1;
      localStorage.removeItem('userVotePoll2');
      setUserVote(null);
    } else {
      if (userVote) {
        
        newVotes[userVote] = votes[userVote] - 1;
      }
      
      newVotes[option] = votes[option] + 1;
      localStorage.setItem('userVotePoll2', option);
      setUserVote(option);
    }

    
    const updates = {};
    updates['/poll2/pollData'] = newVotes;
    update(ref(db), updates);
  };

  return (
    <div className="poll-container">
      <div className="poll-item">
        <img src="/SuniLee.png" alt="Option A" className="poll2-image" width={115}/>
        <button onClick={() => handleVote('optionA')} className={userVote === 'optionA' ? 'active' : ''}>
          {userVote === 'optionA' ? 'Not Suni' : 'Suni'}
        </button>
        <p className="poll-count">{votes.optionA}</p>
      </div>
      <div className="poll-item">
        <img src="/Booker.webp" alt="Option B" className="poll2-image" />
        <button onClick={() => handleVote('optionB')} className={userVote === 'optionB' ? 'active' : ''}>
          {userVote === 'optionB' ? 'Not Book' : 'Book'}
        </button>
        <p className="poll-count">{votes.optionB}</p>
      </div>
    </div>
  );
};

export default Poll2;
