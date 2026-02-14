import { rgbaToRgb } from "utils/rgbaToRgb";
import { changeSelectionStyle } from "store/slices/system";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectSelectionStyles } from "store/selectors/system";
import { AREA_COLORS } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Desktop/Desktop.constants";
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