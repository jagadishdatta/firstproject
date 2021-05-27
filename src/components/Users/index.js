import React from 'react';
import Userslist from './Userslist';    
import 'bootstrap/dist/css/bootstrap.min.css';
import Formikexample from '../Formik/'; 
import {Form,Button,Container,Row,Col} from 'react-bootstrap';
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
                <Container>
                <Row>
                <Col cs={6}>
                <Formikexample />  
                </Col>
                <Col xs={6}>
                <h2>Users List (data passing with  props)</h2>
                <section>
                  {
                      Users.map((list) =>  ( <Userslist id={list.id} name={list.name} city={list.city}  /> ) )
                  }
                </section>
                </Col>
                </Row>
                </Container>
                </div>
          
            );
 }
        
export default Usersdata;
