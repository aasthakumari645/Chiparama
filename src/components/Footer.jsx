// src/components/Footer.jsx
import React from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", link: "/about" },
      { name: "Our Capabilities", link: "/capabilities" },
      { name: "Careers", link: "/careers" },
      { name: "Contact Us", link: "/contact" },
    ],
    contact: {
      address: "123 Technology Drive, Silicon Valley, CA 94043",
      phone: "+1 (123) 456-7890",
      email: "info@chiparamatech.com",
    },
    socials: [
      { icon: <Linkedin size={20} />, link: "https://linkedin.com" },
      { icon: <Twitter size={20} />, link: "https://twitter.com" },
      { icon: <Facebook size={20} />, link: "https://facebook.com" },
    ],
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div className="space-y-4">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/logo.webp" // Consider a white version of your logo for dark backgrounds
              alt="Company Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-white">CHIPARAMA</span>
          </a>
          <p className="text-sm">
            Your trusted global partner in ASIC & SOC engineering excellence.
          </p>
        </div>

        {/* Company Links Section */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.company.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <p className="flex items-center space-x-2">
                <span>{footerLinks.contact.address}</span>
              </p>
            </li>
            <li>
              <a href={`tel:${footerLinks.contact.phone}`} className="hover:text-blue-400 transition-colors">
                Phone: {footerLinks.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${footerLinks.contact.email}`} className="hover:text-blue-400 transition-colors">
                Email: {footerLinks.contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {footerLinks.socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-8">
        <p>&copy; {new Date().getFullYear()} ChiparamA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;