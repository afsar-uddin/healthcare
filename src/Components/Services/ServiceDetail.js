import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const ServiceDetail = () => {
    const { id } = useParams();
    const [serviceDetail, setServiceDetail] = useState([]);
    const [singleService, setSingleService] = useState([]);
    const { isLoading } = useAuth();
    console.log(singleService)

    // fetch services data
    useEffect(() => {
        fetch('/healthcare.json')
            .then(res => res.json())
            .then(data => setServiceDetail(data.services))
    }, []);

    // find id wise post
    useEffect(() => {
        const matchedService = serviceDetail.find(service => service.id === id);
        setSingleService(matchedService)
    }, [serviceDetail]);
    if (isLoading) {
        <Spinner animation="border" variant="info" />
    }
    return (
        <div className="service-detail">
            <div className="service-detail-header">
                <Container>
                    <Row>
                        <Col className="detail-col">
                            <h2>{singleService?.title}</h2>
                            <Link to="/">Back to home</Link>

                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col>
                        <img src={singleService?.cover} />
                        <h3>{singleService?.shortDsc}</h3>
                        <p>{singleService?.details}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetail;