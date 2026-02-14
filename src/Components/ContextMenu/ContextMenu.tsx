import { SIZE_HOT_KEYS_MAP } from "constants/desktop";
import { DOM_EVENTS } from "constants/events";
import { useEffect, useRef } from "react";
import { changeDesktopFileSize } from "store/slices/system";
import { useAppDispatch } from "store/index";
import MenuProvider from "Components/ContextMenu/Components/MenuProvider/MenuProvider";
import { useClickOutside } from "hooks/useClickOutside";
import type { BasicSize } from "types/system";
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
    const menuRef = useRef<HTMLDivElement>(null);

    useClickOutside(menuRef, () => setContextMenuVisible(false));

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
            DOM_EVENTS.KEY_DOWN,
            changeFileSizeByHotKey as EventListener,
        );

        return () => {
            document.removeEventListener(
                DOM_EVENTS.KEY_DOWN,
                changeFileSizeByHotKey as EventListener,
            );
        };
    }, []);

    return (
        <ContextMenuStyled
            ref={menuRef}
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
