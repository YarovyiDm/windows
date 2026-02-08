import React, { useEffect, useMemo, useState } from "react";
import { useDrag, useResize } from "Hooks";
import { DEFAULT_DESKTOP_MODAL_SIZE } from "Constants/Desktop";
import { useAppDispatch } from "Store/index";
import { changeWindowZindex, closeWindow } from "Store/slices/Desktop";
import type { BasicSize } from "Types/System";
import { TASK_PANEL_HEIGHT } from "Constants/System";
import { getRandomCenterCoordinates } from "../../../../../helpers/getRandomCenterCoordinates";
import Header from "./Components/Header/Header";
import {
    WindowBasicWrapper,
    WindowContent,
} from "./WindowBasic.styled";
import Resize from "./Components/Resize/Resize";
import type { WindowBasicProps } from "./WindowBasic.types";

const WindowBasic = ({
    children,
    kind,
    id,
    title,
    zIndex,
    onCloseCallback,
    wishSidePadding,
    defaultSize,
    resizable = true,
    ...rest
}: WindowBasicProps) => {
    const [newSize, setNewSize] = useState<BasicSize | null>(null);
    const dispatch = useAppDispatch();

    const { position, handleMouseDown, setPosition } = useDrag(
        getRandomCenterCoordinates(),
        newSize || DEFAULT_DESKTOP_MODAL_SIZE,
    );

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

    const onWindowZindexChange = () => {
        dispatch(changeWindowZindex(id));
    };

    return (
        <WindowBasicWrapper
            className='prevent-selecting'
            style={{
                left: position.x,
                top: position.y,
                width: defaultSize ? defaultSize.width : size.width,
                height: defaultSize ? defaultSize.height : size.height,
                borderRadius,
                zIndex,
                padding: wishSidePadding ? "0 10px" : 0,
            }}
            {...rest}
            onMouseDown={onWindowZindexChange}
        >
            <Header
                title={title}
                kind={kind}
                handleMouseDown={handleMouseDown}
                handleDoubleClick={handleDoubleClick}
                onWindowClose={() => dispatch(closeWindow(id))}
                onCloseCallback={onCloseCallback}
                toggleFullscreen={toggleFullscreen}
                isFullscreen={isFullscreen}
                borderRadius={borderRadius}
                resizable={resizable}
            />
            <WindowContent>
                {children}
            </WindowContent>
            {resizable && <Resize handleResizeMouseDown={handleResizeMouseDown} />}
        </WindowBasicWrapper>
    );
};

export default WindowBasic;
