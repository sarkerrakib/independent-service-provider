import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={60} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse  id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            
                        </Nav>
                        <Nav className='menus'>
                            <Nav.Link className='text-dark' href="home#services">Services</Nav.Link>
                            <Nav.Link className='text-dark' href="blog">Blog</Nav.Link>
                            <Nav.Link className='text-dark' as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link className='text-dark' as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;