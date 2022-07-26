import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const ServiceContainer = ({ services }) => {
    const navigate = useNavigate();
    return (
        <div style={{ background: 'rgb(220,164,78)', paddingTop: '95px', paddingBottom: '50px' }}>
            <Container>
                <h1 style={{ textAlign: 'center' }}>Our Services</h1><hr />

                <Row xs={1} md={3} className="g-4">
                    {
                        services.map((service) => (
                            <Col>
                                <Card style={{ textAlign: 'center', border: 'none' }}>
                                    <Card.Img style={{ width:'100%', height:'300px' }} variant="top" src={`data:image/png;base64,${service.image.img}`} />
                                    <Card.Body>
                                        <Card.Title>{service.title}</Card.Title>
                                        <Card.Title style={{ color: 'rgb(220,164,78)' }}>${service.price}</Card.Title>
                                        <Button variant="primary" onClick={()=>navigate('/dashboard/book',{state:{title:service.title, price:service.price}})}>Book</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ServiceContainer;