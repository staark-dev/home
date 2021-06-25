import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(window.location.search).get("section");
};

export const Layout = (props) => {
    return(
        <Container>
            {props.children}
        </Container>
    );
};