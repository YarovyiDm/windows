export const getIconUrl = (str: string) => {
    return str.startsWith("//") ? `https:${str}` : str;
};