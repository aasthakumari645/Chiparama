// src/components/Navbar.js
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Our Capabilities", link: "/OurCapabilitiesPage" },
    { name: "Careers", link: "/careers" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50">

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Text */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/logo.webp" // Replace with your logo path
            alt="Company Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-gray-800">CHIPARAMA</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
          {/* CTA Button */}
          <li>
            <a
              href="/ContactUs"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-gray-700 hover:text-blue-600 block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* CTA Button for Mobile */}
            <li>
              <a
                href="/contact"
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium mt-2"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}