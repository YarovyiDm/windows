import cn from "classnames";
import { Box } from  '@mui/material';
import { openFile } from "Utils";
import { Icon } from "Components/index";
import { useAppDispatch, useAppSelector } from "Store/index";
import { FILE_TYPE } from "Types/Desktop";
import { selectOpenedWindowLength } from "Store/selectors/Desktop";
import { selectTaskBarApps } from "Store/selectors/TaskBar";
import styles from "./Apps.module.scss";

const Apps = () => {
    const dispatch = useAppDispatch();
    const openedWindowsLength = useAppSelector(selectOpenedWindowLength);
    const taskBarApps = useAppSelector(selectTaskBarApps);

    const onAppClick = (name: string, icon: string) => {
        openFile({
            id: FILE_TYPE.BROWSER,
            name,
            icon,
            isSelected: false,
            type: FILE_TYPE.BROWSER,
        }, dispatch, openedWindowsLength);
    };

    return (
        <Box sx={{ display: "flex", width: "fit-content", blockSize: "fit-content", cursor: "pointer" }}>
            {taskBarApps.map((app) => {
                return (
                    <div
                        key={app.id}
                        className={cn(styles.taskPanelAppUnit, {
                            [styles.appIsActive]: app.isFocused,
                        })}
                        data-tooltip-content={app.name}
                        data-tooltip-id='taskPanelTooltips'
                        data-tooltip-delay-show={500}
                        onClick={() => onAppClick(app.name, app.icon)}
                    >
                        <Icon
                            className={styles.taskPanelAppIcon}
                            name={app.icon}
                        />
                        {app.isOpen && (
                            <div
                                className={cn(
                                    styles.isAppOpen,
                                    app.isFocused && styles.appInFocus,
                                )}
                            ></div>
                        )}
                    </div>
                );
            })}
        </Box>
    );
};

export default Apps;
