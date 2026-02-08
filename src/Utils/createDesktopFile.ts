import { v4 as uuid } from "uuid";
import {
    DesktopFile, FILE_TYPE, FolderFile, TextFile,
} from "Types/Desktop";

type CreateDesktopFileArgs = {
    name: string;
    type: FILE_TYPE;
    position: { x: number; y: number; };
    created_at: string;
    updated_at: string;
};

export const createDesktopFile = ({
    name,
    type,
    position,
    created_at,
    updated_at,
}: CreateDesktopFileArgs): DesktopFile => {
    const base = {
        id: uuid(),
        name,
        position,
        isSelected: false,
        icon: type,
        size: 1,
        created_at,
        updated_at,
    };

    switch (type) {
    case FILE_TYPE.TEXT:
        return {
            ...base,
            type: FILE_TYPE.TEXT,
            innerContent: "",
        } satisfies TextFile;

    case FILE_TYPE.FOLDER:
        return {
            ...base,
            type: FILE_TYPE.FOLDER,
            innerContent: [],
        } satisfies FolderFile;

    default:
        throw new Error(`Unsupported file type: ${type}`);
    }
};
