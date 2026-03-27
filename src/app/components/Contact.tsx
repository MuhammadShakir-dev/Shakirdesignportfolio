import { motion } from "motion/react";
import { ArrowRight, Calendar, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#163300] rounded-2xl p-8 md:p-12 text-center"
      >
        <h2 className="text-2xl md:text-4xl text-white mb-4">Have a Project in Mind?</h2>
        <p className="text-sm text-gray-300 max-w-lg mx-auto mb-3">
          I'm currently taking on new projects for Q2 2026. Whether you need a website designed, a mobile app built, or the full package from concept to launch, let's talk.
        </p>
        <p className="text-sm text-gray-400 max-w-lg mx-auto mb-8">
          Book a free 15-minute discovery call or drop me a message. No commitment, just a conversation about what you're building.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <motion.a
            href="https://calendly.com/hello-shakirdesign/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#9FE870] text-[#163300] px-7 py-3 rounded-full text-sm flex items-center gap-2"
          >
            <Calendar size={16} /> Book a Free Call
          </motion.a>
          <motion.a
            href="mailto:hello@shakirdesign.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border border-gray-500 text-white px-7 py-3 rounded-full text-sm flex items-center gap-2"
          >
            <Mail size={16} /> Send a Message
          </motion.a>
        </div>

        <div className="text-sm text-gray-400 space-y-1">
          <p>hello@shakirdesign.com</p>
          <p>shakirdesign.com</p>
        </div>
      </motion.div>
    </section>
  );
}