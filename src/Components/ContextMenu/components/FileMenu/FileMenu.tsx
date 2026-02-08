import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDesktopMenuActions } from "Components/ContextMenu/Hooks/useDesktopMenuActions";
import { useLanguage } from "Hooks/useLanguage";
import { TRANSLATION_KEYS } from "Constants/Translation";
import { useAppDispatch, useAppSelector } from "Store/index";
import { openWindow } from "Store/slices/Desktop";
import { DesktopWindow, WINDOW_KIND } from "Types/Desktop";
import { findFileById } from "Utils/findFileById";
import { selectFiles } from "Store/selectors/Desktop";
import { ItemTitle, MenuItem, MenuItemMain } from "../../ContextMenu.styled";
import type { FileMenuProps } from "./FileMenu.types";

const FileMenu = ({
    targetId,
    setRenameFileId,
    setContextMenuVisible,
}: FileMenuProps) => {
    const { deleteFile, renameFile } = useDesktopMenuActions({ setRenameFileId, setContextMenuVisible });
    const { translate } = useLanguage();
    const dispatch = useAppDispatch();
    const files = useAppSelector(selectFiles);

    if(!targetId){ return null; }

    const file = findFileById(files, targetId);

    const window = {
        id: targetId + "_properties",
        kind: WINDOW_KIND.PROPERTIES,
        title: "Properties",
        zIndex: 10,
        payload: {
            fileName: file?.name || "",
            updated_at: file?.updated_at || "",
            created_at: file?.created_at || "",
            content: file && "innerContent" in file ? file.innerContent : [],
            fileType: file?.type || "",
            icon: file?.icon || "",
        },
    } satisfies DesktopWindow;

    return (
        <>
            <MenuItem>
                <MenuItemMain onClick={() => {renameFile(targetId);}}>
                    <EditOutlinedIcon />
                    <ItemTitle>
                        {translate(TRANSLATION_KEYS.CHANGE_NAME)}
                    </ItemTitle>
                </MenuItemMain>
            </MenuItem>
            <MenuItem>
                <MenuItemMain onClick={() => {deleteFile(targetId);}}>
                    <DeleteOutlineOutlinedIcon />
                    <ItemTitle>
                        {translate(TRANSLATION_KEYS.DELETE)}
                    </ItemTitle>
                </MenuItemMain>
            </MenuItem>
            <MenuItem>
                <MenuItemMain onClick={() => {dispatch(openWindow(window)); setContextMenuVisible(false);}}>
                    <InfoOutlineIcon />
                    <ItemTitle>
                        {translate(TRANSLATION_KEYS.PROPERTIES)}
                    </ItemTitle>
                </MenuItemMain>
            </MenuItem>
        </>
    );
};

export default FileMenu;