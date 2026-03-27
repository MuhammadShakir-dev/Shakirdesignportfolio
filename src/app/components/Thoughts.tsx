import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { posts } from "../data/posts";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export function Thoughts() {
  const navigate = useNavigate();

  return (
    <section id="thoughts" className="max-w-3xl mx-auto px-6 py-20">
      <motion.p {...fadeUp} className="text-sm text-gray-400 mb-2">[Thoughts & Insights]</motion.p>
      <motion.h2 {...fadeUp} className="text-2xl md:text-3xl mb-2">Thoughts & Insights</motion.h2>
      <motion.p {...fadeUp} className="text-sm text-gray-500 mb-10">
        Design thinking, development tips, and lessons from building real products.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {posts.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => navigate(`/thoughts/${p.slug}`)}
            className="bg-gray-50 rounded-2xl overflow-hidden group cursor-pointer"
          >
            <div className="overflow-hidden">
              <ImageWithFallback
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <span className="text-xs text-[#9FE870]">{p.date}</span>
              <h4 className="text-sm mt-1 mb-2">{p.title}</h4>
              <p className="text-xs text-gray-400">{p.preview}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        {...fadeUp}
        onClick={() => navigate("/thoughts")}
        className="bg-[#9FE870] rounded-full flex items-center justify-between px-5 py-3 cursor-pointer hover:bg-[#8BD85F] transition-colors"
      >
        <span className="text-sm">Read All Articles</span>
        <div className="w-8 h-8 bg-[#163300] rounded-full flex items-center justify-center">
          <ArrowRight size={14} className="text-white" />
        </div>
      </motion.div>
    </section>
  );
}