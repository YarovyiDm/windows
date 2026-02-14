export const getRandomCenterCoordinates = () => {
    const leftPadding = 300;
    const rightPadding = 702;
    const topPadding = 300;
    const bottomPadding = 702;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const minX = leftPadding;
    const maxX = screenWidth - rightPadding;
    const minY = topPadding;
    const maxY = screenHeight - bottomPadding;

    const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

    return { x: randomX, y: randomY };
};
