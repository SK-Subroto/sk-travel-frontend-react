import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Button, Carousel, Accordion } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import Event from '../Event/Event';
import './Home.css';

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get('https://sks-travel.herokuapp.com/events')
            .then(res => setEvents(res.data.events))
            .catch(err => console.log(err))
    }, []);
    return (
        <>
            {!events.length ?
                <div className="d-flex align-items-center justify-content-center" style={{height: '80vh'}}>
                    <ReactLoading type={"spinningBubbles"} color={"#7ea0ff"} height={100} width={100} />
                </div>
                :
                <Container fluid>
                    <section className="text-center pt-5">
                        <div>
                            <h1 className="title">Lifelong memories just a <br />few seconds away</h1>
                            <p className="fs-4 text-secondary">Let’s start your journey with us, your dream will come true</p>
                            <Button className="primary-background px-4 py-2 fs-5">Explore Destination</Button>
                        </div>
                        <div className="home-img">
                        </div>
                    </section>

                    {/* Events */}
                    <Container>
                        <div className="text-center mt-5 pt-5 mb-3">
                            <p className="secondary-color">Check Our Best Promotional Tour</p>
                            <h1 className="title primary-color">Upcoming Events</h1>
                        </div>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {
                                events.map(event => <Event key={event._id} event={event} />)
                            }
                        </Row>
                    </Container>



                    {/* customer-review */}
                    <Container fluid className="mt-5 pt-5">
                        <div className="customer-review-container text-white p-5">
                            <h1 className="text-center">What customers says</h1>
                            <Carousel variant="light" class="container py-5" style={{ textAlign: 'center' }}>
                                <Carousel.Item>
                                    <img
                                        className="img-fluid rounded-circle"
                                        height="75"
                                        width="75"
                                        src="https://s3.amazonaws.com/arc-authors/washpost/50eda441-600e-4fa5-9f0d-6cb1714ac367.png"
                                        alt="First slide"
                                    />
                                    <div>
                                        <h3 className="mt-2">Perterson Mike</h3>
                                        <h5>Banker</h5>
                                        <p className="review-detail">Your full service lab for clinical trials. Our mission is to ensure the generation of accurate and precise findings. Most statisfictions outcome.</p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="img-fluid rounded-circle"
                                        height="75"
                                        width="75"
                                        src="https://preview.colorlib.com/theme/tralive/assets/img/gallery/xfounder-img.png.pagespeed.ic.ThZU03jzM3.webp"
                                        alt="First slide"
                                    />
                                    <div>
                                        <h3 className="mt-2">Mark Anthony</h3>
                                        <h5>Banker</h5>
                                        <p className="review-detail">One of the best service of the segment.Eyecache design is the most attractive part of the experience.The power delivery of the result.</p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="img-fluid rounded-circle"
                                        height="75"
                                        width="75"
                                        src="https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg"
                                        alt="First slide"
                                    />
                                    <div>
                                        <h3 className="mt-2">Brays Walker</h3>
                                        <h5>Engineer</h5>
                                        <p className="review-detail">Should give 4.5 ratings to this lab because of their fasilities, safety, and comfort, thanks to you.I really love this very much. Keep it up.</p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Container>

                    {/* faq */}
                    <Container className="mt-5 pt-5">
                        <div className="text-center">
                            <p className="secondary-color">FAQ</p>
                            <h1 className="primary-color fw-bold mb-5">Full range of travel service</h1>
                        </div>
                        <Row>
                            <Col className="px-5" lg="6">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0" className="border-0">
                                        <Accordion.Header>Starts the automated process.</Accordion.Header>
                                        <Accordion.Body className="text-secondary">
                                            The automated process starts as soon as
                                            your clothes go into the machine. Duis cursus, mi
                                            quis viverra ornare.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className="border-0">
                                        <Accordion.Header>The automated process starts.</Accordion.Header>
                                        <Accordion.Body className="text-secondary">
                                            The automated process starts as soon as
                                            your clothes go into the machine. Duis cursus, mi
                                            quis viverra ornare.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" className="border-0">
                                        <Accordion.Header>Automated process starts.</Accordion.Header>
                                        <Accordion.Body className="text-secondary">
                                            The automated process starts as soon as
                                            your clothes go into the machine. Duis cursus, mi
                                            quis viverra ornare.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3" className="border-0">
                                        <Accordion.Header>Process the automated magic.</Accordion.Header>
                                        <Accordion.Body className="text-secondary">
                                            The automated process starts as soon as
                                            your clothes go into the machine. Duis cursus, mi
                                            quis viverra ornare.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                            <Col className="px-5" lg="6">
                                <img className="img-fluid" src="https://preview.colorlib.com/theme/tralive/assets/img/gallery/xabout2.png.pagespeed.ic.FKuxbsbrrT.webp" alt="" />
                            </Col>
                        </Row>
                    </Container>

                </Container>
            }
        </>
    );
};

export default Home;