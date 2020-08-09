
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

function UserCard({ userList }) {
 
  const { userName } = useParams();
  console.log(userName);

   const [selectedUser,setSelectedUser] = useState('');
  
  // useEffect(() => {
  //  console.log("userList,",userList);
  //  if(userList){
  
  //   const result = userList.filter(user => {
  //     return  user.name.first === userName
  //   });
  //   if(result)
  //   setSelectedUser(result);
  //  }

  // }, []);


  return (
    <>
      {selectedUser && (
        <p>adfdf</p>
      )}
    </>
  );
}

export default UserCard;
