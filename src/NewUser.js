import React, { useState,useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import FetchedUserData from './FetchedUserData'
import UserCard from './UserCard'

const END_POINT = "https://randomuser.me/api/?results=5";

function NewUser() {
  const [loading, setLoading] = useState(false);
  const [loaded,setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [userList, setUserList] = useState([]);

  const fetchUser = async () => {
    setLoading(true);
    setLoaded(false);
    const response = await fetch(END_POINT);
    response
      .json()
      .then((res) => {
        setUserList(res.results);
        setLoading(false);
        setLoaded(true);
      })
      .catch((error) => {
        setHasError(true);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className='container'>
      {loading && <CircularProgress color="secondary" />}
      {loaded && <FetchedUserData userList ={userList}/>}  
      {hasError && <p>Something went wrong ...</p>}
      {loaded && <UserCard/>}
    </div>
  );
}



export default NewUser;
