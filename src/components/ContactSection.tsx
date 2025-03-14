
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond shortly.",
      duration: 5000,
    });
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-padding">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-newu-green uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to book an appointment? Reach out to our team for personalized assistance.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-newu-green p-8 text-white">
            <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
            <p className="text-white text-opacity-90">
              We'd love to hear from you. Here's how you can reach us.
            </p>
          </div>
          
          <div className="p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-newu-green bg-opacity-10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-newu-green" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Phone</h4>
                  <p className="text-gray-600">(27) 71-952-9055</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-newu-green bg-opacity-10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-newu-green" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Email</h4>
                  <p className="text-gray-600">info@newuwellness.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-newu-green bg-opacity-10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-newu-green" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Location</h4>
                  <p className="text-gray-600">87 Matthews Street, Klein Nederbury, Paarl 7646</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-newu-green bg-opacity-10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-newu-green" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                  <p className="text-gray-600">Saturday: 10am - 5pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425882426903!3d40.74076987138443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1659012345678!5m2!1sen!2sus" 
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="New-U Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Us A Message</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-newu-green focus:border-newu-green transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-newu-green focus:border-newu-green transition-colors duration-300"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-newu-green focus:border-newu-green transition-colors duration-300"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Interest
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-newu-green focus:border-newu-green transition-colors duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="massage">Massage Therapy</option>
                  <option value="facial">Facial Treatment</option>
                  <option value="waxing">Waxing</option>
                  <option value="inch">Inch by Inch Program</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-newu-green focus:border-newu-green transition-colors duration-300"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-newu-green hover:bg-newu-green-dark text-white py-3 px-6 rounded-md font-medium transition-all duration-300 flex items-center justify-center group"
              >
                Send Message 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
