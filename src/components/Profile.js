import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const Profile = () => {
  let params = useParams();
  let [oneUser, setOneUser] = useState({
    _id: params.userId,
    first_name: "",
    last_name: "",
    position: "",
    imageUrl: "",
    username: ""
  });

  console.log(oneUser);

  let { getOneUser } = useContext(UserContext);

  let { _id, first_name, last_name, position, imageUrl, username } = oneUser;

  useEffect(() => {
    if (_id == undefined) return;
    async function fetch() {
      await getOneUser(_id).then((oneUser) => setOneUser(oneUser));
    }
    fetch();
  }, []);

  // useEffect(() => {
  //   if (!_id) return; // Check if _id exists
  //   const fetchData = async () => {
  //     try {
  //       const user = await getOneUser(_id);
  //       setOneUser(user);
  //     } catch (error) {
  //       console.error("Error fetching user:", error);
  //     }
  //   };
  //   fetchData();
  // }, [_id]); // Include _id in the dependency array

  return (
    <div>
      {first_name} {last_name}
      <br />
      <br />
      {position}
      <br />
      <br />
      {username}
      <img src={imageUrl} />
      <Link to={`/profile/${_id}/update`}>Update Profile</Link>
    </div>
  );
};

export default Profile;
