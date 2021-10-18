import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LoginRegister.css'

const LoginRegister = () => {
    return (
        <div className="login-register">
            <Container>
                <Row>
                    <Col>
                        <h2>Login here</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <form>
                            <input type="email" placeholder="Your email" />
                            <input type="password" placeholder="Your password" />
                            <button>Login</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginRegister;