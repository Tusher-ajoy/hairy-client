import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import { useForm } from "react-hook-form";


const Contact = () => {
    const form = useRef(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch('https://frozen-headland-45377.herokuapp.com/send',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
        })
        .then(res => res.json())
        .then(response => {
            if(response.status === 'Success'){
                alert('Message sent');
                form.current.reset();
            }
            else{
                alert('Message failed to send')
            }
        })
    }

    // console.log(watch("email"));
    return (
        <div id='contact' style={{ background: 'rgb(248,248,248)' }} className='py-5'>
            <Container>
                <Row>
                    <Col sm>
                        <Row>
                            <Col style={{ textAlign: 'center' }}>
                                <FontAwesomeIcon className='contactIcon' icon={faPhone} />
                                <p>+012 123 456 789</p>
                            </Col>
                            <Col style={{ textAlign: 'center', borderLeft: '1px dashed #d6a354', borderRight: '1px dashed #d6a354' }}>
                                <FontAwesomeIcon className='contactIcon' icon={faEnvelope} />
                                <p>hairy@mail.com</p>
                            </Col>
                            <Col style={{ textAlign: 'center' }}>
                                <FontAwesomeIcon className='contactIcon' icon={faLocationDot} />
                                <p>30/20 Green valley road, hemlock valley, Canada</p>
                            </Col>
                        </Row>
                        <div style={{ padding: '20px', margin: '20px 0', border: '1px dashed #d6a354' }}>
                            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                {errors.name && <span style={{ color: 'red' }}>Name is required</span>}
                                <input className='contactInput' {...register("name", { required: true })} placeholder="Name*" />
                                {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                                <input className='contactInput' type='email' {...register("email", { required: true })} placeholder="Email*" />
                                {errors.subject && <span style={{ color: 'red' }}>Subject is required</span>}
                                <input className='contactInput' {...register("subject", { required: true })} placeholder="Subject*" />
                                <input className='contactInput' type='number' {...register("phone")} placeholder="Phone number" />
                                <textarea style={{ width: '100%', padding: '10px', border: 'none', height: '110px', marginBottom: '20px' }} {...register("message")} placeholder='Message' />

                                <button type='submit' className='contactBtn'>Send message</button>
                            </form>
                        </div>
                    </Col>
                    <Col sm>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.0511628650486!2d90.41021945872193!3d23.743730199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b88a3e17597f%3A0x28369e4e91500e8d!2z4Ka44Ka_4Kac4Ka-4Kaw4Ka4IOCmj-CmqOCnjeCmoSDgprDgp4fgppzgpr7gprDgprg!5e0!3m2!1sbn!2sbd!4v1656541136864!5m2!1sbn!2sbd" width="100%" height="100%" style={{border:'0'}} title="Direction map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;