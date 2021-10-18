import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServicesHomeItem = (props) => {
    const { title, cover, shortDsc, id } = props.serviceHome;
    return (
        <Col>
            <Card>
                <div className="single-service">
                    <img src={cover} alt={title} />
                    <div>
                        <h3>{title}</h3>
                        <p>{shortDsc}</p>
                    </div>
                </div>
                <Link to={`/service/${id}`}>View more</Link>
            </Card>
        </Col>
    );
};

export default ServicesHomeItem;