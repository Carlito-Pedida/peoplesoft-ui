import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import EmployeeList from "./components/EmployeeList";
import NewEmployee from "./components/NewEmployee";
import { UserProvider } from "./contexts/UserProvider";
import { EmployeeProvider } from "./contexts/EmployeeProvider";
import "./App.css";
import EditEmployee from "./components/EditEmployee";
import Navigation from "./components/Navigation";
import EmployeeFax from "./components/EmployeeFax";
import Home from "./components/Home";
import Session from "./components/Session";
import SignOut from "./components/SignOut";
import { jwtDecode } from "jwt-decode";
import About from "./components/Profile";
import PrivateRoutes from "./components/PrivateRoutes";
import Profile from "./components/Profile";
import EditUser from "./components/EditUser";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    try {
      const jwt = localStorage.getItem("myUserToken");
      const userToken = jwtDecode(jwt);
      setUser(userToken);
    } catch (ex) {}
  }, []);

  return (
    <UserProvider>
      <EmployeeProvider>
        <div>
          <BrowserRouter>
            <Navigation user={user} />

            <Routes>
              <Route path="/" element={<Home user={user} />} index />
              <Route path="/" element={<SignIn />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/employee/new" element={<NewEmployee />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/profile/:userId" element={<Profile />} />
                <Route path="/profile/:userId/update" element={<EditUser />} />
                <Route path="/session" element={<Session user={user} />} />
                <Route path="/employed" element={<EmployeeList />} />
                <Route
                  path="/employee/edit/:employeeId"
                  element={<EditEmployee />}
                />
              </Route>
              <Route
                path="/employee_profile/:employeeId"
                element={<EmployeeFax />}
              />
              <Route path="/signout" element={<SignOut />} />
            </Routes>
          </BrowserRouter>
        </div>
      </EmployeeProvider>
    </UserProvider>
  );
}

export default App;
