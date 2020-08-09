import React from 'react';
import {useParams, useHistory} from 'react-router-dom';

const User = ({users}) => {
    const history = useHistory();
    // get the id params
    const { id } = useParams();
    // find the user with the corresponding id
    const user = users.find((user) => user.login.uuid ===id);
    
    const navigateToHome = () => {
        history.push('/'); 
    }
    return (
        <div className="userInfo">
        <button className="ButtonToHome" onClick={navigateToHome}>
                Go Back
        </button>
        <div >
            <img src={user.picture.medium} alt="user_img"></img>
            <ul>
                <b>Name : </b>
                <li>{user.name.title} {user.name.first} {user.name.last}</li>
                <b>Location : </b>
                <li>{user.location.city} {user.location.country}</li>
                <b>Email : </b>
                <li>{user.email} </li>
                <b>Phone : </b>
                <li>{user.phone}</li>
            </ul>
        </div>
        </div>
      );
}
 
export default User;