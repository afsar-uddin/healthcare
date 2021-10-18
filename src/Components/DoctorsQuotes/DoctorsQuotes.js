import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './DoctorsQuotes.css'

const DoctorsQuotes = () => {
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        fetch('./healthcare.json')
            .then(res => res.json())
            .then(data => setQuotes(data.quotes));
    }, [])
    return (
        <div class="doctors-quotes">
            <Container>
                <Row>
                    <Col className="sec-title text-center">
                        <h3>Our beloved doctors Quotes</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel variant="dark">
                            {
                                quotes.map(quote => <Carousel.Item>
                                    <img src={quote.cover} alt={quote.speech} />
                                    <div className="quote">
                                        <h3>{quote.speech}</h3>
                                        <p><small>{quote.name}</small></p>
                                    </div>
                                </Carousel.Item>)
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DoctorsQuotes;