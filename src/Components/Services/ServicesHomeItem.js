import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServicesHomeItem = (props) => {
    const { title, cover, id } = props.serviceHome;
    return (
        <Col>
            <Card>
                <div className="single-service">
                    <img src={cover} alt={title} />
                    <h3>{title}</h3>
                </div>
                <Link to={`/service/${id}`}>View more</Link>
            </Card>
        </Col>
    );
};

export default ServicesHomeItem;