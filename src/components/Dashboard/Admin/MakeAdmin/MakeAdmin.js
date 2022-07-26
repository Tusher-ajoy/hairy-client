import React, { useContext, useRef } from 'react';
import { userContext } from '../../../../App';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const from = useRef(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch('https://frozen-headland-45377.herokuapp.com/addAdmin',{
            method:'POST',
            headers:{ 'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert("Admin added successfully");
                from.current.reset();
            }
            else{
                alert("ERROR!! Admin can't add right now")
            }
        })
    }
    return (
        <main>
            <div className='d-flex justify-content-between py-3' style={{ background: 'white', padding: '0px 30px' }}>
                <h4 className='bookHeader'>Make Admin</h4>
                <h4>{loggedInUser.name ? loggedInUser.name : sessionStorage.getItem('userName')}</h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} ref={from} className='userForm'>
                <label htmlFor="title" style={{ fontWeight: 'bold' }}>Email:</label><br />
                {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                <input className='contactInput' type='text' {...register("email", { required: true })} placeholder="Enter email*" style={{borderRadius:'5px'}} />

                <button type='submit' className='contactBtn'>Submit</button>
            </form>
        </main>
    );
};

export default MakeAdmin;