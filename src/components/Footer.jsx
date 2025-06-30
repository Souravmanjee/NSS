import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-8 text-center px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <p className="text-sm sm:text-base mb-2">
        © {new Date().getFullYear()} NSS Edge Consulting. All rights reserved.
      </p>
      <p className="text-sm text-gray-400">
        📧 info@nssedgeconsulting.com | 📞 +919214555851
      </p>
    </motion.footer>
  );
}
