import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './LoginRegister.css'

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(false);
    const { googleLogin, user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURI = location.state?.from || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                history.push(redirectURI);
            })
    };

    const isLoggedInChecked = e => {
        setIsLogin(e.target.checked)
    }

    return (
        <div className="login-register">
            <Container>
                <Row>
                    <Col>
                        <h2>{!isLogin ? "Login here" : "Register here"}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <form>
                            <input type="email" placeholder="Your email" />
                            <input type="password" placeholder="Your password" />
                            <div class="check">
                                <input type="checkbox" onChange={isLoggedInChecked} id="checkHere" /><small>Not register?</small>
                            </div>
                            <button>{!isLogin ? "Login" : "Register"}</button>
                        </form>
                        <div className="direct-login">
                            <p>You can also direct Login</p>
                            <div>
                                <button onClick={handleGoogleLogin}>Google</button>
                                <button>Facebook</button>
                                <button>Github</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default LoginRegister;