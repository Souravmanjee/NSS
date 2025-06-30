import React, { useState } from "react";
import { motion } from "framer-motion";

const Career = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    position: "",
    email: "",
    comment: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted! We'll get back to you soon.");
  };

  return (
    <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20 px-6 text-center">
      {/* 🔹 Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-relaxed mb-4 text-white drop-shadow">
          Eager to lead with innovation and make an impact?
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-yellow-400 mb-2">
          NSS Edge Consulting is your launchpad to success.
        </p>
        <p className="text-gray-300 text-base italic">
          Together, we <strong>Learn, Evolve & Excel</strong>.
        </p>
      </motion.div>

      {/* 🔸 Form Section */}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold mb-16 text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let’s Connect
        </motion.h2>

        {/* 🔸 Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#1e293b]/70 backdrop-blur-md border border-gray-600 shadow-2xl rounded-2xl p-10 md:p-12 mb-10"
        >
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6 text-left"
          >
            {/* Full Name */}
            <div>
              <label className="block font-semibold text-gray-200 mb-2">Full Name *</label>
              <div className="flex gap-2">
                <input
                  name="firstName"
                  placeholder="First"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-1/2 bg-transparent border border-gray-500 px-4 py-2 rounded text-white placeholder-gray-400"
                  required
                />
                <input
                  name="lastName"
                  placeholder="Last"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-1/2 bg-transparent border border-gray-500 px-4 py-2 rounded text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold text-gray-200 mb-2">Phone Number *</label>
              <input
                name="phone"
                type="tel"
                placeholder="+91-__________"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-500 px-4 py-2 rounded text-white placeholder-gray-400"
                required
              />
            </div>

            {/* Position */}
            <div>
              <label className="block font-semibold text-gray-200 mb-2">Position Applied For *</label>
              <select
                name="position"
                value={form.position}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-500 px-4 py-2 rounded text-white"
                required
              >
                <option value="" className="bg-black text-gray-300">Select Position</option>
                <option className="bg-black text-white" value="Frontend Developer">Frontend Developer</option>
                <option className="bg-black text-white" value="Backend Developer">Backend Developer</option>
                <option className="bg-black text-white" value="Fullstack Developer">Fullstack Developer</option>
                <option className="bg-black text-white" value="Marketing Executive">Marketing Executive</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold text-gray-200 mb-2">Email Address *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-500 px-4 py-2 rounded text-white placeholder-gray-400"
                required
              />
            </div>

            {/* Additional Info */}
            <div className="md:col-span-2">
              <label className="block font-semibold text-gray-200 mb-2">Additional Information</label>
              <textarea
                name="comment"
                rows="4"
                placeholder="Anything else you'd like to add..."
                value={form.comment}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-500 px-4 py-2 rounded text-white placeholder-gray-400"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-start">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full shadow-md transition duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </motion.div>

        {/* 🔹 Contact Info */}
        <motion.div
          className="text-sm text-yellow-500 space-y-2 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p>📧 <span>info@nssedgeconsulting.com</span></p>
          <p>📞 <span>+91 9214555851</span></p>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;
