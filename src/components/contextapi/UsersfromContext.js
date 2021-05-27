import React, { useState, useEffect, createContext } from 'react';
export const UsersfromContext = createContext();
export const UsersProvider = (props) => {
   const [user, setUser] = useState([]);
    useEffect(() => {
            const headers = { 'Content-Type': 'application/json' }
            fetch('http://localhost:8000/users', { headers })
                .then(response => response.json())
                .then(data => setUser(data));
          });
    return (
        <UsersfromContext.Provider value={[user,setUser]}>
           {props.children}
        </UsersfromContext.Provider>
    );
}
 



