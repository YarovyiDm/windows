import { LANGUAGES } from "constants/languages";
import { Box } from '@mui/material';
import { changeLanguageIndex } from "store/slices/system";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectLanguageIndex } from "store/selectors/system";
import {
    LanguageModalContentItem,
    LanguageModalContentWrapper,
    LanguageModalSelectedMarker,
} from "./LanguageModalContent.styled";

const LanguageModalContent = () => {
    const systemLanguageIndex = useAppSelector(selectLanguageIndex);
    const dispatch = useAppDispatch();

    const onLanguageChange = (index: number) => {
        dispatch(changeLanguageIndex(index));
    };

    return (
        <LanguageModalContentWrapper>
            {LANGUAGES.map(({ subTitle, title, abbreviation }, index) => {
                return (
                    <LanguageModalContentItem
                        key={abbreviation}
                        onClick={() => onLanguageChange(index)}
                        isSelected={systemLanguageIndex === index}
                    >
                        {systemLanguageIndex === index && (
                            <LanguageModalSelectedMarker />
                        )}
                        <Box sx={{ marginRight: '10px' }}>
                            {abbreviation}
                        </Box>
                        <Box>
                            <Box sx={{ fontWeight: '500' }}>{title}</Box>
                            <Box>{subTitle}</Box>
                        </Box>
                    </LanguageModalContentItem>
                );
            })}
        </LanguageModalContentWrapper>
    );
};

export default LanguageModalContent;