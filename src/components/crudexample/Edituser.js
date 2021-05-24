import React, { useState } from 'react';
import {Form,Buttom,Container,Row,Col} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
function Edituser(props) {
            const count=props.match.params.id;
            const [state, setState] = useState({
                firstName: "",
                lastName: "",
                email:""
            })
            const[updatestatus,setupdatestatus]=useState(false);
            const[errors,setErrorMessage]=useState("");
            const logName = () => {
                console.log(state);
            
            };
            const cleardata=()=>
            {
                setupdatestatus(false);
            };

            const handleSubmit=(e)=>
            {
                e.preventDefault();
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ firstName: state.firstName,lastName: state.lastName, email: state.email,companyId: 1 })
                };
                fetch('http://localhost:8000/users/' + count, requestOptions)
                    .then(async response => {
                        const data = await response.json();
                         // check for error response
                        if (!response.ok) {
                            // get error message from body or default to response status
                            const error = (data && data.message) || response.status;
                            return Promise.reject(error);
                        }
                        setupdatestatus(true);
                         setTimeout(
                            () =>  cleardata(),3000
                           );
                       })
                    .catch(error => {
                        setErrorMessage(error);
                        console.error('There was an error!', error);
                    });
           }
                const handleChange=(event)=>
                { 
                    const { name, value } = event.target;
                    setState({
                    ...state,
                    [name]: value
                    });
                 };
                        return (
                                <div>
                                    <h2> User ID:{count}   </h2>
                                    <p>{ updatestatus && <h1> Updated successful </h1>}</p>
                                    <Form onSubmit={handleSubmit}>
                                    <input
                                        type="text" name="firstName"
                                        onChange={handleChange}
                                        
                                        placeholder="Your Username"
                                    />
                                    <input
                                        type="text" name="lastName"
                                        onChange={handleChange}
                                    
                                        placeholder="Your First Name"
                                    />
                                    <input
                                        type="text" name="email"
                                        onChange={handleChange}
                                    
                                        placeholder="Your Email "
                                    />
                                    <button
                                    type="submit"  
                                        onClick={logName}
                                    >
                                    Update User 
                                    </button>
                                    </Form>   
                                </div>
                             );
                    }
    export default Edituser;
