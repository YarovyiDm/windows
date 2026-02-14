import { WINDOW_KIND } from "types/desktop";
import type { HTMLAttributes } from "react";

export type WindowBasicProps = {
    kind: keyof typeof WINDOW_KIND;
    id: string;
    zIndex: number;
    onCloseCallback?: false | (() => void);
    system?: boolean;
    title: string;
    wishSidePadding?: boolean;
    defaultSize?: {
        width: number;
        height: number;
    };
    resizable?: boolean;
    fullscreen?: boolean;
    disableFullscreenOnDoubleClick?: boolean;
} & HTMLAttributes<HTMLDivElement>;