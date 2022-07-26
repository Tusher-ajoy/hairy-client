import React, { useContext, useRef } from 'react';
import { userContext } from '../../../../App';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const form = useRef(null);
    const onSubmit = data => {
        // console.log(data);
        const formData = new FormData();
        formData.append('img', data.img[0]);
        formData.append('category', data.category);
        formData.append('price', data.price);
        formData.append('title', data.title);
        fetch('https://frozen-headland-45377.herokuapp.com/addServices', {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            if(data){
                alert('Service added successfully')
                form.current.reset();
            }
          })
          .catch(error => {
            console.error(error)
          })
    };
    return (
        <main>
            <div className='d-flex justify-content-between py-3' style={{ background: 'white', padding: '0px 30px' }}>
                <h4 className='bookHeader'>Add Service</h4>
                <h4>{loggedInUser.name ? loggedInUser.name : sessionStorage.getItem('userName')}</h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} ref={form} style={{ width: '90%', margin: '30px', padding: '20px', background: 'white' }}>
                <div style={{ width: '50%', float: 'left', paddingLeft: '20px' }}>
                    <label htmlFor="category" style={{ fontWeight: 'bold' }}>Category:</label><br />
                    <select {...register("category", { required: true })} style={{ padding: '5px 10px', width: '90%', borderRadius: '5px' }}>
                        <option value='Haircut Styles'>Haircut Styles</option>
                        <option value='Beard Triming'>Beard Triming</option>
                        <option value='Smooth Shave'>Smooth Shave</option>
                        <option value='Face Masking'>Face Masking</option>
                    </select>
                </div>
                <div style={{ width: '50%', float: 'right', paddingRight: '20px' }}>
                    <label htmlFor="title" style={{ fontWeight: 'bold' }}>Service title:</label><br />
                    {errors.title && <span style={{ color: 'red' }}>Title is required</span>}
                    <input  {...register("title", { required: true })} placeholder="Enter title*" style={{ padding: '5px 10px', borderRadius: '5px', width: '100%' }} />
                </div>
                <div style={{ width: '50%', float: 'left', paddingLeft: '20px' }}>
                    <label htmlFor="img" style={{ fontWeight: 'bold' }}>Image:</label><br />
                    <input type="file" className='styleFileUp' {...register("img", { required: true })} />
                </div>
                <div style={{ width: '50%', float: 'right', paddingRight: '20px' }}>
                    <label htmlFor="price" style={{ fontWeight: 'bold' }}>Price:</label><br />
                    <input type='number' {...register("price", { required: true })} placeholder="Enter price*" style={{ padding: '5px 10px', borderRadius: '5px', width: '100%' }} /><br /><br />
                </div>
                <button type='submit' className='contactBtn'>Submit</button>
            </form>
        </main>
    );
};

export default AddService;