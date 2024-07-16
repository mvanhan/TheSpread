import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; 
import { ref, onValue, update } from 'firebase/database';
import './Poll.css';

const Poll = () => {
  const [votes, setVotes] = useState({ optionA: 0, optionB: 0 });
  const [userVote, setUserVote] = useState(localStorage.getItem('userVotePoll1'));

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
    const newVotes = { ...votes };

    if (userVote === option) {
      newVotes[option] = votes[option] - 1;
      localStorage.removeItem('userVotePoll1');
      setUserVote(null);
    } else {
      if (userVote) {
        newVotes[userVote] = votes[userVote] - 1;
      }
      newVotes[option] = votes[option] + 1;
      localStorage.setItem('userVotePoll1', option);
      setUserVote(option);
    }

    const updates = {};
    updates['/polls/pollData'] = newVotes;
    update(ref(db), updates);
  };

  return (
    <div className="poll-container">
      <div className="poll-item">
        <img src="/Skenes.png" alt="Option A" className="poll-image" />
        <button onClick={() => handleVote('optionA')} className={userVote === 'optionA' ? 'active' : ''}>
          {userVote === 'optionA' ? 'Not NL' : 'NL'}
        </button>
        <p className='poll-count'>{votes.optionA}</p>
      </div>
      <div className="poll-item">
        <img src="/Judge.png" alt="Option B" className="poll-image" />
        <button onClick={() => handleVote('optionB')} className={userVote === 'optionB' ? 'active' : ''}>
          {userVote === 'optionB' ? 'Not AL' : 'AL'}
        </button>
        <p className='poll-count'>{votes.optionB}</p>
      </div>
    </div>
  );
};

export default Poll;
