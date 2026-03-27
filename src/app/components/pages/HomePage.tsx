import { Header } from "../Header";
import { Hero } from "../Hero";
import { Services } from "../Services";
import { Cases } from "../Cases";
import { About } from "../About";
import { Process } from "../Process";
import { Testimonials } from "../Testimonials";
import { Thoughts } from "../Thoughts";
import { Contact } from "../Contact";
import { Footer } from "../Footer";

export function HomePage() {
  return (
    <div className="font-[Satoshi,sans-serif] bg-white text-gray-900 antialiased" style={{ scrollBehavior: "smooth" }}>
      <Header />
      <Hero />
      <Services />
      <Cases />
      <About />
      <Process />
      <Testimonials />
      <Thoughts />
      <Contact />
      <Footer />
    </div>
  );
}
