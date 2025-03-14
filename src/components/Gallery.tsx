
import React, { useState } from 'react';
import { useSection } from '../context/SectionContext';
import SectionTransition from './SectionTransition';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const { currentSection } = useSection();
  
  const wellnessImages: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974",
      alt: "Massage therapy session",
      category: "Massage"
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1770",
      alt: "Facial treatment",
      category: "Facial"
    },
    {
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070",
      alt: "Hot stone massage",
      category: "Massage"
    },
    {
      src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070",
      alt: "Aromatherapy session",
      category: "Wellness"
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070",
      alt: "Spa environment",
      category: "Wellness"
    },
    {
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070",
      alt: "Waxing preparation",
      category: "Beauty"
    }
  ];

  const inchImages: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070",
      alt: "Isometric exercise",
      category: "Exercise"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070",
      alt: "Body transformation",
      category: "Results"
    },
    {
      src: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070",
      alt: "Stretching exercise",
      category: "Exercise"
    },
    {
      src: "https://images.unsplash.com/photo-1490718720478-364a07a997cd?q=80&w=1974",
      alt: "Post-pregnancy fitness",
      category: "Specialized"
    },
    {
      src: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=2072",
      alt: "Measuring progress",
      category: "Results"
    },
    {
      src: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1925",
      alt: "Fitness tracking",
      category: "Progress"
    }
  ];

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const wellnessContent = (
    <div>
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-newu-green uppercase tracking-wider">Our Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Wellness & Beauty Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our tranquil spaces and professional beauty services through our curated gallery of images.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wellnessImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => openLightbox(image)}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer group relative hover-lift"
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-white bg-opacity-80 backdrop-blur-sm text-newu-gray text-xs px-3 py-1 rounded-full">
                {image.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const inchContent = (
    <div>
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-newu-green uppercase tracking-wider">Transformations</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Inch by Inch Results</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the powerful results and experiences of our specialized isometric exercise programs.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {inchImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => openLightbox(image)}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer group relative hover-lift"
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-white bg-opacity-80 backdrop-blur-sm text-newu-gray text-xs px-3 py-1 rounded-full">
                {image.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <SectionTransition
        wellnessContent={wellnessContent}
        inchContent={inchContent}
      />
      
      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full"
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-newu-green transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg" 
            />
            <div className="mt-4 text-white">
              <p className="text-lg font-medium">{selectedImage.alt}</p>
              <p className="text-sm text-gray-300">{selectedImage.category}</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
