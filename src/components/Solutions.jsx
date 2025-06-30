import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Research",
    description:
      "We begin by understanding your business, audience, and goals through research, stakeholder interviews, and competitive analysis.",
  },
  {
    title: "Strategy & Planning",
    description:
      "Based on insights, we define clear objectives, scope, and roadmaps to guide the development of high-impact solutions.",
  },
  {
    title: "Design & Prototyping",
    description:
      "We create intuitive user interfaces and prototypes to visualize the experience before moving into full development.",
  },
  {
    title: "Development & Testing",
    description:
      "Our engineers build scalable solutions using modern technologies, followed by rigorous testing to ensure performance and reliability.",
  },
  {
    title: "Launch & Optimization",
    description:
      "Once launched, we monitor performance and user feedback to iterate, optimize, and ensure continuous improvement.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 70,
    },
  }),
};

export default function Solutions() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          How We Work
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-14 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Our process is structured, agile, and human-centered — ensuring every solution we deliver is impactful, scalable, and future-ready.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={index}
            >
              <div className="text-5xl font-bold text-green-500 mb-4">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
