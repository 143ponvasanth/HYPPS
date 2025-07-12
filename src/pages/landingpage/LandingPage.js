import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import WhyChooseUs from './WhyUs';
import Categories from './Categories';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import CTABanner from './CTABanner';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <WhyChooseUs />
            <Categories />
            <HowItWorks />
            <Testimonials />
            <FAQ />
            <CTABanner />
            <Footer />
        </>
    );
};

export default LandingPage;
