import { motion } from "motion/react";
import { ArrowLeft, MapPin, Music, Camera, BookOpen, Coffee, Plane, Heart } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import shakirPhoto from "figma:asset/10da6708c61a4fe2f9da1b89d58e921f29c7877b.png";
import galleryImg1 from "figma:asset/b00d5080893f0dda6392e673d267fa2df4d4988d.png";
import galleryImg2 from "figma:asset/86a4a65f83ef14aac8c61a11378e9cdd632c0706.png";
import galleryImg3 from "figma:asset/198e6c814dbc1f1bdd61ffb7d1705e836acd1c2e.png";
import galleryImg5 from "figma:asset/442b4396b3ac8b5de44e87ee9638ae20a3a255af.png";
import galleryImg4 from "figma:asset/7e671436f93b2a6b8aaa2b6b356a924445538fe2.png";
import travelingImg2 from "figma:asset/3810602a23ced2619a1d3bdbbf4c978c8dacf4bf.png";
import photographyImg from "figma:asset/537f0c5f04d083a440cb6a6d180463c0db4cb91d.png";
import coffeeImg from "figma:asset/eb4bfa8121bfc702ba2ca1c7f45125ac20e83d0c.png";
import readingImg from "figma:asset/77174144a32e78d7f7dacc3c80f96258d9633a43.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const interests = [
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments through minimal and architectural photography. I find beauty in clean lines and natural light.",
    image: photographyImg,
  },
  {
    icon: Plane,
    title: "Traveling",
    description: "Exploring new cultures and drawing design inspiration from architecture and art around the world.",
    image: travelingImg2,
  },
  {
    icon: BookOpen,
    title: "Reading",
    description: "Always learning, from design systems and psychology to sci-fi novels. Knowledge fuels creativity.",
    image: readingImg,
  },
  {
    icon: Coffee,
    title: "Coffee Culture",
    description: "A pour-over enthusiast. My best design ideas happen between the first and third cup.",
    image: coffeeImg,
  },
];

const funFacts = [
  "I've designed products used by 10M+ users worldwide",
  "I can sketch a wireframe faster than I can explain it",
  "Night owl, my best work happens after midnight",
  "I've visited 12+ countries for design inspiration",
  "My Figma file organization is borderline obsessive",
  "I believe every pixel tells a story",
];

const galleryImages = [
  {
    src: galleryImg1,
    caption: "Speaking at Notion for Students",
  },
  {
    src: galleryImg2,
    caption: "Beyond Make with Notion Pakistan",
  },
  {
    src: galleryImg3,
    caption: "Behind the scenes",
  },
  {
    src: galleryImg4,
    caption: "Mountains of Pakistan",
  },
  {
    src: galleryImg5,
    caption: "Exploring the northern areas",
  },
];

const timeline = [
  { year: "2022", event: "Started my design journey with UI/UX fundamentals" },
  { year: "2023", event: "First freelance client, designed a fintech dashboard" },
  { year: "2024", event: "Launched Shakir Design studio, worked with 20+ clients" },
  { year: "2025", event: "Expanded into full-stack design + development" },
  { year: "2026", event: "Building products that convert, design to production" },
];

export function LifePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-6 pt-28">
        <motion.button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#163300] transition-colors cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ArrowLeft size={16} /> Back to Home
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">[Beyond the Pixels]</p>
            <h1 className="text-4xl md:text-5xl tracking-tight leading-tight text-[#163300]">
              The Person Behind the Designs
            </h1>
            <p className="mt-6 text-gray-500 leading-relaxed">
              Hey! I'm <span className="text-[#163300]">Muhammad Shakir</span>, a designer, builder, and someone who genuinely can't stop being curious about how things work.
              <br /><br />
              By day, I'm a Product Designer who also writes code. I design products in Figma and build them in React and Next.js which means what I design is what actually ships. No lost-in-translation moments between design and development. I've spent the last 4 years doing this across Fintech, SaaS, B2B, and startups, and I still get the same rush seeing something I designed go live.
              <br /><br />
              Outside of work, I lead Notion Karachi as a Chapter Lead and serve as a Notion Ambassador, building a community of people who love systems, productivity, and making their workflows smarter. There's something deeply satisfying about helping someone set up a system that just clicks for them.
              <br /><br />
              When I'm not pushing pixels or writing code, you'll probably find me exploring a new part of the country, capturing moments through my camera, or tucked into a corner with a good book and too much coffee.
              <br /><br />
              I believe great work happens at the intersection of curiosity, craft, and community. If any of that resonates say hi.
            </p>
            <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
              <MapPin size={14} />
              <span>Pakistan, Available Worldwide</span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-[#f5f5f0] aspect-[3/4]">
              <ImageWithFallback
                src={shakirPhoto}
                alt="Muhammad Shakir"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#9FE870] rounded-2xl px-5 py-3">
              <p className="text-xs text-[#163300]">Designing since</p>
              <p className="text-[#163300]">2022</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Life Gallery */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.p {...fadeUp} className="text-xs tracking-widest text-gray-400 uppercase mb-4">Moments</motion.p>
        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl tracking-tight text-[#163300] mb-12">Life in Frames</motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.caption}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.p {...fadeUp} className="text-xs tracking-widest text-gray-400 uppercase mb-4">What I Love</motion.p>
        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl tracking-tight text-[#163300] mb-12">Beyond Design</motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-gray-100 overflow-hidden hover:border-[#9FE870] transition-colors"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#9FE870]/20 flex items-center justify-center">
                    <item.icon size={18} className="text-[#163300]" />
                  </div>
                  <h3 className="text-[#163300]">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.p {...fadeUp} className="text-xs tracking-widest text-gray-400 uppercase mb-4">Did You Know?</motion.p>
        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl tracking-tight text-[#163300] mb-12">Fun Facts About Me</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {funFacts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#f5f5f0] rounded-2xl p-6 hover:bg-[#9FE870]/15 transition-colors"
            >
              <div className="flex items-start gap-3">
                <Heart size={16} className="text-[#9FE870] mt-0.5 shrink-0" />
                <p className="text-sm text-[#163300] leading-relaxed">{fact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.p {...fadeUp} className="text-xs tracking-widest text-gray-400 uppercase mb-4">My Journey</motion.p>
        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl tracking-tight text-[#163300] mb-12">The Timeline</motion.h2>
        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gray-200" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="w-10 h-10 rounded-full bg-[#9FE870] flex items-center justify-center shrink-0 relative z-10">
                  <span className="text-xs text-[#163300]">{item.year}</span>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-5 flex-1">
                  <p className="text-sm text-gray-600 leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Music / Current Vibes */}
      <section className="max-w-5xl mx-auto px-6 py-16 pb-24">
        <motion.div
          {...fadeUp}
          className="bg-[#163300] rounded-2xl p-8 md:p-12 text-center"
        >
          <Music size={32} className="text-[#9FE870] mx-auto mb-4" />
          <h3 className="text-white text-2xl mb-3">Currently Vibing To</h3>
          <p className="text-gray-400 text-sm mb-6">The playlist that fuels my design sessions</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Lo-fi Beats", "Hans Zimmer", "Indie Folk", "Jazz Chill", "Ambient Focus"].map((genre) => (
              <span
                key={genre}
                className="bg-white/10 text-white/80 text-xs px-4 py-2 rounded-full border border-white/10"
              >
                {genre}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}