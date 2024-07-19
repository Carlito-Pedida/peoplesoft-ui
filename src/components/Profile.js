import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Stack } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Profile = () => {
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

  console.log(oneUser);

  const handleClick = () => {
    navigate(`/profile/${_id}/update`);
  };

  return (
    <Stack className="text-center text-white mt-5" gap={5}>
      <div className="">
        <img
          style={{ borderRadius: "50%", border: "solid white 5px" }}
          height={200}
          src={imageUrl}
        />
      </div>
      <div>
        <h2>
          {first_name} {last_name}
        </h2>
        <h3>Position: {position} </h3>
        <h3>@{username}</h3>
      </div>

      <div className="text-center">
        <Button className="px-5" onClick={handleClick} variant="success">
          Update Profile
        </Button>
      </div>
    </Stack>
  );
};

export default Profile;
