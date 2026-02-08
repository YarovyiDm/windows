import { useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { WINDOW_META } from "Constants/System";
import { WINDOW_KIND } from "Types/Desktop";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectBinFiles, selectWindowZindex } from "Store/selectors/Desktop";
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { getColumns, getRows } from "Containers/Desktop/Components/Windows/BinWindow/BinWindow.helpers";
import {
    BinEmptyTitle,
} from "Containers/Desktop/Components/Windows/BinWindow/BinWindow.styled";
import { removeFileForever, restoreFileFromBin } from "Store/slices/Desktop";

const BinWindow = () => {
    const zIndex = useAppSelector(selectWindowZindex(WINDOW_META.BIN.id));
    const binFiles = useAppSelector(selectBinFiles);
    const dispatch = useAppDispatch();

    const rows = useMemo(
        () => getRows(binFiles || []),
        [binFiles],
    );

    const columns = useMemo(
        () => getColumns(
            (id) => dispatch(restoreFileFromBin(id)),
            (id) => dispatch(removeFileForever(id)),
        ),
        [dispatch],
    );

    return (
        <WindowBasic
            zIndex={zIndex}
            title={WINDOW_META.BIN.title}
            id={WINDOW_META.BIN.id}
            kind={WINDOW_KIND.BIN}
        >
            {rows.length ? <DataGrid
                rows={rows}
                disableRowSelectionOnClick
                columns={columns}
                hideFooterPagination
                sx={{
                    backgroundColor: "transparent",
                    border: "none",

                    "& .MuiDataGrid-root": {
                        backgroundColor: "transparent",
                    },

                    "& .MuiDataGrid-main": {
                        backgroundColor: "transparent",
                    },

                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: "transparent",
                    },

                    "& .MuiDataGrid-row": {
                        backgroundColor: "transparent",
                    },

                    "& .MuiDataGrid-cell": {
                        backgroundColor: "transparent",
                        borderBottom: "none",
                        color: "#fff",
                    },

                    "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
                        outline: "none",
                    },
                    "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within": {
                        outline: "none",
                    },

                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "transparent",
                        borderBottom: "none",
                        color: "#fff",
                    },

                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: "transparent",
                    },

                    "& .MuiDataGrid-sortButton": {
                        backgroundColor: "transparent!important",
                    },
                    "& .MuiDataGrid-sortButton svg path": {
                        fill: "white",
                    },
                    "& .MuiDataGrid-columnSeparator": {
                        display: "none",
                    },

                    "& .MuiDataGrid-sortButton:hover": {
                        backgroundColor: "transparent",
                    },

                    "& .MuiDataGrid-sortButton:focus": {
                        backgroundColor: "transparent",
                    },

                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: "transparent",
                        borderTop: "none",
                    },

                    "& .MuiDataGrid-row:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                    },

                    "& .MuiDataGrid-row.Mui-selected": {
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                    },

                    "& .MuiDataGrid-row.Mui-selected:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                    },
                    "& .MuiDataGrid-overlay": {
                        backgroundColor: "transparent",
                    },
                }}
            /> : <BinEmptyTitle>Folder is empty</BinEmptyTitle>}

        </WindowBasic>
    );
};

export default BinWindow;