import React, { useState, useEffect, createContext } from 'react';
export const PageContext = createContext();
const PageContextProvider = (props) => {
    // const [user, setUser] = useState({
    //     'name': 'harry potter'
    // });
    const [user, setUser] = useState(0);
    useEffect(() => {
        
        const headers = { 'Content-Type': 'application/json' }
        fetch('http://localhost:8000/users', { headers })
            .then(response => response.json())
            .then(data => setUser(data.length));
         
      });
      
    return (
        <PageContext.Provider value={{ 
            user: user,
        }}>
        	{props.children}
        </PageContext.Provider>
    );
}
export default PageContextProvider;
