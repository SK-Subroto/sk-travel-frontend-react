import axios from 'axios';
import React, { useRef } from 'react';
import { useState } from 'react';
import { Col, Container, Form, Row, Button, Card } from 'react-bootstrap';
import { Calendar, Clock, GeoAlt } from 'react-bootstrap-icons';
import swal from 'sweetalert';

const AddEvent = () => {
    const [recentPost, setRecentPost] = useState([1, 2, 3]);
    const titleRef = useRef('');
    const locationRef = useRef('');
    const startDateRef = useRef('');
    const endDateRef = useRef('');
    const imgUrlRef = useRef('');
    const priceRef = useRef('');
    const descriptionRef = useRef('');
    const handleAddEvent = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const location = locationRef.current.value;
        const startDateRaw = new Date(startDateRef.current.value).toString().split(' ');
        const startDate = startDateRaw[2]+' '+startDateRaw[1];
        const endDateRaw = new Date(endDateRef.current.value).toString().split(' ');
        const endDate = endDateRaw[2]+ ' ' +endDateRaw[1];
        const duration = Math.abs(parseInt(endDateRaw[2]) - parseInt(startDateRaw[2]));
        const img = imgUrlRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const data = { title, location, startDate, endDate, duration, price, img, description };
        axios.post('https://sks-travel.herokuapp.com/events', data)
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
        console.log(data)
    }
    return (
        <Container>
            <div className="">
                <div className="bg-white mb-4 p-2">
                    <h2 className="primary-color fw-bold">Add Event</h2>
                </div>
                <div className="bg-white p-5 border border-1 shadow">
                    <Form onSubmit={handleAddEvent}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control ref={titleRef} type="title" placeholder="Enter title" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label>Location</Form.Label>
                                <Form.Control ref={locationRef} type="title" placeholder="Location" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridDate">
                                <Form.Label>Star Date</Form.Label>
                                <Form.Control ref={startDateRef} type="date" placeholder="Date" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridDate">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control ref={endDateRef} type="date" placeholder="Date" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridImageurl">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control ref={imgUrlRef} placeholder="www.example.com" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridImageurl">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" ref={priceRef} placeholder="00" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control ref={descriptionRef} as="textarea" rows={3} placeholder="Apartment, studio, or floor" />
                        </Form.Group>


                        <Button variant="primary" type="submit" className="primary-background">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default AddEvent;