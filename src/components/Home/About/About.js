import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-elastic-carousel'
import aboutImg1 from '../../../images/aboutImg1.jpg';
import aboutImg2 from '../../../images/aboutImg2.jpg';
import aboutImg3 from '../../../images/aboutImg3.jpg';
import './About.css'

const About = () => {
    return (
        <div id='about' className='py-5' style={{ background: 'rgb(31,34,41)', color: 'white' }}>
            <Container>
                <h1 style={{ textAlign: 'center' }}>About Us</h1><hr />
                <h2>Who we are?</h2><br />
                <p>Experts in men's hair, skin care, manicure & massage <br /><br /> We are a combination of having highly skilled, knowledgable t tempor, dolor mi laoreet ligula, id sodales arcu est non risus. Nulla facilisi. Aenean lobortis justo tincidunt elit mollis vel auctor sapien auctor. Proin scelerisque, ipsum quis rhoncus ultricies, orci tortor dignissim leo, nec facilisis dolor felis ac erat.</p>
                <Row>
                    <Col xs={12} md={6}>
                        <h5>Our Features Services</h5>
                        <Row>
                            <Col xs={6}>
                                <ul>
                                    <li> Male Grooming Packages</li>
                                    <li> Brazilian straightening</li>
                                    <li> Hair repairv</li>
                                    <li> Hair extensions</li>
                                    <li> Male Bronzing</li>
                                    <li> Mens Eyebrow Re-shape</li>
                                </ul>
                            </Col>
                            <Col xs={6}>
                                <ul>
                                    <li> Male Grooming Packages</li>
                                    <li> Brazilian straightening</li>
                                    <li> Hair repairv</li>
                                    <li> Hair extensions</li>
                                    <li> Male Bronzing</li>
                                    <li> Mens Eyebrow Re-shape</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Carousel itemsToShow={1} enableAutoPlay={true}>
                            <img
                                className="d-block w-100"
                                style={{ borderRadius: '50%', height: '25rem', border: '5px solid rgb(19,21,25)' }}
                                src={aboutImg1}
                                alt="about images"
                            />
                            <img
                                className="d-block w-100"
                                style={{ borderRadius: '50%', height: '25rem', border: '5px solid rgb(19,21,25)' }}
                                src={aboutImg2}
                                alt="about images"
                            />
                            <img
                                className="d-block w-100"
                                style={{ borderRadius: '50%', height: '25rem', border: '5px solid rgb(19,21,25)' }}
                                src={aboutImg3}
                                alt="about images"
                            />
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;