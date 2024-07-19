import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import styles from "../Styles/SignUpSignIn.module.css";
import { Stack } from "react-bootstrap";

const SignIn = () => {
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
        navigate("/signin");
      });
  }

  function handleSignUp(event) {
    event.preventDefault();

    navigate("/signup");
  }

  return (
    <div className="text-center">
      <h3 className="mb-3">Login to Management Portal</h3>
      <form className={styles.signInForm} onSubmit={handleSubmit}>
        <Stack className="col-md-5 mx-auto">
          <input
            placeholder="Enter Username"
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />

          <input
            placeholder="Enter Password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br></br>
          <button className="mx-auto">Log In</button>
        </Stack>
      </form>
      <hr style={{ marginLeft: "300px", marginRight: "300px" }}></hr>

      <button onClick={handleSignUp} className={`${styles.create} mx-auto`}>
        Create Management Account
      </button>
    </div>
  );
};

export default SignIn;
