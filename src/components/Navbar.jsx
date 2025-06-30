import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-[#0b3f3d] px-4 py-2">
      <nav className="bg-white shadow-md px-4 md:px-8 py-3 z-50 relative rounded-full">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src="src/assets/image/WESTAR~1.PNG"
              alt="Company Logo"
              className="h-12 w-auto"
            />
            <div className="text-left leading-none">
              <h1 className="text-xl font-bold text-[#0b3f3d]">NSS</h1>
              <h2 className="text-xl font-bold text-[#0b3f3d]">Edge Consulting</h2>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-[#1b2966] font-medium">
            <li className="cursor-pointer hover:text-green-400"><a href="/">Home</a></li>
            <li className="cursor-pointer hover:text-green-400"><a href="/AboutUs">About</a></li>
            <li className="cursor-pointer hover:text-green-400"><a href="/Servicespage">Services</a></li>
            <li className="cursor-pointer hover:text-green-400"><a href="/Careerpage">Career</a></li>
            <li className="cursor-pointer hover:text-green-400"><a href="/Contactpage">Contact Us</a></li>
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
          <div className="md:hidden mt-4 space-y-2 text-[#1b2966] font-medium">
            <div className="flex flex-col space-y-3">
              <a href="/" className="cursor-pointer hover:text-green-400">Home</a>
              <a href="/AboutUs" className="cursor-pointer hover:text-green-400">About</a>
              <a href="/Servicespage" className="cursor-pointer hover:text-green-400">Services</a>
              <a href="/Careerpage" className="cursor-pointer hover:text-green-400">Career</a>
              <a href="/Contactpage" className="cursor-pointer hover:text-green-400">Contact Us</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
