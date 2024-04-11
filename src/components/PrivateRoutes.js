import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

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
      <div>
        <h1>You are not allowed here!!! Idiot.</h1>
        <Button onClick={handleClick}>Go Back</Button>
      </div>
    );
  }

  return <Outlet />;
};

export default PrivateRoutes;
