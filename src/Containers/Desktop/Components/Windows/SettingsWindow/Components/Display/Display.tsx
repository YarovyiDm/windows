import { TRANSLATION_KEYS } from "constants/translation";
import Slider from "rc-slider";
import Switch from "react-switch";
import { useState } from "react";
import { changeBrightness, changeNightMode } from "store/slices/system";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectNightMode } from "store/selectors/system";
import { BlockBasic } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic";
import { useLanguage } from "hooks/useLanguage";
import {
    SystemContentWrapper,
    SystemItemSubTitleStyle,
    SystemItemWrapper,
} from "../../SettingsWindow.styled";
import { SliderWrapper } from "./Display.styled";
import "rc-slider/assets/index.css";

export const Display = () => {
    const [brightness, setBrightness] = useState<number | number[]>(1);
    const isNightMode = useAppSelector(selectNightMode);
    const dispatch = useAppDispatch();
    const { translate } = useLanguage();

    const onBrightnessChange = (e: number | number[]) => {
        setBrightness(e);
        const brightnessValue = Array.isArray(e) ? e[0] : e;

        dispatch(changeBrightness(brightnessValue));
    };

    const onNightModeChange = () => {
        dispatch(changeNightMode());
    };

    return (
        <BlockBasic>
            <SystemContentWrapper>
                <SystemItemWrapper>
                    <SystemItemSubTitleStyle>{translate(TRANSLATION_KEYS.SETTINGS_WINDOW.BRIGHTNESS)}</SystemItemSubTitleStyle>
                    <SliderWrapper>
                        <Slider
                            step={0.1}
                            min={0.1}
                            value={brightness}
                            max={1}
                            onChange={e => onBrightnessChange(e)}
                        />
                    </SliderWrapper>
                </SystemItemWrapper>
                <SystemItemWrapper>
                    <SystemItemSubTitleStyle>{translate(TRANSLATION_KEYS.SETTINGS_WINDOW.NIGHT_MODE)}</SystemItemSubTitleStyle>
                    <Switch
                        checked={isNightMode}
                        onChange={onNightModeChange}
                        onColor='#86d3ff'
                        onHandleColor='#fff'
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                        activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                        height={20}
                        width={48}
                        className='react-switch'
                        id='material-switch'
                    />
                </SystemItemWrapper>
            </SystemContentWrapper>
        </BlockBasic>
    );
};

export default Display;