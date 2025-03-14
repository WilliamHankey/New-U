
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSection } from '../context/SectionContext';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentSection, switchSection } = useSection();
  const location = useLocation();

  // Navigation links
  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center h-10">
              <span className="text-newu-gray font-heading text-2xl font-bold">
                <span className="text-newu-green">New-U</span>
              </span>
            </div>
          </Link>

          {/* Section Switcher (Desktop) */}
          <div className="hidden md:flex mx-auto">
            <div className="bg-gray-100 rounded-full p-1 flex">
              <button
                onClick={() => switchSection('wellness')}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  currentSection === 'wellness'
                    ? "bg-newu-green text-white shadow-md"
                    : "hover:bg-gray-200"
                )}
              >
                Wellness & Beauty
              </button>
              <button
                onClick={() => switchSection('inch')}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  currentSection === 'inch'
                    ? "bg-newu-green text-white shadow-md"
                    : "hover:bg-gray-200"
                )}
              >
                Inch by Inch
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium underline-animation",
                  location.pathname === link.path
                    ? "text-newu-green"
                    : "text-newu-gray hover:text-newu-green"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-newu-green hover:bg-newu-green-dark text-white py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-newu-gray hover:text-newu-green transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-4 space-y-4">
          {/* Section Switcher (Mobile) */}
          <div className="bg-gray-100 rounded-lg p-1 flex flex-col">
            <button
              onClick={() => switchSection('wellness')}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium mb-1 transition-all duration-300",
                currentSection === 'wellness'
                  ? "bg-newu-green text-white shadow-md"
                  : "hover:bg-gray-200"
              )}
            >
              Wellness & Beauty
            </button>
            <button
              onClick={() => switchSection('inch')}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
                currentSection === 'inch'
                  ? "bg-newu-green text-white shadow-md"
                  : "hover:bg-gray-200"
              )}
            >
              Inch by Inch
            </button>
          </div>
          
          {/* Mobile Links */}
          <div className="flex flex-col space-y-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "p-2 rounded-md text-sm font-medium",
                  location.pathname === link.path
                    ? "bg-gray-100 text-newu-green"
                    : "text-newu-gray hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-newu-green hover:bg-newu-green-dark text-white py-2 px-4 rounded-md text-center font-medium transition-all duration-300 mt-2"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
