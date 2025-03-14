
import React, { useState, useEffect } from 'react';
import { useSection } from '../context/SectionContext';
import SectionTransition from './SectionTransition';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

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
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover" 
          />
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
  
  const wellnessTestimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=2089",
      role: "Regular Client",
      quote: "The massages at New-U completely transformed my experience with chronic back pain. Their therapists are skilled and attentive, and I've seen remarkable improvement after just a few sessions. The atmosphere is so calming that I look forward to every appointment."
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
      role: "Monthly Member",
      quote: "I've tried many spas in the area, but the facial treatments at New-U are truly exceptional. My skin has never looked better, and the staff takes the time to understand my specific concerns. The personalized approach makes all the difference."
    },
    {
      name: "Alicia Rodriguez",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976",
      role: "Beauty Package Client",
      quote: "The waxing services at New-U are the best I've experienced—nearly painless and with fantastic results. The beauticians are professional, the space is immaculate, and I always leave feeling confident and well-cared for."
    }
  ];

  const inchTestimonials: Testimonial[] = [
    {
      name: "Jennifer Lewis",
      image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076",
      role: "Post-Pregnancy Client",
      quote: "After having my second child, I struggled to get back in shape. The Inch by Inch program helped me target specific areas and regain my confidence. I've lost 4 inches around my waist in just two months, and the exercises are gentle enough for my postpartum body."
    },
    {
      name: "David Thompson",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
      role: "Fitness Enthusiast",
      quote: "I was skeptical about isometric exercises at first, but the results speak for themselves. I've been able to tone areas that weren't responding to my regular gym workouts. The trainers are knowledgeable and keep the sessions challenging yet achievable."
    },
    {
      name: "Maya Patel",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=2070",
      role: "Transformation Program Client",
      quote: "The Inch by Inch program has been life-changing for me. I've struggled with my body image for years, and this approach has helped me reshape areas I thought would never change. The supportive environment and measured progress keep me motivated week after week."
    }
  ];

  const autoRotate = true;
  
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      const testimonials = currentSection === 'wellness' ? wellnessTestimonials : inchTestimonials;
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex, currentSection, wellnessTestimonials, inchTestimonials, autoRotate]);

  const testimonials = currentSection === 'wellness' ? wellnessTestimonials : inchTestimonials;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
          <span className="text-sm font-semibold text-newu-green uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the experiences of those who have transformed their wellness journey with our beauty and therapeutic services.
          </p>
        </motion.div>
      </div>
      
      <div className="relative h-[400px] md:h-[300px] mb-8">
        {wellnessTestimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index} 
            testimonial={testimonial} 
            isActive={index === activeIndex} 
          />
        ))}
      </div>
      
      <div className="flex justify-center items-center space-x-2">
        {wellnessTestimonials.map((_, index) => (
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
          <span className="text-sm font-semibold text-newu-green uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Transformation Journeys</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who have experienced measurable results with our Inch by Inch program.
          </p>
        </motion.div>
      </div>
      
      <div className="relative h-[400px] md:h-[300px] mb-8">
        {inchTestimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index} 
            testimonial={testimonial} 
            isActive={index === activeIndex} 
          />
        ))}
      </div>
      
      <div className="flex justify-center items-center space-x-2">
        {inchTestimonials.map((_, index) => (
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
    </div>
  );

  return (
    <section id="testimonials" className="section-padding">
      <SectionTransition
        wellnessContent={wellnessContent}
        inchContent={inchContent}
      />
    </section>
  );
};

export default Testimonials;
