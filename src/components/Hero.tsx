
import React, { useEffect, useRef } from 'react';
import { useSection } from '../context/SectionContext';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { currentSection, switchSection } = useSection();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroElement = heroRef.current;
      if (heroElement) {
        heroElement.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroData = {
    wellness: {
      title: "Revitalize Your Beauty & Wellness Journey",
      subtitle: "Expert treatments tailored to enhance your natural radiance",
      description: "Experience transformative beauty services and therapeutic wellness treatments designed to rejuvenate both body and mind.",
      backgroundClass: "bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070')] bg-cover bg-center",
      buttonText: "Explore Our Treatments"
    },
    inch: {
      title: "Transform Your Body Inch by Inch",
      subtitle: "Specialized isometric bed exercises for targeted results",
      description: "Our revolutionary approach helps you reshape your body with precision through effective, low-impact isometric exercises.",
      backgroundClass: "bg-[url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070')] bg-cover bg-center",
      buttonText: "More"
    }
  };

  const content = currentSection === 'wellness' ? heroData.wellness : heroData.inch;

  return (
    <div
      ref={heroRef}
      className={cn(
        "relative min-h-screen flex items-center justify-center",
        content.backgroundClass
      )}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Floating Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="bg-newu-green px-4 py-1 rounded-full text-xs uppercase tracking-wider font-bold inline-block">
            {currentSection === 'wellness' ? 'Wellness & Beauty' : 'Inch by Inch'}
          </span>
        </motion.div>
        
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
        >
          {content.title}
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl font-light mb-6"
        >
          {content.subtitle}
        </motion.p>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-200"
        >
          {content.description}
        </motion.p>
        
        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/booking"
            className="bg-newu-green hover:bg-newu-green-dark text-white px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-base w-full sm:w-auto"
          >
            Book Appointment
          </Link>
          <Link
            to="/services"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white border border-white border-opacity-40 px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-base w-full sm:w-auto"
          >
            {content.buttonText}
          </Link>
        </motion.div>
        
        {/* Section Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <div className="inline-flex bg-black bg-opacity-30 backdrop-blur-sm rounded-full p-1">
            <button
              onClick={() => switchSection('wellness')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                currentSection === 'wellness'
                  ? "bg-newu-green text-white"
                  : "text-white hover:bg-white hover:bg-opacity-10"
              )}
            >
              Wellness & Beauty
            </button>
            <button
              onClick={() => switchSection('inch')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                currentSection === 'inch'
                  ? "bg-newu-green text-white"
                  : "text-white hover:bg-white hover:bg-opacity-10"
              )}
            >
              Inch by Inch
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
