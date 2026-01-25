import { changeSelectionStyle } from "Store/slices/System";
import { AREA_COLORS } from "Components/Windows/SettingsWindow/Components/Desktop/Desktop.constants";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectSelectionStyles } from "Store/selectors/System";
import { Color } from "Components/Windows/SettingsWindow/Components/Desktop/Components/Colors/Colors.styled";

const AreaColors = () => {
    const dispatch = useAppDispatch();
    const selectionStyles = useAppSelector(selectSelectionStyles);

    return (
        <>{AREA_COLORS.map(color => {
            return (
                <Color
                    isSelected={selectionStyles.areaColor === color}
                    onClick={() =>
                        dispatch(
                            changeSelectionStyle({
                                key: "areaColor",
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
        </>
    );
};

export default AreaColors;