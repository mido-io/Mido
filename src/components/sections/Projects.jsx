import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Play, Wallet, Box } from 'lucide-react';

import SectionHeader from '../SectionHeader.jsx';
import { myProjects } from '../../constants/index.js';
import { assets } from '../../constants/assets.js';
import { useInView } from '../../hooks/useInView.js';
import { useIsMobile, useReducedMotion } from '../../hooks/useMediaQuery.js';

const ProjectsScene = lazy(() => import('../three/ProjectsScene.jsx'));

const logoIcons = {
  wallet: Wallet,
  box: Box,
};

const SWIPE_THRESHOLD = 50;

const ProjectLogo = ({ project }) => {
  const Icon = project.logoIcon ? logoIcons[project.logoIcon] : null;

  return (
    <div className="relative z-10 w-fit">
      <div className="p-3 backdrop-filter backdrop-blur-3xl rounded-lg" style={project.logoStyle}>
        {Icon ? (
          <Icon
            className={`w-10 h-10 ${project.logoIcon === 'wallet' ? 'text-[#3FCF8E]' : 'text-[#8fb7ff]'}`}
            strokeWidth={1.5}
          />
        ) : (
          <img className="w-10 h-10 object-contain shadow-sm" src={project.logo} alt={`${project.title} logo`} />
        )}
      </div>
    </div>
  );
};

const PreviewPlaceholder = () => (
  <div className="w-full h-full bg-black-300/30 animate-pulse" aria-hidden="true" />
);

const MobileProjectPreview = ({ project }) => {
  const previewRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const reducedMotion = useReducedMotion();
  const inView = useInView(previewRef, { rootMargin: '100px' });

  useEffect(() => {
    setIsPlaying(false);
  }, [project.id]);

  if (reducedMotion || !isPlaying) {
    return (
      <div ref={previewRef} className="relative w-full h-full overflow-hidden rounded-lg bg-black-300/40">
        <img
          src={project.spotlight}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40" />
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white-800 hover:text-white transition-colors"
          aria-label={`Play ${project.title} preview`}
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <Play className="w-6 h-6 ml-0.5" fill="currentColor" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium">Tap to preview</span>
        </button>
      </div>
    );
  }

  return (
    <div ref={previewRef} className="relative w-full h-full overflow-hidden rounded-lg bg-black-300/40">
      {inView ? (
        <video
          key={project.texture}
          src={project.texture}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          aria-label={`${project.title} preview`}
        />
      ) : (
        <PreviewPlaceholder />
      )}
    </div>
  );
};

const ProjectPreview = ({ project }) => {
  const previewRef = useRef(null);
  const isMobile = useIsMobile();
  const inView = useInView(previewRef, { rootMargin: '250px' });
  const shouldLoadScene = !isMobile && inView;

  if (isMobile) {
    return <MobileProjectPreview key={project.id} project={project} />;
  }

  return (
    <div ref={previewRef} className="w-full h-full">
      {shouldLoadScene ? (
        <Suspense fallback={<PreviewPlaceholder />}>
          <ProjectsScene texture={project.texture} />
        </Suspense>
      ) : (
        <PreviewPlaceholder />
      )}
    </div>
  );
};

const projectCount = myProjects.length;

const Projects = () => {
  const panelRef = useRef(null);
  const touchStartX = useRef(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  const goToProject = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      }
      return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
    });
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

    goToProject(deltaX > 0 ? 'previous' : 'next');
  };

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-12 lg:my-16 p-2" id="projects">
      <SectionHeader
        title={
          <>
            My <span className="head-text-accent">Selected</span> Work
          </>
        }
        subtitle="Production apps for Arabic markets, client portfolios, and open-source tools — shipped end to end."
      />

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div
          ref={panelRef}
          className="projects-panel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="projects-panel-scrim" aria-hidden="true" />

          <div className="absolute top-0 right-0 w-2/3 max-w-sm h-64 hidden sm:block pointer-events-none z-0 opacity-40">
            <img
              src={currentProject.spotlight}
              alt=""
              className="w-full h-full object-cover rounded-xl"
              loading="lazy"
              decoding="async"
            />
          </div>

          <ProjectLogo project={currentProject} />

          <div
            key={selectedProjectIndex}
            className={`flex flex-col gap-4 text-white-700 md:text-white-600 my-5 relative z-10${reducedMotion ? '' : ' project-text-animate'}`}
          >
            <p className="text-white text-xl md:text-2xl font-semibold animatedText">{currentProject.title}</p>
            <p className="animatedText text-[0.95rem] md:text-base leading-relaxed">{currentProject.desc}</p>
            <p className="animatedText text-sm leading-relaxed">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5 relative z-10">
            <div className="flex items-center gap-3 flex-wrap">
              {currentProject.tags.map((tag) => (
                <div key={tag.id} className="tech-logo" title={tag.name}>
                  <img src={tag.path} alt={tag.name} loading="lazy" />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 text-white-600 hover:text-white transition-colors"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>Check Live Site</span>
              <img src={assets.icons.arrowUp} alt="" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex flex-col gap-4 mt-7 relative z-10">
            <div className="flex justify-center gap-2" role="tablist" aria-label="Project slides">
              {myProjects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  aria-selected={index === selectedProjectIndex}
                  aria-label={`Show ${project.title}`}
                  className={`project-dot ${index === selectedProjectIndex ? 'project-dot--active' : ''}`}
                  onClick={() => setSelectedProjectIndex(index)}
                />
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                type="button"
                className="arrow-btn"
                onClick={() => goToProject('previous')}
                aria-label="Previous project"
              >
                <img src={assets.icons.leftArrow} alt="" />
              </button>
              <p className="text-white-600 text-sm">
                {selectedProjectIndex + 1} / {projectCount}
              </p>
              <button
                type="button"
                className="arrow-btn"
                onClick={() => goToProject('next')}
                aria-label="Next project"
              >
                <img src={assets.icons.rightArrow} alt="" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-64 sm:h-80 lg:h-full lg:min-h-[360px] overflow-hidden">
          <ProjectPreview project={currentProject} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
