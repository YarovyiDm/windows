import { Dispatch, SetStateAction } from "react";

export type FolderWindowProps = {
    setRenameFileId: Dispatch<SetStateAction<string>>,
    selectedFiles: string[],
    onContextMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
    name: string;
    id: string,
    renameFileId: string,
    setIsSelecting: (isSelecting: boolean) => void,
}