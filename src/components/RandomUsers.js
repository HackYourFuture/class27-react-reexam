import React, { useState, useEffect } from "react";
import UserInfo from "./UserInfo";
import ListOfUsers from './ListUser'
import Loader from 'react-loader-spinner'

const url = 'https://randomuser.me/api/?results=5';

function RandomUsers() {
    const [ isLoading, setLoading ] = useState(false);
    const [Users, setUsers] = useState([]);
    const [Error, setError] = useState(false);
    const [UserClick, setUserClick] = useState(false)
    const [getUser, setGetUser] = useState()
    
  
    const selectId = (uuid) =>{
        setGetUser(Users.filter(user => user.login.uuid === uuid)[0])
        setUserClick(true)
    }
   
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const result = data.results
                setUsers(result);  
                setLoading(true)
            })
            .catch(() => setError(true));
    }, []);
    return (
        <>
        
            {Error && <p>there is an ERROR............</p>}
            {!isLoading && <Loader type="Circles" color="#00BFFF" height={80} width={80}/>} 
            <ListOfUsers userInfo={Users}  selectId={selectId}/>
            {UserClick && <UserInfo userInfo={getUser} />}
        </>
    );
}


export default RandomUsers;