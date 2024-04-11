import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";

import "../Styles/Home.css";

const Session = ({ user }) => {
  let params = useParams();
  let navigate = useNavigate();
  const [session, setSession] = useState([]);

  console.log(session);

  let { getAllUsers } = useContext(UserContext);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const result = await getAllUsers();
        if (isMounted) {
          setSession(result);
        }
      } catch (error) {
        if (isMounted) {
          if (error.response && error.response.status === 404) {
            console.clear();
          }
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
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
      {user && (
        <>
          <h3>{`Welcome to Management Portal ${user.first_name}`}</h3>
        </>
      )}
      {!user && (
        <>
          <h3>{`Welcome to Management Portal`}</h3>
        </>
      )}

      <div className="sign-form">
        <button onClick={handleClick}>Proceed to Employee Records</button>
        <hr style={{ marginLeft: "300px", marginRight: "300px" }}></hr>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    </div>
  );
};

export default Session;
