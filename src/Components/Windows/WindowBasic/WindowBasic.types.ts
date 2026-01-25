import React from "react";

export type WindowBasicProps = {
    name: string;
    id: string;
    onCloseCallback?: false | (() => void);
    system?: boolean;
    wishSidePadding?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;