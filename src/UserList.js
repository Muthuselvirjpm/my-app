import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <div className='userheading'>User List</div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div className='userdetails'>
            <div className='col-lg-3 avatardiv'><img src={user.avatar_url} alt="Avatar" className='avatar'/></div>
            <div className='col-lg-3 userlogin'><span>{user.login}</span></div>
            <Link to={`/user/${user.login}`}>View Details</Link>
            </div>            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
