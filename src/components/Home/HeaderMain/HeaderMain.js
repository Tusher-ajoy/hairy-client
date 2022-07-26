import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import caro1 from '../../../images/caro1.jpg';
import caro2 from '../../../images/caro2.jpg';
import caro3 from '../../../images/caro3.jpg';
import Button from 'react-bootstrap/Button';
import './HeaderMain.css';
import { useNavigate } from 'react-router-dom';

const HeaderMain = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: '600px', filter: 'blur(1px)' }}
                        src={caro1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ top: '30%' }}>
                        <h1 className='headerMainHeading'>Looking for a Haircut?</h1>
                        <p>This is the place where we help you to find your own unique identity.</p>
                        <Button varient='outline' className='buttonStyle' onClick={()=>navigate(`allServices`)}>book an appointment</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: '600px', filter: 'blur(2px)' }}
                        src={caro2}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{ top: '30%' }}>
                        <h1 className='headerMainHeading'>We will make you stylish</h1>
                        <p>This is the place where we help you to find your own unique identity.</p>
                        <Button varient='outline' className='buttonStyle' onClick={()=>navigate(`allServices`)}>book an appointment</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: '600px', filter: 'blur(2px)' }}
                        src={caro3}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ top: '30%' }}>
                        <h1 className='headerMainHeading'>All you need to be a man</h1>
                        <p>This is the place where we help you to find your own unique identity.</p>
                        <Button varient='outline' className='buttonStyle' onClick={()=>navigate(`allServices`)}>book an appointment</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HeaderMain;