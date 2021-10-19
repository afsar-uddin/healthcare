import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { FaGoogle } from 'react-icons/fa';
import './LoginRegister.css'

const LoginRegister = () => {

    const { googleLogin, isLogin, isLoggedInChecked, nameOnBlur, emailOnBlur, passwordOnBlur, handleLoginRegister, error } = useAuth();



    const location = useLocation();
    const history = useHistory();
    const redirectURI = location.state?.from || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                history.push(redirectURI);
            })
            .catch(error => { })
    };

    return (
        <div className="login-register">
            <Container>
                <Row>
                    <Col>
                        <h2>{!isLogin ? "Register here" : "Login here"}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <form>
                            {!isLogin && <input type="text" onBlur={nameOnBlur} placeholder="Your name" />}
                            <input type="email" onBlur={emailOnBlur} placeholder="Your email" />
                            <input type="password" onBlur={passwordOnBlur} placeholder="Your password" />
                            <span className="error">{error}</span>
                            <div className="check">
                                <input type="checkbox" onChange={isLoggedInChecked} id="checkHere" /><small>Already registered?</small>
                            </div>
                            <button onClick={handleLoginRegister}>{!isLogin ? "Register" : "Login"}</button>
                        </form>
                        <div className="direct-login">
                            <p>You can also direct Login with</p>
                            <div>
                                <button onClick={handleGoogleLogin}>Google <FaGoogle /></button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default LoginRegister;