export const DIRECTIONS = {
    RIGHT: "right",
    BOTTOM: "bottom",
    RIGHT_BOTTOM: "right bottom",
} as const;

export const DIRECTIONS_RESIZE_MAP = [
    { name: DIRECTIONS.RIGHT, class: "resizeHandleRight" },
    { name: DIRECTIONS.BOTTOM, class: "resizeHandleBottom" },
    { name: DIRECTIONS.RIGHT_BOTTOM, class: "resizeHandleCorner" },
] as const;