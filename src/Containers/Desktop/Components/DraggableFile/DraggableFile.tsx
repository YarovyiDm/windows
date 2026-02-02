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
    removeFile, renameFile,
} from "Store/slices/Desktop";
import { FILE_TYPE } from "Types/Desktop";
import { openFile } from "../../../../helpers/openFile";
import type { DraggableFileProps } from "./DraggableFile.types";

const DraggableFile = ({
    file,
    isSelected,
    setIsSelecting,
    onContextMenu,
    renameFileId,
    setRenameFileId,
}: DraggableFileProps) => {
    const [isFileSelected, setIsFileSelected] = useState<boolean>(isSelected);
    const [targetFolderId, setTargetFolderId] = useState<string>("");
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const fileRef = useRef<HTMLDivElement | null>(null);
    const positionRef = useRef(file.position);
    const offsetRef = useRef({ x: 0, y: 0 });

    const fileSelectionColor = useAppSelector(selectFileSelectionColor);
    const selectedSize = useAppSelector(selectFileSize);
    const dispatch = useAppDispatch();
    const { translate } = useLanguage();
    const [fileName, setFileName] = useState(file.name);

    const isRename = useMemo(() => renameFileId === file.id, [renameFileId, file.id]);

    const commitRename = useCallback(() => {
        if (!file.name.length) {
            setFileName(file.name);
            return;
        }

        setIsFileSelected(false);
        setRenameFileId('');
        dispatch(renameFile({ id: file.id, newName: file.name }));
    }, [file.name, file.id, setRenameFileId, dispatch]);

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
            setFileName(file.name);
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
                id: file.id,
                setTargetFolderId,
                parentFolderId: file.parentFolderId!,
            }),
        [isDragging, file.id, file.parentFolderId],
    );

    const handleMouseUp = useCallback(
        () =>
            handleFileMouseUp({
                isDragging,
                positionRef,
                fileId: file.id,
                targetFolderId,
                dispatch,
                setIsDragging,
                setPosition,
            }),
        [isDragging, file.name, targetFolderId, dispatch],
    );

    const handleOpen = () => {
        if (file.type === FILE_TYPE.LINK && file.link) {
            window.open(file.link, "_blank", "noopener,noreferrer");
            return;
        }

        openFile(file, dispatch);
    };

    useEffect(() => {
        if (!isFileSelected) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === KEY_CODES.DELETE) dispatch(removeFile(file.id));
            if (e.key === KEY_CODES.ENTER && isFileSelected) {
                openFile(file, dispatch);
                setIsFileSelected(false);
            }
        };

        document.addEventListener(DOM_EVENTS.KEY_DOWN, handleKeyDown as EventListener);
        return () => document.removeEventListener(DOM_EVENTS.KEY_DOWN, handleKeyDown as EventListener);
    }, [dispatch, isFileSelected, file]);

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

    const [position, setPosition] = useState(file.position);

    return (
        <File
            onMouseDown={handleMouseDown}
            onDoubleClick={handleOpen}
            ref={fileRef}
            data-context='file'
            data-id={file.id}
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
                name={file.icon}
                data-file={file.type}
                data-id={file.id}
                data-name={file.name}
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
            {isDragging && targetFolderId && (
                <TooltipStyled>
                    {translate("moveTo")} {targetFolderId}
                </TooltipStyled>
            )}
        </File>
    );
};

export default DraggableFile;
