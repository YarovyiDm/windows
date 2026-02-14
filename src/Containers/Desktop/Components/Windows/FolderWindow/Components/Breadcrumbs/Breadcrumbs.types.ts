import type { Dispatch, SetStateAction } from "react";

export type BreadcrumbsProps = {
    path: string[];
    history: string[];
    future: string[];
    currentFolderId: string;
    setHistory: Dispatch<SetStateAction<string[]>>;
    setFuture: Dispatch<SetStateAction<string[]>>;
    setCurrentFolderId: Dispatch<SetStateAction<string>>;
    setPath: Dispatch<SetStateAction<string[]>>;
}