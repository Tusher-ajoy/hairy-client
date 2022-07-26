import React, { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import ServiceContainer from '../ServiceContainer/ServiceContainer';

const BeardTriming = () => {
    const [beardTriming, setBeardTriming] = useState([]);
    useEffect(()=>{
        fetch('https://frozen-headland-45377.herokuapp.com/findService',{
            method:'POST',
            headers:{ 'Content-Type':'application/json'},
            body:JSON.stringify({service:'Beard Triming'})
        })
        .then(res => res.json())
        .then(data => setBeardTriming(data))
    },[])
    return (
        <section>
            <Navigationbar />
            <ServiceContainer services={beardTriming} />
            <Footer />
        </section>
    );
};

export default BeardTriming;