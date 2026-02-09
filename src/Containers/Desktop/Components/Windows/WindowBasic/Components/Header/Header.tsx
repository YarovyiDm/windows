import { Box } from "@mui/material";
import React from "react";
import Icon from "Components/Icon/Icon";
import {
    WindowBasicButtonsIconWrapper,
    WindowBasicButtonsWrapper, WindowBasicHeader,
} from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic.styled";
import { ICONS } from "Constants/Icons";
import { HeaderProps } from "Containers/Desktop/Components/Windows/WindowBasic/Components/Header/Header.types";

export const Header = ({
    title,
    handleMouseDown,
    handleDoubleClick,
    kind,
    onCloseCallback,
    onWindowClose,
    toggleFullscreen,
    borderRadius,
    isFullscreen,
    resizable,
}: HeaderProps) => {
    return (
        <WindowBasicHeader
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Icon name={kind} />
                <Box>{title}</Box>
            </Box>
            <WindowBasicButtonsWrapper>
                {resizable
                    && <>
                        <WindowBasicButtonsIconWrapper title='In progress' className='first-button'>
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
                    </>
                }
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
    );
};

export default Header;