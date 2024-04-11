import React from "react";
import logo from "../assets/logo.png";
import "../Styles/Style.css";

const Landing = () => {
  return (
    <div>
      <div className="home-title text-center">
        <div className="logo">
          <img height={75} src={logo} />
          <h1>Royal Tech International</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
