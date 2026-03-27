import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Briefcase, Globe, Layers, Lightbulb, MessageSquare, X } from "lucide-react";
import { projects } from "../../data/projects";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useEffect, useState } from "react";

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

export function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Project not found</h1>
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
            onClick={() => navigate("/")}
            className="text-sm text-gray-500 hover:text-black transition-colors cursor-pointer"
          >
            Home
          </button>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <span className="inline-block bg-[#9FE870]/30 text-[#163300] px-3 py-1 rounded-full text-xs mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl tracking-tight leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-sm text-gray-500 max-w-xl">{project.desc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {project.tags.map((t) => (
              <span key={t} className="text-xs border border-gray-200 rounded-full px-3 py-1">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="px-6 pb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </motion.section>

      {/* Project Details */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            {...fadeUpView}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {[
              { icon: Calendar, label: "Year", value: project.year },
              { icon: User, label: "Client", value: project.client },
              { icon: Clock, label: "Duration", value: project.duration },
              { icon: Briefcase, label: "Role", value: project.role },
              ...(project.platform
                ? [{ icon: Globe, label: "Platform", value: project.platform }]
                : []),
              ...(project.industry
                ? [{ icon: Layers, label: "Industry", value: project.industry }]
                : []),
            ].map((d) => (
              <div key={d.label} className="bg-gray-50 rounded-2xl p-4">
                <d.icon size={16} className="text-[#9FE870] mb-2" />
                <p className="text-xs text-gray-400 mb-1">{d.label}</p>
                <p className="text-sm">{d.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Overview */}
          <motion.div {...fadeUpView} className="mb-12">
            <h2 className="text-lg mb-3">Overview</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{project.overview}</p>
          </motion.div>

          {/* Challenge */}
          <motion.div {...fadeUpView} className="mb-12">
            <h2 className="text-lg mb-3">The Challenge</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{project.challenge}</p>
          </motion.div>

          {/* Solution / Approach */}
          <motion.div {...fadeUpView} className="mb-12">
            <h2 className="text-lg mb-3">{project.phases ? "My Approach" : "The Solution"}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{project.solution}</p>
          </motion.div>

          {/* Phases (rich projects) */}
          {project.phases && (
            <div className="mb-12 space-y-8">
              {project.phases.map((phase, pi) => (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: pi * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h3 className="text-sm text-[#163300] mb-4">{phase.title}</h3>
                  <div className="space-y-3">
                    {phase.content.map((text, ti) => (
                      <p key={ti} className={`text-sm leading-relaxed ${ti === 0 ? "text-gray-600" : "text-gray-500 pl-4 border-l-2 border-[#9FE870]/40"}`}>
                        {text}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Design System */}
          {project.designSystem && (
            <motion.div {...fadeUpView} className="mb-12">
              <div className="bg-[#163300] rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#9FE870]/20 rounded-full flex items-center justify-center">
                    <Layers size={18} className="text-[#9FE870]" />
                  </div>
                  <h2 className="text-white">Scalable Design System</h2>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{project.designSystem}</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats (rich projects) */}
      {project.stats && (
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUpView}>
              <h2 className="text-lg mb-6">Results & Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-gray-50 rounded-2xl p-5 text-center"
                  >
                    <p className="text-2xl md:text-3xl text-[#163300] mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <motion.section {...fadeUpView} className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden"
              >
                <ImageWithFallback
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => setLightboxImg(img)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Key Decisions (rich projects) */}
      {project.keyDecisions && (
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUpView}>
              <h2 className="text-lg mb-6">Key Design Decisions</h2>
              <div className="space-y-4">
                {project.keyDecisions.map((decision, i) => (
                  <motion.div
                    key={decision.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="border border-gray-100 rounded-2xl p-6 hover:border-[#9FE870]/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-[#9FE870]/20 rounded-full flex items-center justify-center">
                        <Lightbulb size={14} className="text-[#163300]" />
                      </div>
                      <h3 className="text-sm text-[#163300]">{decision.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{decision.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Results (standard) */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUpView}>
            <h2 className="text-lg mb-4">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.results.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-gray-50 rounded-xl p-4 flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-[#9FE870]/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-[#163300]">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">{r}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reflection (rich projects) */}
      {project.reflection && (
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUpView} className="bg-[#f5f5f0] rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#9FE870]/20 rounded-full flex items-center justify-center">
                  <MessageSquare size={18} className="text-[#163300]" />
                </div>
                <h2 className="text-[#163300]">Reflection</h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{project.reflection}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Navigation between projects */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-gray-100 pt-8">
            <div className="flex justify-between items-center">
              <motion.button
                whileHover={{ x: -4 }}
                onClick={() => navigate(`/project/${prevProject.slug}`)}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors cursor-pointer"
              >
                <ArrowLeft size={16} />
                <div className="text-left hidden sm:block">
                  <p className="text-xs text-gray-400">Previous</p>
                  <p className="text-sm text-gray-700 max-w-[200px] truncate">{prevProject.title}</p>
                </div>
              </motion.button>

              <button
                onClick={() => navigate("/")}
                className="text-sm text-gray-400 hover:text-black transition-colors cursor-pointer"
              >
                All Projects
              </button>

              <motion.button
                whileHover={{ x: 4 }}
                onClick={() => navigate(`/project/${nextProject.slug}`)}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors cursor-pointer"
              >
                <div className="text-right hidden sm:block">
                  <p className="text-xs text-gray-400">Next</p>
                  <p className="text-sm text-gray-700 max-w-[200px] truncate">{nextProject.title}</p>
                </div>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-12">
        <div className="border-t border-gray-100 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 Shakir Design. All rights reserved.</p>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-6"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 rounded-full p-2 cursor-pointer transition-colors z-10"
          >
            <X size={24} className="text-white" />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={lightboxImg}
              alt="Full preview"
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}