import { styled, Box  } from "@mui/material";

export const WindowBasicWrapper = styled(Box)(({
    position: "absolute",
    top: "200px",
    left: "200px",
    width: "700px",
    height: "500px",
    background: "#202020",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: "solid 1px rgba(255, 255, 255, 0.05)",
}));

export const WindowBasicHeader = styled(Box)(({
    flex: "0 0 auto",
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    paddingLeft: "15px",
    top: "0",
    zIndex: "10",
    background: "rgba(255, 255, 255, 0.05)",
    color: "white",
    "svg": {
        width: "24px",
        height: "24px",
    },
}));

export const WindowBasicButtonsWrapper = styled(Box)(({
    width: "150px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
}));

export const WindowBasicButtonsIconWrapper = styled(Box)(({
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    "svg": {
        "path": {
            fill: "white",
        },
    },
    "&:hover": {
        background: "rgba(255, 255, 255, 0.05)",
        "&:last-child": {
            background: "red",
        },
        "svg": {
            "path": {
                fill: "white",
            },
        },
    },
}));

export const ResizeHandleRight = styled(Box)({
    position: "absolute",
    right: 0,
    top: 0,
    width: "10px",
    height: "100%",
    cursor: "ew-resize",
});

export const ResizeHandleBottom = styled(Box)({
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "10px",
    cursor: "ns-resize",
});

export const ResizeHandleCorner = styled(Box)({
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "10px",
    height: "10px",
    cursor: "nwse-resize",
});

export const WindowContent = styled(Box)({
    flex: "1 1 auto",
    overflow: "auto",
    padding: "10px",
});
