import { openFile } from "domain/desktop/mutations/openFile";
import { ICONS } from "constants/icons";
import { Box } from  '@mui/material';
import { FILE_TYPE } from "types/desktop";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectOpenedWindowLength, selectRoot } from "store/selectors/desktop";
import { selectTaskBarApps } from "store/selectors/taskBar";
import { Icon } from "Components/index";
import { getFileData } from "Containers/TaskBar/Components/Main/Components/Apps/Apps.helpers";
import { AppIconWrapper, AppWrapper } from "Containers/TaskBar/Components/Main/Components/Apps/Apps.styled";

const Apps = () => {
    const dispatch = useAppDispatch();
    const openedWindowsLength = useAppSelector(selectOpenedWindowLength);
    const taskBarApps = useAppSelector(selectTaskBarApps);
    const root = useAppSelector(selectRoot);

    const onAppClick = (
        name: string,
        icon: keyof typeof ICONS,
        type: FILE_TYPE.FOLDER | FILE_TYPE.BROWSER) => {
        const file = getFileData({ name, icon, root, type });

        openFile(file, dispatch, openedWindowsLength);
    };

    return (
        <Box sx={{ display: "flex", width: "fit-content", blockSize: "fit-content", cursor: "pointer" }}>
            {taskBarApps.map((app) => {
                return (
                    <>
                        <AppWrapper
                            key={app.id}
                            onClick={() => onAppClick(app.name, app.icon, app.type)}
                        >
                            <AppIconWrapper>
                                <Icon name={app.icon} />
                            </AppIconWrapper>
                        </AppWrapper>
                    </>
                );
            })}
        </Box>
    );
};

export default Apps;
