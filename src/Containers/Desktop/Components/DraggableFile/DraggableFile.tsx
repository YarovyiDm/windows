import React, { ChangeEvent, useRef } from "react";
import { openFile } from "Utils";
import { useClickOutside } from "Hooks";
import { Icon } from "Components/index";
import { File, FileName } from "Containers/Desktop/Components/DraggableFile/DraggableFile.styled";
import { useAppDispatch, useAppSelector } from "Store/index";
import {
    selectMultipleFiles,
} from "Store/slices/Desktop";
import { FILE_TYPE } from "Types/Desktop";
import { selectFileSelectionColor, selectFileSize } from "Store/selectors/System";
import { selectOpenedWindowLength } from "Store/selectors/Desktop";
import { CONTEXT_MENU_TYPES } from "Constants/System";
import { useFileRename } from "./Hooks/useFileRename";
import { useFileKeyboard } from "./Hooks/useFileKeyboard";
import { useFileDrag } from "./Hooks/useFileDrag";
import type { DraggableFileProps } from "./DraggableFile.types";

const DraggableFile = ({
    file,
    isSelected,
    onContextMenu,
    renameFileId,
    setRenameFileId,
    targetFolderHandle,
    targetFolderId,
}: DraggableFileProps) => {
    const dispatch = useAppDispatch();
    const fileRef = useRef<HTMLDivElement | null>(null);

    const fileSelectionColor = useAppSelector(selectFileSelectionColor);
    const selectedSize = useAppSelector(selectFileSize);
    const openedWindowsLength = useAppSelector(selectOpenedWindowLength);

    const {
        isRename,
        handleKeyDown,
        inputRef,
        fileName,
        setFileName,
        commitRename,
    } = useFileRename({ file, renameFileId, setRenameFileId });
    const { onMouseDown } = useFileDrag({ file, targetFolderId, targetFolderHandle });

    useFileKeyboard({ file, isSelected });
    useClickOutside(fileRef, commitRename);

    const handleOpen = () => {
        if (file.type === FILE_TYPE.LINK && file.link) window.open(file.link, "_blank");
        else openFile(file, dispatch, openedWindowsLength);
    };

    return (
        <File
            ref={fileRef}
            onMouseDown={onMouseDown}
            onDoubleClick={handleOpen}
            onClick={(e) => {
                e.stopPropagation();
                dispatch(selectMultipleFiles([file.name]));
            }}
            onContextMenu={onContextMenu}
            className='prevent-selecting desktop-file'
            data-context={CONTEXT_MENU_TYPES.FILE}
            data-id={file.id}
            data-name={file.name}
            sx={{
                width: selectedSize?.width,
                height: selectedSize?.height,
                background: isSelected ? fileSelectionColor : "",
                willChange: "transform",
            }}
        >
            <Icon
                name={file.icon}
                data-file={file.type}
                data-id={file.id}
                style={{ width: selectedSize.width / 2, height: selectedSize.height / 2 }}
            />
            {isRename ? (
                <input
                    ref={inputRef}
                    value={fileName}
                    autoFocus
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFileName(e.target.value)}
                    style={{ width: "80px" }}
                    onKeyDown={handleKeyDown}
                />
            ) : (
                <FileName>{fileName}</FileName>
            )}
        </File>
    );
};

export default DraggableFile;
