import { Dispatch, SetStateAction } from "react";
import type { CheckDropTargetProps } from "Containers/Desktop/Components/DraggableFile/DraggableFile.types";
import { FILE_TYPE } from "Types/Desktop";

export const checkDropTarget = ({ fileRef, id, setTargetFolderId, parentFolderId }: CheckDropTargetProps) => {
    const file = fileRef.current;

    if (!file) return;

    const folders = document.querySelectorAll<HTMLDivElement>(
        `[data-file="${FILE_TYPE.FOLDER}"]`,
    );

    let folderFound = false;

    folders.forEach(folder => {
        const folderRect = folder.getBoundingClientRect();
        const fileRect = file.getBoundingClientRect();

        if (
            fileRect.left < folderRect.right &&
            fileRect.right > folderRect.left &&
            fileRect.top < folderRect.bottom &&
            fileRect.bottom > folderRect.top &&
            id !== folder.dataset.id &&
            folder.dataset.id !== parentFolderId
        ) {
            setTargetFolderId(folder.dataset.id || "");
            folderFound = true;
        }
    });

    if (!folderFound) {
        setTargetFolderId("");
    }
};

type MouseUpParams = {
    isDragging: boolean;
    positionRef: React.MutableRefObject<{ x: number; y: number; }>;
    fileId: string;
    targetFolderId: string;
    dispatch: Function;
    setIsDragging: (v: boolean) => void;
    setPosition: (pos: { x: number; y: number; }) => void;
};

export const handleFileMouseUp = ({
    isDragging,
    positionRef,
    fileId,
    targetFolderId,
    dispatch,
    setIsDragging,
    setPosition,
}: MouseUpParams) => {
    if (!isDragging) return;

    setIsDragging(false);
    setPosition(positionRef.current);

    dispatch({
        type: "desktop/changeFilePosition",
        payload: { fileId, position: positionRef.current },
    });

    if (targetFolderId) {
        dispatch({
            type: "desktop/dragFileToFolder",
            payload: { fileId, folderId: targetFolderId },
        });
    }
};

type MouseMoveParams = {
    isDragging: boolean;
    e: MouseEvent;
    offset: { x: number; y: number; };
    positionRef: React.MutableRefObject<{ x: number; y: number; }>;
    fileRef: React.RefObject<HTMLDivElement>;
    id: string;
    setTargetFolderId: Dispatch<SetStateAction<string>>;
    parentFolderId: string;
};

export const handleFileMouseMove = ({
    isDragging,
    e,
    offset,
    positionRef,
    fileRef,
    id,
    setTargetFolderId,
    parentFolderId,
}: MouseMoveParams) => {
    if (!isDragging) return;

    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;

    positionRef.current = { x: newX, y: newY };

    if (fileRef.current) {
        fileRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    }

    checkDropTarget({ fileRef, id, setTargetFolderId, parentFolderId });
};