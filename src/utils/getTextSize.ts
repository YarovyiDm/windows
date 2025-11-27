export const getTextSize = (text: string): number => {
    let size = 0;

    for (let i = 0; i < text.length; i++) {
        const codePoint = text.codePointAt(i);

        if (codePoint === undefined) {
            continue;
        }

        if (codePoint <= 0x7F) {
            size += 1;
        } else if (codePoint <= 0x7FF) {
            size += 2;
        } else if (codePoint <= 0xFFFF) {
            size += 3;
        } else {
            size += 4;
            i++;
        }
    }

    return size;
};
