import { NavLink } from "react-router-dom";
import React from "react";

const NavBar = () => {
    return (
      <div className="navBar">
        <div className="navName">
          <img src="/DailyPoopPFP.png" style={{ width: '10%', height: 'auto' }}></img>
        </div>
        <div className="navTitle">
            <h1>The Daily Poop: Sports Blog</h1>
        </div>
        <div className="navLinks">
            <NavLink to="/" exact activeClassName="active">News</NavLink>
            {/* <NavLink to="/Betting" activeClassName="active">Betting</NavLink> */}
            <NavLink to="/About" activeClassName="active">About</NavLink>
        </div>
      </div>
    );
}

export default NavBar
