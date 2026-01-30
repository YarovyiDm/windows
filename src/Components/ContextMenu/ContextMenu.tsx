import { useEffect } from "react";
import MenuProvider from "Components/ContextMenu/components/MenuProvider/MenuProvider";
import {
    KEY_DOWN_EVENT,
    SIZE_HOT_KEYS_MAP,
} from "Constants/System";
import { useAppDispatch } from "Store/index";
import { changeDesktopFileSize } from "Store/slices/System";
import { BasicSize } from "Types/System";
import { ContextMenuStyled } from './ContextMenu.styled';
import type { ContextMenuProps } from "./ContextMenu.types";

const ContextMenu = ({
    contextMenuPosition,
    setContextMenuVisible,
    clickedType,
    targetId,
    setRenameFileId,
}: ContextMenuProps) => {
    const dispatch = useAppDispatch();

    const onDesktopFileSizeChange = (newSize: BasicSize) => {
        dispatch(changeDesktopFileSize(newSize));
    };

    const changeFileSizeByHotKey = (e: KeyboardEvent) => {
        if (
            e.ctrlKey &&
            e.shiftKey &&
            SIZE_HOT_KEYS_MAP[e.code as keyof typeof SIZE_HOT_KEYS_MAP]
        ) {
            onDesktopFileSizeChange(
                SIZE_HOT_KEYS_MAP[e.code as keyof typeof SIZE_HOT_KEYS_MAP],
            );
            setContextMenuVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener(
            KEY_DOWN_EVENT,
            changeFileSizeByHotKey as EventListener,
        );

        return () => {
            document.removeEventListener(
                KEY_DOWN_EVENT,
                changeFileSizeByHotKey as EventListener,
            );
        };
    });

    return (
        <ContextMenuStyled
            sx={{ top: contextMenuPosition.y, left: contextMenuPosition.x }}
        >
            <MenuProvider
                setRenameFileId={setRenameFileId}
                targetId={targetId}
                onDesktopFileSizeChange={onDesktopFileSizeChange}
                contextMenuPosition={contextMenuPosition}
                clickedType={clickedType}
                setContextMenuVisible={setContextMenuVisible}
            />
        </ContextMenuStyled>
    );
};

export default ContextMenu;
