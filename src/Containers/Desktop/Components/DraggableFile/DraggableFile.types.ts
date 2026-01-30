import type { IFile } from "Types/Desktop";
import type { Dispatch,MutableRefObject, SetStateAction, MouseEvent } from "react";

export type CheckDropTargetProps = {
    fileRef: MutableRefObject<HTMLDivElement | null>;
    id: string;
    setTargetFolderName:  Dispatch<SetStateAction<string>>;
}

export type DraggableFileProps = {
    setIsSelecting: (isSelecting: boolean) => void;
    onContextMenu: (e: MouseEvent<HTMLDivElement>) => void;
    renameFileId: string;
    setRenameFileId: Dispatch<SetStateAction<string>>;
} & IFile