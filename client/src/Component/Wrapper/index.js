import React, { Component, Fragment } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class Wrapper extends Component {

    render() {
        const { title } = this.props;
        return (
            <Fragment>
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Card className="text-center">
                            <Card.Header>{title}

                            </Card.Header>
                            <Card.Body>
                                {this.props.children}
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Wrapper;