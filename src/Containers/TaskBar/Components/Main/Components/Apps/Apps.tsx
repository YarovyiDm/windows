import { map } from "lodash";
import cn from "classnames";
import { Box } from  '@mui/material';
import { Icon } from "Components/index";
import { useAppDispatch } from "Store/index";
import { changeApp, openingApp } from "Store/slices/TaskPanelSlice";
import type { PinnedAppsProps } from "Containers/TaskBar/Components/Main/Components/Apps/Apps.types";
import styles from "./Apps.module.scss";

const Apps = ({
    taskPanelApps,
}: {
    taskPanelApps: { [key: string]: PinnedAppsProps; };
}) => {
    const dispatch = useAppDispatch();

    const onAppClick = (name: string) => {
        dispatch(openingApp(name));
        dispatch(changeApp(name));
    };

    return (
        <Box sx={{ display: "flex", width: "fit-content", blockSize: "fit-content", cursor: "pointer" }}>
            {taskPanelApps &&
                map(
                    taskPanelApps,
                    ({
                        name,
                        isOpen,
                        isFocused,
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
                                onClick={() => onAppClick(name)}
                            >
                                <Icon
                                    className={styles.taskPanelAppIcon}
                                    name={name}
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
