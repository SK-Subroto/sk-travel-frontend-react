import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import { CheckSquare, Trash } from 'react-bootstrap-icons';
import swal from 'sweetalert';

const AllBookedEvents = () => {
    const [bookedList, setBookedList] = useState([]);
    // const [updateEvent, setUpdateEvent] = useState({});
    let findEvent = {};

    useEffect(() => {
        axios.get('https://sks-travel.herokuapp.com/orders')
            .then(res => setBookedList(res.data))
    }, [findEvent]);

    const handleApproveBookedList = (id) => {
        findEvent = bookedList.find(event => event._id === id)
        swal({
            title: "Are you sure?",
            text: `You want to make status ${!findEvent.status ? "Approve" : "Pending"}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // findEvent = bookedList.find(event => event._id === id)
                    findEvent.status = !findEvent.status;
                    axios.put(`https://sks-travel.herokuapp.com/orders/${id}`, findEvent)
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                            }
                        })
                        .catch(err => console.log(err))
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    // swal("Your imaginary file is safe!");
                }
            });
    }
    const handleDeleteBookedList = (id) => {
        swal({
            title: "Are you sure?",
            text: "You want to delete this reservation",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://sks-travel.herokuapp.com/orders/${id}`)
                        .then(res => {
                            if (res.data.deletedCount) {
                                const remainingEvents = bookedList.filter(event => event._id !== id);
                                setBookedList(remainingEvents);
                            }
                        })
                    swal("Poof! Your file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    // swal("Your file is safe!");
                }
            });
    }
    return (
        <>
            {!bookedList.length ?
                <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
                    <ReactLoading type={"spinningBubbles"} color={"#7ea0ff"} height={80} width={80} />
                </div>
                :
                <Container>
                    <div className="bg-white mb-4 p-2">
                        <h2 className="primary-color fw-bold">All Booked Event List</h2>
                    </div>
                    <div className="bg-white p-2 shadow">
                        <Table bordered hover responsive>
                            <thead className="secondary-color">
                                <tr>
                                    <th>#</th>
                                    <th>Full Name</th>
                                    <th>Email Id</th>
                                    <th>Registration Date</th>
                                    <th>Event Location</th>
                                    <th>Status</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookedList.map((event, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index}</td>
                                                <td>{event.name}</td>
                                                <td>{event.email}</td>
                                                <td>{event.date}</td>
                                                <td>{event.location}</td>
                                                <td className={!event.status ? "text-warning fw-bold" : "text-success fw-bold"}
                                                >{!event.status ? "Pending" : "Approved"}</td>
                                                <td onClick={() => handleApproveBookedList(event._id)}
                                                    className="text-center"
                                                    style={{ cursor: 'pointer' }}
                                                ><CheckSquare className="text-success" /></td>
                                                <td onClick={() => handleDeleteBookedList(event._id)}
                                                    className="text-center"
                                                    style={{ cursor: 'pointer' }}
                                                ><Trash className="text-danger" /></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </Container>
            }
        </>
    );
};

export default AllBookedEvents;