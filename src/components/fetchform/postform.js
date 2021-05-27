import React, { Component } from "react";
import Addsform from "./addform";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Example from "./example";
class postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReactPackages: [],
      errorMessage: null,
    };
  }
  componentDidMount() {
    const headers = { "Content-Type": "application/json" };
    fetch("https://jsonplaceholder.typicode.com/users", { headers })
      .then((response) => response.json())
      .then((data) => this.setState({ totalReactPackages: data }));
  }
  render() {
    return (
      <Row>
        <Col md="6">
          Users Data from Json place holder api
          <Table dark>
            <thead>
              <tr>
                <th>S.No</th>
                <th>name</th>
                <th> Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.totalReactPackages.map((list) => (
                <tr>
                  <th>{list.id}</th>
                  <th>{list.name}</th>
                  <th>{list.username}</th>
                  <th>{list.email}</th>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md="6">
          <h2>Post form </h2>
          <Addsform />
        </Col>
      </Row>
    );
  }
}

export default postform;
