import type { Action } from 'svelte/action';

export function fadeInUp(
  _node: Element,
  { delay = 0, duration = 600, distance = 24 }: { delay?: number; duration?: number; distance?: number } = {}
) {
  return {
    delay,
    duration,
    css: (t: number) => `
      opacity: ${t};
      transform: translateY(${(1 - t) * distance}px);
    `
  };
}

export const scrollReveal: Action<HTMLElement, { threshold?: number; delay?: number; distance?: number } | undefined> = (
  node,
  options = {}
) => {
  const { threshold = 0.12, delay = 0, distance = 22 } = options ?? {};

  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq.matches) return { destroy() {} };

  node.style.opacity = '0';
  node.style.transform = `translateY(${distance}px)`;
  node.style.transition = `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
          observer.unobserve(node);
        }
      }
    },
    { threshold }
  );

  observer.observe(node);
  return { destroy() { observer.disconnect(); } };
};

export const staggerReveal: Action<HTMLElement, { delay?: number; step?: number } | undefined> = (
  node,
  options = {}
) => {
  const { delay = 0, step = 80 } = options ?? {};

  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq.matches) return { destroy() {} };

  const children = Array.from(node.children) as HTMLElement[];

  children.forEach((child, i) => {
    child.style.opacity = '0';
    child.style.transform = 'translateY(18px)';
    child.style.transition = `opacity 0.55s ease ${delay + i * step}ms, transform 0.55s ease ${delay + i * step}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          children.forEach((child) => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          });
          observer.unobserve(node);
        }
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(node);
  return { destroy() { observer.disconnect(); } };
};
