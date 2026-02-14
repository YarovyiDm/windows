export const isMobileDevice = (maxWidth = 768) => window.matchMedia(`(max-width: ${maxWidth}px)`).matches;
