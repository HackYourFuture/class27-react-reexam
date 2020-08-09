import React from "react";
import Api from "./Api";
import Style from "./Style.css";
import UserProfile from "./UserProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Api} />
        <Route path="/:userid" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
