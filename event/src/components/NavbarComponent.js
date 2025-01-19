import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Web Acara</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;