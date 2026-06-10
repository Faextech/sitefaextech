import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Solutions from "@/components/Solutions";
import Ecosystem from "@/components/Ecosystem";
import Platform from "@/components/Platform";
import AISection from "@/components/AISection";
import About from "@/components/About";
import GroupTrust from "@/components/GroupTrust";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Process />
        <Solutions />
        <Ecosystem />
        <Platform />
        <AISection />
        <About />
        <GroupTrust />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
