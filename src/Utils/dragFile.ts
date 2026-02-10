import { findFolder } from "Utils/findFolder";
import { findFileWithParent } from "Utils/findFileWithParent";
import { Desktop, FILE_TYPE } from "Types/Desktop";

export const dragFile = (
    state: Desktop,
    fileId: string,
    folderId: string,
) => {
    if (fileId === folderId) return;

    const found = findFileWithParent(state.desktopFiles, fileId);

    if (!found) return;

    const { file, parent, index } = found;

    if (folderId === FILE_TYPE.DESKTOP) {
        if (!parent) return;

        parent.innerContent.splice(index, 1);
        state.desktopFiles.push({
            ...file,
            parentId: undefined,
            isSelected: false,
        });

        return;
    }

    const targetFolder = findFolder(state.desktopFiles, folderId);

    if (!targetFolder || targetFolder.type !== FILE_TYPE.FOLDER) return;
    if (file.parentId === folderId) return;

    if (parent) {
        parent.innerContent.splice(index, 1);
    } else {
        state.desktopFiles.splice(index, 1);
    }

    targetFolder.innerContent.push({
        ...file,
        parentId: folderId,
        isSelected: false,
    });
};
