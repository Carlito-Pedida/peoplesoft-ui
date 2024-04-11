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

  let { getOneUser } = useContext(UserContext);

  let { _id, first_name, last_name, position, imageUrl, username } = oneUser;

  useEffect(() => {
    if (_id == undefined) return;
    async function fetch() {
      await getOneUser(_id).then((oneUser) => setOneUser(oneUser));
    }
    fetch();
  }, []);

  return (
    <div className="container profile-case">
      <div className="profile-box row">
        <div className="col-3">
          <img height={300} src={imageUrl} />
        </div>
        <div style={{ padding: "30px" }} className="col-3">
          <h2>
            {first_name} {last_name}
          </h2>
          <h3>Position: {position} </h3>
          <h3>@{username}</h3>
          <div className="mt-4">
            <Link className="updateLink" to={`/profile/${_id}/update`}>
              Update Profile
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;

{
  /* <div className="my-3 col">
            <h3>{username}</h3>
          </div> */
}
