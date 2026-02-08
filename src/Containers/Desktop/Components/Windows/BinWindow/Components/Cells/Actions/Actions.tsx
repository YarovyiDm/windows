import { Box } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import DeleteIcon from "@mui/icons-material/Delete";
import {
    ActionButtonWrapper,
} from "Containers/Desktop/Components/Windows/BinWindow/Components/Cells/Actions/Actions.styled";
import { ActionsProps } from "./Actions.types";

const Actions = ({ fileId, onRestore, onDelete }: ActionsProps) => {
    return (
        <Box display='flex' gap={1} height='100%' alignItems='center'>
            <ActionButtonWrapper
                onClick={() => onRestore(fileId)}
            >
                <RestoreIcon />
            </ActionButtonWrapper>

            <ActionButtonWrapper
                onClick={() => onDelete(fileId)}
            >
                <DeleteIcon />
            </ActionButtonWrapper>
        </Box>
    );
};

export default Actions;