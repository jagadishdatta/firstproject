import React,{useState,useContext} from 'react';
import  {UsersfromContext}  from './UsersfromContext';
const Usersdata = () => {
    const [user,setUser]=useContext(UsersfromContext);
    return (
        <div>
         <p> Data Coming  from one point </p>
         <table>
         <tr>
            <th>S.No</th>
            <th>Name </th>
            <th>City</th>
            </tr>
            {
                user.map((list) => 
                 ( 
                    <tr>
                    <td>{list.id} </td>
                    <td>{list.name} </td>
                    <td>{list.city} </td>
                     </tr>
                    
                   )
                 )
           }
           
         </table>
        </div>
    );  
};

export default Usersdata;   