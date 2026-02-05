import React from "react";
import {
    ResizeHandleBottom, ResizeHandleCorner,
    ResizeHandleRight,
} from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic.styled";
import { DIRECTIONS_RESIZE_MAP } from "Constants/Directions";
import { ResizeProps } from "./Resize.types";

const COMPONENT_MAP = {
    resizeHandleRight: ResizeHandleRight,
    resizeHandleBottom: ResizeHandleBottom,
    resizeHandleCorner: ResizeHandleCorner,
};

const Resize = ({ handleResizeMouseDown }: ResizeProps) => {
    return (
        <>{DIRECTIONS_RESIZE_MAP.map(direction => {
            const Component = COMPONENT_MAP[direction.class as keyof typeof COMPONENT_MAP];

            return (
                <Component
                    key={direction.name}
                    onMouseDown={e => handleResizeMouseDown(e, direction.name)}
                />
            );
        })}</>
    );
};

export default Resize;