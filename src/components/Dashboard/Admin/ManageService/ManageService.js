import React, { useContext, useEffect, useRef, useState } from 'react';
import { Table } from 'react-bootstrap';
import { userContext } from '../../../../App';
import Button from 'react-bootstrap/Button';
import deleteImg from '../../../../images/delete.png';
import updateImg from '../../../../images/refresh-button.png';
import { useForm } from "react-hook-form";
import './ManageService.css';

const ManageService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('https://frozen-headland-45377.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setAllServices(data));
    }, [])

    const handleDelete = (e, id) => {
        fetch(`https://frozen-headland-45377.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    e.target.parentNode.parentNode.style.display = 'none';
                    alert('Item deleted successfully!!')
                }
            })
    }

    const from = useRef(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [updateItem, setUpdateItem] = useState('');
    const onSubmit = data => {
        // console.log(updateItem)
        // console.log(data);
        fetch(`https://frozen-headland-45377.herokuapp.com/updateService/${updateItem}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert("Item updated Successfully!!");
                document.getElementById('updateForm').style.display = 'none';
                window.location.reload();
            }
        })
    }
    const handleUpdate = ( service) => {
        document.getElementById('updateForm').style.display = 'block';
        document.getElementById('title').value = service.title;
        document.getElementById('price').value = service.price;
        setUpdateItem(service._id);
    }
    return (
        <main>
            <div className='d-flex justify-content-between py-3' style={{ background: 'white', padding: '0px 30px' }}>
                <h4 className='bookHeader'>Manage Service</h4>
                <h4>{loggedInUser.name ? loggedInUser.name : sessionStorage.getItem('userName')}</h4>
            </div>
            <div className='orderList'>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allServices.map(service => (
                                <tr>
                                    <td>{service.category}</td>
                                    <td>{service.title}</td>
                                    <td>${service.price}</td>
                                    <td><img alt='' src={`data:image/png;base64,${service.image.img}`} style={{width:'30px'}} /> </td>
                                    <td>
                                        <Button variant="outline-warning" onClick={() => handleUpdate(service)}><img src={updateImg} alt='' style={{ width: '20px' }} /></Button>{' '}
                                        <Button variant="outline-danger" onClick={(e) => handleDelete(e, service._id)}><img src={deleteImg} alt='' style={{ width: '20px' }} /></Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <div id="updateForm">
                    <form onSubmit={handleSubmit(onSubmit)} ref={from}>
                        {errors.title && <span style={{ color: 'red' }}>Title is required</span>}
                        <input id='title' type='text' {...register("title", { required: true })} style={{ borderRadius: '5px' }} />{' '}
                        {errors.price && <span style={{ color: 'red' }}>Price is required</span>}
                        <input type='number' id='price' {...register("price", { required: true })} style={{ borderRadius: '5px' }} />{' '}
                        <button type='submit'>Update</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default ManageService;