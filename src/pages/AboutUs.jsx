import React from "react";
import { motion } from "framer-motion";
import Bhaiimg from '../assets/bhai.jpeg';
import nandimg from '../assets/Nandkishoremishra.jpg';
import sonuimg from '../assets/Sonuk.jpg';


const AboutUs = () => {
  return (
    <section className="px-0 py-20 w-full bg-gray-900 text-white font-inter overflow-x-hidden">
      {/* Welcome Section */}
      <motion.div
        className="grid md:grid-cols-2 gap-20 items-center mb-32 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold mb-6 text-white leading-tight tracking-tight">
            Welcome to NSS Edge Consulting
          </h2>
          <p className="mb-6 text-lg text-gray-300 leading-relaxed">
            At <strong className="text-green-300">NSS Edge Consulting</strong>, we empower companies with intelligent,
            data-driven, and scalable digital solutions tailored for long-term success. Our services—from full-stack
            development to marketing, IT consulting, and analytics—are all designed to elevate your digital footprint.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            We're more than a consultancy—we’re your digital growth partner. We harness strategy, creativity,
            and advanced technology to unlock your business potential.
          </p>
        </motion.div>

        {/* Images + Names + Emails */}
        <motion.div
          className="flex justify-center gap-16 flex-wrap"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {[
            {
              src: nandimg,
              alt: "Owner Nand Kishor Mishra",
              name: "Nand Kishor Mishra",
              email: "Founder"
            },
            {
              src: sonuimg,
              alt: "Co-Founder Sonu Kumar",
              name: "Sonu Kumar",
              email: "Co-Founder"
            },
            {
              src: Bhaiimg,
              alt: "CEO Suman Kumar",
              name: "Suman Kumar",
              email: "CEO"
            },
          ].map((person, index) => (
            <div key={index} className="flex flex-col items-center mb-6">
              <img
                src={person.src}
                alt={person.alt}
                className="w-52 aspect-[3/4] object-cover border border-gray-700 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              />
              <p className="mt-6 text-lg font-semibold text-gray-100 text-center">{person.name}</p>
              <a
                href={`mailto:${person.email}`}
                className="text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                {person.email}
              </a>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="mb-24 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-semibold mb-6 text-white tracking-wide">Our Mission</h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Our mission is to drive digital transformation with intelligent design, scalable technology,
          and measurable results. We help organizations conquer challenges and unlock growth through
          powerful, forward-thinking digital solutions.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          From strategy to execution, we deliver seamless, secure, and scalable products that keep your
          business ahead in a fast-evolving digital world.
        </p>
      </motion.div>

      {/* Things We Do Section */}
      <motion.div
        className="mb-24 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-semibold mb-8 text-white tracking-wide">Things We Do for You</h3>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-gray-200">
          <li className="bg-gray-800 p-6 shadow-xl hover:scale-105 transition-transform duration-300">
            <strong className="text-white">Strategy:</strong> Tailored digital strategies aligned with your business goals.
          </li>
          <li className="bg-gray-800 p-6 shadow-xl hover:scale-105 transition-transform duration-300">
            <strong className="text-white">Design:</strong> Engaging, user-centric designs that inspire interaction.
          </li>
          <li className="bg-gray-800 p-6 shadow-xl hover:scale-105 transition-transform duration-300">
            <strong className="text-white">Execution:</strong> Agile development with continuous improvement and speed.
          </li>
        </ul>
      </motion.div>

      {/* Core Services Section */}
      <motion.div
        className="mb-32 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-semibold mb-10 text-white tracking-wide">Our Core Services</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            "Custom Software Development",
            "Results-Focused Digital Marketing",
            "IT Consulting for Scalable Infrastructure",
            "Full-Stack Web Development",
            "Data Analytics for Smart Decisions",
            "Strategic Digital Planning",
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-green-900 to-green-700 text-white p-6 shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xl font-medium text-center leading-relaxed tracking-wide">{service}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CEO Quote */}
      <motion.blockquote
        className="text-2xl italic border-l-4 border-green-300 pl-6 py-6 text-gray-100 bg-gray-800 shadow-xl max-w-7xl mx-auto px-6 leading-loose"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        "At NSS Edge Consulting, we believe in vision, innovation, and collaboration. Together, we’re not just building solutions—we’re shaping the future of digital transformation."
        <footer className="text-right font-semibold mt-4">
          <span className="text-green-300">– CEO,</span>
          <span className="text-white"> Suman Kumar</span>
        </footer>
      </motion.blockquote>
    </section>
  );
};

export default AboutUs;
