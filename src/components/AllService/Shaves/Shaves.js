import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import ServiceContainer from '../ServiceContainer/ServiceContainer';

const Shaves = () => {
    const [shaves, setShaves] = useState([]);
    useEffect(()=>{
        fetch('https://frozen-headland-45377.herokuapp.com/findService',{
            method:'POST',
            headers:{ 'Content-Type':'application/json'},
            body:JSON.stringify({service:'Smooth Shave'})
        })
        .then(res => res.json())
        .then(data => setShaves(data))
    },[])
    return (
        <section>
            <Navigationbar />
            <ServiceContainer services={shaves} />
            <Footer />
        </section>
    );
};

export default Shaves;