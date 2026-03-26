export const motionTokens = {
  easeOutQuint: [0.22, 1, 0.36, 1] as const,
  easeOutSoft: [0.16, 1, 0.3, 1] as const,
  dur: {
    fast: 0.18,
    base: 0.32,
    slow: 0.55,
  },
  stagger: {
    sm: 0.045,
    md: 0.07,
  },
} as const;

