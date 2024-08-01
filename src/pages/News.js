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
              <div className="pollBox">
                  <h2>Who's better?</h2> 
                  <Poll />
              </div>
              <br></br>
              <div className="pollBox">
                  <h2>Who's uglier?</h2> 
                  <Poll2 />
              </div>
              <br></br>
          </div>
          <div className="middleContainer">
            <div className="midBox">
                  <h2>USA Lacking in Gold?</h2>
                  <br></br>
                  <p>Heading into Thursday at the Olympics, the United States currently only has 6 gold medals, 5 behind the leader of China. The US does lead the total medal count but gold is all that matters tbh. 
                  </p>
              </div>
              <br></br>
            <div className="midBox">
                  <h2>Team USA Revenge</h2>
                  <br></br>
                  <p>LeAmerica and company took care of business Monday against South Sudan after the previous close call. Steph Curry shot 1-9 because of a lack of sex and Embiid didn’t play because he was watching Naruto on the bench. 
                  </p>
              </div>
              <br></br>
            <div className="midBox">
                  <h2>Expectations of MLB Trade Deadline</h2>
                  <br></br>
                  <p>Honestly, no big deals are going to happen and even if they did you have no fucking clue who they are. 26 days till college football ladies and gentleman. 
                  </p>
              </div>
              <br></br>
            <div className="midBox">
                  <h2>Novak and Rafa’s Last Dance</h2>
                  <br></br>
                  <p>Monday at the Olympics Djokovic and Nadal faced off for one last time. Novak easily handled business 6-1,6-4. It’s sad to see the second of the Big 3 to fall off after two decades of dominance. And no one likes Novak so thankfully Alcarez will kick his ass again. 
                  </p>
              </div>
              <br></br>
            <div className="midBox">
                  <h2>Team USA in Trouble?</h2>
                  <br></br>
                  <p>Team USA has struggled in recent games including beating South Sudan by one point. Where the fuck even is South Sudan? Lecarry is the only reason we have won the last two games. If Bron decides to dabble into a little too much wine on a Taco Tuesday we might not even medal. 
                  </p>
              </div>
              <br></br>
            <div className="midBox">
                  <h2>Lincoln Riley WILL be Fired by 2025 Season</h2>
                  <br></br>
                  <p>Riley at the Big 10 media day admitted “Yea I didn’t want to go to the SEC i’d be scared shitless” and also admitted they need to take Notre Dame (historic rivalry) off their schedule for them to ever have a chance at a Natty. We all know this won’t happen anyways because Lincoln can’t put a defense on the field and doesn’t have Caleb to carry him anymore. 
                  </p>
              </div>
          </div>
          <div className="rightContainer">
              <div className="locksBox">
                  <h2>Lock Streak: 2</h2> 
              </div>
              <br></br>
              <div className="locksBox">
                  <h2>LOTD: Royals ML</h2>
                  <br></br>
                  <p>White Sox just got robbed at gun point and they blow</p>
              </div>
              <br></br>
              <div className='midBox'>
                <Chat />
              </div>
          </div>
      </div>
  );
}

export default News;

