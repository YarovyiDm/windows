import { DEFAULT_DESKTOP_MODAL_SIZE } from "constants/desktop";
import { TASK_PANEL_HEIGHT } from "constants/system";
import { useEffect, useMemo, useState } from "react";
import { useDrag, useResize } from "hooks";
import { getRandomCenterCoordinates } from "utils/getRandomCenterCoordinates";
import { useAppDispatch } from "store/index";
import { changeWindowZindex, closeWindow } from "store/slices/desktop";
import type { BasicSize } from "types/system";
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
    fullscreen,
    disableFullscreenOnDoubleClick,
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
    } = useResize(
        defaultSize ?? DEFAULT_DESKTOP_MODAL_SIZE,
        setPosition,
        position,
        fullscreen,
        disableFullscreenOnDoubleClick,
    );

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
                width: size.width,
                height: size.height,
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
