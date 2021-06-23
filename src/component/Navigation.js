import React, { useState } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Link to="/home" className="navbar-brand">
                Costin Ionut
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/home" className="nav-link" role="button">Home</Link>
                    <Link to="/about" className="nav-link" role="button">AboutUs</Link>
                    <Link to="/projects" className="nav-link" role="button">Projects</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;