import { lazy, Suspense, useEffect, useRef, useState } from 'react';

import { assets } from '../../constants/assets.js';
import { profile } from '../../constants/profile.js';
import { useInView } from '../../hooks/useInView.js';
import { useIsMobile, useReducedMotion } from '../../hooks/useMediaQuery.js';
import { loadGsapScrollTrigger } from '../../utils/loadGsap.js';
import Button from '../Button';

const HeroScene = lazy(() => import('../three/HeroScene.jsx'));

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const remap = (progress, start, end) => {
  if (end <= start) return progress >= end ? 1 : 0;
  return clamp((progress - start) / (end - start));
};

const lerp = (start, end, amount) => start + (end - start) * amount;

const emergeStyle = (reveal) => ({
  opacity: reveal,
  transform: `translateY(${lerp(-15, 0, reveal)}px)`,
  filter: `blur(${lerp(5, 0, reveal)}px)`,
});

const getFrameState = (progress) => {
  // Morph web → mobile in the first ~65% of hero scroll; no fade-to-black exit.
  const browserReveal = remap(progress, 0.05, 0.16);
  const browserFadeOut = remap(progress, 0.34, 0.44);
  const browserMorph = clamp(browserReveal * (1 - browserFadeOut));

  const phoneReveal = remap(progress, 0.34, 0.44);
  const phoneMorph = remap(progress, 0.34, 0.58);

  const pedestalOpacity = clamp(1 - browserMorph * 0.92 - phoneReveal * 0.28);

  return {
    browserMorph,
    browserReveal,
    phoneReveal,
    phoneMorph,
    exitProgress: 0,
    pedestalOpacity,
    webCaptionOpacity: clamp(browserMorph * (1 - phoneMorph * 1.2)),
    mobileCaptionOpacity: clamp(phoneMorph),
    shellWidthPct: lerp(100, 72, phoneMorph),
    shellMaxWidthPx: lerp(520, 280, phoneMorph),
    shellHeightVh: lerp(55, 63, phoneMorph),
    shellHeightMaxPx: lerp(520, 580, phoneMorph),
    shellMinHeightPx: lerp(360, 420, phoneMorph),
    borderRadiusPx: lerp(24, 24, browserMorph) - browserMorph * 6 + phoneMorph * 28,
    browserBarHeightPx: 52 * browserMorph,
    canvasScale: lerp(1, 1.08, phoneMorph),
    shellScale: 1,
    shellTranslateY: 0,
    shellOpacity: 1,
    heroTextOpacity: 1,
    heroTextTranslateY: 0,
    phoneInsetPx: phoneReveal * 10,
    phoneInnerRadiusPx: phoneReveal * 22,
  };
};

const VisualPlaceholder = () => (
  <div className="w-full h-full bg-black-300/30 animate-pulse" aria-hidden="true" />
);

