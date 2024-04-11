import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../Styles/Style.css";

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
      <div className="home">
        <h1>You need to sign in to access this area!</h1>
        <Button variant="success" onClick={handleClick}>
          Sign In
        </Button>
      </div>
    );
  }

  return <Outlet />;
};

export default PrivateRoutes;
