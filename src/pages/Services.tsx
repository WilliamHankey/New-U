
import React from 'react';
import { SectionProvider } from '../context/SectionContext';
import Navbar from '../components/Navbar';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <SectionProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </SectionProvider>
  );
};

export default Services;
