import React, { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "Components";
import {
    DELETE_KEY_CODE,
    ENTER_KEY_CODE,
    KEY_DOWN_EVENT,
    MOUSE_DOWN_EVENT,
    MOUSE_MOVE_EVENT,
    MOUSE_UP_EVENT,
} from "Constants/System";
import useDrag from "Hooks/useDrag";
import { useAppDispatch, useAppSelector } from "Store/index";
import {
    changeFilePosition,
    dragFileToFolder,
    openWindow,
    removeFile,
} from "Store/slices/Desktop";
import {
    selectFileSelectionColor,
    selectFileSize,
} from "Store/selectors/System";

import useLanguage from "Hooks/useLanguage";
import { checkDropTarget } from "Components/DraggableFile/DraggableFile.helpers";
import { DraggableFileProps } from "./DraggableFile.types";
import { File, FileName, TooltipStyled } from "Components/DraggableFile/DraggableFile.styled";

const DraggableFile = ({
    name,
    icon,
    position: filePosition,
    setIsSelecting,
    isSelected,
    onContextMenu,
    isOpened,
    innerContent,
    id,
    type,
    renameFileId,
    setRenameFileId,
}: DraggableFileProps) => {
    const [isFileSelected, setIsFileSelected] = useState<boolean>(isSelected);
    const [targetFolderName, setTargetFolderName] = useState<string>("");
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const fileRef = useRef<HTMLDivElement | null>(null);
    const fileSelectionColor = useAppSelector(selectFileSelectionColor);
    const [fileName, setFileName] = useState<string>(name);

    const selectedSize = useAppSelector(selectFileSize);
    const dispatch = useAppDispatch();
    const { position, handleMouseDown } = useDrag(filePosition, selectedSize);
    const { translate } = useLanguage();

    const handleClickFileOutside = (e: MouseEvent) => {
        if (fileRef.current && !fileRef.current.contains(e.target as Node)) {
            setIsFileSelected(false);
            setRenameFileId('');
        }
    };

    const openFile = () => {
        if (!isOpened) {
            dispatch(
                openWindow({
                    zIndex: 999,
                    content: innerContent,
                    fileName: name,
                    id,
                    type,
                }),
            );
        }
    };

    useEffect(() => {
        dispatch(changeFilePosition({ name, position }));
    }, [position]);

    useEffect(() => {
        if (!isFileSelected) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === DELETE_KEY_CODE) {
                dispatch(removeFile(id));
            }
            if (e.key === ENTER_KEY_CODE && isFileSelected) {
                openFile();
                setIsFileSelected(false);
            }
        };

        document.addEventListener(KEY_DOWN_EVENT, handleKeyDown as EventListener);
        return () => document.removeEventListener(KEY_DOWN_EVENT, handleKeyDown as EventListener);
    }, [isFileSelected]);

    useEffect(() => {
        if (targetFolderName && !isDragging) {
            dispatch(
                dragFileToFolder({
                    fileName: name,
                    folderName: targetFolderName,
                }),
            );
            setTargetFolderName("");
        }
    }, [targetFolderName, isDragging, name, dispatch]);

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
        }
    };

    const handleMouseMove = useCallback(() => {
        checkDropTarget({ fileRef, id, setTargetFolderName });
    }, [fileRef, id, setTargetFolderName]);

    useEffect(() => {
        if (isDragging) {
            document.addEventListener(MOUSE_UP_EVENT, handleMouseUp);
            document.addEventListener(MOUSE_MOVE_EVENT, handleMouseMove);
        }

        document.addEventListener(
            MOUSE_DOWN_EVENT,
            handleClickFileOutside as EventListener,
        );

        return () => {
            document.removeEventListener(MOUSE_UP_EVENT, handleMouseUp);
            document.removeEventListener(MOUSE_MOVE_EVENT, handleMouseMove);
            document.removeEventListener(
                MOUSE_DOWN_EVENT,
                handleClickFileOutside as EventListener,
            );
        };
    }, [isDragging]);

    useEffect(() => {
        setIsFileSelected(isSelected);
    }, [isSelected]);

    const onFileNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFileName(e.target.value);
    };

    const isRename = useMemo(() => renameFileId === id, [renameFileId, id]);

    return (
        <File
            onMouseDown={e => {
                handleMouseDown(e);
                setIsFileSelected(true);
                setIsSelecting(false);
                setIsDragging(true);
            }}
            onDoubleClick={openFile}
            ref={fileRef}
            data-context='file'
            data-id={id}
            onContextMenu={onContextMenu}
            className='prevent-selecting'
            style={{
                width: selectedSize?.width,
                height: selectedSize?.height,
                top: `${position.y}px`,
                left: `${position.x}px`,
                position: "absolute",
                zIndex: isFileSelected ? 999 : 1,
                background: (isFileSelected && fileSelectionColor) || "",
            }}
        >
            <Icon
                name={icon}
                data-file={type}
                data-id={id}
                data-name={name}
                style={{
                    width: selectedSize.width / 2,
                    height: selectedSize.height / 2,
                }}
            />
            {isRename ? <input value={fileName} autoFocus onChange={(e) => onFileNameChange(e)}/> : <FileName>{fileName}</FileName>}
            {isDragging && targetFolderName && (
                <TooltipStyled>
                    {translate("moveTo")} {targetFolderName}
                </TooltipStyled>
            )}
        </File>
    );
};

export default DraggableFile;
