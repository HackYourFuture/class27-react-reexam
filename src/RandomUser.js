import React, { useState, useEffect } from "react";
import UserList from "./UserList";

const RandomUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchUser = () => {
    setLoading(true);
    fetch(`https:randomuser.me/api/?results=5`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setLoading(false);
        setUsers(response.results);
      })
      .catch((error) => {
        setError(true);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      {loading && <p>loading...</p>}
      {error && <p>Something wrong</p>}
      <UserList users={users} />
    </div>
  );
};

export default RandomUser;
