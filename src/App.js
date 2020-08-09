import React from "react";
import NewUser from './NewUser'
import './App.css';
import UserCard from "./UserCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

return (
  <Router>
  <div >
    <Switch>
      <Route exact path="/" component={NewUser}></Route>
      <Route exact path="/:userName" component={UserCard}></Route>
    </Switch>
  </div>
</Router>
)

}

export default App;
