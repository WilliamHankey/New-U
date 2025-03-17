
import React from 'react';
import Navbar from '../components/Navbar';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
