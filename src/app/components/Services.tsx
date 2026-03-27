import { motion } from "motion/react";
import { Globe, Smartphone, Code, Package } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    desc: "Modern, conversion-focused websites that make your brand stand out. From landing pages to full multi-page sites, I design experiences that turn visitors into customers.",
    tags: ["Landing pages", "SaaS websites", "Business sites", "Redesigns"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    desc: "Intuitive, beautiful mobile interfaces for iOS and Android. I design apps people actually enjoy using, from wireframes to pixel-perfect, developer-ready screens.",
    tags: ["iOS & Android", "User flows", "Wireframes", "Prototypes", "Design systems"],
  },
  {
    icon: Code,
    title: "Website Development",
    desc: "I don't just design it, I build it. Fully responsive, fast-loading websites using React & Next.js. Deployed on Vercel. Clean code, pushed to GitHub.",
    tags: ["React", "Next.js", "Framer", "Vercel", "GitHub"],
  },
  {
    icon: Package,
    title: "Full Package: Design to Launch",
    desc: "Get the complete experience, from concept to live product, handled by one person. No miscommunication between designer and developer. What I design is exactly what gets built.",
    tags: ["Concept", "Design", "Develop", "Deploy", "Launch"],
  },
];

export function Services() {
  return (
    <section id="services" className="max-w-3xl mx-auto px-6 py-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-sm text-gray-400 mb-2"
      >
        [What I Do]
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl md:text-3xl mb-2"
      >
        What I Do
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-sm text-gray-500 mb-10"
      >
        End-to-end design and development services that help you launch faster and convert better.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-gray-50 rounded-2xl p-6 cursor-pointer group"
          >
            <div className="w-12 h-12 bg-[#9FE870]/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#9FE870]/60 transition-colors">
              <s.icon size={22} className="text-[#163300]" />
            </div>
            <h3 className="text-base mb-2">{s.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} className="text-xs border border-gray-200 rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}