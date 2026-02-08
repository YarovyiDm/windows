export type ActionsProps = {
    fileId: string;
    onRestore: (id: string) => void;
    onDelete: (id: string) => void;
}