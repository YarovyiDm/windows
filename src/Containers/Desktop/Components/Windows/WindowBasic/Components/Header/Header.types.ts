import { WINDOW_KIND } from "Types/Desktop";

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