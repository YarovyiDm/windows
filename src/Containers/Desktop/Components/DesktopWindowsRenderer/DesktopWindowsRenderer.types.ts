import type { DesktopWindow } from "Types/Desktop";
import type { Dispatch, SetStateAction } from "react";

export type DesktopWindowsRendererProps = {
    windows: DesktopWindow[];
    renameFileId: string;
    setRenameFileId: Dispatch<SetStateAction<string>>;
    targetFolderId: string;
    targetFolderHandle: (id: string) => void;
}