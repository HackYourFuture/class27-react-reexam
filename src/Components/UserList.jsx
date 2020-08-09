import React from 'react';
import Alert from '@material-ui/lab/Alert';
import UserItem from './UserItem';

const UserList = ({users, isLoading, hasError}) => {
    console.log(users);
    return (
        <div className="Users">
            {hasError.show && <Alert severity="error">{hasError.text}</Alert>}
            {isLoading ? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading"/> : null}
            {users.length > 1 ? users.map((user, index)=><UserItem user={user} index={index} key={index}></UserItem>) : null}
        </div>
     );
}
 
export default UserList;