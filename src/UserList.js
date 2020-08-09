import React from "react";

import { Link } from "react-router-dom";
function UserList({ users }) {
  return (
    <div>
      {users.length !== 0
        ? users.map((oneUser, index) => {
            return (
              <div>
                <Link to={`/${oneUser.login.uuid}`}>
                  <p key={index}>
                    {oneUser.name.first} {oneUser.name.last}
                    <img alt="img" src={oneUser.picture.large}></img>
                  </p>
                </Link>
              </div>
            );
          })
        : null}

      <div></div>
    </div>
  );
}
export default UserList;
