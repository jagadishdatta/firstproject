import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Jumbotron } from 'reactstrap';
class Content extends Component {
    render() {
        return (
            <Container>
            <Jumbotron>
              <h1 className="display-4">Hello, Reactstrap!</h1>
              <p className="lead">
               Testing Testing Testing Testing Testing Testing Testing Testing
              </p>
              <hr className="my-4" />
              <p>
                Testing Testing Testing Testing Testing Testing Testing Testing
              </p>
              <Button color="primary">Learn more</Button>
            </Jumbotron>
          </Container>
        );
    }
}

export default Content;
