import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import ServiceContainer from '../ServiceContainer/ServiceContainer';

const FaceMasking = () => {
    const [faceMasking, setFaceMasking] = useState([]);
    useEffect(()=>{
        fetch('https://frozen-headland-45377.herokuapp.com/findService',{
            method:'POST',
            headers:{ 'Content-Type':'application/json'},
            body:JSON.stringify({service:'Face Masking'})
        })
        .then(res => res.json())
        .then(data => setFaceMasking(data))
    },[])
    return (
        <section>
            <Navigationbar />
            <ServiceContainer services={faceMasking} />
            <Footer />
        </section>
    );
};

export default FaceMasking;