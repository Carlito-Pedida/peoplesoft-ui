import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Stack, Button } from "react-bootstrap";
import styles from "../Styles/SignUpSignIn.module.css";

const Session = () => {
  let params = useParams();
  let [oneUser, setOneUser] = useState({
    _id: params.userId,
    first_name: "",
    last_name: "",
    position: "",
    imageUrl: "",
    username: ""
  });

  let { getOneUser } = useContext(UserContext);

  let { _id } = oneUser;

  useEffect(() => {
    if (_id === params.userId) return;
    async function fetch() {
      await getOneUser(_id).then((oneUser) => setOneUser(oneUser));
    }
    fetch();
    /* eslint-disable-next-line */
  }, []);

  let navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();

    navigate("/employed");
  }

  function handleLogOut(event) {
    event.preventDefault();

    navigate("/signout");
  }

  console.log(oneUser);

  return (
    <Stack className={`${styles.signInForm} text-center`}>
      <div>
        <h3 className="mb-5">Welcome to Employee Management Portal</h3>
      </div>
      <div>
        <Button onClick={handleClick}>Employee Records</Button>
        <hr />
        <Button onClick={handleLogOut}>Log Out</Button>
      </div>
    </Stack>
  );
};

export default Session;
