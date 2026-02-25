import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect } from "react";
import { Suspense, lazy } from "react";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";
import IntroModal from "./components/IntroModal";
import BusinessHeader from "./components/BusinessHeader";

const ParticleBackground = lazy(() => import("./components/ParticleBackground"));
const AuroraBackground = lazy(() => import("./components/AuroraBackground"));

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (event) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return prefersReducedMotion;
}

function App() {
  const [introStarted, setIntroStarted] = useState(true);
  const [isDevMode, setIsDevMode] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Watch for language changes to update RTL layout and global fonts natively
  useEffect(() => {
    const handleLanguageChange = () => {
      const currentLang = window.localStorage.getItem('i18nextLng') || navigator.language.split('-')[0];
      const isArabic = currentLang.startsWith('ar');
      document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
      document.documentElement.lang = isArabic ? 'ar' : 'en';

      if (isArabic) {
        document.documentElement.style.setProperty('--font-family', "'Cairo', sans-serif");
      } else {
        document.documentElement.style.removeProperty('--font-family');
      }
    };

    handleLanguageChange();
    window.addEventListener('storage', handleLanguageChange);
    return () => window.removeEventListener('storage', handleLanguageChange);
  }, []);

  return (
    <>
      {!prefersReducedMotion && (isDevMode ? <CustomCursor /> : null)}
      <Suspense fallback={null}>
        {!prefersReducedMotion && (isDevMode ? <ParticleBackground /> : <AuroraBackground />)}
      </Suspense>

      {/* Persistent Business Branding when not in dev mode */}
      {!introStarted && !isDevMode && <BusinessHeader />}

      {introStarted && <IntroModal onComplete={() => setIntroStarted(false)} />}

      {/* Make sure Hero only mounts/starts animation after intro is done */}
      {!introStarted && <Hero isDevMode={isDevMode} setIsDevMode={setIsDevMode} />}

      <Analytics />
    </>
  );
}

export default App;
