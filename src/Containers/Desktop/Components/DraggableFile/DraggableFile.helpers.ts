import { FILE_TYPE } from "Types/Desktop";

export const checkDropTargetByCursor = ({
    x,
    y,
    setTargetFolderId,
    draggingFileId,
    parentId,
}: {
    x: number;
    y: number;
    setTargetFolderId: (id: string) => void;
    draggingFileId?: string;
    parentId?: string;
}) => {
    const elementUnderCursor = document.elementFromPoint(x, y) as HTMLElement | null;

    if (!elementUnderCursor) {
        setTargetFolderId("");
        return;
    }

    const folderEl = elementUnderCursor.closest<HTMLElement>(
        `[data-file="${FILE_TYPE.FOLDER}"], [data-file="DESKTOP"]`,
    );

    if (!folderEl) {
        setTargetFolderId("");
        return;
    }

    const fileType = folderEl.getAttribute("data-file");
    const folderId = folderEl.getAttribute("data-id") || "";

    if (folderId === draggingFileId || folderId === parentId) {
        setTargetFolderId("");
        return;
    }

    if (fileType === FILE_TYPE.FOLDER || fileType === "DESKTOP") {
        setTargetFolderId(folderId);
    } else {
        setTargetFolderId("");
    }
};

// type MouseUpParams = {
//     isDragging: boolean;
//     positionRef: React.MutableRefObject<{ x: number; y: number; }>;
//     fileId: string;
//     targetFolderId: string;
//     dispatch: Function;
//     setIsDragging: (v: boolean) => void;
//     setPosition: (pos: { x: number; y: number; }) => void;
// };

// export const handleFileMouseUp = ({
//     isDragging,
//     positionRef,
//     fileId,
//     targetFolderId,
//     dispatch,
//     setIsDragging,
//     setPosition,
// }: MouseUpParams) => {
//     if (!isDragging) return;
//
//     setIsDragging(false);
//     setPosition(positionRef.current);
//
//     // dispatch({
//     //     type: "desktop/changeFilePosition",
//     //     payload: { fileId, position: positionRef.current },
//     // });
//
//     if (targetFolderId) {
//         dispatch({
//             type: "desktop/dragFileToFolder",
//             payload: { fileId, folderId: targetFolderId },
//         });
//     }
// };

// type MouseMoveParams = {
//     isDragging: boolean;
//     e: MouseEvent;
//     offset: { x: number; y: number; };
//     positionRef: React.MutableRefObject<{ x: number; y: number; }>;
//     fileRef: React.RefObject<HTMLDivElement>;
//     id: string;
//     setTargetFolderId: Dispatch<SetStateAction<string>>;
//     parentFolderId: string;
// };

// export const handleFileMouseMove = ({
//     isDragging,
//     e,
//     offset,
//     positionRef,
//     fileRef,
//     id,
//     setTargetFolderId,
//     parentFolderId,
// }: MouseMoveParams) => {
//     if (!isDragging) return;
//
//     const newX = e.clientX - offset.x;
//     const newY = e.clientY - offset.y;
//
//     positionRef.current = { x: newX, y: newY };
//
//     if (fileRef.current) {
//         fileRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
//     }
//
//     checkDropTarget({ fileRef, id, setTargetFolderId, parentFolderId });
// };