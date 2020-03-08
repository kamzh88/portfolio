import React, { Component, Fragment } from 'react';
import Wrapper from '../../Component/Wrapper';
import { Button, Card, Container, Row, Image, Col } from 'react-bootstrap';
import './style.css';
import image from '../../Images/profile-pic.jpg'

const styles = {
  image: {
    maxHeight: '15rem',
  },
  text: {
    textAlign: 'left'
  }
}

class AboutMe extends Component {

  state = {
    photo: ''
  }

  render() {

    this.state.photo = <Image style={styles.image} src={image} fluid />;

    return (
      <Fragment>
        <Wrapper
          title={'About Me'}
        >
          <Container fluid>
            <Row>
              <Col xs={3}>
                {this.state.photo}
              </Col>
              <Col xs={8} style={styles.text}>
                {this.text = 'text'}
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </Fragment>
    );
  }
}

export default AboutMe;