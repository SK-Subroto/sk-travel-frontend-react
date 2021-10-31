import axios from 'axios';
import { width } from 'dom-helpers';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Calendar, Clock, GeoAlt } from 'react-bootstrap-icons';
import useAuth from '../../hooks/useAuth';
import ReactLoading from 'react-loading';
import swal from 'sweetalert';

const BookedEvents = () => {
    const { user } = useAuth();
    const [myEvents, setMyEvents] = useState([]);
    useEffect(() => {
        axios.get('https://sks-travel.herokuapp.com/orders')
            .then(res => setMyEvents(res.data.filter(d => d.email === user.email)))
            .catch(err => console.log(err))
    }, []);

    const handleDeleteMyEvent = (id) => {
        swal({
            title: "Are you sure?",
            text: "You want to cancel you servation",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://sks-travel.herokuapp.com/orders/${id}`)
                        .then(res => {
                            if (res.data.deletedCount) {
                                const remainingEvents = myEvents.filter(event => event._id !== id);
                                setMyEvents(remainingEvents);
                            }
                        }).catch(err => console.log(err))
                    swal("Your reservation is sucessfully cancelled", {
                        icon: "success",
                    });
                } else {
                    // swal("Your imaginary file is safe!");
                }
            });
    }

    return (
        <>
            {!myEvents.length ?
                <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                    <ReactLoading type={"spinningBubbles"} color={"#7ea0ff"} height={100} width={100} />
                </div>
                :
                <Container className="mt-5 pt-5" style={{ height: '80vh' }}>
                    <h1 className="primary-color fw-bold mb-5 text-center">My Booked Event</h1>
                    <Row xs={1} lg={2} className="g-4">
                        {
                            myEvents.map(event => {
                                return (
                                    <Col key={event._id}>
                                        <Card className="border-0 shadow p-2">
                                            <Row>
                                                <Col lg="4">
                                                    <Card.Img className="img-fluid" src={event.img} />
                                                </Col>
                                                <Col lg="8">
                                                    <Card.Body>
                                                        <Card.Title className="primary-color fw-bold"><GeoAlt /> {event.location}</Card.Title>
                                                        <Card.Text>
                                                            <p className="secondary-background d-inline bg-light rounded-pill px-2 me-2"><Calendar /> {event.startDate} - {event.endDate}</p>
                                                            <p className="secondary-background d-inline bg-light rounded-pill px-2"><Clock /> {event.duration} Days</p>
                                                            <h4 className="primary-color mt-2 fw-bold">${event.price}</h4>
                                                            <h6><b>Registation Date:</b> {event.date}</h6>
                                                            <div><b>Staus:</b> <span className={!event.status ? "text-warning fw-bold" : "text-success fw-bold"}>{!event.status ? "Pending" : "Approved"}</span></div>
                                                            <div className="float-end">
                                                                <Button onClick={() => handleDeleteMyEvent(event._id)} variant="danger" className="btn btn-sm">Cancel</Button>
                                                            </div>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            }
        </>
    );
};

export default BookedEvents;