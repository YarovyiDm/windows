import {
    BlockChildren,
    BlockHeader,
    BlockWrapper,
} from "Containers/Desktop/Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic.styled";
import type { BlockBasicProps } from "./BlockBasic.types";

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
