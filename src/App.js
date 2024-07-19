import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditEmployee from "./components/EditEmployee";
import EditUser from "./components/EditUser";
import EmployeeFax from "./components/EmployeeFax";
import EmployeeList from "./components/EmployeeList";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import NewEmployee from "./components/NewEmployee";
import PrivateRoutes from "./components/PrivateRoutes";
import Profile from "./components/Profile";
import Session from "./components/Session";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import SignUp from "./components/SignUp";
import Support from "./components/Support";
import { EmployeeProvider } from "./contexts/EmployeeProvider";
import { UserProvider } from "./contexts/UserProvider";

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
                <Route path="/profile/:userId/" element={<Profile />} />
                <Route path="/profile/:userId/update" element={<EditUser />} />
                <Route path="/session" element={<Session user={user} />} />
                <Route path="/employed" element={<EmployeeList />} />
                <Route
                  path="/employee/:employeeId/update"
                  element={<EditEmployee />}
                />
              </Route>
              <Route
                path="/employee_profile/:employeeId"
                element={<EmployeeFax />}
              />
              <Route path="/signout" element={<SignOut />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </BrowserRouter>
        </div>
      </EmployeeProvider>
    </UserProvider>
  );
}

export default App;
