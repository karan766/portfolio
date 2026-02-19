import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

// Lazy load heavy components
const RecentProjects = lazy(() => import("@/components/RecentProjects"));
const Skills = lazy(() => import("@/components/Skills"));
const Experience = lazy(() => import("@/components/Experience"));
const Education = lazy(() => import("@/components/Education"));
const Approach = lazy(() => import("@/components/Approach"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading component for lazy loaded sections
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-8 h-8 border-2 border-purple/20 border-t-purple rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  return (
    <main 
      className="relative bg-black flex justify-center flex-col overflow-clip mx-auto px-3 sm:px-5 md:px-8 lg:px-10" 
      style={{ 
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
      }}
    >
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <RecentProjects />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Approach />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}
