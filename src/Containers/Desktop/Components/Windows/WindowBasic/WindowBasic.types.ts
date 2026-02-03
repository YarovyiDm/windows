import type { HTMLAttributes } from "react";

export type WindowBasicProps = {
    kind: "SETTINGS" | "FOLDER" | "TEXT" | "BROWSER";
    id: string;
    onCloseCallback?: false | (() => void);
    system?: boolean;
    title: string;
    wishSidePadding?: boolean;
} & HTMLAttributes<HTMLDivElement>;