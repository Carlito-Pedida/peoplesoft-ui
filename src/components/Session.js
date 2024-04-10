import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import "../Styles/Home.css";

const Session = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let { signInUser } = useContext(UserContext);
  let navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();

    navigate("/employed");
  }

  return (
    <div className="text-center">
      <h3>Welcome to Management Portal</h3>
      <div className="sign-form">
        <button onClick={handleClick}>Proceed to Employee Records</button>
        <hr style={{ marginLeft: "300px", marginRight: "300px" }}></hr>
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default Session;
