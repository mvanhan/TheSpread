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
              <br></br>
              <div className="midBox">
                  <h2>The Secret Behind the Heat’s Summer League Title: A Snow Bunny</h2>
                  <br></br>
                  <p>Josh Christopher dropped 24 points, 6-10 from 3, in Monday’s Summer League final winning himself the MVP. This is all thanks to Jalen Green who apparently stole his snow bunny back in Houston. Christopher is searching for his revenge as he is reviving his NBA career in looks of a new snow bunny. 
                  </p>
              </div>
              <br></br>
              <div className="midBox">
                  <h2>WWE Star Logan Paul sued by the Olympics</h2>
                  <br></br>
                  <p>Honestly, this dude is just a clown and his drink tastes like if a dog took a shit in it. Logan couldn’t even win Mr. Beast’s challenge because he’s so retarded and then just thought it was chill to use Olympics on his product. Fuck you Logan. 
                  </p>
              </div>
              <br></br>
              <div className="midBox">
                  <h2>How Bronny’s poor performance has RUINED Lebron's Legacy</h2>
                  <br></br>
                  <p>Lebron had a set plan to become the official GOAT of basketball. Lesperm has not just become a nagging problem to Lebron’s legacy through this nepotism scandal, but also a problem with the birds. Our sources say Bronny off the court gets no play and only gets with dusters putting him in a shooting slump on the court yet still hammering 3s off. 
                  </p>
              </div>
              <br></br>
              <div className="midBox">
                  <h2>“Bronny will never be a pro” - Jaylen Brown to his shawty Angel Reese
                  </h2>
                  <br></br>
                  <p>So basically Jaylen is super butthurt about not making team USA and is trying to slide in to ugly ass Angel Reese while his girl is right next to him. Not sure how this will work out for JB but at least he got carried by Brad Stevens for a chip. 
                  </p>
              </div>
              <br></br>
              <div className="midBox">
                  <h2>Why Rory Mcllroy will finally win another Major</h2>
                  <br></br>
                  <p>Rory’s wife has called for a divorce one month before The Open. Not only has Rory been more dialed than usual in recent tournaments, but this bitch actually had the nerve to show up to the tournament. Rory isn’t fucking around and is about to get a W which means a massive W for the golf world. #FuckLIV
                  </p>
              </div>
          </div>
          <div className="rightContainer">
              <div className="locksBox">
                  <h2>Lock Streak: 1</h2> 
              </div>
              <br></br>
              <div className="locksBox">
                  <h2>LOTD: Phillies ML</h2>
                  <br></br>
                  <p>Cooler jersey's tbh</p>
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

