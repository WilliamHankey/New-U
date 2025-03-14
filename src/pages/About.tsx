
import React from 'react';
import { SectionProvider } from '../context/SectionContext';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const About = () => {
  return (
    <SectionProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <AboutUs />
        </main>
        <Footer />
      </div>
    </SectionProvider>
  );
};

export default About;
