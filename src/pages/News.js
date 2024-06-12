import React from 'react';
import './News.css';
import '../components/Poll';
import Poll from '../components/Poll';

const News = () => {
  return (
      <div className="newsPage">
          <div className="leftContainer">
              <div className="locksBox">
                  <h2>Who do you fucking hate more?</h2> 
                  <Poll />
              </div>
          </div>
          <div className="middleContainer">
              <div className="locksBox">
                  <h2>Lock Streak: 1</h2> 
              </div>
          </div>
          <div className="rightContainer">
              <div className="locksBox">
                  <h2>Lock Streak: 2</h2> 
              </div>
          </div>
      </div>
  );
}

export default News;
