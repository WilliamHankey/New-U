import React, { useState, useEffect } from 'react';
import { useSection } from '../context/SectionContext';
import { useSanity } from '../context/SanityContext';
import SectionTransition from './SectionTransition';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { resolveImageUrl } from '@/lib/sanity';

interface Testimonial {
  name: string;
  image: string;
  role: string;
  quote: string;
}

const TestimonialCard = ({ testimonial, isActive }: { testimonial: Testimonial, isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "absolute inset-0 transition-all duration-500 ease-in-out",
        isActive ? "translate-x-0 opacity-100 z-10" : "translate-x-full opacity-0 z-0"
      )}
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 relative h-64 md:h-auto">
          {testimonial.image && (
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-full h-full object-cover" 
            />
          )}
          <div className="absolute inset-0 bg-newu-green/20"></div>
        </div>
        <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
          <Quote className="h-12 w-12 text-newu-green/20 mb-6" />
          <p className="text-lg md:text-xl text-gray-700 italic mb-8">{testimonial.quote}</p>
          <div className="mt-auto">
            <h4 className="text-xl font-bold">{testimonial.name}</h4>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { currentSection } = useSection();
  const { testimonials } = useSanity();

  const sectionTestimonials: Testimonial[] = testimonials
    .filter((t) => t.section === currentSection)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((t) => ({
      name: t.name || '',
      image: resolveImageUrl(t),
      role: t.role || '',
      quote: t.quote || '',
    }));

  const autoRotate = true;
  
  useEffect(() => {
    if (!autoRotate || sectionTestimonials.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sectionTestimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex, currentSection, sectionTestimonials, autoRotate]);

  const isWellness = currentSection === 'wellness';

  const heading = {
    eyebrow: isWellness ? 'Testimonials' : 'Success Stories',
    title: isWellness ? 'What Our Clients Say' : 'Transformation Journeys',
    description: isWellness
      ? 'Discover the experiences of those who have transformed their wellness journey with our beauty and therapeutic services.'
      : 'Real stories from real people who have experienced measurable results with our Inch by Inch program.',
  };

  const nextTestimonial = () => {
    if (sectionTestimonials.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % sectionTestimonials.length);
  };

  const prevTestimonial = () => {
    if (sectionTestimonials.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + sectionTestimonials.length) % sectionTestimonials.length);
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
      
      {sectionTestimonials.length > 0 ? (
        <>
          <div className="relative h-[400px] md:h-[300px] mb-8">
            {sectionTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial} 
                isActive={index === activeIndex} 
              />
            ))}
          </div>
          
          <div className="flex justify-center items-center space-x-2">
            {sectionTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-newu-green w-8" : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white text-newu-gray hover:text-newu-green border border-gray-200 rounded-full p-3 mx-2 transition-all duration-300 hover:shadow"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white text-newu-gray hover:text-newu-green border border-gray-200 rounded-full p-3 mx-2 transition-all duration-300 hover:shadow"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500 py-12">
          No testimonials yet. Add testimonials in the Sanity Studio.
        </div>
      )}
    </div>
  );

  return (
    <section id="testimonials" className="section-padding">
      <SectionTransition
        wellnessContent={content}
        inchContent={content}
      />
    </section>
  );
};

export default Testimonials;