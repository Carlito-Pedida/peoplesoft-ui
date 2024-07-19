import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";

import styles from "../Styles/EditUser.module.css";

const EditUser = () => {
  let params = useParams();
  let [oneUser, setOneUser] = useState({
    _id: params.userId,
    first_name: "",
    last_name: "",
    position: "",
    imageUrl: "",
    username: "",
    password: ""
  });

  let { _id, first_name, last_name, position, imageUrl, username, password } =
    oneUser;

  let { getOneUser, updateOneUser } = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (_id === undefined) return;
    async function fetch() {
      await getOneUser(_id).then((response) => setOneUser(response));
    }
    fetch();
    /* eslint-disable-next-line */
  }, []);

  function handleChange(event) {
    setOneUser((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function updateUser() {
    return updateOneUser(oneUser);
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateUser(oneUser)
      .then(() => {
        if (!oneUser.ok) {
          alert(`${oneUser.first_name} ${oneUser.last_name} is updated!`);
          navigate(`/profile/${_id}`);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
        alert("You are not allowed to perform this operation");
        navigate("/");
      });
  }

  return (
    <div className={styles.editUserFormCase}>
      <Form onSubmit={handleSubmit}>
        <Stack gap={3} className="p-4">
          <h1>Update Information</h1>

          <span>First Name </span>
          <Form.Control
            placeholder="Enter First Name"
            type="text"
            name="first_name"
            value={first_name}
            onChange={handleChange}
          />

          <span>Last Name </span>
          <Form.Control
            placeholder="Enter Last Name"
            type="text"
            name="last_name"
            value={last_name}
            onChange={handleChange}
          />

          <span>Add Picture Link </span>
          <Form.Control
            placeholder="Enter Image URL"
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={handleChange}
          />

          <span>Position </span>
          <Form.Control
            placeholder="Enter Position"
            type="text"
            name="position"
            value={position}
            onChange={handleChange}
          />

          <span>Username </span>
          <Form.Control
            placeholder="Enter Email"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />

          <span>Password </span>
          <Form.Control
            placeholder="Enter Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => navigate(-1)}
              className="me-3"
              variant="danger"
            >
              Cancel
            </Button>
            <Button type="submit" variant="success">
              Update Profile
            </Button>
          </div>
        </Stack>
      </Form>
    </div>
  );
};

export default EditUser;
