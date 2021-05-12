import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
  
class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = { firstname: '',lastname: '',errormessage: '',};
      }
      mySubmitHandler = (event) => {
      
        event.preventDefault();
       
 

        alert("Thank you  ");
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';

        this.setState({[nam]: val});
        
        // if(nam.trim().length === 0)
        // {
        //   err = <strong>Required Field</strong>;
        // }
        // this.setState({errormessage: err});
   //   this.setState({[nam]: val});
     //    this.setState({username: event.target.value});
      }
      render() {  
        let success="";
        if (this.state.firstname) {
          success = <h1>Hello {this.state.firstname} { this.state.lastname} </h1>;
        } else {
          success = '';
        }

        return (
            <Container>
                 <Row>
                 <h1>   {success}</h1>
                 
                 <Form id="feedbackform" onSubmit={this.mySubmitHandler}>
                <br></br>
             
                {this.state.errormessage}

  <fieldset >
    <Form.Group>
    <Form.Label >First Name </Form.Label>
         <Form.Control placeholder="First name" name="firstname"  onChange={this.myChangeHandler}  />

    </Form.Group>
    <Form.Group>
    <Form.Label >Last  Name </Form.Label>
          <Form.Control placeholder="Last name" name="lastname"  onChange={this.myChangeHandler}  />

    </Form.Group>
    
    <Button type="submit">Submit</Button>
  </fieldset>
</Form>
 
</Row>
</Container>
//           <Form onSubmit={this.mySubmitHandler}>
        
//   <Form.Row>
//     <Col>
//       <Form.Control placeholder="First name"   onChange={this.myChangeHandler}  />
//     </Col>
//     <Col>
//       <Form.Control placeholder="Last name" />
//     </Col>
//   </Form.Row>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>

        //   <h1>Hello {this.state.username}</h1>
        //   <p>Enter your name, and submit:</p>
        //   <input
        //     type='text'
        //     onChange={this.myChangeHandler}
        //   />
        //   <input
        //     type='submit'
        //   />
        //   </form>
        );
      }
}

export default Feedback;