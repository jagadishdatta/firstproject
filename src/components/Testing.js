import React,{useState,useContext} from 'react';
import {UsersfromContext} from '../components/contextapi/UsersfromContext';

const Testing = () => {
  
    const  user  = useContext(UsersfromContext);
    console.log(user);
    return (
        <div>   
            <h2>
                User Details 
            </h2>
            <p>
          
            </p>
        </div>
    );
};

export default Testing;