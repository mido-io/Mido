import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Copy, CopyCheck } from 'lucide-react';

import { assets } from '../../constants/assets.js';
import Button from '../Button';
import TechStackGrid from '../TechStackGrid.jsx';
import { profile } from '../../constants/profile.js';
import { useInView } from '../../hooks/useInView.js';
import { useIsMobile, useReducedMotion } from '../../hooks/useMediaQuery.js';
import { loadGsapScrollTrigger } from '../../utils/loadGsap.js';

const AboutGlobe = lazy(() => import('../three/AboutGlobe.jsx'));

const GlobePlaceholder = () => (
  <div className="w-full max-w-[280px] aspect-square rounded-full border border-white/10 bg-black-300/40 flex flex-col items-center justify-center gap-3 px-6 text-center mx-auto">
    <div className="w-3 h-3 rounded-full bg-white/80 animate-pulse" aria-hidden="true" />
    <p className="text-white-800 text-sm font-medium">{profile.location.label}</p>
    <p className="text-white-600 text-xs">Remote worldwide</p>
  </div>
);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const globeRef = useRef(null);
  const [hasCopied, setHasCopied] = useState(false);

  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const globeInView = useInView(globeRef, { rootMargin: '200px' });
  const shouldLoadGlobe = !isMobile && globeInView;

  useEffect(() => {
    const content = contentRef.current;
    if (!content || reducedMotion || isMobile) return undefined;

    let animation;
    let cancelled = false;

    loadGsapScrollTrigger().then(({ gsap }) => {
      if (cancelled) return;

      animation = gsap.fromTo(
        content,
        { y: 48 },
        {
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '#home',
            start: '92% top',
            end: 'bottom top',
            scrub: 0.35,
          },
        },
      );
    });

    return () => {
      cancelled = true;
      animation?.scrollTrigger?.kill();
      animation?.kill();
    };
  }, [reducedMotion, isMobile]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setHasCopied(true);

      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    } catch {
      setHasCopied(false);
    }
  };

  return (
    <section ref={sectionRef} className="c-space my-10 lg:my-24 relative" id="about">
      <div
        ref={contentRef}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6 gap-4 lg:gap-5 h-full"
      >
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={assets.about.photo}
              alt="Mido Farhat"
              className="w-full max-h-[220px] lg:h-[276px] object-contain mx-auto"
              width={460}
              height={463}
              loading="lazy"
              decoding="async"
            />

            <div>
              <p className="grid-headtext">Hi, I&apos;m {profile.fullName}</p>
              <p className="grid-subtext">
                Built 10+ production web & mobile products, turning ideas into real-world applications with a focus on performance, scalability, and user experience.
              </p>
              <Button
                name="Download CV"
                href={assets.media.cv}
                download
                variant="secondary"
                containerClass="w-full mt-6"
              />
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <TechStackGrid />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div ref={globeRef} className="rounded-3xl w-full min-h-[200px] lg:h-[326px] flex justify-center items-center">
              {shouldLoadGlobe ? (
                <Suspense fallback={<GlobePlaceholder />}>
                  <AboutGlobe />
                </Suspense>
              ) : (
                <GlobePlaceholder />
              )}
            </div>
            <div>
              <p className="grid-headtext">I&apos;m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">
                I&apos;m based in {profile.location.label} and open to remote work worldwide.
              </p>
              <Button name="Contact Me" isBeam variant="primary" containerClass="w-full mt-6 lg:mt-10" href="#contact" />
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src={assets.about.grid3}
              alt=""
              className="hidden lg:block w-full sm:h-[266px] h-fit object-contain"
              loading="lazy"
              decoding="async"
            />

            <div>
              <p className="grid-headtext">Building Philosophy</p>
              <p className="grid-subtext">
               I focus on building products that solve real problems — balancing clean engineering, performance, and intuitive user experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src={assets.about.grid4}
              alt=""
              className="hidden lg:block w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              loading="lazy"
              decoding="async"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center lg:text-left">Contact me</p>
              <button
                type="button"
                className="copy-container"
                onClick={handleCopy}
                aria-label={hasCopied ? 'Email copied to clipboard' : 'Copy email address'}
              >
                {hasCopied ? (
                  <CopyCheck className="text-[#8fb7ff] w-5 h-5 shrink-0" aria-hidden="true" />
                ) : (
                  <Copy className="text-white-800 w-5 h-5 shrink-0" aria-hidden="true" />
                )}
                <span className="text-sm lg:text-base font-medium text-white-800 break-all">{profile.email}</span>
              </button>
              <p className="sr-only" aria-live="polite">
                {hasCopied ? 'Email copied to clipboard' : ''}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
