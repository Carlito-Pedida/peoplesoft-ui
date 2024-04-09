import axios from "axios";
import UserContext from "./UserContext";
import { useEffect, useState } from "react";

export const UserProvider = (props) => {
  const [user, setUser] = useState([]);
  const baseUrl = "http://localhost:4000/api/users/";

  useEffect(() => {
    async function fetchData() {
      await getAllUsers();
    }
    fetchData();
  }, []);

  function getAllUsers() {
    return axios
      .get(baseUrl)
      .then((response) => setUser(response.data))
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

  return (
    <UserContext.Provider
      value={{
        createUser,
        signInUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
