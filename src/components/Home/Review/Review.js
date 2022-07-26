import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import reviewPic from '../../../images/review1.png'
import Carousel from 'react-elastic-carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://frozen-headland-45377.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div style={{ background: 'linear-gradient(to left, #d6a354 50%, rgb(31,34,41) 50%)', color: 'white' }}>
            <Container>
                <Row xs={1} md={2}>
                    <Col className='py-5'>
                        <h1>What People Says</h1>
                        <p className='pb-5'>Deleniti dicta aspernatur expedita. Hic, harum. Repellat at, excepturi placeat atque hic, beatae alias saepe recusandae numquam totam laborum.</p>
                        <Carousel itemsToShow={1} enableAutoPlay={true}>
                            {
                                reviews.map(review => (
                                    <div style={{ background: 'white', color: 'black', padding: '20px', borderRadius: '2%', width:'100%' }}>
                                        <p>{review.description}</p>
                                        <h5>--- {review.name}</h5>
                                        <p>{review.designation}</p>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </Col>
                    <Col>
                        <img style={{ width: '100%', height: '100%' }} src={reviewPic} alt='' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;