import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Appointment.css';
import useAuth from '../../hooks/useAuth';

const Appointment = () => {
    const { isLogin } = useAuth();
    return (
        <Container>
            <Row>
                <Col>
                    <Card className="appointment">
                        <h2>South CTG Healthcare</h2>
                        <div>
                            <h3>Our appointment</h3>
                            <h4>Serial Number:</h4>
                            <h5>+880 1819000000</h5>
                            <p>We are realy gald to have you here. Our customer service open for 24/7</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
};

export default Appointment;