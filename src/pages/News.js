import React from 'react';
import './News.css';
import '../components/Poll';
import Poll from '../components/Poll';
import Poll2 from '../components/Poll2';
import Chat from '../components/Chat';

const News = () => {
  return (
      <div className="newsPage">
          <div className="leftContainer">
              <div className="locksBox">
                  <h2>Who do you fucking hate more?</h2> 
                  <Poll />
              </div>
              <br></br>
              <div className="locksBox">
                  <h2>Who's uglier?</h2> 
                  <Poll2 />
              </div>
              <br></br>
              <div className="locksBox">
              </div>
          </div>
          <div className="middleContainer">
              <div className="midBox">
                  <h2>I hate Jason Tatum's corny ass so damn much he's worse than fucking Klay.</h2> 
              </div>
          </div>
          <div className="rightContainer">
              <div className="locksBox">
                  <h2>Lock Streak: 1</h2> 
              </div>
              <br></br>
              <div className="locksBox">
                  <h2>LOTD 7/12</h2>
                  <br></br>
                  <p>P000000P</p>
              </div>
              <Chat />
          </div>
      </div>
  );
}

export default News;

