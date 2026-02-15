import { getFileById } from "domain/desktop/queries/getFileById";
import { getFileWithParentById } from "domain/desktop/queries/getFileWithParentById";
import { isFolder } from "utils/isFolder";
import type { Desktop } from "types/desktop";

export const dragFile = (
    state: Desktop,
    fileId: string,
    folderId: string,
) => {

    if (fileId === folderId) return;

    const found = getFileWithParentById(state.root, fileId);

    if (!found) return;

    const { file, parent, index, draggable } = found;

    const targetFolder = getFileById(state.root, folderId);

    if (!targetFolder || !isFolder(targetFolder)) return;

    if (file.parentId === folderId) return;

    if (file.id === folderId) return;

    if(parent && isFolder(parent) && draggable) {
        parent.innerContent.splice(index, 1);
    }

    if(draggable) {
        targetFolder.innerContent.push({
            ...file,
            parentId: folderId,
            isSelected: false,
            updated_at: new Date().toISOString(),
        });
    }
};
