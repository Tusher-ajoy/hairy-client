import React, { useContext, useRef } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../../../App';
import Alert from 'react-bootstrap/Alert';

const AddReview = () => {
    const form = useRef(null)
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch('https://frozen-headland-45377.herokuapp.com/addReview',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Success! Thanks for your feedback.');
                form.current.reset();
            }
            else{
                alert('Failed!! Please try again letter')
            }
        })
    }
    return (
        <main>
            <div className='d-flex justify-content-between py-3' style={{ background: 'white', padding: '0px 30px' }}>
                <h4 className='bookHeader'>Review</h4>
                <h4>{loggedInUser.name ? loggedInUser.name : sessionStorage.getItem('userName')}</h4>
            </div>
            <form ref={form} onSubmit={handleSubmit(onSubmit)} className='userForm'>
                <Alert key='success' variant='success'>
                    Give us some feedback, how you feel!!!
                </Alert>
                {errors.name && <span style={{ color: 'red' }}>Name is required</span>}
                <input className='contactInput' {...register("name", { required: true })} placeholder="Name*" />
                {errors.designation && <span style={{ color: 'red' }}>Designation is required</span>}
                <input className='contactInput' type='text' {...register("designation", { required: true })} placeholder="Company's name, Designation*" />
                {errors.description && <span style={{ color: 'red' }}>Description is required</span>}
                <textarea style={{ width: '100%', padding: '10px', border: 'none', height: '110px', marginBottom: '20px' }} {...register("description", { required: true })} placeholder='Description*' />

                <button type='submit' className='contactBtn'>Send message</button>
            </form>
        </main>
    );
};

export default AddReview;