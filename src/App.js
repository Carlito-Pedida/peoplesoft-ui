import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CoffeeList from "./components/CoffeeList";
import NewCoffee from "./components/NewCoffee";
import { UserProvider } from "./contexts/UserProvider";
import { CoffeeProvider } from "./contexts/CoffeeProvider";
import "./App.css";
import EditCoffee from "./components/EditCoffee";

function App() {
  return (
    <UserProvider>
      <CoffeeProvider>
        <div>
          <BrowserRouter>
            <nav>
              <Link to="/signup">Sign Up</Link>
              <span> | </span>
              <Link to="/signin">Sign In</Link>
              <span> | </span>
              <Link to="/coffee">Coffee List</Link>
              <hr></hr>
            </nav>
            <Routes>
              <Route exact path="/" element={<SignIn />} />
              <Route path="/coffee/edit/:coffeeId" element={<EditCoffee />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/coffee/new" element={<NewCoffee />} />
              <Route path="/coffee" element={<CoffeeList />} />
            </Routes>
          </BrowserRouter>
        </div>
      </CoffeeProvider>
    </UserProvider>
  );
}

export default App;
