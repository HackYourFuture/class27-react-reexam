import React from 'react';
import {Link} from 'react-router-dom';

const UserItem = ({user}) => {
    const id = user.login.uuid;
    return (
        <div className="OneUser">
            <Link to={`/${id}`} > 
                <img src={user.picture.large} alt="user_image" className="usersImage" ></img>
            </Link>   
            <p>{user.name.title} {user.name.first} {user.name.last}</p>
        </div>
      );
}

export default UserItem;


