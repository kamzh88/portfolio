import React, { Component, Fragment } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class Wrapper extends Component {

    render() {

        const { title, children, photo } = this.props

        return (
            <Fragment>
                <Container>
                    <Row className="justify-content-md-center">
                        <Card className="text-center">
                            <Card.Header>{title}</Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    {photo}
                                    {children}
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                            {/* <Card.Footer className="text-muted">Kin Kam Zhao</Card.Footer> */}
                        </Card>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Wrapper;