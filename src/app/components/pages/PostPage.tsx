import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { posts } from "../../data/posts";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeUpView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export function PostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.slug === slug);
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const nextPost = posts[(currentIndex + 1) % posts.length];
  const prevPost = posts[(currentIndex - 1 + posts.length) % posts.length];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Post not found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-sm text-[#163300] underline cursor-pointer"
          >
            Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-[Satoshi,sans-serif] bg-white text-gray-900 antialiased">
      {/* Nav */}
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
            <ArrowLeft size={16} /> Back
          </button>
          <span className="text-sm tracking-wide">Shakir Design</span>
          <button
            onClick={() => navigate("/thoughts")}
            className="text-sm text-gray-500 hover:text-black transition-colors cursor-pointer"
          >
            All Posts
          </button>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="pt-28 pb-8 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-4 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Tag size={12} /> {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={12} /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl tracking-tight leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-sm text-gray-500">{post.preview}</p>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="px-6 pb-12"
      >
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-56 md:h-[360px] object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Content */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          {post.content.map((paragraph, i) => (
            <motion.p
              key={i}
              {...fadeUpView}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="text-sm text-gray-600 leading-relaxed mb-5"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Author card */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            {...fadeUpView}
            className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4"
          >
            <div className="w-14 h-14 bg-[#9FE870]/40 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-lg text-[#163300]">MS</span>
            </div>
            <div>
              <p className="text-sm">Muhammad Shakir</p>
              <p className="text-xs text-gray-400">Product Designer & Developer</p>
              <p className="text-xs text-gray-400 mt-1">
                I design and build digital products that convert. Follow my work at shakirdesign.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation between posts */}
      <section className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="border-t border-gray-100 pt-8">
            <div className="flex justify-between items-center">
              <motion.button
                whileHover={{ x: -4 }}
                onClick={() => navigate(`/thoughts/${prevPost.slug}`)}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors cursor-pointer"
              >
                <ArrowLeft size={16} />
                <div className="text-left hidden sm:block">
                  <p className="text-xs text-gray-400">Previous</p>
                  <p className="text-sm text-gray-700 max-w-[180px] truncate">{prevPost.title}</p>
                </div>
              </motion.button>

              <button
                onClick={() => navigate("/thoughts")}
                className="text-sm text-gray-400 hover:text-black transition-colors cursor-pointer"
              >
                All Posts
              </button>

              <motion.button
                whileHover={{ x: 4 }}
                onClick={() => navigate(`/thoughts/${nextPost.slug}`)}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors cursor-pointer"
              >
                <div className="text-right hidden sm:block">
                  <p className="text-xs text-gray-400">Next</p>
                  <p className="text-sm text-gray-700 max-w-[180px] truncate">{nextPost.title}</p>
                </div>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto px-6 py-12">
        <div className="border-t border-gray-100 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 Shakir Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}