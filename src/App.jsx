import { Analytics } from "@vercel/analytics/react";
import { lazy, Suspense } from 'react';

import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Clients from './components/sections/Clients';
import SectionFallback from './components/SectionFallback.jsx';

const About = lazy(() => import('./components/sections/About'));
const Projects = lazy(() => import('./components/sections/Projects'));

function App() {
  return (
    <>
      <main className="max-w-7xl mx-auto overflow-x-hidden">
        <Navbar />
        <Hero />
        <Suspense fallback={<SectionFallback label="Loading about section…" />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback label="Loading projects section…" />}>
          <Projects />
        </Suspense>
        <Experience />
        <Clients />
        <Contact />
        <Footer />
      </main>

      <Analytics />
    </>
  );
}

export default App;
