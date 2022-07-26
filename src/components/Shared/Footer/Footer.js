import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/barbershop.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='pt-5 pb-1' style={{background:'rgb(31,34,41)', color:'white'}}>
            <Container>
                <Row className='mb-5'>
                    <Col style={{marginTop:'100px'}}>
                        <h5 className='my-3'>CUSTOMER SERVICES</h5>
                        <a href='/allServices/haircuts' >Haircuts</a><br />
                        <a href='/allServices/beard-triming' >Moustache And Beard</a><br />
                        <a href='/allServices/shaves' >Straight Razor Shaving</a><br />
                        <a href='/allServices/shaves' >Royal Shave</a><br />
                        <a href='/allServices/face-masking' >Face Masking</a><br />
                    </Col>
                    <Col style={{textAlign:'center'}}>
                        <img style={{width:'100px'}} src={logo} alt='' />
                        <h5 style={{color:'rgb(220,164,78)'}} className='my-3'>THE BARBERSHOP NETWORK</h5>
                        <p>Babero is a lot more than just a man’s hairdress-er, it is even far more than a social club for men, it is exactly the place where you will find yourself and your identity.</p>
                    </Col>
                    <Col style={{textAlign:'right', marginTop:'100px'}}>
                        <h5 className='my-3'>VISIT US</h5>
                        <p>7265 Queen Lane <br />Wethersfield, CT 06109 <br /><br />Mon – sat : 7:00am – 8:00pm<br />Sunday : Closed</p>
                    </Col>
                </Row>
                <p style={{textAlign:'center'}}>Copyright © {new Date().getFullYear()} by Hairy</p>
            </Container>
        </footer>
    );
};

export default Footer;