import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Results } from "@/components/sections/Results";
import { Cases } from "@/components/sections/Cases";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Tools } from "@/components/sections/Tools";
import { Testimonials } from "@/components/sections/Testimonials";
import { Books } from "@/components/sections/Books";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Results />
        <Cases />
        <Experience />
        <Education />
        <Tools />
        <Testimonials />
        <Books />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
