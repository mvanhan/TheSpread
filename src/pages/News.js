import React from 'react';
import './News.css';

const News = () => {
  return (
      <div className="newsPage">
          <div className="leftContainer">
              <div className="locksBox">
                  <h2>Lock Streak: 0</h2> 
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
