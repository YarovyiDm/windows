import { DesktopFile } from "Types/Desktop";
import type { Dispatch,MutableRefObject, SetStateAction, MouseEvent } from "react";

export type CheckDropTargetProps = {
    fileRef: MutableRefObject<HTMLDivElement | null>;
    id: string;
    setTargetFolderId:  Dispatch<SetStateAction<string>>;
    parentFolderId?: string;
}

export type DraggableFileProps = {
    setIsSelecting: (isSelecting: boolean) => void;
    onContextMenu: (e: MouseEvent<HTMLDivElement>) => void;
    renameFileId: string;
    setRenameFileId: Dispatch<SetStateAction<string>>;
    isSelected: boolean;
    file: DesktopFile;
    // isInFolder?: boolean;
    targetFolderHandle?: (id: string) => void;
    targetFolderId: string;
}