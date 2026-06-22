import { useState } from 'react';

export const useCanvasDpr = (max = 1.5) =>
  useState(() => {
    if (typeof window === 'undefined') return 1;
    return Math.min(window.devicePixelRatio || 1, max);
  })[0];
