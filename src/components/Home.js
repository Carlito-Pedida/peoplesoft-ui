import React, { useState } from "react";
import Landing from "../assets/Landing";
import SignIn from "./SignIn";
import "../Styles/Home.css";

const Home = () => {
  const [userLog, setUserLog] = useState([]);

  return (
    <div className="home">
      <Landing />
      <SignIn />
    </div>
  );
};

export default Home;
