import React from "react";

export type PinnedAppsProps = {
    name: string;
    isOpen?: boolean;
    isFocused?: boolean;
    component: React.ReactElement;
};