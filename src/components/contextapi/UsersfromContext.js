import React, { useState, useEffect, createContext } from 'react';
export const UsersfromContext = createContext();
export const UsersProvider = (props) => {
    const [user, setUser] = useState([
        {id: "1",name: "jagadihs",city: "Vijayawada"},
        {id: "2",name: "Suresh",city: "Surat"},
        {id: "3",name: "Kumar",city: "Varanasi"},
        {id: "4",name: "Ramesh",city: "Chennai"},
        {id: "5",name: "Sultan",city: "Pondicheery"},
        {id: "6",name: "Kumar Swamy",city: "Madurai"}
    ]);
    
    return (
        <UsersfromContext.Provider value={[user,setUser]}>
           
        	{props.children}
        </UsersfromContext.Provider>
    );
}
 