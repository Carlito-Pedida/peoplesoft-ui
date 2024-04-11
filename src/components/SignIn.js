import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import "../Styles/Style.css";

const SignIn = () => {
  let params = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let { signInUser } = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    signInUser(username, password)
      .then(() => {
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
        window.alert("Failed login");
        navigate("/");
      });
  }

  function handleSignUp(event) {
    event.preventDefault();

    navigate("/signup");
  }

  return (
    <div className="text-center">
      <h3 className="mb-3">Login to Management Portal</h3>
      <form className="sign-form" onSubmit={handleSubmit}>
        <input
          placeholder="Enter Username"
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <br></br>

        <input
          placeholder="Enter Password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br></br>
        <button>Log In</button>
      </form>
      <hr style={{ marginLeft: "300px", marginRight: "300px" }}></hr>

      <button onClick={handleSignUp} className="create">
        Create Management Account
      </button>
    </div>
  );
};

export default SignIn;
