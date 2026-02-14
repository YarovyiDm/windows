import { WINDOW_KIND } from "types/desktop";
import TextWindow from "Containers/Desktop/Components/Windows/TextWindow/TextWindow";
import FolderWindow from "Containers/Desktop/Components/Windows/FolderWindow/FolderWindow";
import ChromeWindow from "Containers/Desktop/Components/Windows/ChromeWindow/ChromeWindow";
import SettingsWindow from "Containers/Desktop/Components/Windows/SettingsWindow/SettingsWindow";
import BinWindow from "Containers/Desktop/Components/Windows/BinWindow/BinWindow";
import PropertiesWindow from "Containers/Desktop/Components/Windows/PropertiesWindow/PropertiesWindow";
import PDFWindow from "Containers/Desktop/Components/Windows/PDFWindow/PDFWindow";
import type { DesktopWindowsRendererProps } from "./DesktopWindowsRenderer.types";

const DesktopWindowsRenderer = ({
    windows,
    renameFileId,
    setRenameFileId,
    targetFolderId,
    targetFolderHandle,
}: DesktopWindowsRendererProps) => {
    return (
        <>
            {windows.map(win => {
                switch (win.kind) {
                case WINDOW_KIND.PROPERTIES:
                    return <PropertiesWindow key={win.id} desktopWindow={win}/>;
                case WINDOW_KIND.PDF:
                    return <PDFWindow key={win.id} desktopWindow={win}/>;
                case WINDOW_KIND.TEXT:
                    return <TextWindow key={win.id} desktopWindow={win} />;
                case WINDOW_KIND.BIN:
                    return  <BinWindow key={win.id} />;
                case WINDOW_KIND.FOLDER:
                    return <FolderWindow
                        key={win.id}
                        window={win}
                        renameFileId={renameFileId}
                        setRenameFileId={setRenameFileId}
                        targetFolderId={targetFolderId}
                        targetFolderHandle={targetFolderHandle}
                    />;
                case WINDOW_KIND.BROWSER:
                    return <ChromeWindow key={win.id} />;
                case WINDOW_KIND.SETTINGS:
                    return <SettingsWindow key={win.id} />;
                default:
                    return null;
                }
            })}
        </>
    );
};

export default DesktopWindowsRenderer;