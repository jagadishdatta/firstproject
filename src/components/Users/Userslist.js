import React from "react";
import './style.css';
const Userslist =(value)=>(
 
<div className="userslist">
<ul className="usersdata">
    <li>{value.id}</li>
    <li>{value.name}</li>
    <li>{value.city}</li>
 
  </ul>
  </div>
 
);
export default Userslist;