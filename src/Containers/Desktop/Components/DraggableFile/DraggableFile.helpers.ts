import type { CheckDropTargetProps } from "Containers/Desktop/Components/DraggableFile/DraggableFile.types";

export const checkDropTarget = ({ fileRef, id, setTargetFolderName }: CheckDropTargetProps) => {
    const file = fileRef.current;

    if (!file) return;

    const folders = document.querySelectorAll<HTMLDivElement>(
        "[data-file='folder']",
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
            id !== folder.dataset.id
        ) {
            setTargetFolderName(folder.dataset.name || "");
            folderFound = true;
        }
    });

    if (!folderFound) {
        setTargetFolderName("");
    }
};