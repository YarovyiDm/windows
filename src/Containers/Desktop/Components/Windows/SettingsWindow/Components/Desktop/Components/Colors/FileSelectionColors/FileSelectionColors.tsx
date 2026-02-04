import { changeFileSelectionColor } from "Store/slices/System";
import { FILE_SELECTION_COLORS } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop.constants";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectFileSelectionColor } from "Store/selectors/System";
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