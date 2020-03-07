import React, { Component, Fragment } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class Contact extends Component {

  render() {

    return (
      <Fragment>
        <Container>
          <Row className="justify-content-md-center">
            <Card className="text-center">
              <Card.Header>Contact</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;