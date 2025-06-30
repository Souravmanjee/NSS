import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Logonav from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-[#0b3f3d] px-4 py-2">
      <nav className="bg-white shadow-md px-4 md:px-8 z-50 relative h-20 rounded-full flex items-center overflow-hidden">
        <div className="flex justify-between items-center w-full">
          {/* Logo Section */}
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

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-[#1b2966] font-medium">
            <li><Link to="/" className="block hover:text-green-400 hover:font-bold">Home</Link></li>
            <li><Link to="/AboutUs" className="block hover:text-green-400 hover:font-bold">About</Link></li>
            <li><Link to="/Servicespage" className="block hover:text-green-400 hover:font-bold">Services</Link></li>
            <li><Link to="/Careerpage" className="block hover:text-green-400 hover:font-bold">Career</Link></li>
            <li><Link to="/Contactpage" className="block hover:text-green-400 hover:font-bold">Contact Us</Link></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl text-[#0b4f70]">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white py-4 px-6 shadow-lg text-[#1b2966] font-medium z-50">
            <div className="flex flex-col space-y-3">
              <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-green-400 hover:font-bold">Home</Link>
              <Link to="/AboutUs" onClick={() => setIsOpen(false)} className="block hover:text-green-400 hover:font-bold">About</Link>
              <Link to="/Servicespage" onClick={() => setIsOpen(false)} className="block hover:text-green-400 hover:font-bold">Services</Link>
              <Link to="/Careerpage" onClick={() => setIsOpen(false)} className="block hover:text-green-400 hover:font-bold">Career</Link>
              <Link to="/Contactpage" onClick={() => setIsOpen(false)} className="block hover:text-green-400 hover:font-bold">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
