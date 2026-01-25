import React, { MutableRefObject, SetStateAction, Dispatch } from "react";
import { IFile } from "Types/Desktop";

export type CheckDropTargetProps = {
    fileRef: MutableRefObject<HTMLDivElement | null>,
    id: string,
    setTargetFolderName:  Dispatch<SetStateAction<string>>,
}

export type DraggableFileProps = {
    setIsSelecting: (isSelecting: boolean) => void;
    onContextMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    renameFileId: string;
    setRenameFileId: Dispatch<SetStateAction<string>>;
} & IFile