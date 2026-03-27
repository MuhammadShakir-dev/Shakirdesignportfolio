import { motion } from "motion/react";
import { ArrowRight, Figma, Github, Globe, Code2, Triangle, FramerIcon } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { shakirPhoto } from "../data/images";

const tools = [
  { icon: Figma, label: "Figma" },
  { icon: Code2, label: "React" },
  { icon: Globe, label: "Next.js" },
  { icon: FramerIcon, label: "Framer" },
  { icon: Github, label: "GitHub" },
  { icon: Triangle, label: "Vercel" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-20">
      <motion.p {...fadeUp} className="text-sm text-gray-400 mb-6">[About Me]</motion.p>

      <motion.div
        {...fadeUp}
        className="bg-gray-50 rounded-2xl overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:w-2/5">
            <ImageWithFallback
              src={shakirPhoto}
              alt="Muhammad Shakir"
              className="w-full h-full object-cover block min-h-64"
            />
          </div>
          <div className="p-6 md:w-3/5">
            <h3 className="text-xl mb-1">Muhammad Shakir</h3>
            <p className="text-sm text-gray-400 mb-4">Product Designer & Developer</p>
            <p className="text-sm text-gray-600 mb-3">
              I'm <strong>Muhammad Shakir</strong>, a Product Designer and Developer with 4 years of experience turning ideas into real, shipped products.
            </p>
            <p className="text-sm text-gray-600 mb-3">
              Here's what makes working with me different: I don't just hand you a Figma file and wish you luck. I design the experience, build the front-end, and make sure what ships is exactly what was designed. That means faster timelines, fewer miscommunications, and a product that actually looks and works the way it was intended to.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              I've designed and built products across Fintech, SaaS, B2B platforms, recruiting tools, e-commerce, and early-stage startups.
            </p>

            <Link to="/life" className="bg-[#9FE870] rounded-full flex items-center justify-between px-5 py-3 cursor-pointer hover:bg-[#8BD85F] transition-colors">
              <span className="text-sm">Read My Story</span>
              <div className="w-8 h-8 bg-[#163300] rounded-full flex items-center justify-center">
                <ArrowRight size={14} className="text-white" />
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}