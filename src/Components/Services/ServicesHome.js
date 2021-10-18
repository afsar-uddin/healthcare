import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServicesHomeItem from './ServicesHomeItem';
import './Services.css';

const ServicesHome = () => {
    const [serviceshome, setServiceshome] = useState([]);
    useEffect(() => {
        fetch('./healthcare.json')
            .then(res => res.json())
            .then(data => setServiceshome(data.services))
    }, []);

    return (
        <Container className="healthservices">
            <Row>
                <Col className="text-center sec-title">
                    <h3>Our popular services</h3>
                </Col>
            </Row>
            <Row md={3}>
                {
                    serviceshome.map(serviceHome => <ServicesHomeItem
                        key={serviceHome.id}
                        serviceHome={serviceHome}
                    ></ServicesHomeItem>)
                }

            </Row>
        </Container>
    );
};

export default ServicesHome;