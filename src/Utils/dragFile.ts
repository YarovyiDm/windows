import { Desktop, DesktopFile, FILE_TYPE, FolderFile } from "Types/Desktop";

export const dragFile = (
    state: Desktop,
    fileId: string,
    folderId: string,
) => {
    let file: DesktopFile | undefined;
    let fileIndex = -1;
    let parentFolder: FolderFile | undefined;

    fileIndex = state.desktopFiles.findIndex(f => f.id === fileId);

    if (fileIndex !== -1) {
        file = state.desktopFiles[fileIndex];
    } else {
        for (const f of state.desktopFiles) {
            if (f.type === FILE_TYPE.FOLDER) {
                const idx = f.innerContent.findIndex(inner => inner.id === fileId);

                if (idx !== -1) {
                    file = f.innerContent[idx];
                    parentFolder = f;
                    fileIndex = idx;
                    break;
                }
            }
        }
    }

    if (!file) return;
    if (fileId === folderId) return;

    if (folderId === FILE_TYPE.DESKTOP) {
        if (!parentFolder) return;

        parentFolder.innerContent.splice(fileIndex, 1);
        state.desktopFiles.push({
            ...file,
            parentId: undefined,
            isSelected: false,
        });

        return;
    }

    const targetFolder = state.desktopFiles.find(
        f => f.id === folderId && f.type === FILE_TYPE.FOLDER,
    ) as FolderFile | undefined;

    if (!targetFolder) return;
    if (file.parentId === folderId) return;

    if (parentFolder) {
        parentFolder.innerContent.splice(fileIndex, 1);
    } else {
        state.desktopFiles.splice(fileIndex, 1);
    }

    targetFolder.innerContent.push({
        ...file,
        parentId: folderId,
        isSelected: false,
    });
};
