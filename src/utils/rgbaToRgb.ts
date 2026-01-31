export const rgbaToRgb = (rgba: string): string => {
    const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);

    if (!match) return rgba;

    const [, r, g, b] = match;

    return `rgb(${r}, ${g}, ${b})`;
};