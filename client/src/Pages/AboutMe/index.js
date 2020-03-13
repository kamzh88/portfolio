import React, { Component, Fragment } from "react";
import Wrapper from "../../Component/Wrapper";
import { Container, Row, Image, Col, Card } from "react-bootstrap";
import "./style.css";
import image from "../../Images/profile-pic.jpg";

class AboutMe extends Component {
  state = {
    photo: ""
  };

  render() {
    const photo = <Image className="image" src={image} fluid />;

    return (
      <Fragment>
        <Wrapper title={"About Me"}>
          <Container>
            <Row>
              <Col className="position" sm={"auto"} md={3} lg={3}>
                {photo}
              </Col>
              <Col sm={"auto"} md={8} lg={8} className="text">
                {
                  (this.text = `
                    My name is Kin Kam Zhao but everyone call me Kam. I am a full Stack Web Developer 
                    leveraging a background in the service industry to create meaningful web applications.  
                    Graudate with a bachelor degree majoring in finance.  Earned a certificate in 
                    Full Stack Development from Rutgers University, with newly developed skills 
                    in JavaScript, HTML, CSS, node.js, and React.js.  A versatile problem solver.  
                    In a recent project I created an app that will help managers keep track of their employees
                    data and help schedule the employees shifts.  Positioned well to provide unique perspectives 
                    on how end-users interact with websites and software platforms by leveraging my background 
                    in the service industry and finance.
                    `)
                }
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </Fragment>
    );
  }
}

export default AboutMe;
