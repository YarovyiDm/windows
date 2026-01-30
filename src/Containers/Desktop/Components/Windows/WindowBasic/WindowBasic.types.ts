import type { HTMLAttributes } from "react";

export type WindowBasicProps = {
    name: string;
    id: string;
    onCloseCallback?: false | (() => void);
    system?: boolean;
    wishSidePadding?: boolean;
} & HTMLAttributes<HTMLDivElement>;