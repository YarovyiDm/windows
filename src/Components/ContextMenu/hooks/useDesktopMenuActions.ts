import { createFile } from "domain/desktop/factory/createFile";
import { useAppDispatch } from "store/index";
import { addDesktopFile, removeFile } from "store/slices/desktop";
import type { CreateFilePayload } from "Components/ContextMenu/Components/DesktopMenu/DesktopMenu.types";

type UseDesktopMenuActionsProps = {
    contextMenuPosition?: { x: number; y: number; };
    setContextMenuVisible?: (visible: boolean) => void;
    setRenameFileId?: (id: string) => void;
}

export const useDesktopMenuActions = ({
    contextMenuPosition,
    setContextMenuVisible,
    setRenameFileId,
}: UseDesktopMenuActionsProps) => {
    const dispatch = useAppDispatch();

    const createNewFile = ({ name, type }: CreateFilePayload) => {
        if (!contextMenuPosition || !setContextMenuVisible) return;

        dispatch(
            addDesktopFile(
                createFile({
                    name: `${name}_${contextMenuPosition.x}`,
                    type,
                    position: contextMenuPosition,
                }),
            ),
        );

        setContextMenuVisible(false);
    };

    const deleteFile = (id: string) => {
        if (!setContextMenuVisible) return;

        dispatch(removeFile(id));
        setContextMenuVisible(false);
    };

    const renameFile = (id: string) => {
        if (!setContextMenuVisible) return;

        if (setRenameFileId) setRenameFileId(id);
        setContextMenuVisible(false);
    };

    return { createNewFile, deleteFile, renameFile };
};
