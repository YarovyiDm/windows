import React, { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "Components/index";
import { checkDropTarget } from "Containers/Desktop/Components/DraggableFile/DraggableFile.helpers";
import { File, FileName, TooltipStyled } from "Containers/Desktop/Components/DraggableFile/DraggableFile.styled";
import {
    DELETE_KEY_CODE,
    ENTER_KEY_CODE,
    KEY_DOWN_EVENT,
    MOUSE_DOWN_EVENT,
    MOUSE_MOVE_EVENT,
    MOUSE_UP_EVENT,
} from "Constants/System";
import useLanguage from "Hooks/useLanguage";
import { useAppDispatch, useAppSelector } from "Store/index";
import {
    selectFileSelectionColor,
    selectFileSize,
} from "Store/selectors/System";
import {
    changeFilePosition,
    dragFileToFolder,
    openWindow,
    removeFile,
} from "Store/slices/Desktop";
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

    const handleClickOutside = useCallback((e: MouseEvent) => {
        if (fileRef.current && !fileRef.current.contains(e.target as Node)) {
            setIsFileSelected(false);
            setRenameFileId('');
        }
    }, [setRenameFileId]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setIsFileSelected(true);
        setIsSelecting(false);

        offsetRef.current = {
            x: e.clientX - positionRef.current.x,
            y: e.clientY - positionRef.current.y,
        };
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;

        const newX = e.clientX - offsetRef.current.x;
        const newY = e.clientY - offsetRef.current.y;

        positionRef.current = { x: newX, y: newY };

        if (fileRef.current) {
            fileRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
        }

        checkDropTarget({ fileRef, id, setTargetFolderName });
    }, [isDragging, id]);

    const handleMouseUp = useCallback(() => {
        if (!isDragging) return;

        setIsDragging(false);
        setPosition(positionRef.current);
        dispatch(changeFilePosition({ name, position: positionRef.current }));

        if (targetFolderName) {
            dispatch(dragFileToFolder({ fileName: name, folderName: targetFolderName }));
            setTargetFolderName("");
        }
    }, [dispatch, isDragging, name, targetFolderName]);

    useEffect(() => {
        if (!isFileSelected) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === DELETE_KEY_CODE) dispatch(removeFile(id));
            if (e.key === ENTER_KEY_CODE && isFileSelected) {
                if (!isOpened) {
                    dispatch(openWindow({ zIndex: 999, content: innerContent, fileName: name, id, type }));
                }
                setIsFileSelected(false);
            }
        };

        document.addEventListener(KEY_DOWN_EVENT, handleKeyDown as EventListener);
        return () => document.removeEventListener(KEY_DOWN_EVENT, handleKeyDown as EventListener);
    }, [dispatch, isFileSelected, id, innerContent, isOpened, name, type]);

    useEffect(() => {
        const handleMouseDownWrapper = (e: Event) => handleClickOutside(e as MouseEvent);
        const handleMouseMoveWrapper = (e: Event) => handleMouseMove(e as MouseEvent);
        const handleMouseUpWrapper = () => handleMouseUp();

        document.addEventListener(MOUSE_DOWN_EVENT, handleMouseDownWrapper);
        if (isDragging) {
            document.addEventListener(MOUSE_MOVE_EVENT, handleMouseMoveWrapper);
            document.addEventListener(MOUSE_UP_EVENT, handleMouseUpWrapper);
        }

        return () => {
            document.removeEventListener(MOUSE_DOWN_EVENT, handleMouseDownWrapper);
            document.removeEventListener(MOUSE_MOVE_EVENT, handleMouseMoveWrapper);
            document.removeEventListener(MOUSE_UP_EVENT, handleMouseUpWrapper);
        };
    }, [isDragging, handleClickOutside, handleMouseMove, handleMouseUp]);

    useEffect(() => {
        setIsFileSelected(isSelected);
    }, [isSelected]);

    const onFileNameChange = (e: ChangeEvent<HTMLInputElement>) => setFileName(e.target.value);

    const [position, setPosition] = useState(filePosition);

    return (
        <File
            onMouseDown={handleMouseDown}
            onDoubleClick={() => {
                if (!isOpened) {
                    dispatch(openWindow({ zIndex: 999, content: innerContent, fileName: name, id, type }));
                }
            }}
            ref={fileRef}
            data-context='file'
            data-id={id}
            onContextMenu={onContextMenu}
            className='prevent-selecting'
            sx={{
                width: selectedSize?.width,
                height: selectedSize?.height,
                position: "absolute",
                zIndex: isFileSelected ? 9 : 1,
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
                ? <input value={fileName} autoFocus onChange={onFileNameChange} />
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
