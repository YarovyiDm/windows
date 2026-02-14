import { PaperWrapper } from "./Paper.styled";
import type { ReactNode } from "react";

const Paper = ({ children }: { children: ReactNode; }) => {
    return (
        <PaperWrapper>{children}</PaperWrapper>
    );
};

export default Paper;