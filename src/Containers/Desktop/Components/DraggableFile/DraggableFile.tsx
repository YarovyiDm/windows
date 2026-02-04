import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { openFile } from "Utils";
import { useClickOutside } from "Hooks";
import { Icon } from "Components/index";
import { File, FileName } from "Containers/Desktop/Components/DraggableFile/DraggableFile.styled";
import { useAppDispatch, useAppSelector } from "Store/index";
import {
    setDraggingFile,
    renameFile,
    dragFileToFolder,
    removeFile,
    selectMultipleFiles,
    clearSelection,
} from "Store/slices/Desktop";
import { FILE_TYPE } from "Types/Desktop";
import { selectFileSelectionColor, selectFileSize } from "Store/selectors/System";
import { selectDraggableFile } from "Store/selectors/Desktop";
import { KEY_CODES } from "Constants/KeyCodes";
import { DOM_EVENTS } from "Constants/Events";
import { CONTEXT_MENU_TYPES } from "Constants/System";
import { checkDropTargetByCursor } from "./DraggableFile.helpers";
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
    const mouseDownRef = useRef<{
        x: number;
        y: number;
        isDown: boolean;
    }>({
        x: 0,
        y: 0,
        isDown: false,
    });
    const dragStartedRef = useRef(false);
    const fileRef = useRef<HTMLDivElement | null>(null);

    const draggingFile = useAppSelector(selectDraggableFile());
    const fileSelectionColor = useAppSelector(selectFileSelectionColor);
    const selectedSize = useAppSelector(selectFileSize);
    const [fileName, setFileName] = useState(file.name);
    const [isFileSelected, setIsFileSelected] = useState(isSelected);

    const isRename = useMemo(() => renameFileId === file.id, [renameFileId, file.id]);

    useClickOutside(fileRef, () => {
        setRenameFileId("");
        dispatch(clearSelection());
    });

    const commitRename = () => {
        if (!fileName.length) return;
        dispatch(renameFile({ id: file.id, newName: fileName }));
        setRenameFileId("");
    };

    const handleRenameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === KEY_CODES.ENTER) commitRename();
        if (e.key === KEY_CODES.ESCAPE) setFileName(file.name);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.stopPropagation();

        mouseDownRef.current = {
            x: e.clientX,
            y: e.clientY,
            isDown: true,
        };
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!mouseDownRef.current.isDown) return;

        const dx = Math.abs(e.clientX - mouseDownRef.current.x);
        const dy = Math.abs(e.clientY - mouseDownRef.current.y);
        const isDragStart = dx > 5 || dy > 5;

        if (!dragStartedRef.current && isDragStart) {
            dragStartedRef.current = true;
        }

        if (!dragStartedRef.current) return;

        dispatch(setDraggingFile({
            ...file,
            initialCursorPos: {
                x: e.clientX,
                y: e.clientY,
            },
        }));

        if (!targetFolderHandle) return;

        checkDropTargetByCursor({
            x: e.clientX,
            y: e.clientY,
            setTargetFolderId: targetFolderHandle,
            draggingFileId: file.id,
            parentId: file.parentId,
        });
    };

    const handleMouseUp = () => {
        if (!dragStartedRef.current) {
            mouseDownRef.current.isDown = false;
            return;
        }

        mouseDownRef.current.isDown = false;
        dragStartedRef.current = false;

        if (targetFolderId) {
            dispatch(dragFileToFolder({
                fileId: file.id,
                folderId: targetFolderId,
            }));
        }

        dispatch(setDraggingFile(null));
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
        document.addEventListener(DOM_EVENTS.MOUSE_MOVE, handleMouseMove);
        document.addEventListener(DOM_EVENTS.MOUSE_UP, handleMouseUp);

        return () => {
            document.removeEventListener(DOM_EVENTS.MOUSE_MOVE, handleMouseMove);
            document.removeEventListener(DOM_EVENTS.MOUSE_UP, handleMouseUp);
        };
    }, [targetFolderId, draggingFile]);

    useEffect(() => {
        setIsFileSelected(isSelected);
    }, [isSelected]);

    const handleOpen = () => {
        if (file.type === FILE_TYPE.LINK && file.link) window.open(file.link, "_blank");
        else openFile(file, dispatch);
    };

    return (
        <File
            ref={fileRef}
            onMouseDown={handleMouseDown}
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
                background: isFileSelected ? fileSelectionColor : "",
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
                    value={fileName}
                    autoFocus
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFileName(e.target.value)}
                    style={{ width: "80px" }}
                    onKeyDown={handleRenameKeyDown}
                />
            ) : (
                <FileName>{fileName}</FileName>
            )}
        </File>
    );
};

export default DraggableFile;
