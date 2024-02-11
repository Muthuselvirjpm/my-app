import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const UserDetails = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user details:', error));
  }, [username]);

  return (
    <div>
     <div className='userheading'>User Details</div>
      {user && (
        <div>
          <img src={user.avatar_url} alt="Avatar" className='useravatar'/>
          <div className='userdetailsdiv'>
              <div>Name: {user.name}</div>
              <div>Username: {user.login}</div>
              <div>Company: {user.company}</div>
              <div>Followers: {user.followers}</div>
              <div>Following: {user.following}</div>
              <div>Public Repositories: {user.public_repos}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
