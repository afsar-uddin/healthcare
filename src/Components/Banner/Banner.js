import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    const [banners, setBanner] = useState([]);
    useEffect(() => {
        fetch('./healthcare.json')
            .then(res => res.json())
            .then(data => setBanner(data.banner))
    }, [])
    return (
        <Container fluid className="ctg-banner">
            <Row>
                <Col>
                    {
                        banners.map(banner => <>
                            <img src={banner.cover} />
                            <div className="banner-caption">
                                <h2>{banner.title}</h2>
                            </div>
                        </>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;