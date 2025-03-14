
import React from 'react';
import { useSection } from '../context/SectionContext';
import SectionTransition from './SectionTransition';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
  const beautyServices = [
    {
      title: "Relaxation Massage",
      description: "A gentle, flowing massage designed to promote relaxation and reduce stress.",
      imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070",
      price: "From $85",
      duration: "60 min"
    },
    {
      title: "Deep Tissue Massage",
      description: "Targeted pressure to release chronic muscle tension and alleviate pain.",
      imageUrl: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974",
      price: "From $95",
      duration: "60 min"
    },
    {
      title: "Facial Treatment",
      description: "Customized facial to cleanse, exfoliate, and nourish your skin.",
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1770",
      price: "From $75",
      duration: "45 min"
    },
    {
      title: "Full Body Waxing",
      description: "Smooth, hair-free skin with our gentle waxing techniques.",
      imageUrl: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070",
      price: "From $120",
      duration: "90 min"
    }
  ];

  const inchServices = [
    {
      title: "Targeted Toning Session",
      description: "Isometric exercises focused on specific body areas for precise toning.",
      imageUrl: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2074",
      price: "From $70",
      duration: "45 min"
    },
    {
      title: "Full Body Remodeling",
      description: "Comprehensive approach to reshape and tone your entire body.",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070",
      price: "From $110",
      duration: "75 min"
    },
    {
      title: "Post-Pregnancy Restoration",
      description: "Gentle exercises designed specifically for post-natal recovery.",
      imageUrl: "https://images.unsplash.com/photo-1490718720478-364a07a997cd?q=80&w=1974",
      price: "From $90",
      duration: "60 min"
    },
    {
      title: "Maintenance Program",
      description: "Regular sessions to maintain your results and continue progress.",
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070",
      price: "From $65",
      duration: "45 min"
    }
  ];

  const wellnessContent = (
    <div>
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-newu-green uppercase tracking-wider">Our Specialties</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Wellness & Beauty Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our range of therapeutic and beautifying treatments designed to enhance your natural radiance and promote overall wellbeing.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {beautyServices.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            price={service.price}
            duration={service.duration}
            index={index}
          />
        ))}
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
          View All Services <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  );

  const inchContent = (
    <div>
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-newu-green uppercase tracking-wider">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Inch by Inch Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our specialized isometric exercise programs designed to transform your body with precision and measurable results.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {inchServices.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            price={service.price}
            duration={service.duration}
            index={index}
          />
        ))}
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
          View All Programs <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  );

  return (
    <section id="services" className="section-padding bg-gray-50">
      <SectionTransition
        wellnessContent={wellnessContent}
        inchContent={inchContent}
      />
    </section>
  );
};

export default ServicesSection;
