import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

// Lazy load components
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <div className="bg-neutral-900 text-neutral-100 min-h-screen font-sans selection:bg-red-500/30">
      <div className="noise-overlay"></div>

      <Header />
      <main className="container mx-auto px-6 py-12 space-y-24">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <Hero />
                <Suspense fallback={<Loader />}>
                  <Projects />
                  <Services />
                  <Skills />
                  <Contact />
                </Suspense>
              </PageTransition>
            } />
            <Route path="/projects" element={
              <PageTransition>
                <Suspense fallback={<Loader />}>
                  <Projects />
                </Suspense>
              </PageTransition>
            } />
            <Route path="/skills" element={
              <PageTransition>
                <Suspense fallback={<Loader />}>
                  <Skills />
                </Suspense>
              </PageTransition>
            } />
            <Route path="/services" element={
              <PageTransition>
                <Suspense fallback={<Loader />}>
                  <Services />
                </Suspense>
              </PageTransition>
            } />
            <Route path="/contact" element={
              <PageTransition>
                <Suspense fallback={<Loader />}>
                  <Contact />
                </Suspense>
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
