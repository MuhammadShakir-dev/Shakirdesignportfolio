import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Shakir delivered our entire website, design and development, in under two weeks. The quality was outstanding and communication was smooth throughout. Highly recommend.",
    name: "Ahmed R.",
    role: "Founder, TechStart",
  },
  {
    quote: "Working with Shakir was seamless. He understood our vision from the first call and turned it into a beautiful, functional product. The best part? No handoff issues.",
    name: "Sarah K.",
    role: "CEO, BrandLift",
  },
  {
    quote: "We needed a landing page fast and Shakir delivered ahead of schedule. It became our primary channel for collecting early sign-ups. Incredible work ethic.",
    name: "David M.",
    role: "Co-founder, LaunchPad",
  },
];

export function Testimonials() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-sm text-gray-400 mb-2"
      >
        [What Clients Say]
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl md:text-3xl mb-10"
      >
        What Clients Say
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-gray-50 rounded-2xl p-6 flex flex-col cursor-pointer"
          >
            <Quote size={20} className="text-[#9FE870] mb-4" />
            <p className="text-sm text-gray-600 mb-6 flex-1">"{t.quote}"</p>
            <div>
              <p className="text-sm">{t.name}</p>
              <p className="text-xs text-gray-400">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}