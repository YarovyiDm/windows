import type { Dispatch, SetStateAction, MouseEvent } from "react";

export type FolderWindowProps = {
    setRenameFileId: Dispatch<SetStateAction<string>>;
    selectedFiles: string[];
    onContextMenu: (e: MouseEvent<HTMLDivElement>) => void;
    name: string;
    id: string;
    renameFileId: string;
    setIsSelecting: (isSelecting: boolean) => void;
}