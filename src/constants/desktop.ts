import { TRANSLATION_KEYS } from "constants/translation";
import translations from "Components/I18n/translations";
import { ICONS } from "./icons";

export const MIN_WINDOW_WIDTH = 430;
export const MIN_WINDOW_HEIGHT = 260;

export const DESKTOP_FILE_SIZE_KEYS = { SMALL: "small", MEDIUM: "medium", LARGE: "large" } as const;

export const DESKTOP_FILE_SIZE = {
    [DESKTOP_FILE_SIZE_KEYS.SMALL]: { width: 60, height: 50 },
    [DESKTOP_FILE_SIZE_KEYS.MEDIUM]: { width: 80, height: 70 },
    [DESKTOP_FILE_SIZE_KEYS.LARGE]: { width: 100, height: 90 },
} as const;

export const SIZE_HOT_KEYS_MAP = {
    Digit2: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.LARGE],
    Digit3: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.MEDIUM],
    Digit4: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.SMALL],
} as const;

export const DESKTOP_FILE_SIZE_UNIT = [
    { name: TRANSLATION_KEYS.BIG_ICONS as keyof typeof translations.ENG, iconName: ICONS.SQUARE_LIST, size: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.LARGE], hotKeys: "Ctrl+Shift+2" },
    { name: TRANSLATION_KEYS.MEDIUM_ICONS as keyof typeof translations.ENG, iconName: ICONS.SQUARE_LIST, size: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.MEDIUM], hotKeys: "Ctrl+Shift+3" },
    { name: TRANSLATION_KEYS.SMALL_ICONS as keyof typeof translations.ENG, iconName: ICONS.VIEW_BOXES, size: DESKTOP_FILE_SIZE[DESKTOP_FILE_SIZE_KEYS.SMALL], hotKeys: "Ctrl+Shift+4" },
] as const;

export const DEFAULT_DESKTOP_MODAL_SIZE = {
    width: 700,
    height: 500,
};

export const DEFAULT_DESKTOP_CONTEXT_MENU_WIDTH: number = 250;

export const HIDDEN_APPS: Array<string> = [
    ICONS.POSTMAN,
    ICONS.WEBSTORM,
    ICONS.TELEGRAM,
    ICONS.STEAM,
    ICONS.BROWSER,
    ICONS.SKYPE,
];

export const CV_PDF_FILE = {
    title: "Frontend developer",
    info: {
        name: "Yarovyi Dmytro",
        email: "yarovoy.dmytro@gmail.com",
        location: "Kyiv, Ukraine",
    },
    summary: {
        title: "Summary",
        text: "Frontend developer with over 3 years of professional experience. Strong in React, TypeScript, modern state management, and UI architecture. Hands-on backend experience (Node.js, MongoDB, REST, tRPC). Experienced in complex business domains and maintaining legacy codebases.",
    },
    techSkills: {
        title: "Technical skills",
        frontend: {
            title: "Frontend",
            list: [
                "JavaScript (ES6+), TypeScript, React (Hooks), React Query",
                "Redux, Redux Toolkit",
                "HTML, CSS, SCSS, CSS Modules, styled-components",
                "MUI, Formik, React Hook Form, Yup, Zod (schema validation type-safe forms, APIs)",
            ],
        },
        backend: {
            title: "Backend (Hands-on)",
            list: [
                "Node.js",
                "MongoDB",
                "REST APIs, tRPC",
                "API design and data handling",
            ],
        },
        engineeringPractice: {
            title: "Engineering practices",
            list: [
                "DRY, KISS, YAGNI",
                "Refactoring and maintaining legacy codebases",
                "Performance optimization",
            ],
        },
        tools: {
            title: "Tools",
            list: [
                "Git (GitHub / GitLab), Jira, ClickUp, Figma",
                "ESLint, Prettier",
                "Postman, Swagger (API exploration & integration)",
            ],
        },
    },
    experience: {
        title: "Experience",
        jobs: [
            {
                companyName: "Approve Leads",
                period: "11.2024 - 02.2026",
                position: "React Developer with Full-Stack Exposure",
                techStack: "React (Hooks) + TypeScript, MUI, React Hook Form, Zod, styled-components, Node.js, MongoDB, React Query",
                list: [
                    "Developed and maintained internal web app in the affiliate marketing domain",
                    "Developed a reusable JSON Tree View component that renders arbitrary JSON data into an interactive, expandable UI, supporting nested objects and arrays.",
                    "Integrated the application with external services and third-party APIs",
                    "Automated traffic processing and data workflows",
                    "Built analytics dashboards and reporting tools used by business and marketing teams",
                    "Implemented new UI features and full-stack functionality, including API integration and data handling",
                    "Refactored and optimized existing components to improve performance and maintainability",
                ],
            },
            {
                companyName: "Andersen lab",
                period: "09.2021 - 11.2022",
                position: "React Developer",
                techStack: "React (Hooks) + Flow / TypeScript, Redux, MUI, Formik + Yup",
                list: [
                    "Worked on a large internal system that automates business processes for sales and staff managers",
                    "Developed a resume builder with an intuitive UI, dynamic template selection and real-time preview",
                    "Implemented complex business logic to support diverse workflows and requirements",
                    "Collaborated closely with product owners and stakeholders to clarify requirements and deliver business-aligned features",
                    "Designed and implemented data-rich user interfaces displaying detailed employee and project information",
                    "Participated in refactoring and maintaining legacy code, including class-based React components",
                    "Actively participated in code reviews, ensuring code quality and adherence to best practices",
                ],
            },
        ],
    },
};

