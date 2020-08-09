import React from "react";


const UserInfo = ({ userInfo }) => {
  const { name, email, picture, phone, location } = userInfo;
  return (
       <div>
           <h1>
           {name.first} {name.last}
          </h1>
       
        <ul>
          <li> <img src={picture.large} /></li>
          <li>{email}</li>
          <li>{location.city}</li>
          <li> {phone}</li>
        </ul>
       </div>

  );
};

export default UserInfo;