import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>404 Not foound </h2>
                    <Link to="/">Back to home</Link>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;