import type { ReactElement } from "react";

export type PinnedAppsProps = {
    name: string;
    isOpen?: boolean;
    isFocused?: boolean;
    component: ReactElement;
};