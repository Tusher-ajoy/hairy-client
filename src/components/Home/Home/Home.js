import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Team from '../Team/Team';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <WhyUs />
            <Team />
            <Review />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;