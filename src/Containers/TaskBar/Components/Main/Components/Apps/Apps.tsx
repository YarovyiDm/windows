import { map } from "lodash";
import cn from "classnames";
import { Box } from  '@mui/material';
import { openFile } from "Utils";
import { Icon } from "Components/index";
import { useAppDispatch, useAppSelector } from "Store/index";
import { AppsProps, PinnedAppsProps } from "Containers/TaskBar/Components/Main/Components/Apps/Apps.types";
import { FILE_TYPE } from "Types/Desktop";
import { selectOpenedWindowLength } from "Store/selectors/Desktop";
import styles from "./Apps.module.scss";

const Apps = ({ apps }: AppsProps) => {
    const dispatch = useAppDispatch();
    const openedWindowsLength = useAppSelector(selectOpenedWindowLength);

    const onAppClick = (name: string, icon: string) => {
        openFile({
            id: FILE_TYPE.BROWSER,
            name,
            icon,
            isSelected: false,
            type: FILE_TYPE.BROWSER,
        }, dispatch, openedWindowsLength);
        // dispatch(openingApp(name));
        // dispatch(changeApp(name));
    };

    return (
        <Box sx={{ display: "flex", width: "fit-content", blockSize: "fit-content", cursor: "pointer" }}>
            {apps &&
                map(
                    apps,
                    ({
                        name,
                        isOpen,
                        isFocused,
                        icon,
                    }: PinnedAppsProps) => {
                        return (
                            <div
                                key={name}
                                className={cn(styles.taskPanelAppUnit, {
                                    [styles.appIsActive]: isFocused,
                                })}
                                data-tooltip-content={name}
                                data-tooltip-id='taskPanelTooltips'
                                data-tooltip-delay-show={500}
                                onClick={() => onAppClick(name, icon)}
                            >
                                <Icon
                                    className={styles.taskPanelAppIcon}
                                    name={icon}
                                />
                                {isOpen && (
                                    <div
                                        className={cn(
                                            styles.isAppOpen,
                                            isFocused && styles.appInFocus,
                                        )}
                                    ></div>
                                )}
                            </div>
                        );
                    },
                )}
        </Box>
    );
};

export default Apps;
