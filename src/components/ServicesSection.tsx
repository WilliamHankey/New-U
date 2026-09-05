import React from 'react';
import { useSection } from '../context/SectionContext';
import { useSanity } from '../context/SanityContext';
import SectionTransition from './SectionTransition';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { resolveImageUrl } from '@/lib/sanity';

const ServiceCard = ({ 
  title, 
  description, 
  imageUrl, 
  price, 
  duration, 
  index 
}: { 
  title: string; 
  description: string; 
  imageUrl: string; 
  price: string; 
  duration: string; 
  index: number; 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-52 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div>
            <span className="text-white text-xs font-medium bg-newu-green px-2 py-1 rounded">
              {duration}
            </span>
            <div className="text-white font-medium text-lg mt-1">{price}</div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-newu-green transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link 
          to="/booking" 
          className="flex items-center text-newu-green font-medium text-sm group-hover:underline"
        >
          Book Now <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { currentSection } = useSection();
  const { settings, services } = useSanity();

  const filteredServices = services
    .filter((s) => s.section === currentSection)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const isWellness = currentSection === 'wellness';

  const sectionHeading = {
    eyebrow: isWellness ? 'Our Specialties' : 'Our Programs',
    title: isWellness ? 'Wellness & Beauty Services' : 'Inch by Inch Services',
    description: isWellness
      ? 'Experience our range of therapeutic and beautifying treatments designed to enhance your natural radiance and promote overall wellbeing.'
      : 'Discover our specialized isometric exercise programs designed to transform your body with precision and measurable results.',
    buttonText: isWellness ? 'View All Services' : 'View All Programs',
  };

  const content = (
    <div>
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-newu-green uppercase tracking-wider">{sectionHeading.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{sectionHeading.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {sectionHeading.description}
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredServices.map((service, index) => (
          <ServiceCard 
            key={service._id}
            title={service.title || ''}
            description={service.description || ''}
            imageUrl={resolveImageUrl(service)}
            price={service.price || ''}
            duration={service.duration || ''}
            index={index}
          />
        ))}
        {filteredServices.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-12">
            No services yet. Add services in the Sanity Studio.
          </div>
        )}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link
          to="/services"
          className="inline-flex items-center bg-newu-green hover:bg-newu-green-dark text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
        >
          {sectionHeading.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  );

  return (
    <section id="services" className="section-padding bg-gray-50">
      <SectionTransition
        wellnessContent={content}
        inchContent={content}
      />
    </section>
  );
};

export default ServicesSection;