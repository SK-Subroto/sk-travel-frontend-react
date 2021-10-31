import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button, Badge, Dropdown } from 'react-bootstrap';
import { BagPlus, ListUl, Person, Power } from 'react-bootstrap-icons';
import { Link, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Header.css'


const Header = () => {

    const { user, logOut } = useAuth();
    const history = useHistory();

    const handleHomePage = () => {
        history.push('/home');
    }

    const activeStyle = {
        fontWeight: "bold",
        color: "#00095E",
        borderBottom: "solid 2px #00095E"
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);

    return (
        <>
            <Navbar bg="white" expand="lg" fixed="top" className={scrolled ? "shadow py-3" : "py-3"}>
                <Container fluid>
                    <Navbar.Brand onClick={handleHomePage} style={{ cursor: 'pointer' }} className="d-flex align-items-center fs-3 primary-color">
                        <img
                            alt=""
                            src="https://www.graphicsprings.com/filestorage/stencils/74cd6537a23f9e0bd1c4525d06517099.png?width=500&height=500"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        <span className="fw-bold" style={{ color: '#1F3B64' }}>SK Travel</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center fw-bold primary-color" style={{fontSize: 18}}>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/my-events">My Events</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/about">About</Nav.Link>
                            {/* toggle loging logout  */}
                            {!user?.email ?
                                <Nav.Link as={NavLink} activeStyle={activeStyle} to="/login"><Person /> Login</Nav.Link>
                                :
                                <Dropdown>
                                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                                        <img src={user.photoURL} alt="" style={{ height: 30, width: 30, borderRadius: 50 }} />
                                        <span style={{ fontSize: 18, fontFamily: 'sans-serif' }}> {user.displayName}</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={logOut}><Power /> Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            }
                            <Button variant="warning ms-3" as={Link} activeStyle={activeStyle} to="/admin">Admin Panel</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{marginTop: 100}}>

            </div>
        </>
    );
};

export default Header;