import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const EditUser = ({ user }) => {
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
  }, []);

  function handleChange(event) {
    setOneUser((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function updateUser() {
    return updateOneUser(oneUser);
  }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     updateUser(oneUser)
  //       .then((response) => {
  //         if (response && response.ok) {
  //           alert(`${oneUser.first_name} ${oneUser.last_name} is updated!`);
  //           navigate(`/profile/${_id}`);
  //         } else {
  //           alert("You are not allowed to perform this operation");
  //           navigate("/signIn");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("There was an error!", error);
  //         alert("Error updating user. Please try again later.");
  //       });
  //   }

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
        navigate("/signIn");
      });
  }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     updateUser(first_name, last_name, imageUrl, position, username, password)
  //       .then(() => {
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         window.alert("Failed registration: error creating user");
  //       });
  //   }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register Manager/Supervisor Information</h1>
      <br></br>
      <br></br>
      <span>First Name </span>
      <input
        placeholder="Enter First Name"
        type="text"
        name="first_name"
        value={first_name}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Last Name </span>
      <input
        placeholder="Enter Last Name"
        type="text"
        name="last_name"
        value={last_name}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Add Picture Link </span>
      <input
        placeholder="Enter Image URL"
        type="text"
        name="imageUrl"
        value={imageUrl}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Position </span>
      <input
        placeholder="Enter Position"
        type="text"
        name="position"
        value={position}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Username </span>
      <input
        placeholder="Enter Email"
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Password </span>
      <input
        placeholder="Enter Password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <br />
      <br></br>
      <button>Update Profile</button>
    </form>
  );
};

export default EditUser;
