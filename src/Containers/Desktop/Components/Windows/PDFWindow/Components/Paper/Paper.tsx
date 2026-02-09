import { ReactNode } from "react";
import { PaperWrapper } from "./Paper.styled";

const Paper = ({ children }: {children: ReactNode;}) => {
    return (
        <PaperWrapper>{children}</PaperWrapper>
    );
};

export default Paper;