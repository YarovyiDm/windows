import type { DesktopWindow } from "types/desktop";
import type { Dispatch, SetStateAction } from "react";

export type FolderWindowProps = {
    window: DesktopWindow;
    targetFolderId: string;
    targetFolderHandle: (id: string) => void;
    renameFileId: string;
    setRenameFileId: Dispatch<SetStateAction<string>>;
}