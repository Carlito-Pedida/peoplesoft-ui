import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Styles/Home.module.css";
import Landing from "../assets/Landing";
import UserContext from "../contexts/UserContext";
import Session from "./Session";
import SignIn from "./SignIn";

const Home = ({ user }) => {
  let { userId } = useParams();
  const [userSession, setUserSession] = useState({
    _id: useParams.userId,
    first_name: "",
    last_name: ""
  });

  let { getAllUsers } = useContext(UserContext);

  let { first_name } = userSession;

  useEffect(() => {
    if (userId === undefined) return;
    async function fetch() {
      await getAllUsers(userId).then((userSession) =>
        setUserSession(userSession)
      );
    }
    fetch();
    /* eslint-disable-next-line */
  }, []);

  return (
    <div className={styles.home}>
      <p>{first_name}</p>
      {user && (
        <>
          <div>
            <div className="my-3">
              <Landing />
            </div>
            <div className="my-3">
              <Session />
            </div>
          </div>
        </>
      )}

      {!user && (
        <>
          <div>
            <div className="my-3">
              <Landing />
            </div>
            <div className="my-3">
              <SignIn />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
