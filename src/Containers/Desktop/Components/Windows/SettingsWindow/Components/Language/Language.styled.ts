import { styled, Autocomplete } from "@mui/material";
import { LanguageOption } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Language/Language";

export const LanguageAutoCompleteStyled = styled(
    Autocomplete<LanguageOption>,
)({
    width: "200px",
    "& .MuiInputBase-input": {
        color: "#fff",
    },
    "& .MuiInputLabel-root": {
        color: "#fff",
    },
    "& .MuiSvgIcon-root": {
        color: "#fff",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3d3d3d",
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3d3d3d",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3d3d3d",
        borderWidth: "2px",
    },

    "& .MuiInputLabel-root.Mui-focused": {
        color: "white",
    },
    "& .MuiAutocomplete-option": {
        color: "#fff",
        fontSize: "14px",

        "&[aria-selected='true']": {
            backgroundColor: "#3f51b5",
        },

        "&.Mui-focused": {
            backgroundColor: "rgba(255,255,255,0.08)",
        },

        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.12)",
        },
    },
});