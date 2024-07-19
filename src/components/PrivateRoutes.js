import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import styles from "../Styles/Home.module.css";

const PrivateRoutes = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("myUserToken");

  const isAuthenticated = token !== null && token !== undefined;

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setRedirect(true);
    }
  }, [isAuthenticated]);

  function handleClick() {
    navigate("/");
  }

  if (redirect) {
    return (
      <Stack className="text-center">
        <div className={styles.home}>
          <h1>You need to sign in to access this area!</h1>
        </div>
        <div>
          <Button variant="success px-5" onClick={handleClick}>
            Sign In
          </Button>
        </div>
      </Stack>
    );
  }

  return <Outlet />;
};

export default PrivateRoutes;
