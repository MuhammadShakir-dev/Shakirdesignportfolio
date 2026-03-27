import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { posts } from "../../data/posts";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AllPostsPage() {
  const navigate = useNavigate();

  return (
    <div className="font-[Satoshi,sans-serif] bg-white text-gray-900 antialiased">
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} /> Home
          </button>
          <span className="text-sm tracking-wide">Shakir Design</span>
          <div className="w-16" />
        </div>
      </motion.header>

      <section className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-gray-400 mb-2"
          >
            [Thoughts & Insights]
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl mb-2"
          >
            Thoughts & Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-sm text-gray-500 mb-10"
          >
            Design thinking, development tips, and lessons from building real products.
          </motion.p>

          <div className="space-y-4">
            {posts.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={() => navigate(`/thoughts/${p.slug}`)}
                className="bg-gray-50 rounded-2xl overflow-hidden group cursor-pointer flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 overflow-hidden">
                  <ImageWithFallback
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span>{p.category}</span>
                    <span>·</span>
                    <span>{p.date}</span>
                    <span>·</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.preview}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="max-w-3xl mx-auto px-6 py-12">
        <div className="border-t border-gray-100 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 Shakir Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
