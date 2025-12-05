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
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <Hero />
            <About />
            <Skills />
            <PortfolioTeaser />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
