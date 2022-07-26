
import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import barber1 from '../../../images/barber1.jpg'
import barber2 from '../../../images/barber2.jpg'
import barber3 from '../../../images/barber3.jpg'
import barber4 from '../../../images/barber4.jpg'
import facebook from '../../../images/facebook.png'
import twiter from '../../../images/twitter.png'
import googlePlus from '../../../images/google-plus.png'
import './Team.css'
const Team = () => {
    return (
        <div id='team' style={{ backgroundColor: 'rgb(252,249,245)' }} className='py-5'>
            <Container>
                <h1 style={{textAlign:'center'}}>OUR TEAM</h1><hr />
                <h5 style={{textAlign:'center'}}>MEET THE ARTISTS</h5>
                <Row xs={1} md={4} className="g-4">
                    <Col className='mt-5'>
                        <Card className='box'>
                            <Card.Img variant="top" className='d-block w-100' src={barber1} />
                            <div className='box-content'>
                                <div className='content'>
                                    <div className='social'>
                                        <a href='/' className='column'><img src={facebook} alt="" style={{width:'50%'}} /></a>
                                        <a href='/' className='column'><img src={googlePlus} alt="" style={{width:'50%'}} /></a>
                                        <a href='/' className='column'><img src={twiter} alt="" style={{width:'50%'}} /></a>
                                    </div>
                                    <h6 className='title'>ORLANDO EVANS</h6>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='box'>
                            <Card.Img variant="top" className='d-block w-100' src={barber2} />
                            <div className='box-content'>
                                <div className='content'>
                                    <div className='social'>
                                        <a href='/' className='column'><img src={facebook} alt="" style={{width:'50%'}} /></a>
                                        <a href='/' className='column'><img src={googlePlus} alt="" style={{width:'50%'}} /></a>
                                        <a href='/' className='column'><img src={twiter} alt="" style={{width:'50%'}} /></a>
                                    </div>
                                    <h6 className='title'>LEE CORTEZ</h6>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col className='mt-5'>
                        <Card className='box'>
                            <Card.Img variant="top" className='d-block w-100' src={barber3} />
                            <div className='box-content'>
                                <div className='content'>
                                    <div className='social'>
                                        <a href='/' className='column'><img src={facebook} alt="" style={{width:'50%'}} /></a>
                                        <a href='/' className='column'><img src={googlePlus} alt="" style={{width:'50%'}} /></a>
                                        <a href='/' className='column'><img src={twiter} alt="" style={{width:'50%'}} /></a>
                                    </div>
                                    <h6 className='title'>ALONZO WRIGHT</h6>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col >
                        <Card className='box'>
                            <Card.Img variant="top" className='d-block w-100' src={barber4} />
                            <div className='box-content'>
                                <div className='content'>
                                    <div className='social'>
                                        <a href='/' className='column'><img src={facebook} alt="" style={{width:'50%'}} /></a>
                                        <a href='/' className='column'><img src={googlePlus} alt="" style={{width:'50%'}} /></a>
                                        <a href='/' className='column'><img src={twiter} alt="" style={{width:'50%'}} /></a>
                                    </div>
                                    <h6 className='title'>HARVTEY JONES</h6>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Team;