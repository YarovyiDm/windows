import { useAppDispatch, useAppSelector } from "store/index";
import { selectSystemLanguage } from "store/selectors/system";
import { changeSystemLanguage } from "store/slices/system";
import translations from "Components/I18n/translations";

type Language = keyof typeof translations;

export const useLanguage = () => {
    const dispatch = useAppDispatch();
    const language = useAppSelector(selectSystemLanguage) as Language;

    const changeLanguage = (newLanguage: keyof typeof translations) => {
        dispatch(changeSystemLanguage(newLanguage));
    };

    const translate = (key: keyof (typeof translations)["ENG"]) =>
        translations[language][key] || key;

    return { translate, changeLanguage };
};
