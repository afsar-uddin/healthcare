import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <Container className="notfound">
            <Row>
                <Col>
                    <h2>404 Not foound </h2>
                    <Link className="link-btn" to="/">Back to home</Link>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;