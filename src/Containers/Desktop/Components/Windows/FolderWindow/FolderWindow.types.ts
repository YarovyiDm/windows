import { DesktopWindow } from "Types/Desktop";

export type FolderWindowProps = {
    window: DesktopWindow;
    targetFolderId: string;
    targetFolderHandle: (id: string) => void;
}