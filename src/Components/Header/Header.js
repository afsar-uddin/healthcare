import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
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
                            {user?.email ? <span className="displayname">Welcome {user?.displayName}</span> : ''}
                            {user?.email ? <button onClick={logOut}>Logout</button> : <NavLink exact activeClassName="active" to="/login-register">Login / Register</NavLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;