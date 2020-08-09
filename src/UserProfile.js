import React,{useState , useEffect} from "react";
import { useParams} from "react-router-dom";

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const { userId } = useParams();

  const fetchUser = (Id) => {
    fetch(`https:randomuser.me/api/?results=${Id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data.results[0]);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetchUser(userId);
  }, []);
console.log(users)
  return (
    <div>
      <p>{users.email}</p>
      
    </div>
  );
};
export default UserProfile;
