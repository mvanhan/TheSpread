import { NavLink } from "react-router-dom";
import React from "react";

const NavBar = () => {
    return (
      <div className="navBar">
        <div className="navName">
          "Logo"
        </div>
        <div className="navLinks">
            <NavLink to="/" exact activeClassName="active">News</NavLink>
            <NavLink to="/Betting" activeClassName="active">Betting</NavLink>
            <NavLink to="/About" activeClassName="active">About</NavLink>
        </div>
      </div>
    );
}

export default NavBar
