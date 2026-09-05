import React, { useState } from 'react';
import { useSection } from '../context/SectionContext';
import { useSanity } from '../context/SanityContext';
import SectionTransition from './SectionTransition';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { resolveImageUrl } from '@/lib/sanity';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const { currentSection } = useSection();
  const { galleryImages } = useSanity();

  const imagesForSection = galleryImages
    .filter((img) => img.section === currentSection)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((img) => ({
      src: resolveImageUrl(img),
      alt: img.title || img.category || 'Gallery image',
      category: img.category || '',
    }));

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const isWellness = currentSection === 'wellness';

  const heading = {
    eyebrow: isWellness ? 'Our Gallery' : 'Transformations',
    title: isWellness ? 'Wellness & Beauty Experience' : 'Inch by Inch Results',
    description: isWellness
      ? 'Explore our tranquil spaces and professional beauty services through our curated gallery of images.'
      : 'See the powerful results and experiences of our specialized isometric exercise programs.',
  };

  const content = (
    <div>
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-newu-green uppercase tracking-wider">{heading.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{heading.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {heading.description}
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {imagesForSection.map((image, index) => (
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
        {imagesForSection.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-12">
            No images yet. Add gallery images in the Sanity Studio.
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <SectionTransition
        wellnessContent={content}
        inchContent={content}
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