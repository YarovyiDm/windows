import React from "react";
import { Icon } from "Components/index";

type DraggableFileCopyProps = {
    x: number;
    y: number;
    icon: string;
};

const DraggableFileCopy = ({ x, y, icon }: DraggableFileCopyProps) => {
    return (
        <div
            style={{
                width: 40,
                height: 40,
                position: "fixed",
                left: x,
                top: y,
                pointerEvents: "none",
                zIndex: 99999,
                transform: "translate(-50%, -50%)",
            }}
        >
            <Icon
                name={icon}
                style={{ width: 40, height: 40, opacity: 0.5 }}
            />
        </div>
    );
};

export default DraggableFileCopy;
