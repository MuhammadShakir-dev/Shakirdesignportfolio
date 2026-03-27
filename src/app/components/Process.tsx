import { motion } from "motion/react";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Discovery",
    desc: "We start with a call to understand your goals, audience, and vision. I'll ask the right questions so I can design the right solution.",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Design",
    desc: "I create wireframes and high-fidelity designs in Figma. You'll see your product take shape with regular check-ins and revisions baked in.",
  },
  {
    icon: Code,
    num: "03",
    title: "Develop",
    desc: "Once the design is approved, I build it with React and Next.js. Clean code, responsive, and fast. Pushed to GitHub, deployed on Vercel.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Launch & Support",
    desc: "Your product goes live. I handle the deployment and make sure everything runs smoothly. Post-launch tweaks are included.",
  },
];

export function Process() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-sm text-gray-400 mb-2"
      >
        [How I Work]
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl md:text-3xl mb-2"
      >
        How I Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-sm text-gray-500 mb-10"
      >
        A simple, transparent process from first call to final launch.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className="bg-gray-50 rounded-2xl p-5 cursor-pointer relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 text-3xl text-gray-100 group-hover:text-[#9FE870]/40 transition-colors">
              {s.num}
            </div>
            <div className="w-10 h-10 bg-[#9FE870]/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#9FE870]/60 transition-colors">
              <s.icon size={18} className="text-[#163300]" />
            </div>
            <h4 className="text-sm mb-2">{s.num}. {s.title}</h4>
            <p className="text-xs text-gray-500">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}