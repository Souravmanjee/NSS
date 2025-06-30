import { motion } from "framer-motion";
import { FaCogs, FaPalette, FaRocket, FaLaptopCode, FaChartLine, FaCode, FaUserTie, FaDatabase } from "react-icons/fa";

const services = [
  {
    icon: <FaCogs size={32} />,
    title: "Strategy",
    desc: "Strategic planning focused on business goals and digital growth.",
  },
  {
    icon: <FaPalette size={32} />,
    title: "Design",
    desc: "Creative, user-centered design across web and mobile.",
  },
  {
    icon: <FaRocket size={32} />,
    title: "Execution",
    desc: "Agile delivery from prototype to product launch.",
  },
];

const mainServices = [
  { title: "Tech Solutions", icon: <FaLaptopCode size={28} /> },
  { title: "Digital Marketing", icon: <FaChartLine size={28} /> },
  { title: "Web Development", icon: <FaCode size={28} /> },
  { title: "IT Consulting", icon: <FaUserTie size={28} /> },
  { title: "Data Analytics", icon: <FaDatabase size={28} /> },
];

export default function Services() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Things We Do for You</h2>

      {/* First Row: Core Process */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-indigo-600 mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Second Row: Service Highlights */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Our Core Services</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-md hover:shadow-lg border border-gray-200 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-green-600">{service.icon}</span>
              <span className="text-gray-800 font-medium">{service.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
