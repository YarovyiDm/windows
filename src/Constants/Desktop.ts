import translations from "Components/I18n/translations";
import { TRANSLATION_KEYS } from "Constants/Translation";
import { ICONS } from "./Icons";

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