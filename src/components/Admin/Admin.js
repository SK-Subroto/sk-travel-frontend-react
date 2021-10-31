import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { People, Plus } from 'react-bootstrap-icons';
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AddEvent from '../AddEvent/AddEvent';
import AllBookedEvents from '../AllBookedEvents/AllBookedEvents';

import PrivateRoute from '../PrivateRoute/PrivateRoute';


const Admin = () => {
    const {user} = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <Container fluid className="" style={{height: '100vh'}}>
            <Row className="g-3">
                <Col lg="3">
                    <div className="bg-white p-3 border border-2">
                        <div className="text-center">
                            <img src={user.photoURL} className="img-fluid rounded-circle" alt="" />
                            <h3 className="secondary-color mt-2">{user.displayName}</h3>
                        </div>
                        <ListGroup variant="flush">
                            <ListGroup.Item as={NavLink} to={`${url}/manage-booked-event`}><People /> Manage All Reservation</ListGroup.Item>
                            <ListGroup.Item as={NavLink} to={`${url}/add-event`}><Plus /> Add Event</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg="9">
                    <div>
                        <Switch>
                            <PrivateRoute exact path={`${path}`}>
                                <AllBookedEvents />
                            </PrivateRoute>
                            <PrivateRoute path={`${path}/manage-booked-event`}>
                                <AllBookedEvents />
                            </PrivateRoute>
                            <PrivateRoute path={`${path}/add-event`}>
                                <AddEvent />
                            </PrivateRoute> 
                        </Switch>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;