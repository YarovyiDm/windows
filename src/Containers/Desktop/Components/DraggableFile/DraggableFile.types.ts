import type { DesktopFile } from "types/desktop";
import type { Dispatch, SetStateAction, MouseEvent } from "react";

export type checkDropTargetByCursorProps = {
    x: number;
    y: number;
    setTargetFolderId: (id: string) => void;
    draggingFileId?: string;
    parentId?: string;
}

export type DraggableFileProps = {
    onContextMenu: (e: MouseEvent<HTMLDivElement>) => void;
    renameFileId: string;
    setRenameFileId: Dispatch<SetStateAction<string>>;
    isSelected: boolean;
    file: DesktopFile;
    targetFolderHandle?: (id: string) => void;
    targetFolderId: string;
    onOpen?: (file: DesktopFile) => void;
}