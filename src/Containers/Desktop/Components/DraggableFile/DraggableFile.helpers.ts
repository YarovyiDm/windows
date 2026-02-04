import { FILE_TYPE } from "Types/Desktop";
import { checkDropTargetByCursorProps } from "./DraggableFile.types";

export const checkDropTargetByCursor = ({
    x,
    y,
    setTargetFolderId,
    draggingFileId,
    parentId,
}: checkDropTargetByCursorProps) => {
    const elementUnderCursor = document.elementFromPoint(x, y) as HTMLElement | null;

    if (!elementUnderCursor) {
        setTargetFolderId("");
        return;
    }

    const folderEl = elementUnderCursor.closest<HTMLElement>(
        `[data-file="${FILE_TYPE.FOLDER}"], [data-file="${FILE_TYPE.DESKTOP}"]`,
    );

    if (!folderEl) {
        setTargetFolderId("");
        return;
    }

    const fileType = folderEl.getAttribute("data-file");
    const folderId = folderEl.getAttribute("data-id") || "";

    if (folderId === draggingFileId || folderId === parentId) {
        setTargetFolderId("");
        return;
    }

    if (fileType === FILE_TYPE.FOLDER || fileType === FILE_TYPE.DESKTOP) {
        setTargetFolderId(folderId);
    } else {
        setTargetFolderId("");
    }
};