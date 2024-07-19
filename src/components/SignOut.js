import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // corrected import

function SignOut() {
  // eslint-disable-next-line
  const navigate = useNavigate(); // using useNavigate hook
  useEffect(() => {
    try {
      const jwt = localStorage.getItem("myUserToken"); // retrieve JWT token
      localStorage.removeItem("myUserToken"); // remove the token
      if (jwt) {
        // eslint-disable-next-line
        const userToken = jwtDecode(jwt);
        // setUser(userToken); // no need to set user state here
        window.location = "/";
      }
    } catch (ex) {
      console.error("Error during sign out:", ex); // handle errors properly
    }
    // eslint-disable-next-line
  }, []); // add navigate to the dependency array
}

export default SignOut;
