import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import "../Styles/Style.css";

const Session = ({ user }) => {
  let navigate = useNavigate();
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

  let { _id, first_name, last_name, position, imageUrl, username } = oneUser;

  useEffect(() => {
    if (_id == undefined) return;
    async function fetch() {
      await getOneUser(_id).then((oneUser) => setOneUser(oneUser));
    }
    fetch();
  }, []);

  function handleClick(event) {
    event.preventDefault();

    navigate("/employed");
  }
  // console.log(params);

  function handleLogOut(event) {
    event.preventDefault();

    navigate("/signout");
  }

  return (
    <div className="text-center">
      <h3 className="mb-5">Welcome to Employee Management Portal</h3>
      <div className="sign-form">
        <button onClick={handleClick}>Proceed to Employee Records</button>
        <hr style={{ marginLeft: "300px", marginRight: "300px" }}></hr>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    </div>
  );
};

export default Session;
