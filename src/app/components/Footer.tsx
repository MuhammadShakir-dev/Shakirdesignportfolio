import { motion } from "motion/react";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammadshakir01/" },
  { label: "Twitter/X", href: "https://x.com/areyoushakir" },
  { label: "GitHub", href: "https://github.com/MuhammadShakir-dev" },
  { label: "Dribbble", href: "https://dribbble.com/shakirdesign" },
];

export function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-12">
      <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-400 text-center md:text-left">
          <p>&copy; 2026 Shakir Design. All rights reserved.</p>
          <p>Designed & built by Muhammad Shakir.</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-gray-500">
          {links.map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="hover:text-black transition-colors cursor-pointer"
            >
              {l.label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}