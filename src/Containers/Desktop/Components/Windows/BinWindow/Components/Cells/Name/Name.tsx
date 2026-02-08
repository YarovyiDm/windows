import { Box } from "@mui/material";
import { Icon } from "Components/index";
import { NameWrapper } from "./Name.styled";
import { NameProps } from "./Name.types";

const Name = ({ icon, name }: NameProps) => {
    return (
        <NameWrapper>
            <Icon name={icon} />
            <Box
                sx={{
                    maxWidth: 150,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
                title={name}
            >
                {name}
            </Box>
        </NameWrapper>
    );
};

export default Name;