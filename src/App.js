import React from "react";
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

function App() {
  return (
    <UserProvider>
      <EmployeeProvider>
        <div>
          <Navigation />
          <BrowserRouter>
            <nav>
              <Link to="/signup">Sign Up</Link>
              <span> | </span>
              <Link to="/signin">Sign In</Link>
              <span> | </span>
              <Link to="/employed">Employee Database</Link>
              <hr></hr>
            </nav>
            <Routes>
              <Route exact path="/" element={<SignIn />} />
              <Route
                path="/employee/edit/:employeeId"
                element={<EditEmployee />}
              />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/employee/new" element={<NewEmployee />} />
              <Route path="/employed" element={<EmployeeList />} />
              <Route
                path="/employee_profile/:employeeId"
                element={<EmployeeFax />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </EmployeeProvider>
    </UserProvider>
  );
}

export default App;
