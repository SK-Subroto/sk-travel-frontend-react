import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { HouseDoor } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';
import './PageNotFound.css';

const PageNotFound = () => {
    const history = useHistory();

    const handleGoHome = () => {
        history.push('./home');
    }
    return (
        <Container className="mt-5 pt-5" style={{ height: '80vh' }}>
            <div className="page-not-found-container">
                <h2>Page Not Found</h2>
                <h1 style={{fontSize: '8rem'}}>404</h1>
                <Button variant="primary" className="primary-background" onClick={handleGoHome}> <HouseDoor className="mb-1" /> Go to homepage</Button>
            </div>
        </Container>
    );
};

export default PageNotFound;