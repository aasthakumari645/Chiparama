// src/OurCapabilities.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronRight } from 'lucide-react';

const ServiceSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <span>
          {isOpen ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
        </span>
      </button>
      {isOpen && <div className="mt-4 text-gray-600">{children}</div>}
    </div>
  );
};

const OurCapabilities = () => {
  const services = [
    {
      title: "Core ASIC Design Services",
      content: (
        <ul className="list-none space-y-4">
          <li>
            <span className="font-semibold text-gray-900">Architectural Planning & Micro-architecture Design</span>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2 text-sm">
              <li>System-level modeling and simulation</li>
              <li>Power, performance, and area (PPA) optimization</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold text-gray-900">RTL Design & Development</span>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2 text-sm">
              <li>VHDL/System Verilog coding</li>
              <li>Sign off Checks/CDC/RDC/Lint</li>
              <li>Formal Verification</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold text-gray-900">Design Verification</span>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2 text-sm">
              <li>UVM/OVM-based verification</li>
              <li>Formal verification and equivalence checking</li>
              <li>Regression testing setups and automation</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold text-gray-900">Physical Design & Layout</span>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2 text-sm">
              <li>Floorplanning, placement, and routing</li>
              <li>Clock tree synthesis</li>
              <li>Signal integrity and power analysis</li>
              <li>Static Timing analysis</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold text-gray-900">Post-Silicon Validation and Testing</span>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2 text-sm">
              <li>Silicon bring-up and debug</li>
              <li>Performance characterization</li>
              <li>Compliance and functional testing</li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      title: "Advanced Technology Integration",
      content: (
        <ul className="list-none space-y-4">
          <li>
            <span className="font-semibold text-gray-900">Low Power Design Techniques</span>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2 text-sm">
              <li>Multi-Vt and power gating strategies</li>
              <li>Dynamic voltage and frequency scaling (DVFS)</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold text-gray-900">High-Speed Interface Design</span>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2 text-sm">
              <li>PCIe, USB, DDR, etc.</li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      title: "Specialized Design Support Services",
      content: (
        <ul className="list-none space-y-4">
          <li>
            <span className="font-semibold text-gray-900">IP Integration & Management</span>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2 text-sm">
              <li>Third-party IP evaluation and selection</li>
              <li>IP customization and integration</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold text-gray-900">Process Migration and Technology Scaling</span>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2 text-sm">
              <li>Node transition strategies (e.g., from 12nm to 4nm)</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold text-gray-900">Compliance and Standards Adherence</span>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2 text-sm">
              <li>Industry Standards Compliance (IEEE, IEC, etc.)</li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      title: "Software and Tool Expertise",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="font-semibold text-gray-900">EDA Tool Proficiency</span>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2 text-sm">
              <li>Mastery in tools from Cadence, Synopsys, Mentor Graphics, etc.</li>
            </ul>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="relative py-20 bg-blue-50 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Our Capabilities
          </p>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
            Comprehensive ASIC & SoC Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base text-gray-500 sm:text-lg">
            We cover the entire design lifecycle, from concept to silicon, with a focus on innovation and quality.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((service, index) => (
            <ServiceSection key={index} title={service.title}>
              {service.content}
            </ServiceSection>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default OurCapabilities;