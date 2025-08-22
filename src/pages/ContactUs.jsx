// src/ContactUs.jsx
import React from 'react';

import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">


      {/* Hero Section */}
      <div className="relative py-20 bg-blue-50 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Get in Touch
          </p>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base text-gray-500 sm:text-lg">
            We'd love to hear from you. Please fill out the form below or reach out to us directly.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info and Map Section */}
          <div className="mt-10 lg:mt-0 flex flex-col justify-between">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Details</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start space-x-3">
                  <MapPin size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Address</span>
                    <p className="mt-1">123 Technology Drive, Silicon Valley, CA 94043</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Phone</span>
                    <p className="mt-1">+1 (123) 456-7890</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Email</span>
                    <p className="mt-1">info@chiparamatech.com</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-10 rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.77491048865!2d-122.0842496846874!3d37.42247657982542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e5b3b0d235%3A0x60c0f9c2d1c6e4d4!2sGoogleplex!5e0!3m2!1sen!2sus!4v1628173429815!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ContactUs;