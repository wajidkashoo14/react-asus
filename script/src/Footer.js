import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <form className="subscribe">
        <input type="email" placeholder="Email" />
        <button className="footer-btn">Suscribe</button>
      </form>
      <ul className="footer-list">
        <li className="list-item">home</li>
        <li className="list-item">aboutus</li>
        <li className="list-item">contact</li>
      </ul>
    </footer>
  );
}

export default Footer;
