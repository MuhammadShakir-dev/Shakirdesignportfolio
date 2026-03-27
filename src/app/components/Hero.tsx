import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";
import imgSketch from "figma:asset/0d9230051a3f3b62c150f8586d50247da03281bb.png";
import imgFramer from "figma:asset/1253049cc24244f0e092bc0f3ee7f650515bc9ed.png";
import imgWebflow from "figma:asset/ee567fb8cbe89fc29a99dddbb405739d72aac529.png";
import imgZapier from "figma:asset/c1dd94924194281a2cea012f5dfef7f6d58a799c.png";
import imgRealityComposer from "figma:asset/72ee0c7d47bda910cca59fa484d03b9bb78885a3.png";
import imgCoda from "figma:asset/f4ead58cc3e4de001c3fc8388d9760a3c423b4cd.png";
import imgGithub from "figma:asset/47e07696b3dd22cd7a07cffcc86764512e70c754.png";
import imgFigma from "figma:asset/f946ddfa45d9677818bceeb137033eb5e288a650.png";
import imgSlack from "figma:asset/671e5cd3e75dd6899bfc98b8d02c6658752d3769.png";
import imgNotion from "figma:asset/7cba8b411cda3f2fff265de10be32ba91e7cbe33.png";
import imgMyPicture1 from "figma:asset/1b1a3d01a47b6597711c5aecaece20ffdc1b5b6c.png";

const toolLogos = [
  { src: imgSketch, alt: "Sketch" },
  { src: imgFramer, alt: "Framer" },
  { src: imgWebflow, alt: "Webflow" },
  { src: imgZapier, alt: "Zapier" },
  { src: imgRealityComposer, alt: "Reality Composer" },
  { src: imgCoda, alt: "Coda", crop: true },
  { src: imgGithub, alt: "GitHub" },
  { src: imgFigma, alt: "Figma", scale: 1.8 },
  { src: imgSlack, alt: "Slack" },
  { src: imgNotion, alt: "Notion", crop: true },
];

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight text-[#163300]">
          Product
          <span className="inline-block mx-3 align-middle relative -top-1">
            <span className="inline-block w-12 h-16 md:w-16 md:h-22 bg-[#9FE870]/40 rounded-[2rem] overflow-hidden relative">
              <img
                src={imgMyPicture1}
                alt="Shakir"
                className="absolute w-[120%] h-[95%] left-[-10%] bottom-0 max-w-none object-cover object-top"
              />
            </span>
          </span>
          Designer
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight mt-1 text-[#163300]">
          & Developer
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 text-gray-500 text-sm md:text-base max-w-xl mx-auto"
        >
          Product Designer + Developer with 4 years of experience. I take your idea from Figma to a live, production-ready product no handoff needed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("cases")}
            className="bg-[#163300] text-white px-7 py-3 rounded-full text-sm flex items-center gap-2 hover:bg-[#0F2400] transition-colors cursor-pointer"
          >
            View My Work <ArrowRight size={16} />
          </button>
          <a
            href="https://calendly.com/hello-shakirdesign/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 px-7 py-3 rounded-full text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <Calendar size={16} /> Book a Free Call
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-24 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      >
        <div className="flex w-max items-center animate-[marquee_20s_linear_infinite]">
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-[50px] px-[25px]">
              {toolLogos.map((logo) => (
                <div key={logo.alt} className="relative shrink-0 w-[51px] h-[51px] overflow-hidden">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`pointer-events-none ${
                      logo.crop
                        ? "absolute max-w-none w-[200%] h-[200%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
                        : "absolute inset-0 w-full h-full object-contain"
                    }`}
                    style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </motion.div>
    </section>
  );
}