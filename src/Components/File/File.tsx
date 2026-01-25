import { useAppDispatch, useAppSelector } from "Store/index";
import { handleCloseAllModals } from "Store/slices/TaskPanelSlice";
import { Icon } from "Components";

import styles from "./File.module.scss";
import { openWindow } from "Store/slices/Desktop";
import { selectIsWindowOpen } from "Store/selectors/Desktop";
import { FileProps } from "./FIle.types";

const File = ({ name, text }: FileProps) => {
    const dispatch = useAppDispatch();
    const isSettingsWindowOpen = useAppSelector(selectIsWindowOpen("Settings"));

    const onFileModalChange = () => {
        dispatch(handleCloseAllModals());
        if (!isSettingsWindowOpen) {
            dispatch(
                openWindow({
                    zIndex: 999,
                    content: [],
                    fileName: name,
                    id: "sdsdsdss",
                    type: " 3434324",
                    isSystem: true,
                }),
            );
        }
    };

    return (
        <div className={styles.file} onClick={onFileModalChange}>
            <Icon name={name} />
            <div className={styles.fileName}>{text}</div>
        </div>
    );
};

export default File;
