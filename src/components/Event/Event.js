import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Calendar, Clock, GeoAlt } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';
import './Event.css';

const Event = (props) => {
    const { _id, title, location, startDate, endDate, duration, price, img, description } = props.event;
    const history = useHistory();
    const handleBookNow = (id) => {
        history.push(`/event/${id}`)
    }
    return (
        <Col>
            <Card className="border-0 px-2 pt-2 shadow-sm rounded-3 h-100">
                <Card.Img variant="top" className="img-fluid" src={img} />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between fw-bold fs-4">
                        <div className="primary-color">{title}</div>
                        <div className="secondary-color">${price}</div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between mb-3">
                            <div><Clock /> {duration} Days Tour</div>
                            <div><GeoAlt /> {location}</div>
                        </div>
                        <span className="text-secondary">{description.slice(0, 130)}</span>
                    </Card.Text>
                    <Card.Footer className="bg-white d-flex justify-content-between align-items-center">
                        <div className="d-inline secondary-background rounded-pill px-2 py-1"><Calendar /> {startDate} - {endDate}</div>
                        
                        <Button onClick={() => handleBookNow(_id)} className="btn btn-sm primary-background">Book Now</Button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Event;