import { openFile } from "domain/desktop/mutations/openFile";
import { getPayloadBytes } from "domain/desktop/queries/getPayloadBytes";
import { CONTEXT_MENU_TYPES, DISK_CAPACITY_BYTES } from "constants/system";
import { type ChangeEvent, useRef } from "react";
import { useClickOutside } from "hooks";
import { Box } from '@mui/material';
import { formatBytes } from "utils/formatBytes";
import { FILE_TYPE } from "types/desktop";
import { useAppDispatch, useAppSelector } from "store/index";
import {
    selectMultipleFiles,
} from "store/slices/desktop";
import { selectFileSelectionColor, selectFileSize } from "store/selectors/system";
import { selectOpenedWindowLength } from "store/selectors/desktop";
import { File, FileName } from "Containers/Desktop/Components/DraggableFile/DraggableFile.styled";
import { Icon } from "Components/index";
import { useFileRename } from "./hooks/useFileRename";
import { useFileKeyboard } from "./hooks/useFileKeyboard";
import { useFileDrag } from "./hooks/useFileDrag";
import type { DraggableFileProps } from "./DraggableFile.types";

const DraggableFile = ({
    file,
    isSelected,
    onContextMenu,
    renameFileId,
    setRenameFileId,
    targetFolderHandle,
    targetFolderId,
    onOpen,
}: DraggableFileProps) => {
    const dispatch = useAppDispatch();
    const fileRef = useRef<HTMLDivElement | null>(null);
    const isSystemFile = file.systemFile;

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
        if (file.type === FILE_TYPE.LINK && file.link) {
            window.open(file.link, "_blank");
            return;
        }

        if (onOpen) {
            onOpen(file);
            return;
        }

        openFile(file, dispatch, openedWindowsLength);
    };

    let usedBytes = 0;

    if (isSystemFile && "innerContent" in file) {
        usedBytes = getPayloadBytes(file);
    }

    const percent = Math.min((usedBytes / DISK_CAPACITY_BYTES) * 100, 100);

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
            data-file={file.type}
            sx={{
                width: isSystemFile ? "200px" : selectedSize?.width,
                height: selectedSize?.height,
                background: isSelected ? fileSelectionColor : "",
                willChange: "transform",
            }}
        >
            <Box sx={{ display: "flex", gap: '10px', alignItems: 'center' }}>
                <Icon
                    name={file.icon}
                    style={{ width: selectedSize.width / 2, height: selectedSize.height / 2 }}
                />
                {isSystemFile && <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Box sx={{ color: 'white', fontSize: '12px' }}>Local Disk ({fileName})</Box>
                    <Box sx={{ width: "100px", height: "10px", border: 'solid 1px white' }}>
                        <Box sx={{ height: '100%', width: `${percent}%`, background: "#457996" }}/>
                    </Box>
                    <Box sx={{ color: 'white', fontSize: '11px' }}>
                        {formatBytes(usedBytes)} / {formatBytes(DISK_CAPACITY_BYTES)}
                    </Box>
                </Box>}
            </Box>

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
                !isSystemFile && <FileName>{fileName}</FileName>
            )}
        </File>
    );
};

export default DraggableFile;

