import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import scissors from '../../../images/scissors.png';
import razor from '../../../images/razor.png';
import shavingBrush from '../../../images/shaving-brush.png';
import faceMask from '../../../images/face-mask.png';
import './Service.css'

const Services = () => {
    const navigate = useNavigate();
    return (
        <div id='services' style={{ backgroundColor: 'rgb(252,249,245)' }} className='py-5'>
            <Container>
                <h1 style={{ textAlign: 'center' }}>Our Services</h1><hr />

                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <Card style={{textAlign:'center', border:'none', cursor:'pointer'}} onClick={()=>navigate('/allServices/haircuts')}>
                            <Card.Img style={{width:'40%', margin:'0 auto'}} variant="top" src={scissors} />
                            <Card.Body>
                                <Card.Title>Haircut Styles</Card.Title>
                                <Card.Text>
                                    Barber is a person whose occupation is mainly to cut dress style.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{textAlign:'center', border:'none', cursor:'pointer'}} onClick={()=>navigate('/allServices/beard-triming')}>
                            <Card.Img style={{width:'40%', margin:'0 auto'}} variant="top" src={razor} />
                            <Card.Body>
                                <Card.Title>Beard Triming</Card.Title>
                                <Card.Text>
                                    Barber is a person whose occupation is mainly to cut dress style.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{textAlign:'center', border:'none', cursor:'pointer'}} onClick={()=>navigate('/allServices/shaves')}>
                            <Card.Img style={{width:'40%', margin:'0 auto'}} variant="top" src={shavingBrush} />
                            <Card.Body>
                                <Card.Title>Smooth Shave</Card.Title>
                                <Card.Text>
                                    Barber is a person whose occupation is mainly to cut dress style.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{textAlign:'center', border:'none', cursor:'pointer'}} onClick={()=>navigate('/allServices/face-masking')}>
                            <Card.Img style={{width:'40%', margin:'0 auto'}} variant="top" src={faceMask} />
                            <Card.Body>
                                <Card.Title>Face Masking</Card.Title>
                                <Card.Text>
                                    Barber is a person whose occupation is mainly to cut dress style.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;