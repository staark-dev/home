import React from "react";
import { Alert } from "react-bootstrap";

export const NoMatch = () => (
    <Alert variant="warning" style={{ marginTop: 40 + 'px' }}>
        <Alert.Heading>Request page not find</Alert.Heading>
        <p>Failed found this request page, please return to index.</p>
        <a href="/home" className="btn btn-xl btn-primary">Return to index</a>
    </Alert>
);