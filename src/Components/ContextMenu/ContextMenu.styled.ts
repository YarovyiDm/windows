import { Box, styled } from "@mui/material";
import Icon from "Components/Icon/Icon";

export const ContextMenuStyled = styled(Box)({
    position: "absolute",
    backgroundColor: "#2f2f2f",
    border: "1px solid #535353",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    zIndex: "1000",
    width: "calc(250px - 10px)",
    borderRadius: "5px",
    padding: "5px",
});

export const SubMenuWrapper = styled(Box)({
    display: 'none',
    position: 'absolute',
    top: 0,
    left: '100%',
    background: '#2f2f2f',
    border: '1px solid #535353',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    padding: '5px',
    borderRadius: '5px',
});

export const MenuItem = styled(Box)({
    position: 'relative',
    height: '25px',
    width: 'calc(100% - 20px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
    "&:hover .submenu": {
        display: "block",
    },
    "&:hover": {
        background: "#535353",
        borderRadius: "5px",
    },
    "& > path": {
        fill: "#d9d9d9",
    },
});

export const MenuItemMain = styled(Box)({
    display: "flex",
    alignItems: "center",
});

export const SubMenuItemMain = styled(Box)({
    height: "25px",
    padding: "0 10px 0 20px",
    lineHeight: "25px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    "& svg": {
        width: "16px",
        height: "16px",
    },
    "&:hover": {
        background: "#535353",
    },
});

export const ItemTitle = styled(Box)({
    marginLeft: "15px",
    height: "25px",
    lineHeight: "25px",
    color: "#d9d9d9",
    fontSize: "14px",
});

export const SubItemTitle = styled(Box)({
    display: "flex",
    alignItems: "center",
    color: "#d9d9d9",
    marginLeft: "10px",
    fontSize: "14px",
    width: "max-content",
});

export const IconWrapper = styled(Box)({
    width: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

export const IconStyled = styled(Icon)({
    width: "15px",
    height: "15px",
});

export const ItemArrowIcon = styled(IconStyled)({
    height: 10,
});

export const HotKeys = styled(Box)({
    color: "#979797",
    fontSize: "12px",
});

export const SizeSelected = styled(Box)({
    width: "5px",
    height: "5px",
    position: "absolute",
    borderRadius: "10px",
    background: "#d9d9d9",
    top: "40%",
    left: "10px",
    transform: "translate(-50%, 0)",
});

export const SizeIcon = styled(Icon)({
    fill: "#d9d9d9",
    transform: "rotate(180deg)",
});

export const SizeTitle = styled(Box)({
    marginLeft: "15px",
    width: "140px",
});