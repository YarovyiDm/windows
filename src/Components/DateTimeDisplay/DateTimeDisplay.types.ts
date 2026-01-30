import type { ElementType } from "react";

export type DateTimeDisplayProps = {
    format?: "en" | "eu";
    Container?: ElementType;
    TimeWrapper?: ElementType;
    DateWrapper?: ElementType;
};