import { BlockBasicProps } from "./BlockBasic.types";
import {
    BlockChildren,
    BlockHeader,
    BlockWrapper,
} from "Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic.styled";

export const BlockBasic = ({
    title,
    children,
}: BlockBasicProps) => {
    return (
        <BlockWrapper>
            <BlockHeader>{title}</BlockHeader>
            <BlockChildren>{children}</BlockChildren>
        </BlockWrapper>
    );
};
