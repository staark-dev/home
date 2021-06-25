import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import profile from '../assets/cover.jpg';

export const Navigation = () => (
    <Navbar expand="lg" variant="dark" bg="info" fixed="top" id="sideNav">
        <Navbar.Brand href="/home">
            <span className="d-block d-lg-none">Costin Ionut</span>
            <span className="d-none d-lg-block"><img
                className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile}
                alt="..." /></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
            <Nav className="mr-auto">
                <Nav.Item as="li"><Nav.Link href="/home">About</Nav.Link></Nav.Item>
                <Nav.Item as="li"><Nav.Link href="/home/experience">Experience</Nav.Link></Nav.Item>
                <Nav.Item as="li"><Nav.Link href="/home/education">Education</Nav.Link></Nav.Item>
                <Nav.Item as="li"><Nav.Link href="/home/skills">Skills</Nav.Link></Nav.Item>
                <Nav.Item as="li"><Nav.Link href="/home/interests">Interests</Nav.Link></Nav.Item>
                <Nav.Item as="li"><Nav.Link href="/home/projects">Projects</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);