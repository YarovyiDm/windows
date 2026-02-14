import { KEY_CODES } from "constants/keyCodes";
import { type Dispatch, type SetStateAction, useRef, useState, type KeyboardEvent } from "react";
import { useAppDispatch } from "store/index";
import { renameFile } from "store/slices/desktop";
import type { DesktopFile } from "types/desktop";

type Props = {
    file: DesktopFile;
    renameFileId: string;
    setRenameFileId: Dispatch<SetStateAction<string>>;
}

export const useFileRename = ({
    file,
    renameFileId,
    setRenameFileId,
}: Props) => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState(file.name);

    const isRename = renameFileId === file.id;

    const commitRename = () => {
        const newName = inputRef.current?.value || "";

        if (!newName) return;

        dispatch(renameFile({ id: file.id, newName }));
        setRenameFileId("");
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === KEY_CODES.ENTER) commitRename();
        if (e.key === KEY_CODES.ESCAPE) {
            setFileName(file.name);
            setRenameFileId("");
        }
    };

    return {
        isRename,
        fileName,
        setFileName,
        inputRef,
        handleKeyDown,
        commitRename,
    };
};
