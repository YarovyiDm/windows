import { useAppSelector } from "store/index";
import { selectSelectionStyles } from "store/selectors/system";
import { SelectionWrapper } from "./Selection.styled";
import type { SelectionProps } from "./Selection.types";

const Selection = ({
    selectionRef,
}: SelectionProps) => {
    const selectionStyles = useAppSelector(selectSelectionStyles);

    return (
        <SelectionWrapper
            ref={selectionRef}
            sx={{
                border: `solid 1px ${selectionStyles.borderColor}`,
                backgroundColor: selectionStyles.areaColor,
            }}
        />
    );
};

export default Selection;