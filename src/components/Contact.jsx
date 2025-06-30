import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await fetch("https://formspree.io/f/xjkrlvdn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <section className="bg-[#fefdfb] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-5xl font-bold mb-6 text-gray-900">Get in Touch.</h2>
          {submitted ? (
            <p className="text-green-600 font-semibold">Thanks for reaching out! We'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full"
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h3 className="text-3xl font-bold mb-6 text-gray-900">Contact Info</h3>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Address</h4>
                <p>Indrawat Derwa,Sarayindrawat,prataparh 230128 UP</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-yellow-400 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Email Us</h4>
                <p>info@nssedgeconsulting.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhone className="text-yellow-400 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Call Us</h4>
                <p>+919214555851</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
              <div className="flex gap-4 text-yellow-400 text-xl">
                <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
                <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
                <FaYoutube className="hover:text-yellow-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Google Map */}
      <div className="mt-20 w-full h-[400px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4629929.228975986!2d83.5782757335906!3d23.601692102806243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdhanbad%20delhi%20public%20school!5e1!3m2!1sen!2sin!4v1751226753996!5m2!1sen!2sin"
          className="w-full h-full border-none"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
