import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Welcome to ChiparamA
        </p>
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
          Your Global Partner in <span className="block">ASIC & SOC Engineering Excellence</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base text-gray-500 sm:text-lg">
          Transforming your business with quality engineering resources.
        </p>
      </div>
    </div>
  );
};

export default Hero;