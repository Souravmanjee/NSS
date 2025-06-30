import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0b3f3d] text-white flex flex-col justify-center px-6 lg:px-20 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.p
            className="text-green-300 text-sm uppercase mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Empowering Innovation through Technology
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Smart Digital Solutions<br /> Built for Business Growth
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            At NSS Edge Consulting, we blend cutting-edge tech, strategic consulting, and creative execution to accelerate your digital transformation and deliver measurable impact.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {/* ✅ Wrap button with Link */}
            <Link to="/Servicespage">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition">
                Explore Our Services
              </button>
            </Link>

            {/* Optional play button */}
            {/* <button className="flex items-center gap-2 border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#0b3f3d] transition">
              <FaPlay className="text-sm" />
              Watch Overview
            </button> */}
          </motion.div>

          {/* Team member count */}
          <motion.div
            className="flex items-center gap-4 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex -space-x-4">
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=1" alt="Member" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=2" alt="Member" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=3" alt="Member" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=4" alt="Member" />
            </div>
            <div>
              <p className="text-2xl font-bold">50+ Experts</p>
              <p className="text-sm text-gray-300">In Tech & Marketing</p>
            </div>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="src/assets/image/2f3a4c20-355f-4f9e-8313-cfd10785e2ed.jpg"
            alt="Digital Innovation"
            className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
