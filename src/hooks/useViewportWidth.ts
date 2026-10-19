import { useEffect, useState } from 'react';

const read = () => (typeof window !== 'undefined' && window.innerWidth) || document.documentElement.clientWidth || 1200;

/**
 * Live viewport width. Listens to resize and also observes the root element,
 * so the layout corrects itself if the width settles after first paint.
 */
export function useViewportWidth() {
  const [vw, setVw] = useState(read);
  useEffect(() => {
    const update = () => setVw(read());
    update();
    window.addEventListener('resize', update);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    ro?.observe(document.documentElement);
    return () => {
      window.removeEventListener('resize', update);
      ro?.disconnect();
    };
  }, []);
  return vw;
}

/** Breakpoint where the nav collapses to a Menu button and phone layouts kick in. */
export const WIDE_MIN = 760;
