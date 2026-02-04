import { createDesktopFile } from "Utils";
import { useAppDispatch } from "Store/index";
import { addDesktopFile, removeFile } from "Store/slices/Desktop";
import { CreateFilePayload } from "Components/ContextMenu/components/DesktopMenu/DesktopMenu.types";

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
                createDesktopFile({
                    name: `${name}_${contextMenuPosition.x}`,
                    type,
                    position: contextMenuPosition,
                }),
            ),
        );

        setContextMenuVisible(false);
    };

    const deleteFile = (id: string) => {
        dispatch(removeFile(id));
    };

    const renameFile = (id: string) => {
        if (setRenameFileId) setRenameFileId(id);
    };

    return { createNewFile, deleteFile, renameFile };
};
