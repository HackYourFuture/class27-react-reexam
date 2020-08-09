import React from "react";
import { Link } from "react-router-dom";

function UserList({ users }) {
  return (
    <div className="users">
      {users.length !== 0
        ? users.map((oneUser, index) => {
            return (
              <Link to={`/${oneUser.login.uuid}`}>
                <img alt="img" src={oneUser.picture.large}></img>
                <p key={index}>
                  {oneUser.name.first} {oneUser.name.last}{" "}
                </p>
              </Link>
            );
          })
        : null}
    </div>
  );
}
export default UserList;
