import { useAppSelector } from "store/index";
import { selectSelectionStyles } from "store/selectors/system";
import { getSelectionStyles } from "Containers/Desktop/Desktop.helpers";
import { SelectionWrapper } from "./Selection.styled";
import type { SelectionProps } from "./Selection.types";

const Selection = ({
    selectionRef,
    currentPosition,
    startPosition,
}: SelectionProps) => {
    const selectionStyles = useAppSelector(selectSelectionStyles);

    return (
        <SelectionWrapper
            ref={selectionRef}
            sx={{
                ...getSelectionStyles({ currentPosition, startPosition }),
                border: `solid 1px ${selectionStyles.borderColor}`,
                backgroundColor: selectionStyles.areaColor,
            }}
        />
    );
};

export default Selection;