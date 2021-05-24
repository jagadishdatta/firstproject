import React,{useState,useContext} from 'react';
import  {UsersfromContext}  from './UsersfromContext';
const Usersdata = () => {
    const [user,setUser]=useContext(UsersfromContext);
    return (
        <div>
         <p> Data Coming  from one point </p>
         <p>
         <p>
            {
                user.map((list) =>  ( list.id ) )
                  }
            </p>
         </p>
        </div>
    );  
};

export default Usersdata;   