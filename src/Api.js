import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import ListOfUsers from "./ListOfUsers";

const RandomUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchUser = () => {
    setLoading(true);
    fetch(` https://randomuser.me/api/?results=5`)
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
      {loading && (
        <p>
          <Spinner />
        </p>
      )}
      {error && <p>Something went wrong</p>}
      <ListOfUsers users={users} />
    </div>
  );
};

export default RandomUser;
