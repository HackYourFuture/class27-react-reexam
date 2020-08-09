import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Spinner from "./Spinner";

const UserProfile = () => {
  const history = useHistory();
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { userId } = useParams();

  const fetchUser = (id) => {
    setLoading(true);
    fetch(`https:randomuser.me/api/?results=${id}`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setLoading(false);
        console.log(response);
        setUsers({
          first: response.results[0].name.first,
          last: response.results[0].name.last,
          city: response.results[0].location.city,
          country: response.results[0].location.country,
          email: response.results[0].email,
          phone: response.results[0].phone,
          picture: response.results[0].picture.medium,
        });
      })
      .catch((error) => {
        setError(true);
      });
  };
  useEffect(() => {
    fetchUser(userId);
  }, [userId]);
  return (
    <div className="oneUser">
      {loading && (
        <p>
          <Spinner />
        </p>
      )}
      {error && <p>Something went wrong</p>}
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Home
      </button>
      <br />
      <br />
      <img src={users.picture} alt={users.first} />
      <p>
        name: {users.first} {users.last}
      </p>
      <p>
        Location: {users.city}, {users.country}
      </p>
      <p>email: {users.email}</p>
      <p>phone: {users.phone}</p>
    </div>
  );
};
export default UserProfile;
