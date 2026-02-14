import { WINDOW_KIND } from "types/desktop";

export type HeaderProps = {
    handleMouseDown: (e: React.MouseEvent) => void;
    handleDoubleClick: () => void;
    kind: keyof typeof WINDOW_KIND;
    title: string;
    toggleFullscreen: () => void;
    isFullscreen: boolean;
    borderRadius: string;
    onCloseCallback?: false | (() => void);
    onWindowClose: () => void;
    resizable: boolean;
}