import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="body">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