export const DEFAULT_README_TEXT = `                                 ----- Система -----
        
        
1. Робочий стіл.
    1.1 Файл.
        1.1.1 Можливість виділення файла/файлів.
        1.1.2 Можливість відкриття файла через double click або виділивши файл і натиснувши Enter.
        1.1.3 Можливість перетягування файла в/з папки на робочий стіл/іншу папку (як в ярлик, так і у відкрите вікно папки).
        1.1.4 Можливість видалення файла/файлів натиснувши delete попередньо виділивши їх, або через контекстне меню натиснувши праву кнопку миші по файлу. Файли попадуть в кошик.
        1.1.5 Можливість редагування текстового файлу. При закритті відредагованого, не збереженого файла з'явиться повідомлення.
        1.1.6 Можливість збереження відредагованого файла натиснувши Ctrl + S.
        1.1.7 Тип файла.
            1.1.7.1 Текстовий документ. Відкривається у вікні.
            1.1.7.2 Папка. Відкривається у вікні.
            1.1.7.3 PDF. Відкривається у вікні.
            1.1.7.4 Посилання. Відкриває посиляння у новому вікні браузера.
            
    1.2 Контекстне меню.
        1.2.1 Можливість відкрити меню натиснувши праву кнопку миші по робочому столу.
            1.2.1.1 Можливість змінити розміри ярликів на робочому столі.
            1.2.1.2 Можливість створити новий текстовий документ або папку.
        1.2.2 Можливість відкрити меню натиснувши праву кнопку миші по файлу.
            1.2.2.1 Можливість змінити ім'я файлу.
            1.2.2.2 Можливість видалити файл.
            1.2.2.3 Можливість відкрити властивості файла.
            
    1.3 Вікна.
        1.3.1 Можливість перетягування вікна по робочому столі затиснувши ліву кнопку миші на хедері вікна.
        1.3.2 Можливість розгорнути вікно на весь екран натиснувши відповідну кнопку в хедері вікна або double click по хедеру.
            1.3.1 Після виходу з повноекранного режиму вікно повернеться до тих самих розмірів і позиції на робочому столі, які були до повноекранного режиму.
        1.3.2 Можливість змінити розмір вікна, потягнувши за праву або нижню межу вікна, чи за правий нижній кут.
        1.3.3 Під час кліку на вікно воно автоматично стає активним і відображається поверх інших відкритих вікон.
        
    1.4 Кошик.
        1.4.1 Можливість відновити видалені файли. Файли повернуться до папок, у яких вони перебували до видалення. Якщо таких папок уже не існує - файл буде відновлено на робочий стіл.
        1.4.2 Можливість видалити файли назавжди.
        
    1.5 Налаштування.
        1.5.1 Персоналізація.
            1.5.1.1 Можливість змінити шпалери.
            1.5.1.2 Можливість змінити колір виділення, розмір файла.
            1.5.1.3 Можливість змінити колір області виділення.
        1.5.2 Система.
            1.5.2.1 Можливість змінити яскравість.
            1.5.2.2 Можливість ввімкнути нічний режим.
            1.5.2.3 Можливість змінити мову системи.
            1.5.2.4 Можливість переглянути інформацію системи.
            
    1.6 Google Chrome
        1.6.1 Можливість додати нову вкладку (максимум 5 штук).
        1.6.2 Можливість закрити активні вкладки.
        
2. Панель задач.
    2.1 Можливість відкрити детальніший прогноз погоди.
    2.2 Можливість відкрити Google Chrome.
    2.3 Можливіть відкрити налаштування.
    2.4 Можливість перезавантажити, вимкнути чи заблокувати систему.
    
3. Технічна інформація.
    3.1 Умови оновлення поля updated_at у файла.
        3.1.1 При редагуванні + збереженні текстового документа.
        3.1.2 При переміщенні в папку інших файлів.
        3.1.3 При зміні імені файла.
    3.2 Поле size у файла вираховується на основі внутрішнього контента файла.
    3.3 Не можливо перетягнути файл в текстовий документ, лише в папку або на робочий стіл.
    3.4 Не можливо перетягнути файл сам в себе.
`;