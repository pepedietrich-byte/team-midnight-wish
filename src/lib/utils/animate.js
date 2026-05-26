/**
 * Svelte action — reveals element when it enters the viewport.
 * Usage: <div use:scrollReveal={{ delay: 150, direction: 'up' }}>
 */
export function scrollReveal(node, options = {}) {
  const {
    delay     = 0,
    threshold = 0.12,
    direction = 'up',
    distance  = 36,
  } = options;

  if (typeof IntersectionObserver === 'undefined') {
    // SSR / no browser API — just show element
    return;
  }

  const transforms = {
    up:    `translateY(${distance}px)`,
    down:  `translateY(-${distance}px)`,
    left:  `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none:  'none',
  };

  // Start hidden
  node.style.opacity   = '0';
  node.style.transform = transforms[direction] ?? transforms.up;
  node.style.transition = `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`;
  node.style.willChange = 'opacity, transform';

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity   = '1';
          node.style.transform = 'none';
          observer.unobserve(node);
        }
      });
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}

/**
 * Stagger reveal helper — call on a parent,
 * auto-staggers direct children.
 */
export function staggerReveal(node, { baseDelay = 0, step = 100 } = {}) {
  const children = [...node.children];
  children.forEach((child, i) => {
    scrollReveal(child, { delay: baseDelay + i * step });
  });
}