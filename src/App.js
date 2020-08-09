import React from "react";
import NewUser from "./NewUser";
import "./App.css";
import UserCard from "./UserCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <NewUser />
    </div>
  );
}

export default App;
