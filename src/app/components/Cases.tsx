import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export function Cases() {
  const navigate = useNavigate();

  return (
    <section id="cases" className="max-w-3xl mx-auto px-6 py-20">
      <motion.p {...fadeUp} className="text-sm text-gray-400 mb-2">[Selected Work]</motion.p>
      <motion.h2 {...fadeUp} className="text-2xl md:text-3xl mb-2">Selected Work</motion.h2>
      <motion.p {...fadeUp} className="text-sm text-gray-500 mb-10">
        Real projects. Real results. Here's a look at some of my recent work.
      </motion.p>

      <div className="flex flex-col gap-4 mb-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            {...fadeUp}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => navigate(`/project/${project.slug}`)}
            className="bg-gray-50 rounded-2xl overflow-hidden cursor-pointer group"
          >
            <div className="md:flex">
              <div className="md:w-1/2 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <span className="text-xs text-[#9FE870] mb-2">{project.category}</span>
                <h3 className="text-xl mb-3">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="text-xs border border-gray-200 rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        {...fadeUp}
        onClick={() => navigate("/projects")}
        className="bg-[#9FE870] rounded-full flex items-center justify-between px-5 py-3 cursor-pointer hover:bg-[#8BD85F] transition-colors"
      >
        <span className="text-sm">View All Projects</span>
        <div className="w-8 h-8 bg-[#163300] rounded-full flex items-center justify-center">
          <ArrowRight size={14} className="text-white" />
        </div>
      </motion.div>
    </section>
  );
}