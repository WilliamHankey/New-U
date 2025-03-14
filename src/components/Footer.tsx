
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { useSection } from '../context/SectionContext';

const Footer = () => {
  const { currentSection } = useSection();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold font-heading">
                <span className="text-newu-green">New-U</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming wellness and beauty journeys with expert care and personalized approaches.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-newu-green transition-all" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-newu-green transition-all" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-newu-green transition-all" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-newu-green transition-all">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-newu-green transition-all">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-newu-green transition-all">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-newu-green transition-all">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-newu-green transition-all">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {currentSection === 'wellness' ? (
                <>
                  <li className="text-gray-400 hover:text-newu-green transition-all">Therapeutic Massage</li>
                  <li className="text-gray-400 hover:text-newu-green transition-all">Facial Treatments</li>
                  <li className="text-gray-400 hover:text-newu-green transition-all">Waxing Services</li>
                  <li className="text-gray-400 hover:text-newu-green transition-all">Beauty Packages</li>
                </>
              ) : (
                <>
                  <li className="text-gray-400 hover:text-newu-green transition-all">Isometric Exercises</li>
                  <li className="text-gray-400 hover:text-newu-green transition-all">Body Transformation</li>
                  <li className="text-gray-400 hover:text-newu-green transition-all">Targeted Toning</li>
                  <li className="text-gray-400 hover:text-newu-green transition-all">Post-Pregnancy Programs</li>
                </>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-newu-green mr-2 mt-0.5" />
                <span className="text-gray-400">123 Wellness Street, Beauty City, BC 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-newu-green mr-2" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-newu-green mr-2" />
                <a href="mailto:info@new-u.com" className="text-gray-400 hover:text-newu-green transition-all">info@new-u.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {year} New-U Wellness & Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
