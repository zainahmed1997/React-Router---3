import React, { useState, useEffect } from 'react';

const GithubUser = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData () {
     
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);  /*Metti Zainahmed1997  */
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return <div>Caricamento...</div>;
  }

  if (!userData) {
    return <div>Utente non trovato</div>;
  }

  return (
    <div>
      <h1>{userData.login}</h1>
      <img src={userData.avatar_url} alt={`{userData.login}`} />
      <p>{userData.bio}</p>
    
    </div>
  );
};

export default GithubUser;