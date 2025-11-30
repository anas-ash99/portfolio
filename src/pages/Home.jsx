import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import PortfolioTeaser from '../components/PortfolioTeaser';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <PortfolioTeaser />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
