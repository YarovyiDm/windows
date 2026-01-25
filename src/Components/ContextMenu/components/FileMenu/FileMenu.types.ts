import { Dispatch, SetStateAction } from "react";

export type FileMenuProps = {
    targetId: string | null;
    setRenameFileId: Dispatch<SetStateAction<string>>
}