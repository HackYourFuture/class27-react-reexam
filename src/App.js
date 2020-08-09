import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RandomUser from './RandomUser'
import UserProfile from './UserProfile'
function App() {
  return <div>
   
  <Router>
      <div className="App container">
        <Switch>
          <Route path="/:userId">
            <UserProfile />
          </Route>
          <Route path="/" exact>
          <RandomUser />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>;
}

export default App;
