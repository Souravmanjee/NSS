import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
};

export default function About() {
  return (
    <section id="about" className="relative z-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6 lg:px-28">
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={containerVariants}
      >
        {/* Left - Image */}
        <motion.div
          variants={itemVariants}
          className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="src/assets/image/14d554ff-0a49-4376-b954-a95d202f8f6d.jpg"
            alt="NSS Edge Consultancy Team"
            className="w-full h-full object-cover rounded-l-[150px]"
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div variants={itemVariants} className="lg:w-1/2">
          <p className="text-green-500 font-semibold mb-3 uppercase tracking-wide text-sm">
            About NSS Edge Consulting
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
            Elevating Businesses Through Innovative Tech & Insight
          </h2>

          <p className="text-black-700 text-[1.1rem] leading-relaxed tracking-wide font-dark mb-6 font-sans">
            At NSS Edge Consulting, we empower companies with intelligent, data-driven, and scalable digital solutions. From full-stack web development and marketing strategies to IT infrastructure and analytics, our mission is to unlock growth and transform your digital footprint.
          </p>


          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {[
              "Custom Software Development",
              "Results-Focused Digital Marketing",
              "IT Consulting for Scalable Infrastructure",
              "Data Analytics for Smart Decisions"
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <FaCheck className="text-green-500 mt-1" />
                <span className="font-bold text-yellow-700">{feature}</span>
              </motion.div>
            ))}
          </div>
          <Link to="/AboutUs">
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-lg text-lg shadow-lg transition"
          >
            Learn More About Us
          </motion.button>
          </Link>
          
        </motion.div>
      </motion.div>
    </section>
  );
}
