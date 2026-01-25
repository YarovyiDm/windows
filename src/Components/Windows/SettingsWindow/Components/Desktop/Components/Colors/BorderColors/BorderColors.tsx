import { changeSelectionStyle } from "Store/slices/System";
import { BORDER_COLORS } from "Components/Windows/SettingsWindow/Components/Desktop/Desktop.constants";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectSelectionStyles } from "Store/selectors/System";
import { Color } from "Components/Windows/SettingsWindow/Components/Desktop/Components/Colors/Colors.styled";

const BorderColors = () => {
    const dispatch = useAppDispatch();
    const selectionStyles = useAppSelector(selectSelectionStyles);

    return (
        <>
            {BORDER_COLORS.map(color => {
                return (
                    <Color
                        isSelected={selectionStyles.borderColor === color}
                        onClick={() =>
                            dispatch(
                                changeSelectionStyle({
                                    key: "borderColor",
                                    value: color,
                                }),
                            )
                        }
                        style={{
                            background: color,
                        }}
                    />
                );
            })}
        </>);
};

export default BorderColors;