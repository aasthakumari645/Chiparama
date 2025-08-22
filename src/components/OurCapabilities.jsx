import React from 'react';

const OurCapabilities = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          {/* Text Content Section */}
          <div>
            <div className="text-left mb-8 lg:mb-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Our Capabilities
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Custom ASICs and SoCs for Your Industry
              </h2>
              <p className="mt-4 text-base text-gray-600">
                We have helped clients around the world with custom ASIC and SoC designs for a wide variety of industries, including wireless, automotive, industrial IoT, and more. Our engineers have an average of 15+ years of experience in the semiconductor industry and can tackle any design challenge.
              </p>
            </div>
          </div>
          {/* Image Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
            {/* Top Image */}
            <div className="sm:col-span-2 rounded-lg overflow-hidden shadow-md">
              <img
                src="/img1.jpg" // Replace with your image path
                alt="Top view of an industrial setup"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Bottom Left Image */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/img2.jpg" // Replace with your image path
                alt="Close-up of a circuit board"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Bottom Right Image */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="img3.jpg" // Replace with your image path
                alt="Automotive technology in a car"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCapabilities;