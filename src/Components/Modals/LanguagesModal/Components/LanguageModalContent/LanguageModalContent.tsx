import { Box } from '@mui/material';
import { LANGUAGES } from "Constants/System";
import { changeLanguageIndex } from "Store/slices/System";
import { toggleModal } from "Store/slices/TaskPanelSlice";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectLanguageIndex } from "Store/selectors/System";
import {
    LanguageModalContentItem,
    LanguageModalContentWrapper, LanguageModalSelectedMarker,
} from "Components/Modals/LanguagesModal/Components/LanguageModalContent/LanguageModalContent.styled";

const LanguageModalContent = () => {
    const systemLanguageIndex = useAppSelector(selectLanguageIndex);
    const dispatch = useAppDispatch();

    const onLanguageChange = (index: number) => {
        dispatch(changeLanguageIndex(index));
        dispatch(toggleModal({ modalName: "isLanguagesModalOpen" }));
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