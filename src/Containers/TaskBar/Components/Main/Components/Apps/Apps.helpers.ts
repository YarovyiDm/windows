import { getInnerContent } from "domain/desktop/queries/getInnerContent";
import { ICONS } from "constants/icons";
import { DISK_TYPES, FILE_META } from "constants/system";
import { type BrowserFile, type DesktopFile, FILE_TYPE, type FolderFile } from "types/desktop";

type BaseProps = {
    name: string;
    icon: keyof typeof ICONS;
    root: DesktopFile;
};

export const getFileData = ({ type, name, icon, root }:  BaseProps & {
    type: FILE_TYPE.FOLDER | FILE_TYPE.BROWSER;
}) => {
    if (type === FILE_TYPE.FOLDER) {
        const folder: FolderFile = {
            id: FILE_META.ROOT.id,
            name,
            icon,
            isSelected: false,
            type: FILE_TYPE.FOLDER,
            diskId: DISK_TYPES.C,
            innerContent: getInnerContent(root),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            draggable: false,
        };

        return folder;
    }

    const browser: BrowserFile = {
        id: FILE_TYPE.BROWSER,
        name,
        icon,
        isSelected: false,
        type: FILE_TYPE.BROWSER,
        diskId: DISK_TYPES.C,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        draggable: false,
    };

    return browser;
};