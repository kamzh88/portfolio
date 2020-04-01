import React, { Fragment } from "react";
import { Card, Container, Row } from "react-bootstrap";
import "./style.css";

const Wrapper = (props) => (
  <Fragment>
    <Container fluid>
      <Row className="justify-content-md-center">
        <Card className="text-center">
          <Card.Header className="heading">{props.title}</Card.Header>
          <Card.Body className="card-body">{props.children}</Card.Body>
        </Card>
      </Row>
    </Container>
  </Fragment>
);

export default Wrapper;
