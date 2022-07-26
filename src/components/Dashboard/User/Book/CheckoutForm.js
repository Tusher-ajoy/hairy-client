import React, { useMemo, useState } from 'react';
import { useForm } from "react-hook-form";
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: '18px',
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    },
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const CheckoutForm = ({handleOrder}) => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const location = useLocation();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else if (paymentMethod) {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handleOrder(paymentMethod.id,data)
        }
        // console.log("[PaymentMethod]", payload);
    };
    return (
        <>
           {paymentError && <Alert key='danger' variant='danger'>
                !!ERROR : {paymentError}
            </Alert>}
           {paymentSuccess && <Alert key='success' variant='success'>
                Your payment was successful!!
            </Alert>}
            <form onSubmit={handleSubmit(onSubmit)} className='userForm'>
                {/* {errors.name && <span style={{ color: 'red' }}>Name is required</span>} */}
                <input className='contactInput' {...register("name", { required: true })} value={sessionStorage.getItem('userName')} />
                {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                <input className='contactInput' type='email' {...register("email", { required: true })} value={sessionStorage.getItem('userEmail')} />
                {errors.title && <span style={{ color: 'red' }}>title is required</span>}
                <input className='contactInput' {...register("title", { required: true })} placeholder="Title*" value={location.state?.title || location.state?.bookingProduct?.title} />

                <p>Pay with Card</p>

                <label style={{ width: '100%', background: 'white', padding: '15px' }}>
                    <CardNumberElement options={options} />
                </label><br /><br />
                <label style={{ width: '48%', background: 'white', padding: '15px' }}>
                    <CardExpiryElement
                        options={options}

                    />
                </label>
                <label style={{ width: '47%', background: 'white', marginLeft: '20px', padding: '15px' }}>
                    <CardCvcElement
                        options={options}

                    />
                </label><br /><br />
                <p style={{ display: 'inline-block' }}>Your service charged will be <strong>{`$${location.state?.price || location.state?.bookingProduct?.price}`}</strong></p>
                <button style={{ float: 'right', border: 'none', background: 'rgb(220,164,78)', color: 'white', padding: '10px 50px', borderRadius: '5px' }} type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </>
    );
};

export default CheckoutForm;