import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProjectIndex } from "@/components/sections/ProjectIndex";
import { ExperimentLab } from "@/components/sections/ExperimentLab";
import { FeedbackLogs } from "@/components/sections/FeedbackLogs";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { NoiseBackground } from "@/components/ui/NoiseBackground";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen relative">
      <NoiseBackground />
      <div className="fixed inset-0 w-full h-full bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none z-0"></div>
      <div className="fixed inset-0 w-full h-full scanlines z-50 mix-blend-overlay opacity-30 pointer-events-none"></div>

      <Navbar />

      <div className="relative z-10">
        <Hero />

        <div className="w-full h-px bg-mono-gray mb-16 flex justify-between items-center overflow-hidden">
          <div className="h-2 w-2 bg-white"></div>
          <div className="font-mono text-[10px] text-gray-500 tracking-[1em]">
            PROCESSING DATA STREAM {"//"} PACKET LOSS DETECTED
          </div>
          <div className="h-2 w-2 bg-hazard"></div>
        </div>

        <About />
        <ProjectIndex />
        <ExperimentLab />
        <FeedbackLogs />
        <Contact />
        <Footer />
      </div>

      <ScrollToTop />

      <div className="fixed top-20 left-4 w-px h-32 bg-gradient-to-b from-transparent via-hazard to-transparent md:block hidden z-40"></div>
      <div className="fixed bottom-4 right-4 text-[10px] font-mono text-gray-500 md:block hidden z-40">
        MEM_USAGE: 2048MB
      </div>
    </main>
  );
}
