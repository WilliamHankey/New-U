
import React from 'react';
import { SectionProvider } from '../context/SectionContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSection } from '../context/SectionContext';

const Booking = () => {
  const { currentSection } = useSection();
  
  return (
    <SectionProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 px-4 max-w-7xl mx-auto w-full">
          <div className="py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Book Your Appointment
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold mb-6 text-newu-green">
                {currentSection === 'wellness' 
                  ? 'Wellness & Beauty Booking' 
                  : 'Inch by Inch Booking'}
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-newu-green focus:border-newu-green"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-newu-green focus:border-newu-green"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-newu-green focus:border-newu-green"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service
                    </label>
                    <select
                      id="service"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-newu-green focus:border-newu-green"
                      required
                    >
                      <option value="">Select a service</option>
                      {currentSection === 'wellness' ? (
                        <>
                          <option value="massage">Therapeutic Massage</option>
                          <option value="facial">Facial Treatments</option>
                          <option value="waxing">Waxing Services</option>
                          <option value="beauty">Beauty Packages</option>
                        </>
                      ) : (
                        <>
                          <option value="isometric">Isometric Exercises</option>
                          <option value="transformation">Body Transformation</option>
                          <option value="toning">Targeted Toning</option>
                          <option value="post-pregnancy">Post-Pregnancy Programs</option>
                        </>
                      )}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-newu-green focus:border-newu-green"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-newu-green focus:border-newu-green"
                      required
                    >
                      <option value="">Select a time</option>
                      <option value="9:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-newu-green focus:border-newu-green"
                    placeholder="Any special requests or information we should know?"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-newu-green hover:bg-newu-green-dark text-white py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                  >
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </SectionProvider>
  );
};

export default Booking;
