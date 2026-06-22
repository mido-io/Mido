import { useEffect, useState } from 'react';

import { MOBILE_MEDIA_QUERY } from '../constants/breakpoints.js';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = (event) => setMatches(event.matches);

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [query]);

  return matches;
};

export const useIsMobile = () => useMediaQuery(MOBILE_MEDIA_QUERY);

export const useReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');

export const usePrefersWebGL = () => {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  return !isMobile && !reducedMotion;
};
