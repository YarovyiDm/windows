import { getFileById } from "domain/desktop/queries/getFileById";
import { TRANSLATION_KEYS } from "constants/translation";
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { type DesktopWindow, WINDOW_KIND } from "types/desktop";
import { useAppDispatch, useAppSelector } from "store/index";
import { openWindow } from "store/slices/desktop";
import { selectRoot } from "store/selectors/desktop";
import { useDesktopMenuActions } from "Components/ContextMenu/hooks/useDesktopMenuActions";
import { useLanguage } from "hooks/useLanguage";
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
    const files = useAppSelector(selectRoot);

    if(!targetId){ return null; }

    const file = getFileById(files, targetId);

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