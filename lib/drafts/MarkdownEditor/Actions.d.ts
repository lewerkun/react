import React from 'react';
export declare const Actions: {
    ({ children }: {
        children?: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
};
export declare const ActionButton: React.ForwardRefExoticComponent<{
    alignContent?: import("../../Button/types").AlignContent | undefined;
    icon?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | null | undefined;
    leadingVisual?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | null | undefined;
    trailingVisual?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | null | undefined;
    trailingAction?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | null | undefined;
    children?: React.ReactNode;
    count?: number | undefined;
} & {
    variant?: import("../../Button/types").VariantType | undefined;
    size?: import("../../Button/types").Size | undefined;
    disabled?: boolean | undefined;
    block?: boolean | undefined;
    loading?: boolean | undefined;
    loadingAnnouncement?: string | undefined;
    inactive?: boolean | undefined;
    labelWrap?: boolean | undefined;
} & import("../..").SxProp & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Actions.d.ts.map