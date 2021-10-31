import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="mt-5 pt-5">
            <Row>
                <Col lg="6">
                    <img className="img-fluid" src="https://preview.colorlib.com/theme/tralive/assets/img/gallery/xabout.png.pagespeed.ic.ZsrvwBYE3S.webp" alt="" />
                </Col>
                <Col lg="6">
                    <p className="secondary-color">About Us</p>
                    <h1 className="primary-color fw-bold">Get ready for real time adventure</h1>
                    <p className="my-4 text-secondary" style={{ fontFamily: 'sans-serif' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <Row lg={3} className="g-4">
                        <Col className="text-center">
                            <h3 className="primary-color">300</h3>
                            <small className="secondary-color fs-5">Successful Tours</small>
                        </Col>
                        <Col className="text-center">
                            <h3 className="primary-color">24,000</h3>
                            <small className="secondary-color fs-5">Happy Tourist</small></Col>
                        <Col className="text-center">
                            <h3 className="primary-color">200</h3>
                            <small className="secondary-color fs-5">Place Explored</small>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default About;