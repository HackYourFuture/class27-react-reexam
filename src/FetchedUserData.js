import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";

function FetchedUserData({ userList }) {

  const selectedUser = (userIndex) => {
    console.log("selected",userList[userIndex.index]);
    
    return (<UserCard userList={userList[userIndex.index]}/>) ;
  };

  return (
    <div>
      <ul className="users">
        {userList.map((item, index) => (
          <div className="singleUser">
            <li onClick={() => selectedUser({ index })} key={index}>
              <Link
                className="linkClass"
                to={`/${item.name.first}`}
                style={{ textDecoration: "none" }}
              >
                <a href="">
                  <img src={item.picture.large} alt={item.name.first} />
                </a>
                <div className="singleUserInfo">
                  <p>
                    {" "}
                    {item.name.first} {item.name.last}{" "}
                  </p>
                </div>
                <UserCard userList={userList} />
              </Link>
            </li>
          </div> 
        ))}
      </ul>
    </div>
  );
}

export default FetchedUserData;
