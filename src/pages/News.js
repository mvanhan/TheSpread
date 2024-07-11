import React from 'react';
import './News.css';
import '../components/Poll';
import Poll from '../components/Poll';
import Poll2 from '../components/Poll2';

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
              <div className="locksBox">
                  <h2>I hate Jason Tatum's corny ass so damn much he's worse than fucking Klay.</h2> 
              </div>
          </div>
          <div className="rightContainer">
              <div className="locksBox">
                  <h2>Lock OTD: Paul Skenes over K's</h2> 
                  <br></br>
                  <p>
                    Livvy dunne fucked up when she flicked up with Burrow. Brewers are cooked.
                  </p>
              </div>
          </div>
      </div>
  );
}

export default News;
