import {
    KEY_DOWN_EVENT,
    SIZE_HOT_KEYS_MAP,
} from "Constants/System";
import { useAppDispatch } from "Store/index";
import styles from "./ContextMenu.module.scss";
import { changeDesktopFileSize } from "Store/slices/System";
import { useEffect } from "react";
import { IProps } from "./ContextMenu.types";
import MenuProvider from "Components/ContextMenu/components/MenuProvider/MenuProvider";

const ContextMenu = ({
    contextMenuPosition,
    setContextMenuVisible,
    clickedType,
    targetId,
    setRenameFileId,
}: IProps) => {
    const dispatch = useAppDispatch();

    const onDesktopFileSizeChange = (newSize: {
        width: number;
        height: number;
    }) => {
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
        <div
            className={styles.contextMenu}
            style={{ top: contextMenuPosition.y, left: contextMenuPosition.x }}
        >
            <MenuProvider
                setRenameFileId={setRenameFileId}
                targetId={targetId}
                onDesktopFileSizeChange={onDesktopFileSizeChange}
                contextMenuPosition={contextMenuPosition}
                clickedType={clickedType}
                setContextMenuVisible={setContextMenuVisible}
            />
        </div>
    );
};

export default ContextMenu;
