import React, { Component, Fragment } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import './style.css';

const styles = {
    heading: {
        fontWeight: 900,
        fontSize: "2rem"
    }
}

class Wrapper extends Component {

    render() {

        return (
            <Fragment>
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Card className="text-center">
                            <Card.Header style={styles.heading}>Kin Kam Zhao</Card.Header>
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