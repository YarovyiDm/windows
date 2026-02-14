import { DISK_TYPES } from "constants/system";
import { v4 as uuid } from "uuid";
import { type DesktopFile, FILE_TYPE, type FolderFile, type TextFile } from "types/desktop";

type CreateDesktopFileArgs = {
    name: string;
    type: FILE_TYPE;
    position: { x: number; y: number; };
};

export const createFile = ({
    name,
    type,
    position,
}: CreateDesktopFileArgs): DesktopFile => {
    const base = {
        id: uuid(),
        name,
        position,
        isSelected: false,
        icon: type,
        size: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    };

    switch (type) {
    case FILE_TYPE.TEXT:
        return {
            ...base,
            type: FILE_TYPE.TEXT,
            innerContent: "",
            diskId: DISK_TYPES.C,
        } satisfies TextFile;

    case FILE_TYPE.FOLDER:
        return {
            ...base,
            type: FILE_TYPE.FOLDER,
            innerContent: [],
            diskId: DISK_TYPES.C,
        } satisfies FolderFile;

    default:
        throw new Error(`Unsupported file type: ${type}`);
    }
};
