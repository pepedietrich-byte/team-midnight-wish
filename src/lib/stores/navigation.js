import { writable, derived } from 'svelte/store';

export const activeSection = writable('hero');
export const menuOpen      = writable(false);

/** Section ids in order — used for nav highlighting. */
export const SECTIONS = ['hero', 'about', 'events', 'showcase', 'values', 'pvp'];

/**
 * Call from layout to wire up IntersectionObserver
 * and keep activeSection in sync.
 */
export function initSectionTracking() {
  if (typeof IntersectionObserver === 'undefined') return;

  const observers = SECTIONS.map((id) => {
    const el = document.getElementById(id);
    if (!el) return null;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) activeSection.set(id);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return obs;
  }).filter(Boolean);

  return () => observers.forEach((o) => o.disconnect());
}