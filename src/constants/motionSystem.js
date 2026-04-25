// ─── Duration Scale ───────────────────────────────────────────────────────────
export const duration = {
  micro: 0.18,
  fast: 0.35,
  base: 0.5,
  slow: 0.7,
};

// ─── Easing Scale ─────────────────────────────────────────────────────────────
export const ease = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.4, 0, 0.2, 1],
  spring: { type: "spring", stiffness: 300, damping: 25 },
};

// ─── Stagger Patterns ─────────────────────────────────────────────────────────
export const stagger = {
  fast: 0.06,
  base: 0.1,
  slow: 0.15,
};

// ─── Variants ─────────────────────────────────────────────────────────────────

export const slideLeft = (delay = 0) => ({
  hidden: { x: -24, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: duration.base, delay, ease: ease.out },
  },
});

export const slideUp = (delay = 0) => ({
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: duration.base, delay, ease: ease.out },
  },
});

export const cardReveal = (index = 0) => ({
  hidden: { y: 20, opacity: 0, scale: 0.96 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: duration.base,
      delay: stagger.base * index,
      ease: ease.out,
    },
  },
});

export const staggerContainer = (staggerValue = stagger.fast) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerValue,
      delayChildren: 0.05,
    },
  },
});

export const staggerItem = {
  hidden: { y: 16, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: duration.fast, ease: ease.out },
  },
};

export const pageTransition = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: duration.fast, ease: ease.out },
  },
};

// Spread directly onto a motion element: <motion.div {...cardHover}>
export const cardHover = {
  whileHover: {
    y: -6,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  whileTap: { scale: 0.99 },
};
