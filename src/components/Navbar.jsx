import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Logonav from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#0b3f3d] px-4 py-2">
      <nav className="bg-white shadow-md px-4 md:px-8 z-50 relative h-20 rounded-full flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src={Logonav}
            alt="Company Logo"
            className="h-16 w-auto flex-shrink-0"
          />
          <h1 className="text-xl font-bold text-[#0b3f3d] whitespace-nowrap">
            NSS Edge Consulting
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-[#1b2966] font-medium">
          <li><Link to="/" className="hover:text-green-400 hover:font-bold">Home</Link></li>
          <li><Link to="/AboutUs" className="hover:text-green-400 hover:font-bold">About</Link></li>
          <li><Link to="/Servicespage" className="hover:text-green-400 hover:font-bold">Services</Link></li>
          <li><Link to="/Careerpage" className="hover:text-green-400 hover:font-bold">Career</Link></li>
          <li><Link to="/Contactpage" className="hover:text-green-400 hover:font-bold">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-[#0b4f70] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-20 left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col px-6 py-4 space-y-3 text-[#1b2966] font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-green-400 hover:font-bold">Home</Link></li>
            <li><Link to="/AboutUs" onClick={() => setIsOpen(false)} className="hover:text-green-400 hover:font-bold">About</Link></li>
            <li><Link to="/Servicespage" onClick={() => setIsOpen(false)} className="hover:text-green-400 hover:font-bold">Services</Link></li>
            <li><Link to="/Careerpage" onClick={() => setIsOpen(false)} className="hover:text-green-400 hover:font-bold">Career</Link></li>
            <li><Link to="/Contactpage" onClick={() => setIsOpen(false)} className="hover:text-green-400 hover:font-bold">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
