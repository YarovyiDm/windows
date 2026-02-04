export const LANG_ABBR = {
    ENG: "ENG",
    UA: "УКР",
    PL: "PL",
} as const;
export const LANGUAGES = [
    {
        abbreviation: LANG_ABBR.UA,
        title: "Українська",
        subTitle: "Українська (розширена)",
    },
    { abbreviation: LANG_ABBR.ENG, title: "Англійська (США)", subTitle: "US" },
    { abbreviation: LANG_ABBR.PL, title: "Польська", subTitle: "Польська" },
] as const;
export const DEFAULT_LANGUAGE_INDEX: number = 0;
export const LANGUAGE_CHANGE_STEP: number = 1;
export const MAX_LANGUAGES: number = LANGUAGES.length - LANGUAGE_CHANGE_STEP;