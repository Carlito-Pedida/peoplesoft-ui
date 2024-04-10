import React from "react";
import "../Styles/Navigation.css";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">Personal Details</a>
          </li>
          <li className="nav-item">
            <a href="/employed">Employee Records</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact IT Support</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
