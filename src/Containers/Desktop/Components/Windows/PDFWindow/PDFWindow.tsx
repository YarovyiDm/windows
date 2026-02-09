import { WINDOW_KIND } from "Types/Desktop";
import GeneralPaper from "Containers/Desktop/Components/Windows/PDFWindow/Components/GeneralPaper/GeneralPaper";
import ExperiencePaper
    from "Containers/Desktop/Components/Windows/PDFWindow/Components/ExperiencePaper/ExperiencePaper";
import { PDFWindowWrapper } from "Containers/Desktop/Components/Windows/PDFWindow/PDFWindow.styled";
import WindowBasic from "../WindowBasic/WindowBasic";
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