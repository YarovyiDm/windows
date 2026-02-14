import { TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "store/index";
import { changeSystemLanguage } from "store/slices/system";
import { BlockBasic } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic";
import translations from "Components/I18n/translations";
import {
    LanguageAutoCompleteStyled,
} from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Language/Language.styled";

type LanguageKey = keyof typeof translations;

export type LanguageOption = {
    label: string;
    value: LanguageKey;
};

const LANGUAGE_OPTIONS: LanguageOption[] = [
    { label: "English", value: "ENG" },
    { label: "Ukrainian", value: "UA" },
    { label: "Polish", value: "PL" },
];

const Language = () => {
    const dispatch = useAppDispatch();
    const currentLanguage = useAppSelector(
        state => state.system.systemLanguage,
    );

    const selectedOption =
        LANGUAGE_OPTIONS.find(opt => opt.value === currentLanguage) ?? null;

    return (
        <BlockBasic>
            <LanguageAutoCompleteStyled
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: "#3d3d3d",
                            color: "#fff",
                            "& .MuiAutocomplete-option": {
                                backgroundColor: "transparent",
                                "&:hover:not([aria-selected='true'])": {
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                },
                                "&.Mui-focused:not([aria-selected='true'])": {
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                },
                                "&[aria-selected='true']": {
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                },
                                "&[aria-selected='true']:hover, &[aria-selected='true'].Mui-focused": {
                                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                                },
                            },
                        },
                    },
                }}
                options={LANGUAGE_OPTIONS}
                value={selectedOption}
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) =>
                    option.value === value.value
                }
                onChange={(_, option) => {
                    if (option) {
                        dispatch(changeSystemLanguage(option.value));
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label='Language'
                        size='small'
                    />
                )}
            />
        </BlockBasic>
    );
};

export default Language;