const Hero = () => {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const useStaticVisual = isMobile || reducedMotion;
  const visualInView = useInView(visualRef, { rootMargin: '300px' });
  const shouldLoadScene = !useStaticVisual && visualInView;

  const scrollVh = useStaticVisual ? 0 : (profile.heroScrollVh ?? 90);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || useStaticVisual) return undefined;

    let scrollTrigger;
    let cancelled = false;

    loadGsapScrollTrigger().then(({ ScrollTrigger }) => {
      if (cancelled) return;

      scrollTrigger = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.35,
        onUpdate: (self) => setProgress(self.progress),
      });
    });

    return () => {
      cancelled = true;
      scrollTrigger?.kill();
    };
  }, [scrollVh, useStaticVisual]);

  const frame = getFrameState(progress);
  const browserEmerge = emergeStyle(frame.browserReveal);
  const phoneEmerge = emergeStyle(frame.phoneReveal);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full ${useStaticVisual ? '' : 'min-h-screen'}`}
      id="home"
      style={scrollVh > 0 ? { height: `calc(100vh + ${scrollVh}vh)` } : undefined}
    >
      <div
        className={
          useStaticVisual
            ? 'relative w-full overflow-hidden isolate'
            : 'sticky top-0 h-screen w-full overflow-hidden isolate hero-scroll-stage'
        }
      >
        <div className="c-space relative z-10 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10 lg:h-full pt-[4.5rem] lg:pt-28 pb-4 lg:pb-10 max-w-7xl mx-auto">
          <div className="w-full shrink-0 lg:flex-1 text-center lg:text-left order-1">
            <p className="hero-eyebrow font-generalsans mb-2 tracking-wide">
              Hi, I&apos;m {profile.displayName}
            </p>

            <h1 className="hero_tag text-gray_gradient lg:text-left">{profile.tagline}</h1>

            <p className="hero-lead font-generalsans mt-3 lg:mt-4 tracking-wide">
              {profile.role}
            </p>

            <div className="hidden lg:flex flex-row gap-3 mt-8 justify-start">
              <Button name="View my work" href="#projects" variant="primary" containerClass="lg:mx-0" />
              <Button name="Contact me" href="#contact" variant="secondary" containerClass="lg:mx-0" />
            </div>
          </div>

          <div className="w-full shrink-0 lg:flex-1 flex justify-center order-2">
            <div
              className="hero-visual-shell relative w-full mx-auto will-change-transform"
              style={{
                width: useStaticVisual ? '100%' : `${frame.shellWidthPct}%`,
                maxWidth: useStaticVisual ? '240px' : `${frame.shellMaxWidthPx}px`,
                transform: useStaticVisual ? undefined : `translateY(${frame.shellTranslateY}px) scale(${frame.shellScale})`,
                transformOrigin: 'center center',
              }}
            >
              <div
                className="hero-visual-stage relative overflow-hidden shadow-2xl border border-white/5 will-change-transform"
                style={{
                  height: useStaticVisual ? '200px' : `min(${frame.shellHeightVh}vh, ${frame.shellHeightMaxPx}px)`,
                  minHeight: useStaticVisual ? '200px' : `${frame.shellMinHeightPx}px`,
                  borderRadius: useStaticVisual ? '28px' : `${frame.borderRadiusPx}px`,
                  background:
                    useStaticVisual || frame.pedestalOpacity > 0.12
                      ? `radial-gradient(circle at center, rgba(47,55,77,${useStaticVisual ? 0.45 : frame.pedestalOpacity}) 0%, rgba(18,23,34,${useStaticVisual ? 0.45 : frame.pedestalOpacity}) 55%, rgba(5,7,13,${useStaticVisual ? 0.45 : frame.pedestalOpacity}) 100%)`
                      : '#0a0a0c',
                }}
              >
                {!useStaticVisual && (
                  <>
                    <div
                      className="hero-browser-bar absolute top-0 inset-x-0 z-20 flex items-center gap-3 px-4 border-b border-white/5 bg-black-200/95 overflow-hidden"
                      style={{
                        height: `${frame.browserBarHeightPx}px`,
                        ...browserEmerge,
                      }}
                    >
                      <div className="flex gap-1.5 shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                      </div>
                      <div className="flex-1 h-7 rounded-md bg-black-300/80 border border-white/5 flex items-center px-3 min-w-0">
                        <span className="text-[11px] text-white-500 tracking-wide truncate">
                          mido.dev / portfolio
                        </span>
                      </div>
                    </div>

                    <div
                      className="absolute top-0 inset-x-0 z-20 flex justify-center pt-3 pointer-events-none"
                      style={phoneEmerge}
                    >
                      <div className="w-16 h-4 rounded-full bg-black-600 border border-white/5 shadow-inner" />
                    </div>

                    <div
                      className="absolute bottom-0 inset-x-0 z-20 flex justify-center pb-3 pointer-events-none"
                      style={phoneEmerge}
                    >
                      <div className="w-24 h-1 rounded-full bg-white/20" />
                    </div>
                  </>
                )}

                {useStaticVisual && (
                  <div className="absolute top-0 inset-x-0 z-20 flex justify-center pt-3 pointer-events-none">
                    <div className="w-16 h-4 rounded-full bg-black-600 border border-white/5 shadow-inner" />
                  </div>
                )}

                <div
                  ref={visualRef}
                  className="absolute inset-0 z-10 overflow-hidden will-change-transform"
                  style={
                    useStaticVisual
                      ? {
                          top: '24px',
                          bottom: '24px',
                          margin: '0 10px',
                          borderRadius: '22px',
                        }
                      : {
                          top: `${frame.browserBarHeightPx}px`,
                          bottom: `${frame.phoneInsetPx}px`,
                          margin: `0 ${frame.phoneInsetPx}px`,
                          borderRadius: `${frame.phoneInnerRadiusPx}px`,
                          transform: `scale(${frame.canvasScale})`,
                          transformOrigin: 'center center',
                        }
                  }
                >
                  {useStaticVisual ? (
                    <img
                      src={assets.about.photo}
                      alt="Mido Farhat"
                      className="w-full h-full object-cover object-center"
                      width={2000}
                      height={2666}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                    />
                  ) : (
                    <>
                      {shouldLoadScene ? (
                        <Suspense fallback={<VisualPlaceholder />}>
                          <HeroScene />
                        </Suspense>
                      ) : (
                        <VisualPlaceholder />
                      )}
                    </>
                  )}
                </div>

                {!useStaticVisual && (
                  <div
                    className="hero-visual-caption absolute inset-x-0 bottom-0 z-30 px-5 pb-5 pt-16 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none"
                    aria-live="polite"
                  >
                    <div className="hero-caption-set" style={{ opacity: frame.webCaptionOpacity }}>
                      <p className="text-sm text-white-800 font-medium tracking-wide">
                        {profile.heroFrames.web.title}
                      </p>
                      <p className="text-xs text-white-500 mt-1 tracking-wider">
                        {profile.heroFrames.web.subtitle}
                      </p>
                    </div>

                    <div
                      className="hero-caption-set absolute inset-x-5 bottom-5"
                      style={{ opacity: frame.mobileCaptionOpacity }}
                    >
                      <p className="text-sm text-white-800 font-medium tracking-wide">
                        {profile.heroFrames.mobile.title}
                      </p>
                      <p className="text-xs text-white-500 mt-1 tracking-wider">
                        {profile.heroFrames.mobile.subtitle}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex lg:hidden flex-col gap-3 w-full order-3">
            <Button name="View my work" href="#projects" variant="primary" containerClass="w-full" />
            <Button name="Contact me" href="#contact" variant="secondary" containerClass="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
