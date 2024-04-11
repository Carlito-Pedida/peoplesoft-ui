import React, { useContext, useEffect, useState } from "react";
import Landing from "../assets/Landing";
import SignIn from "./SignIn";
import "../Styles/Home.css";
import UserContext from "../contexts/UserContext";
import Session from "./Session";
import { useParams } from "react-router-dom";

const Home = ({ user }) => {
  let { userId } = useParams();
  const [userSession, setUserSession] = useState({
    _id: useParams.userId,
    first_name: "",
    last_name: ""
  });

  let { getAllUsers } = useContext(UserContext);

  let { _id, first_name, last_name } = userSession;

  useEffect(() => {
    if (userId === undefined) return;
    async function fetch() {
      await getAllUsers(userId).then((userSession) =>
        setUserSession(userSession)
      );
    }
    fetch();
  }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   async function fetchData() {
  //     try {
  //       const result = await getAllUsers();
  //       if (isMounted) {
  //         setUserSession(result);
  //       }
  //     } catch (error) {
  //       if (isMounted) {
  //         if (error.response && error.response.status === 404) {
  //           console.clear();
  //         }
  //       }
  //     }
  //   }

  //   fetchData();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <div className="home">
      <p>{first_name}</p>
      {user && (
        <>
          <Landing />
          <Session />
        </>
      )}
      {!user && (
        <>
          <Landing />
          <SignIn />
        </>
      )}
    </div>
  );
};

export default Home;
