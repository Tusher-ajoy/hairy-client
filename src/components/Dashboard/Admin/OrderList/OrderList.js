import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { userContext } from '../../../../App';
import './OrderList.css';
import Alert from 'react-bootstrap/Alert';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://frozen-headland-45377.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // const options = [
    //     { value: 'pending', text: 'Pending' },
    //     { value: 'done', text: 'Done' },
    // ];

    const [updateSuccess, setUpdateSuccess] = useState(null);
    const handleChange = (id) => {
        // console.log(id)
        const status = document.getElementById('status').value;
        // console.log(status)
        document.getElementById('status').style.color = status === 'pending' ? 'red' : 'green';
        fetch(`https://frozen-headland-45377.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => setUpdateSuccess(data.modifiedCount))
    }
    return (
        <main>
            <div className='d-flex justify-content-between py-3' style={{ background: 'white', padding: '0px 30px' }}>
                <h4 className='bookHeader'>Order List</h4>
                <h4>{loggedInUser.name ? loggedInUser.name : sessionStorage.getItem('userName')}</h4>
            </div>
            <div className='orderList'>
                {
                    updateSuccess && <Alert key='success' variant='success'>
                        Item update successfully!
                    </Alert>
                }
                {
                    orders.length ?
                    <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Pay with</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => (
                                <tr>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.title}</td>
                                    <td>{order.paymentId ? 'Credit Card' : 'Cash on'}</td>
                                    <td>
                                        <select name="status" id='status' style={{ color: `${order.status === 'pending' ? 'red' : 'green'}` }} onChange={() => handleChange(order._id)}>
                                            {order.status === 'done' ? <option value="done" selected>Done</option> : <option value="done" >Done</option>}
                                            {order.status === 'pending' ? <option value="pending" selected>Pending</option> : <option value="pending">Pending</option>}
                                        </select>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                : <h1>There is no order yet!!</h1>
                }
            </div>
        </main>
    );
};

export default OrderList;