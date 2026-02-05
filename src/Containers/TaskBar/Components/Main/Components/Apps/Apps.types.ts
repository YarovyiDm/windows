import { TaskBarApp } from "Types/TaskBar";
import type { ReactElement } from "react";

export type PinnedAppsProps = {
    name: string;
    isOpen?: boolean;
    isFocused?: boolean;
    component: ReactElement;
    icon: string;
};

export type AppsProps = {
    apps: TaskBarApp[];
}