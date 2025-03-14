
import React from 'react';
import { SectionProvider } from '../context/SectionContext';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <SectionProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <ContactSection />
        </main>
        <Footer />
      </div>
    </SectionProvider>
  );
};

export default Contact;
