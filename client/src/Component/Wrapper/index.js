import React, { Component, Fragment } from "react";
import { Card, Container, Row } from "react-bootstrap";
import "./style.css";

const Wrapper = () => (
  <Fragment>
    <Container fluid>
      <Row className="justify-content-md-center">
        <Card className="text-center">
          <Card.Header className="heading">{this.props.title}</Card.Header>
          <Card.Body className="card-body">{this.props.children}</Card.Body>
        </Card>
      </Row>
    </Container>
  </Fragment>
);

export default Wrapper;
