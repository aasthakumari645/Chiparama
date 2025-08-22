// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import OurCapabilities from './components/OurCapabilities';
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import OurCapabilitiesPage from "./pages/OurCapabilitiesPage";
import ContactUs from "./pages/ContactUs";

import "./index.css";
import "./App.css";

// Page Components
const Home = () => (
  <div className="pt-24">
    <Hero />
    <Services />
    <OurCapabilities />
  </div>
);



const Capabilities = () => (
  <div className="pt-24 text-center text-2xl">Our Capabilities Page</div>
);

const Contact = () => (
  <div className="pt-24 text-center text-2xl">Contact Us Page</div>
);

const Careers = () => (
  <div className="pt-24 text-center text-2xl">Careers Page</div>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/OurCapabilitiesPage" element={<OurCapabilitiesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}
