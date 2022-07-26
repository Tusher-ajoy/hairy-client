import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './BookingList.css'
import scissors from '../../../../images/scissors.png';
import { userContext } from '../../../../App';
import { data } from 'autoprefixer';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        const userEmail = sessionStorage.getItem('userEmail');
        fetch('https://frozen-headland-45377.herokuapp.com/getBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userEmail })
        })
            .then(response => response.json())
            .then(data => setBookingList(data))
    }, [])
    return (
        <main>
            <div className='d-flex justify-content-between py-3' style={{ background: 'white', padding: '0px 30px' }}>
                <h4 className='bookHeader'>Booking List</h4>
                <h4>{loggedInUser.name ? loggedInUser.name : sessionStorage.getItem('userName')}</h4>
            </div>
            <div className='bookingListMain'>
                {
                    bookingList.length ?
                    <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Pay with</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingList.map((booking) => (
                                <tr>
                                    <td>{booking.title}</td>
                                    <td>{booking.paymentId ? 'Credit Card' : 'Cash on'}</td>
                                    <td style={{ color: 'red' }}>
                                        {
                                            booking.status==='done' ? <Button variant="outline-success" style={{ height: '40px', background: '#19875430', border: 'none' }}>{booking.status}</Button> : <Button variant="outline-danger" style={{ height: '40px', background: '#f8d7da', border: 'none' }}>{booking.status}</Button>
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                : <h1>You don't have any order yet!</h1>
                }
            </div>
        </main>
    );
};

export default BookingList;