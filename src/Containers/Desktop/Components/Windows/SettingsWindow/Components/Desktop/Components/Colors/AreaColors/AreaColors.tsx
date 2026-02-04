import { rgbaToRgb } from "Utils";
import { changeSelectionStyle } from "Store/slices/System";
import { AREA_COLORS } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop.constants";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectSelectionStyles } from "Store/selectors/System";
import { Color } from "../Colors.styled";

const AreaColors = () => {
    const dispatch = useAppDispatch();
    const selectionStyles = useAppSelector(selectSelectionStyles);

    return (
        <>{AREA_COLORS.map(color => {
            return (
                <Color
                    key={color}
                    isSelected={selectionStyles.areaColor === color}
                    onClick={() =>
                        dispatch(
                            changeSelectionStyle({
                                key: "areaColor",
                                value: color,
                            }),
                        )
                    }
                    sx={{
                        background: rgbaToRgb(color),
                    }}
                />
            );
        })}
        </>
    );
};

export default AreaColors;