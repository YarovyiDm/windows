import { MutableRefObject, SetStateAction, Dispatch } from "react";

export type CheckDropTargetProps = {
    fileRef: MutableRefObject<HTMLDivElement | null>,
    id: string,
    setTargetFolderName:  Dispatch<SetStateAction<string>>,
}