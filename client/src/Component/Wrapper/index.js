import React, { Fragment } from "react";
import { Card, Container, Row } from "react-bootstrap";
import "./style.css";

const Wrapper = props => (
  <div className="body">
    <Container fluid>
      <Row className="justify-content-md-center">
        <Card className="text-center">
          <Card.Header className="heading">{props.title}</Card.Header>
          <Card.Body className="card-body">{props.children}</Card.Body>
        </Card>
      </Row>
    </Container>
  </div>
);

export default Wrapper;
