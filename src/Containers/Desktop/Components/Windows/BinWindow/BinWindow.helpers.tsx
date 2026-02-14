import { getPayloadBytes } from "domain/desktop/queries/getPayloadBytes";
import { GridColDef } from "@mui/x-data-grid";
import { formatBytes } from "utils/formatBytes";
import type{ DesktopFile } from "types/desktop";
import Actions from "./Components/Cells/Actions/Actions";
import Name from "./Components/Cells/Name/Name";

export type BinDataModel = {
    id: string;
    name: string;
    created_at?: string;
    size: string;
    icon: string;
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
        renderCell: (params) => {
            return (
                <Name icon={params.row.icon} name={params.row.name}/>
            );
        },
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
        field: "size",
        headerName: "Size",
        flex: 1,
        minWidth: 150,
        disableColumnMenu: true,
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
        const size = formatBytes(getPayloadBytes(
            "innerContent" in f && f.innerContent && Object.keys(f.innerContent).length > 0
                ? f.innerContent
                : undefined,
        ));

        return {
            id: f.id,
            name: f.name,
            created_at: f.created_at,
            size,
            icon: f.icon,
        };
    });
};
