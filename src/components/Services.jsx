import React from 'react';

// You would replace these with actual SVG or image components
const ServiceIcon = ({ children }) => (
  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
    {children}
  </div>
);

const Services = () => {
  const services = [
    {
      title: 'Full Custom Analog/Mixed Signal',
      description: 'We have experience in all aspects of full custom analog and mixed signal design.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.005a.25.25 0 01-.25.25H7.5a.25.25 0 01-.25-.25v-1.005a.25.25 0 01.25-.25h1.25c.138 0 .25.112.25.25z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 9a2 2 0 100-4 2 2 0 000 4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25a2 2 0 100-4 2 2 0 000 4z" /></svg>,
    },
    {
      title: 'FPGA to ASIC/SoC Conversion',
      description: 'Our team can port your FPGA design to a cost and power-optimized ASIC/SoC.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12a2 2 0 100-4 2 2 0 000 4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 16a2 2 0 100-4 2 2 0 000 4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a2 2 0 100-4 2 2 0 000 4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 16a2 2 0 100-4 2 2 0 000 4z" /></svg>,
    },
    {
      title: 'Digital ASIC/SoC Design',
      description: 'From architecture to physical design, we can deliver a full turnkey digital ASIC/SoC.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20.25v-3.75a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v3.75" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 9a3 3 0 100 6 3 3 0 000-6z" /></svg>,
    },
    {
      title: 'SoC Verification',
      description: 'Our team is capable of advanced SoC verification methodologies and tools.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 10a1 1 0 11-2 0 1 1 0 012 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 10a1 1 0 11-2 0 1 1 0 012 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 16a1 1 0 11-2 0 1 1 0 012 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 16a1 1 0 11-2 0 1 1 0 012 0z" /></svg>,
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Bringing your ideas to reality.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md"
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;