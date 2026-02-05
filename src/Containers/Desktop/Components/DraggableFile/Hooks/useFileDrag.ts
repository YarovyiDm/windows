import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "Store/index";
import { dragFileToFolder, setDraggingFile } from "Store/slices/Desktop";
import { checkDropTargetByCursor } from "Containers/Desktop/Components/DraggableFile/DraggableFile.helpers";
import { DOM_EVENTS } from "Constants/Events";
import { DesktopFile } from "Types/Desktop";
import { selectDraggableFile } from "Store/selectors/Desktop";

type Props = {
    file: DesktopFile;
    targetFolderId: string;
    targetFolderHandle?: (id: string) => void;
}

export const useFileDrag = ({
    file,
    targetFolderId,
    targetFolderHandle,
}: Props) => {
    const dispatch = useAppDispatch();
    const mouseDownRef = useRef({ x: 0, y: 0, isDown: false });
    const dragStartedRef = useRef(false);
    const draggingFile = useAppSelector(selectDraggableFile());

    const onMouseDown = (e: React.MouseEvent) => {
        e.stopPropagation();
        mouseDownRef.current = { x: e.clientX, y: e.clientY, isDown: true };
    };

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            if (!mouseDownRef.current.isDown) return;

            const dx = Math.abs(e.clientX - mouseDownRef.current.x);
            const dy = Math.abs(e.clientY - mouseDownRef.current.y);

            if (!dragStartedRef.current && (dx > 5 || dy > 5)) {
                dragStartedRef.current = true;
            }

            if (!dragStartedRef.current) return;

            dispatch(setDraggingFile({
                ...file,
                initialCursorPos: { x: e.clientX, y: e.clientY },
            }));

            if (targetFolderHandle) {
                checkDropTargetByCursor({
                    x: e.clientX,
                    y: e.clientY,
                    setTargetFolderId: targetFolderHandle,
                    draggingFileId: file.id,
                    parentId: file.parentId,
                });
            }
        };

        const onUp = () => {
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

        document.addEventListener(DOM_EVENTS.MOUSE_MOVE, onMove);
        document.addEventListener(DOM_EVENTS.MOUSE_UP, onUp);

        return () => {
            document.removeEventListener(DOM_EVENTS.MOUSE_MOVE, onMove);
            document.removeEventListener(DOM_EVENTS.MOUSE_UP, onUp);
        };
    }, [targetFolderId, draggingFile, dispatch, file, targetFolderHandle]);

    return { onMouseDown };
};
