import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import salon from '../../../images/salon.jpg'

const WhyUs = () => {
    return (
        <div style={{width:'100%', background:'rgb(31,34,41)', color:'white'}}>
            <Container>
            <Row>
                <Col sm>
                    <div className='py-5'>
                        <h1>Why us</h1><hr />
                        <h5>EXPLORE COOL MANLY INTERIOR DECORATING INSPIRATION</h5><br />
                        <p>Barbershop offers men the possibility to have an experience that is not just a classic haircut or a shave, but the old school atmosphere that surrounds you when you enter a classical barbershop.</p>
                    </div>
                </Col>
                <Col sm>
                    <img
                        className='d-block w-100'
                        src={salon}
                        alt='Salon'
                    />
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default WhyUs;