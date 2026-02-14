import { WINDOW_META } from "constants/system";
import { TRANSLATION_KEYS } from "constants/translation";
import { useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { WINDOW_KIND } from "types/desktop";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectBinFiles, selectWindowZindex } from "store/selectors/desktop";
import { removeFileForever, restoreFileFromBin } from "store/slices/desktop";
import WindowBasic from "Containers/Desktop/Components/Windows/WindowBasic/WindowBasic";
import { useLanguage } from "hooks/useLanguage";
import EmptyFolder from "Containers/Desktop/Components/Windows/Components/EmptyFolder/EmptyFolder";
import { getColumns, getRows } from "./BinWindow.helpers";

const BinWindow = () => {
    const zIndex = useAppSelector(selectWindowZindex(WINDOW_META.BIN.id));
    const { translate } = useLanguage();
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
            title={translate(TRANSLATION_KEYS.BIN)}
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
            /> : <EmptyFolder />}

        </WindowBasic>
    );
};

export default BinWindow;