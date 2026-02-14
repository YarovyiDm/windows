import { changeFileSelectionColor } from "store/slices/system";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectFileSelectionColor } from "store/selectors/system";
import { FILE_SELECTION_COLORS } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop.constants";
import { Color } from "../Colors.styled";

const FileSelectionColors = () => {
    const dispatch = useAppDispatch();
    const fileSelectionColor = useAppSelector(selectFileSelectionColor);

    return (
        <>{FILE_SELECTION_COLORS.map(color => {
            return (
                <Color
                    key={color}
                    isSelected={fileSelectionColor === color}
                    onClick={() => dispatch(changeFileSelectionColor(color))}
                    sx={{
                        background: color,
                    }}
                />
            );
        })}
        </>
    );
};

export default FileSelectionColors;