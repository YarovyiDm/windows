import { WINDOW_KIND } from "types/desktop";
import { PDFWindowWrapper } from "Containers/Desktop/Components/Windows/PDFWindow/PDFWindow.styled";
import WindowBasic from "../WindowBasic/WindowBasic";
import GeneralPaper from "./Components/GeneralPaper/GeneralPaper";
import ExperiencePaper from "./Components/ExperiencePaper/ExperiencePaper";
import { PDFWindowProps } from "./PDFWindow.types";

const PDFWindow = ({ desktopWindow }: PDFWindowProps) => {
    if (desktopWindow.kind !== WINDOW_KIND.PDF) {
        return null;
    }

    const payload = desktopWindow.payload;

    return (
        <WindowBasic
            title={desktopWindow.title}
            id={desktopWindow.id}
            kind={WINDOW_KIND.PDF}
            zIndex={desktopWindow.zIndex}
            defaultSize={{
                width: 900,
                height: 600,
            }}
            fullscreen
        >
            <PDFWindowWrapper>
                <GeneralPaper payload={payload}/>
                <ExperiencePaper payload={payload}/>
            </PDFWindowWrapper>
        </WindowBasic>
    );
};

export default PDFWindow;