import { useMemo, useState } from "react";

export const useTextWindowState = (initialValue: string) => {
    const [fileValue, setFileValue] = useState(initialValue);
    const [prevFileValue, setPrevFileValue] = useState(initialValue);

    const isFileChanged = useMemo(
        () => fileValue !== prevFileValue,
        [fileValue, prevFileValue],
    );

    const commitSave = () => {
        setPrevFileValue(fileValue);
    };

    return {
        fileValue,
        setFileValue,
        prevFileValue,
        isFileChanged,
        commitSave,
    };
};