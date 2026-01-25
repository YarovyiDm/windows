import { changeFileSelectionColor } from "Store/slices/System";
import { FILE_SELECTION_COLORS } from "Components/Windows/SettingsWindow/Components/Desktop/Desktop.constants";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectFileSelectionColor } from "Store/selectors/System";
import { Color } from "Components/Windows/SettingsWindow/Components/Desktop/Components/Colors/Colors.styled";

const FileSelectionColors = () => {
    const dispatch = useAppDispatch();
    const fileSelectionColor = useAppSelector(selectFileSelectionColor);
    
    return (
        <>{FILE_SELECTION_COLORS.map(color => {
            return (
                <Color
                    isSelected={fileSelectionColor === color}
                    onClick={() => dispatch(changeFileSelectionColor(color))}
                    style={{
                        background: color,
                    }}
                />
            );
        })}
        </>
    );
};

export default FileSelectionColors;