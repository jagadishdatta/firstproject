import React from 'react';
import Userslist from './Userslist';    
import 'bootstrap/dist/css/bootstrap.min.css';
 
 function Usersdata()
{
    const Users=[{id: "1",name: "jagadihs",city: "Vijayawada"},
    {id: "2",name: "Suresh",city: "Surat"},
    {id: "3",name: "Kumar",city: "Varanasi"},
    {id: "4",name: "Ramesh",city: "Chennai"},
    {id: "5",name: "Sultan",city: "Pondicheery"},
    {id: "6",name: "Kumar Swamy",city: "Madurai"},];
    
  return (
    

            <div>
                <h2>Users List (data passing with  props)</h2>
                
              <section>
                  {
                      Users.map((list) =>  ( <Userslist id={list.id} name={list.name} city={list.city}  /> ) )
                  }
              </section>
            </div>
        );
        }
        
        export default Usersdata;
