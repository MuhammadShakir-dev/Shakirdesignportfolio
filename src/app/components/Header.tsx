import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const links = [
    { label: "Work", id: "cases" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Blog", id: "thoughts" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-sm tracking-wide font-medium">[Shakir Design]</span>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm text-gray-500 hover:text-black transition-colors cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <motion.a
              href="https://calendly.com/hello-shakirdesign/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-[#163300] text-white px-5 py-2 rounded-full text-sm hover:bg-[#0F2400] cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(159, 232, 112, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <motion.span
                className="absolute inset-0 bg-[#9FE870] rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.15 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10">Let's Talk</span>
            </motion.a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden bg-[#163300] text-white p-2 rounded-full cursor-pointer"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 min-w-[200px] md:hidden"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="block w-full text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                {l.label}
              </button>
            ))}
            <a
              href="https://calendly.com/hello-shakirdesign/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full bg-[#163300] text-white px-5 py-2 rounded-full text-sm cursor-pointer"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}