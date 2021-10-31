import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Calendar, Clock, GeoAlt } from 'react-bootstrap-icons';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import './EventRegistration.css'

const EventRegistration = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [event, setEvent] = useState({});
    const [duration, setDuration] = useState([]);

    const dateRef = useRef('');
    const phoneRef = useRef('');
    const passportRef = useRef('');
    const addressRef = useRef('');
    // console.log(id)
    useEffect(() => {
        axios.get(`https://sks-travel.herokuapp.com/events/${id}`)
            .then(res => {
                setEvent(res.data);
                setDuration([...Array(parseInt(res.data.duration)).keys()])
            })
    }, []);

    const handleEventRegestration = (e) => {
        e.preventDefault();
        const location = event.location;
        const startDate = event.startDate;
        const endDate = event.endDate;
        const duration = event.duration;
        const price = event.price;
        const img = event.img;
        const name = user.displayName;
        const status = false;
        const date = dateRef.current.value;
        const email = user.email;
        const phone = phoneRef.current.value;
        const passport = passportRef.current.value;
        const address = addressRef.current.value;

        const data = ({
            location, startDate, endDate, duration, price,
            img, name, email, status, date, phone, passport, address
        })

        console.log(data)
        axios.post('https://sks-travel.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Sucessful!",
                        text: "You successfully add new tour event!",
                        icon: "success",
                        button: "OK",
                    });
                    e.target.reset();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <Container className="mt-5 pt-5">
            <Row className="g-4">
                <Col lg="8">
                    <Row className="">
                        <Col>
                            <div className="shadow border border-2 rounded-3 p-2">
                                <img className="" style={{ width: "100%" }} src={event.img} alt="" />
                                <div className="mt-3 mx-2">
                                    <h3 className="primary-color fw-bold"><GeoAlt className="mb-1" /> {event.location}</h3>
                                    <p className="d-inline secondary-background bg-light rounded-pill px-2 me-2"><Calendar className="mb-1" /> {event.startDate} - {event.endDate}</p>
                                    <p className="d-inline secondary-background bg-light rounded-pill px-2"><Clock className="mb-1" /> {event.duration} Days</p>
                                    <h4 className="primary-color fw-bold mt-3">${event.price}</h4>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="tour-plans px-2">
                                {
                                    duration.map((d, i) => <div key={i}>
                                        <h2 className="primary-color">Day: {i + 1}</h2>
                                        <p className="secondary-color">
                                            Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                                        </p>
                                    </div>)
                                }

                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col lg="4">
                    <Form onSubmit={handleEventRegestration} className="mx-auto p-5 mt-2 shadow-lg">
                        <Form.Group className="mb-4" controlId="formBasicName">
                            <Form.Control value={user.displayName} className="border-start-0 border-top-0 border-end-0" type="text" placeholder="Full Name" disabled />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control value={user.email} className="border-start-0 border-top-0 border-end-0" type="email" placeholder="Email" disabled />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicDate">
                            <Form.Control ref={dateRef} className="border-start-0 border-top-0 border-end-0" type="date" placeholder="Date" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPurpose">
                            <Form.Control ref={phoneRef} className="border-start-0 border-top-0 border-end-0" type="text" placeholder="Phone Number" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassport">
                            <Form.Control ref={passportRef} className="border-start-0 border-top-0 border-end-0" type="text" placeholder="Passport Number" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPurpose">
                            <Form.Control ref={addressRef} className="border-start-0 border-top-0 border-end-0" type="text" placeholder="Address" />
                        </Form.Group>


                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                                Book Your Seat
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default EventRegistration;