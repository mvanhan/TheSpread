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
                  <h2>Lock Streak: 0</h2> 
              </div>
              <br></br>
              <div className="locksBox">
                  <h2>LOTD ...</h2>
                  <br></br>
                  <p>...</p>
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

