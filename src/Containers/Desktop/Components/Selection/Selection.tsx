import React from "react";
import { getSelectionStyles } from "Containers/Desktop/Desktop.helpers";
import { useAppSelector } from "Store/index";
import { selectSelectionStyles } from "Store/selectors/System";
import { SelectionWrapper } from "./Selection.styled";
import { SelectionProps } from "./Selection.types";

const Selection = ({ selectionRef, currentPosition, startPosition }: SelectionProps) => {
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