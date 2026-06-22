let gsapModulePromise;

export function loadGsapScrollTrigger() {
  if (!gsapModulePromise) {
    gsapModulePromise = Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([gsapImport, scrollTriggerImport]) => {
        const gsap = gsapImport.default;
        const { ScrollTrigger } = scrollTriggerImport;
        gsap.registerPlugin(ScrollTrigger);
        return { gsap, ScrollTrigger };
      },
    );
  }

  return gsapModulePromise;
}
