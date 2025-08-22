// src/pages/AboutUs.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">


      {/* About Us Hero Section */}
      <div className="relative py-20 bg-blue-50 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            About Us
          </p>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
            Our Journey to Engineering Excellence
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base text-gray-500 sm:text-lg">
            We are a team of passionate and dedicated engineers committed to delivering world-class ASIC and SoC solutions.
          </p>
        </div>
      </div>

      {/* Our Philosophy Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:order-2">
            <img
              src="/about.jpg" // Replace with a relevant image
              alt="Engineers collaborating"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="mt-10 lg:mt-0 lg:order-1">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Philosophy
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              At ChiparamA, our philosophy is rooted in a deep commitment to innovation, quality, and collaboration. We believe that the best solutions are born from a partnership with our clients, where we combine our technical expertise with their vision to create products that are not just functional, but truly transformative. Our team is dedicated to pushing the boundaries of what's possible in semiconductor engineering, ensuring that every project we undertake is a testament to our pursuit of excellence.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We operate with transparency and integrity, fostering long-term relationships built on trust. Our goal is to empower your business with reliable and efficient engineering resources, enabling you to bring your most ambitious ideas to life.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Experts
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our team is composed of seasoned professionals with decades of combined experience in the semiconductor industry.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member Card 1 */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src="/person1.webp" // Replace with team member's photo
                alt="Tony Stark"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">Robert Downey Jr.</h3>
              <p className="text-md text-blue-600 font-semibold">CEO & Founder</p>
              <p className="mt-2 text-sm text-gray-500">
                John has over 20 years of experience in ASIC design and has led numerous successful projects from concept to production.
              </p>
            </div>
            {/* Team Member Card 2 */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src="/person2.webp" // Replace with team member's photo
                alt="Jhonny Depp"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">Jhonny Depp</h3>
              <p className="text-md text-blue-600 font-semibold">Head of Engineering</p>
              <p className="mt-2 text-sm text-gray-500">
                With a background in mixed-signal design, Jane oversees all technical aspects of our projects, ensuring top-tier quality.
              </p>
            </div>
            {/* Team Member Card 3 */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src="/person3.jpg" // Replace with team member's photo
                alt="Ryan Gossling"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">Ryan Gossling</h3>
              <p className="text-md text-blue-600 font-semibold">Senior Verification Lead</p>
              <p className="mt-2 text-sm text-gray-500">
                Alex is a verification expert who ensures our designs are robust, reliable, and meet all performance specifications.
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default AboutUs;