import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <p className="logo-name">alpha taxis</p>
        </Link>
      </div>
      <nav className="navbar">
        <ul className="navlists">
          <Link className="links" to="/">
            <li className="navlink">home</li>
          </Link>
          <Link to="/">
            <li className="navlink">about us</li>
          </Link>
          <Link to="/">
            <li className="navlink">contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
