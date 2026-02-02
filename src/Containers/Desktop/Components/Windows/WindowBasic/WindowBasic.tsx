import React, { useEffect, useMemo, useState } from "react";
import { Box } from "@mui/material";
import {
    DIRECTIONS_RESIZE_MAP, ICONS,
    TASK_PANEL_HEIGHT,
} from "Constants/System";
import useDrag from "Hooks/useDrag";
import { DEFAULT_DESKTOP_MODAL_SIZE } from "Constants/Desktop";
import Icon from "Components/Icon/Icon";
import useResize from "Hooks/useResize";
import { useAppDispatch, useAppSelector } from "Store/index";
import { changeWindowZindex, closeWindow } from "Store/slices/Desktop";
import { selectWindowZindex } from "Store/selectors/Desktop";
import type { BasicSize } from "Types/System";
import {
    ResizeHandleBottom, ResizeHandleCorner,
    ResizeHandleRight,
    WindowBasicButtonsIconWrapper,
    WindowBasicButtonsWrapper,
    WindowBasicHeader,
    WindowBasicWrapper,
} from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic.styled";
import { getRandomCenterCoordinates } from "../../../../../helpers/getRandomCenterCoordinates";
import type { WindowBasicProps } from "./WindowBasic.types";

const COMPONENT_MAP = {
    resizeHandleRight: ResizeHandleRight,
    resizeHandleBottom: ResizeHandleBottom,
    resizeHandleCorner: ResizeHandleCorner,
};

const WindowBasic = ({
    children,
    kind,
    id,
    title,
    onCloseCallback,
    wishSidePadding,
    ...rest
}: WindowBasicProps) => {
    const [newSize, setNewSize] = useState<BasicSize | null>(null);

    const { position, handleMouseDown, setPosition } = useDrag(
        getRandomCenterCoordinates(),
        newSize || DEFAULT_DESKTOP_MODAL_SIZE,
    );
    const dispatch = useAppDispatch();
    const zIndex = useAppSelector(selectWindowZindex(id));

    const {
        handleDoubleClick,
        handleResizeMouseDown,
        size,
        toggleFullscreen,
        isFullscreen,
    } = useResize(DEFAULT_DESKTOP_MODAL_SIZE, setPosition, position);

    const borderRadius = useMemo(
        () =>
            size.height >= window.innerHeight - TASK_PANEL_HEIGHT
                ? "0px"
                : "10px",
        [size],
    );

    useEffect(() => {
        setNewSize(size);
    }, [size]);

    const onWindowClose = () => {
        dispatch(closeWindow(id));
    };

    const onWindowZindexChange = () => {
        dispatch(changeWindowZindex(id));
    };

    return (
        <WindowBasicWrapper
            className='prevent-selecting'
            style={{
                left: position.x,
                top: position.y,
                width: size.width,
                height: size.height,
                borderRadius,
                zIndex: Number(zIndex),
                padding: wishSidePadding ? "0 10px" : 0,
            }}
            {...rest}
            onMouseDown={onWindowZindexChange}
        >
            <WindowBasicHeader
                onMouseDown={handleMouseDown}
                onDoubleClick={handleDoubleClick}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Icon name={kind} />
                    <Box>{title}</Box>
                </Box>
                <WindowBasicButtonsWrapper>
                    <WindowBasicButtonsIconWrapper>
                        <Icon name={ICONS.LINE} style={{ width: "15px" }} />
                    </WindowBasicButtonsIconWrapper>
                    <WindowBasicButtonsIconWrapper
                        onClick={toggleFullscreen}
                    >
                        <Icon
                            name={isFullscreen ? ICONS.SQUARE_IN_SQUARE : ICONS.SQUARE_OUTLINE}
                            style={{ width: "12px", height: "12px" }}
                        />
                    </WindowBasicButtonsIconWrapper>
                    <WindowBasicButtonsIconWrapper
                        style={{
                            borderTopRightRadius: borderRadius,
                        }}
                        onClick={() =>
                            onCloseCallback
                                ? onCloseCallback()
                                : onWindowClose()
                        }
                    >
                        <Icon name={ICONS.CROSS} />
                    </WindowBasicButtonsIconWrapper>
                </WindowBasicButtonsWrapper>
            </WindowBasicHeader>
            <Box sx={{ flex: "1 1 auto", overflow: "auto", padding: "10px" }}>
                {children}
            </Box>
            {DIRECTIONS_RESIZE_MAP.map(direction => {
                const Component = COMPONENT_MAP[direction.class as keyof typeof COMPONENT_MAP];

                return (
                    <Component
                        key={direction.name}
                        onMouseDown={e => handleResizeMouseDown(e, direction.name)}
                    />
                );
            })}
        </WindowBasicWrapper>
    );
};

export default WindowBasic;
