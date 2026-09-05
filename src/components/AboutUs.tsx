import React from 'react';
import { useSection } from '../context/SectionContext';
import { useSanity } from '../context/SanityContext';
import SectionTransition from './SectionTransition';
import { motion } from 'framer-motion';
import { Leaf, Heart, Award, Users } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  leaf: <Leaf className="h-6 w-6 text-newu-green" />,
  heart: <Heart className="h-6 w-6 text-newu-green" />,
  award: <Award className="h-6 w-6 text-newu-green" />,
  users: <Users className="h-6 w-6 text-newu-green" />,
};

const AboutUs = () => {
  const { currentSection } = useSection();
  const { settings } = useSanity();

  const features = settings?.features?.map((feature) => ({
    icon: iconMap[feature.icon] || <Heart className="h-6 w-6 text-newu-green" />,
    title: feature.title,
    description: feature.description,
  })) || [];

  const defaultFeatures = [
    {
      icon: <Leaf className="h-6 w-6 text-newu-green" />,
      title: "Holistic Approach",
      description: "We combine traditional techniques with modern innovation for comprehensive wellness."
    },
    {
      icon: <Heart className="h-6 w-6 text-newu-green" />,
      title: "Personalized Care",
      description: "Every treatment is tailored to your unique needs and wellness goals."
    },
    {
      icon: <Award className="h-6 w-6 text-newu-green" />,
      title: "Expert Therapists",
      description: "Our certified professionals bring years of experience to each session."
    },
    {
      icon: <Users className="h-6 w-6 text-newu-green" />,
      title: "Community Focus",
      description: "We believe in building relationships and supporting your long-term wellness journey."
    }
  ];

  const displayedFeatures = features.length > 0 ? features : defaultFeatures;

  const wellnessContent = (
    <div className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-newu-green uppercase tracking-wider">{settings?.aboutEyebrow || 'Our Story'}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">{settings?.aboutTitle || 'New-U Wellness & Beauty'}</h2>
            <p className="text-lg text-gray-600 mb-6">
              {settings?.aboutParagraph1 || 'Founded with a passion for holistic transformation, New-U Wellness & Beauty combines therapeutic expertise with aesthetic excellence to deliver comprehensive beauty and wellness solutions.'}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {settings?.aboutParagraph2 || 'Our team of expert therapists and beauticians work together to create personalized treatment plans that address both your immediate concerns and long-term wellness goals.'}
            </p>
            <p className="text-lg text-gray-600">
              {settings?.aboutParagraph3 || 'From rejuvenating massages to transformative beauty treatments, our integrated approach ensures that you leave feeling renewed both inside and out.'}
            </p>
          </motion.div>
        </div>
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src={settings?.aboutImage1 || "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070"} 
              alt="Wellness Treatment" 
              className="w-full h-auto object-cover" 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -left-10 w-64 h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white"
          >
            <img 
              src={settings?.aboutImage2 || "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1770"} 
              alt="Beauty Treatment" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="mt-24">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-newu-green uppercase tracking-wider">{settings?.featuresEyebrow || 'Why Choose Us'}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">{settings?.featuresTitle || 'Our Wellness Philosophy'}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const benefits = settings?.inchBenefits || [];

  const defaultBenefits = [
    {
      title: "Targeted Results",
      items: [
        "Precision-focused exercises for specific body areas",
        "Measurable inch loss through consistent sessions",
        "Customized programming based on your body goals",
      ]
    },
    {
      title: "Gentle Effectiveness",
      items: [
        "Low-impact exercises suitable for all fitness levels",
        "Ideal for post-pregnancy recovery and rehabilitation",
        "Supportive environment with expert guidance",
      ]
    }
  ];

  const displayedBenefits = benefits.length > 0 ? benefits : defaultBenefits;

  const inchContent = (
    <div className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src={settings?.inchAboutImage1 || "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070"} 
              alt="Inch by Inch Exercise" 
              className="w-full h-auto object-cover" 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -right-10 w-64 h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white"
          >
            <img 
              src={settings?.inchAboutImage2 || "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1925"} 
              alt="Body Transformation" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>
        
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-newu-green uppercase tracking-wider">{settings?.inchAboutEyebrow || 'Our Approach'}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">{settings?.inchAboutTitle || 'Inch by Inch Transformation'}</h2>
            <p className="text-lg text-gray-600 mb-6">
              {settings?.inchAboutParagraph1 || 'Inch by Inch represents our specialized approach to body transformation through innovative isometric bed exercises that deliver targeted, measurable results.'}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {settings?.inchAboutParagraph2 || 'Our method is designed to focus on specific areas of your body, allowing for precise toning and reshaping without the high-impact stress of traditional exercise routines.'}
            </p>
            <p className="text-lg text-gray-600">
              {settings?.inchAboutParagraph3 || "Whether you're looking to enhance your fitness journey or seeking post-pregnancy restoration, our Inch by Inch program provides gentle yet effective solutions for your body goals."}
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Key Benefits */}
      <div className="mt-24">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-newu-green uppercase tracking-wider">{settings?.inchBenefitsEyebrow || 'Key Benefits'}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">{settings?.inchBenefitsTitle || 'The Inch by Inch Advantage'}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-newu-green text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="section-padding">
      <SectionTransition
        wellnessContent={wellnessContent}
        inchContent={inchContent}
      />
    </section>
  );
};

export default AboutUs;