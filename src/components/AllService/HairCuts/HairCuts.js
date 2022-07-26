import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import ServiceContainer from '../ServiceContainer/ServiceContainer';

const HairCuts = () => {
    const [hairCuts, setHairCuts] = useState([]);
    useEffect(()=>{
        fetch('https://frozen-headland-45377.herokuapp.com/findService',{
            method:'POST',
            headers:{ 'Content-Type':'application/json'},
            body:JSON.stringify({service:'Haircut Styles'})
        })
        .then(res => res.json())
        .then(data => setHairCuts(data))
    },[])
    return (
        <section>
            <Navigationbar />
            <ServiceContainer services={hairCuts} />
            <Footer />
        </section>
    );
};

export default HairCuts;