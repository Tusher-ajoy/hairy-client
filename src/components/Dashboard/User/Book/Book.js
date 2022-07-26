import React, { useContext } from 'react';
import { userContext } from '../../../../App';
import './Book.css'
import CheckoutForm from './CheckoutForm';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const handleOrder = (paymentId, orderData) =>{
        // console.log(orderId, orderData);
        const orderDetails = {...orderData, paymentId, status:'pending'}
        // console.log(orderDetails)

        fetch('https://frozen-headland-45377.herokuapp.com/addOrder',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(orderDetails)
        })
        .then(response => response.json())
        .then(data => {
            if(data){console.log(data)}
        })
    }
    return (
        <main>
            <div className='d-flex justify-content-between py-3' style={{ background: 'white', padding: '0px 30px' }}>
                <h4 className='bookHeader'>Book</h4>
                <h4>{loggedInUser.name ? loggedInUser.name : sessionStorage.getItem('userName')}</h4>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm handleOrder={handleOrder} />
            </Elements>
        </main>
    );
};

export default Book;