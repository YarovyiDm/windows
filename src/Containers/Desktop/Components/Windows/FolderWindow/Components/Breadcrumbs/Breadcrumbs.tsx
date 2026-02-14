import { getFullPath } from "domain/desktop/queries/getFullPath";
import { Box } from "@mui/material";
import { useAppSelector } from "store/index";
import { selectRoot } from "store/selectors/desktop";
import {
    BreadcrumbWrapper,
    PathWrapper,
    IconWrapper,
} from "./Breadcrumbs.styled";
import type { BreadcrumbsProps } from "./Breadcrumbs.types";

const Breadcrumbs = ({
    path,
    future,
    history,
    currentFolderId,
    setHistory,
    setFuture,
    setCurrentFolderId,
    setPath,
}: BreadcrumbsProps) => {
    const root = useAppSelector(selectRoot);
    const breadcrumbItems = getFullPath(root, currentFolderId);

    const goBack = () => {
        if (!history.length) return;
        const prev = history[history.length - 1];

        setHistory(h => h.slice(0, -1));
        setFuture(f => [currentFolderId, ...f]);
        setCurrentFolderId(prev);
        setPath(p => p.slice(0, -1));
    };

    const goForward = () => {
        if (!future.length) return;
        const next = future[0];

        setFuture(f => f.slice(1));
        setHistory(h => [...h, currentFolderId]);
        setCurrentFolderId(next);
        setPath(p => [...p, next]);
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: '20px', width: '100%' }}>
            <Box sx={{ display: 'flex' }}>
                <IconWrapper onClick={goBack} isDisabled={history.length <= 0}/>
                <IconWrapper onClick={goForward} isDisabled={future.length <= 0}/>
            </Box>
            <BreadcrumbWrapper>
                {breadcrumbItems.map((item, index) => (
                    <PathWrapper
                        key={item.id}
                        onClick={() => {
                            setCurrentFolderId(item.id);
                            setPath(path.slice(0, index + 1));
                            setHistory(path.slice(0, index));
                            setFuture([]);
                        }}
                    >
                        {index === 0 ? "This PC > " : item.name + " > "}
                    </PathWrapper>
                ))}
            </BreadcrumbWrapper>
        </Box>
    );
};

export default Breadcrumbs;