import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <p className="logo-name">alfa taxis</p>
      </div>
      <nav className="navbar">
        <ul className="navlists">
          <li className="navlink">home</li>
          <li className="navlink">aboutus</li>
          <li className="navlink">contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
