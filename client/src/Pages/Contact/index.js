import React, { Component, Fragment } from 'react';
import Wrapper from '../../Component/Wrapper';
import { Container, Row, Image, Col } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';
import './style.css';

const styles = {
  text: {
    textAlign: 'left',
    fontWeight: 700,
  }
}

class Contact extends Component {

  render() {

    return (
      <Fragment>
        <Wrapper
          title={'Contact'}
        >
          <Card.Title></Card.Title>
          <Container>
            <Row>

            </Row>
          </Container>
        </Wrapper>
      </Fragment>
    );
  }
}

export default Contact;