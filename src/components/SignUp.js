import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../Styles/SignUpSignIn.module.css";

const SignUp = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [position, setPosition] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let { createUser } = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    createUser(first_name, last_name, imageUrl, position, username, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Failed registration: error creating user");
      });
  }

  return (
    <div className={styles.signUpFormCase}>
      <Form onSubmit={handleSubmit}>
        <Stack gap={3} className="p-4">
          <h1>Employee Information</h1>

          <span>First Name </span>
          <Form.Control
            placeholder="Enter First Name"
            type="text"
            name="first_name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />

          <span>Last Name </span>
          <Form.Control
            placeholder="Enter Last Name"
            type="text"
            name="last_name"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
          />

          <span>Add Picture Link </span>
          <Form.Control
            placeholder="Enter Image URL"
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <span>Position </span>
          <Form.Control
            placeholder="Enter Position"
            type="text"
            name="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />

          <span>Username </span>
          <Form.Control
            placeholder="Enter Email"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <span>Password </span>
          <Form.Control
            placeholder="Enter Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" variant="success">
            Create Profile
          </Button>
        </Stack>
      </Form>
    </div>
  );
};

export default SignUp;
