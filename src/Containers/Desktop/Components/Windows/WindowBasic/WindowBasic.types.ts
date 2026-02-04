import { WINDOW_KIND } from "Types/Desktop";
import type { HTMLAttributes } from "react";

export type WindowBasicProps = {
    kind: keyof typeof WINDOW_KIND;
    id: string;
    onCloseCallback?: false | (() => void);
    system?: boolean;
    title: string;
    wishSidePadding?: boolean;
} & HTMLAttributes<HTMLDivElement>;