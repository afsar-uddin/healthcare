import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="ctg-navbar">
                <Container>
                    <NavLink to="/"><img src={Logo} alt="Logo" /></NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ctg-nav">
                            <NavLink exact activeClassName="active" to="/">Home</NavLink>
                            <NavLink exact activeClassName="active" to="/appointment-info">Appointments</NavLink>
                            <NavLink exact activeClassName="active" to="/Contact">Contact</NavLink>
                            <NavLink exact activeClassName="active" to="/login-register">Login / Register</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;