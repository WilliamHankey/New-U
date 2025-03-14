
import React from 'react';
import { SectionProvider } from '../context/SectionContext';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const GalleryPage = () => {
  return (
    <SectionProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <Gallery />
        </main>
        <Footer />
      </div>
    </SectionProvider>
  );
};

export default GalleryPage;
