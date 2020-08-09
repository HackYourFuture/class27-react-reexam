import React ,{useState,useEffect} from 'react';
import UserList from './Components/UserList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from './Components/User';
import "./App.css";
function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState({show:false, text:''});

  const getUsers = () => {
    setLoading(true);
    setHasError({show:false});
    fetch('https://www.randomuser.me/api?results=5')
    .then(response => {
      return response.json();
    })
    .then(data =>{
      setUsers(data.results);
      setLoading(false);
    })
    .catch(err => {
      setHasError({show:true, text: err.message});
      setLoading(false);
    });
  };

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <UserList users={users} isLoading={isLoading} hasError={hasError}/>
        </Route>
        <Route exact path="/:id" >
          <User users={users}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
