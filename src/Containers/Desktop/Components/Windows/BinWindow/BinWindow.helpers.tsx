import { GridColDef } from "@mui/x-data-grid";
import { DesktopFile } from "Types/Desktop";
import Actions from "Containers/Desktop/Components/Windows/BinWindow/Components/Cells/Actions/Actions";

export type BinDataModel = {
    id: string;
    name: string;
    created_at?: string;
}

export const getColumns = (
    onRestore: (id: string) => void,
    onDelete: (id: string) => void,
): GridColDef<BinDataModel>[] => [
    {
        field: "name",
        headerName: "Name",
        flex: 1,
        minWidth: 150,
        disableColumnMenu: true,
    },
    {
        field: "created_at",
        headerName: "Created",
        flex: 1,
        minWidth: 150,
        disableColumnMenu: true,
        renderCell: (params) => {
            const value = params.row.created_at;

            return value
                ? new Date(value).toLocaleString('uk-UA', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                })
                : '';
        },
    },
    {
        field: "actions",
        headerName: "Actions",
        width: 120,
        filterable: false,
        sortable: false,
        disableColumnMenu: true,
        renderCell: (params) => (
            <Actions onRestore={onRestore} onDelete={onDelete} fileId={params.row.id}/>
        ),
    },
];

export const getRows = (files: DesktopFile[]): BinDataModel[] => {
    return files.map((f: DesktopFile): BinDataModel => {
        return {
            id: f.id,
            name: f.name,
            created_at: f.created_at,
        };
    });
};
