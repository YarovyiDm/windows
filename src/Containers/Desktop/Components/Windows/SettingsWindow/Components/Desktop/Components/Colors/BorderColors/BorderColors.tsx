import { changeSelectionStyle } from "store/slices/system";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectSelectionStyles } from "store/selectors/system";
import { BORDER_COLORS } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop.constants";
import { Color } from "../Colors.styled";

const BorderColors = () => {
    const dispatch = useAppDispatch();
    const selectionStyles = useAppSelector(selectSelectionStyles);

    return (
        <>
            {BORDER_COLORS.map(color => {
                return (
                    <Color
                        key={color}
                        isSelected={selectionStyles.borderColor === color}
                        onClick={() =>
                            dispatch(
                                changeSelectionStyle({
                                    key: "borderColor",
                                    value: color,
                                }),
                            )
                        }
                        sx={{
                            background: color,
                        }}
                    />
                );
            })}
        </>);
};

export default BorderColors;