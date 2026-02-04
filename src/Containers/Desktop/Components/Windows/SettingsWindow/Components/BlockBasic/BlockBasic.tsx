import {
    BlockChildren,
    BlockHeader,
    BlockWrapper,
} from "./BlockBasic.styled";
import type { BlockBasicProps } from "./BlockBasic.types";

export const BlockBasic = ({
    title,
    children,
}: BlockBasicProps) => {
    return (
        <BlockWrapper>
            {title && <BlockHeader>{title}</BlockHeader>}
            <BlockChildren>{children}</BlockChildren>
        </BlockWrapper>
    );
};
