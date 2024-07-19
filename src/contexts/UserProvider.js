import axios from "axios";
import UserContext from "./UserContext";
import { useEffect, useState } from "react";

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  const baseUrl = "https://peoplesoft-api.vercel.app/api/users/";

  useEffect(() => {
    async function fetchData() {
      await getAllUsers();
    }
    fetchData();
  }, []);

  function getAllUsers() {
    return axios
      .get(baseUrl)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching user assets:", error));
  }

  function createUser(
    first_name,
    last_name,
    imageUrl,
    position,
    username,
    password
  ) {
    let user = {
      first_name,
      last_name,
      imageUrl,
      position,
      username,
      password
    };

    return axios.post(baseUrl, user).then((response) => {
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function signInUser(username, password) {
    let user = { username, password };

    return axios.post(`${baseUrl}login`, user).then((response) => {
      localStorage.setItem("myUserToken", response.data.token);
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function getOneUser(userId) {
    return axios.get(baseUrl + userId).then((response) => {
      getAllUsers();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function updateOneUser(user) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("myUserToken")}`
    };

    return axios.put(baseUrl + user._id, user, { headers }).then((response) => {
      getAllUsers();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  return (
    <UserContext.Provider
      value={{
        users,
        createUser,
        signInUser,
        updateOneUser,
        getOneUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
