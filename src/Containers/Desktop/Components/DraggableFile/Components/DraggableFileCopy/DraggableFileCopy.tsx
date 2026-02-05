import React from "react";
import { Icon } from "Components/index";
import { DraggableFileCopyWrapper } from "./DraggableFileCopy.styled";
import {
    DraggableFileCopyProps,
} from "./DraggableFileCopy.types";

const DraggableFileCopy = ({ x, y, icon }: DraggableFileCopyProps) => {
    return (
        <DraggableFileCopyWrapper
            sx={{
                left: x,
                top: y,
            }}
        >
            <Icon
                name={icon}
                style={{ width: 40, height: 40, opacity: 0.5 }}
            />
        </DraggableFileCopyWrapper>
    );
};

export default DraggableFileCopy;
