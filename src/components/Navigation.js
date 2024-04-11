import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import "../Styles/Navigation.css";

const Navigation = ({ user }) => {
  let [userLog, setUserlog] = useState([]);

  let { getOneUser } = useContext(UserContext);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const result = await getOneUser(user.userId);
        if (isMounted) {
          setUserlog(result);
        }
      } catch (error) {
        if (isMounted) {
          if (error.response && error.response.status === 404) {
          }
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {user && (
        <>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/">Home</a>
              </li>
              <li className="nav-item">
                <a href={`/profile/${user.userId}`}>
                  <span className="pe-3">
                    <img
                      style={{ borderRadius: "50%", border: "solid 2px white" }}
                      height={37}
                      width={37}
                      src={user.imageUrl}
                    />
                  </span>
                  <span>
                    <strong
                      style={{
                        border: "solid 1px",
                        padding: "10px",
                        borderRadius: "10px"
                      }}
                    >{`Welcome ${user.first_name}  ${user.last_name}!`}</strong>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/employed">Employee Records</a>
              </li>
              <li className="nav-item">
                <a href="/support">Contact IT Support</a>
              </li>
              <li className="nav-item">
                <a href="/signout">SIGN OUT</a>
              </li>
            </ul>
          </nav>
        </>
      )}
      {!user && (
        <>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/">Home</a>
              </li>

              <li className="nav-item">
                <a href="/employed">Employee Records</a>
              </li>
              <li className="nav-item">
                <a href="/support">Contact IT Support</a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default Navigation;
