import React, { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "Components/index";
import {
    handleFileMouseMove,
    handleFileMouseUp,
} from "Containers/Desktop/Components/DraggableFile/DraggableFile.helpers";
import { File, FileName, TooltipStyled } from "Containers/Desktop/Components/DraggableFile/DraggableFile.styled";
import {
    DOM_EVENTS,
    KEY_CODES,
} from "Constants/System";
import useLanguage from "Hooks/useLanguage";
import { useAppDispatch, useAppSelector } from "Store/index";
import {
    selectFileSelectionColor,
    selectFileSize,
} from "Store/selectors/System";
import {
    openWindow,
    removeFile, renameFile,
} from "Store/slices/Desktop";
import { FILE_TYPES } from "Constants/Desktop";
import type { DraggableFileProps } from "./DraggableFile.types";

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
    link,
    renameFileId,
    setRenameFileId,
}: DraggableFileProps) => {
    const [isFileSelected, setIsFileSelected] = useState<boolean>(isSelected);
    const [targetFolderName, setTargetFolderName] = useState<string>("");
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const fileRef = useRef<HTMLDivElement | null>(null);
    const positionRef = useRef(filePosition);
    const offsetRef = useRef({ x: 0, y: 0 });

    const fileSelectionColor = useAppSelector(selectFileSelectionColor);
    const selectedSize = useAppSelector(selectFileSize);
    const dispatch = useAppDispatch();
    const { translate } = useLanguage();
    const [fileName, setFileName] = useState(name);

    const isRename = useMemo(() => renameFileId === id, [renameFileId, id]);

    const commitRename = useCallback(() => {
        if (!fileName.length) {
            setFileName(name);
            return;
        }

        setIsFileSelected(false);
        setRenameFileId('');
        dispatch(renameFile({ id, newName: fileName }));
    }, [fileName, name, setRenameFileId, dispatch, id]);

    const handleClickOutside = useCallback((e: MouseEvent) => {
        if (fileRef.current && !fileRef.current.contains(e.target as Node)) {
            commitRename();
        }
    }, [commitRename]);

    const handleRenameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            commitRename();
        }
        if (e.key === 'Escape') {
            setFileName(name);
            setRenameFileId('');
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setIsFileSelected(true);
        setIsSelecting(false);

        offsetRef.current = {
            x: e.clientX - positionRef.current.x,
            y: e.clientY - positionRef.current.y,
        };
    };

    const handleMouseMove = useCallback(
        (e: MouseEvent) =>
            handleFileMouseMove({
                isDragging,
                e,
                offset: offsetRef.current,
                positionRef,
                fileRef,
                id,
                setTargetFolderName,
            }),
        [isDragging, id],
    );

    const handleMouseUp = useCallback(
        () =>
            handleFileMouseUp({
                isDragging,
                positionRef,
                name,
                targetFolderName,
                dispatch,
                setIsDragging,
                setPosition,
            }),
        [isDragging, name, targetFolderName, dispatch],
    );

    const handleOpen = () => {
        if (type === FILE_TYPES.LINK && link) {
            window.open(link, "_blank", "noopener,noreferrer");
            return;
        }

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
        if (!isFileSelected) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === KEY_CODES.DELETE) dispatch(removeFile(id));
            if (e.key === KEY_CODES.ENTER && isFileSelected) {
                if (!isOpened) {
                    dispatch(openWindow({ zIndex: 999, content: innerContent, fileName: name, id, type }));
                }
                setIsFileSelected(false);
            }
        };

        document.addEventListener(DOM_EVENTS.KEY_DOWN, handleKeyDown as EventListener);
        return () => document.removeEventListener(DOM_EVENTS.KEY_DOWN, handleKeyDown as EventListener);
    }, [dispatch, isFileSelected, id, innerContent, isOpened, name, type]);

    useEffect(() => {
        const handleMouseDownWrapper = (e: Event) => handleClickOutside(e as MouseEvent);
        const handleMouseMoveWrapper = (e: Event) => handleMouseMove(e as MouseEvent);
        const handleMouseUpWrapper = () => handleMouseUp();

        document.addEventListener(DOM_EVENTS.MOUSE_DOWN, handleMouseDownWrapper);
        if (isDragging) {
            document.addEventListener(DOM_EVENTS.MOUSE_MOVE, handleMouseMoveWrapper);
            document.addEventListener(DOM_EVENTS.MOUSE_UP, handleMouseUpWrapper);
        }

        return () => {
            document.removeEventListener(DOM_EVENTS.MOUSE_DOWN, handleMouseDownWrapper);
            document.removeEventListener(DOM_EVENTS.MOUSE_MOVE, handleMouseMoveWrapper);
            document.removeEventListener(DOM_EVENTS.MOUSE_UP, handleMouseUpWrapper);
        };
    }, [isDragging, handleClickOutside, handleMouseMove, handleMouseUp]);

    useEffect(() => {
        setIsFileSelected(isSelected);
    }, [isSelected]);

    const [position, setPosition] = useState(filePosition);

    return (
        <File
            onMouseDown={handleMouseDown}
            onDoubleClick={handleOpen}
            ref={fileRef}
            data-context='file'
            data-id={id}
            onContextMenu={onContextMenu}
            className='prevent-selecting'
            sx={{
                width: selectedSize?.width,
                height: selectedSize?.height,
                position: "absolute",
                zIndex: isDragging ? 9999 : 1,
                background: isFileSelected ? fileSelectionColor : "",
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                willChange: "transform",
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
            {isRename
                ? <input
                    value={fileName}
                    autoFocus
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFileName(e.target.value)}
                    onKeyDown={handleRenameKeyDown}
                />
                : <FileName>{fileName}</FileName>}
            {isDragging && targetFolderName && (
                <TooltipStyled>
                    {translate("moveTo")} {targetFolderName}
                </TooltipStyled>
            )}
        </File>
    );
};

export default DraggableFile;
