import { taskPanelApp } from "Types/TaskPanelTypes";
import type { ReactElement } from "react";

export type PinnedAppsProps = {
    name: string;
    isOpen?: boolean;
    isFocused?: boolean;
    component: ReactElement;
    icon: string;
};

export type AppsProps = {
    apps: taskPanelApp[];
}