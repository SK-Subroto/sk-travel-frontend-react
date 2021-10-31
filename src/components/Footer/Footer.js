import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Facebook, Linkedin, Twitter, Whatsapp } from 'react-bootstrap-icons';
import './Footer.css'

const Footer = () => {
    return (
        <Container fluid className="mt-5 pt-5">
            <div className="footer-container text-white px-lg-5 pt-5" >
                <Row>
                    <Col lg="5" xs="12">
                        <div className="px-3">
                            <div className="d-flex align-items-center mb-2">
                                <img style={{ height: 50 }} src="https://i.ibb.co/YN05r27/sk-travel-logo.png" alt="" />
                                <h3>SK Travel</h3>
                            </div>
                            <p className="text-secondary fs-6">Land behold it created good saw after she'd Our set living.
                                Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</p>
                            <div className="fs-3">
                                <Facebook className="me-3" />
                                <Twitter className="me-3" />
                                <Linkedin className="me-3" />
                                <Whatsapp />
                            </div>
                        </div>
                    </Col>
                    <Col lg="2" xs="6">
                        <ListGroup className="mt-5">
                            <ListGroup.Item className="text-white bg-transparent border-0 fw-bolder mb-2">Navigation</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Home</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">About</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Services</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Blog</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Contact</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg="2" xs="6">
                        <ListGroup className="mt-5">
                            <ListGroup.Item className="text-white bg-transparent border-0 fw-bolder mb-2">Services</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Blackforest</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Bodhubon</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Rongdhonu</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Meghrong</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg="3" xs="12">
                        <ListGroup className="mt-5">
                            <ListGroup.Item className="text-white bg-transparent border-0 fw-bolder mb-2">Contact Us</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">76/A, Green Lane, Dhanmondi, Dhaka</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">subroto.sks@gmail.com</ListGroup.Item>
                            <ListGroup.Item className="text-warning bg-transparent border-0 fw-bold fs-4">(+880) 178817353</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <div className="text-center pb-3 mt-5 pt-5">© 2021 SK Travel. All rights reserved</div>
            </div>
        </Container>
    );
};

export default Footer;