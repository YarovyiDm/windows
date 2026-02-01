import type { HTMLAttributes } from "react";

export type WindowBasicProps = {
    name: string;
    id: string;
    onCloseCallback?: false | (() => void);
    system?: boolean;
    type: string;
    wishSidePadding?: boolean;
} & HTMLAttributes<HTMLDivElement>;