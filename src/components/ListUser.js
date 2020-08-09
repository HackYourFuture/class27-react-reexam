import React from "react";

const ListOfUsers = ({ userInfo, selectId}) => {
  return (
    <div>
      <ol>
        {userInfo.map((user) => (
          <li  key={user.login.uuid} onClick={()=> selectId(user.login.uuid)}>
            <img src={user.picture.large} />
            
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListOfUsers;