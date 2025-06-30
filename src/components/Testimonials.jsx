import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Malhotra",
    company: "Techbridge Inc.",
    quote: "NSS Edge Consulting transformed our lead generation — excellent support and quality data!",
  },
  {
    name: "John Stewart",
    company: "Brightline Solutions",
    quote: "They delivered exactly what we needed — fast, accurate, and fully compliant.",
  },
  {
    name: "Sara Khan",
    company: "MarketEdge Co.",
    quote: "Their strategy and data integration helped scale our campaigns effectively.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="space-y-10">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              className="bg-gray-50 p-6 rounded-lg shadow-md max-w-3xl mx-auto italic"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              “{t.quote}”
              <footer className="mt-4 font-semibold not-italic">
                — {t.name}, {t.company}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
