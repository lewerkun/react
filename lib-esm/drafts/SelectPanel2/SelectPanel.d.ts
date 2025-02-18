import React from 'react';
import type { ButtonProps, TextInputProps, ActionListProps, LinkProps, CheckboxProps } from '../../index';
import type { OverlayProps } from '../../Overlay/Overlay';
import type { ResponsiveValue } from '../../hooks/useResponsiveValue';
export type SelectPanelProps = {
    title: string;
    description?: string;
    variant?: 'anchored' | 'modal' | ResponsiveValue<'anchored' | 'modal', 'full-screen' | 'bottom-sheet'>;
    selectionVariant?: ActionListProps['selectionVariant'] | 'instant';
    id?: string;
    defaultOpen?: boolean;
    open?: boolean;
    anchorRef?: React.RefObject<HTMLButtonElement>;
    onCancel?: () => void;
    onClearSelection?: undefined | (() => void);
    onSubmit?: (event?: React.FormEvent<HTMLFormElement>) => void;
    width?: OverlayProps['width'];
    height?: 'fit-content';
    maxHeight?: Exclude<OverlayProps['maxHeight'], 'xsmall'>;
    children: React.ReactNode;
};
export type SelectPanelSecondaryActionProps = {
    children: React.ReactNode;
} & (({
    variant: 'button';
} & Partial<Omit<ButtonProps, 'variant'>>) | ({
    variant: 'link';
} & Partial<LinkProps>) | ({
    variant: 'checkbox';
    id?: string;
} & CheckboxProps));
export type SelectPanelMessageProps = {
    children: React.ReactNode;
} & ({
    size?: 'full';
    title: string;
    variant: 'warning' | 'error' | 'empty';
} | {
    size?: 'inline';
    title?: never;
    variant: 'warning' | 'error';
});
export declare const SelectPanel: React.FC<SelectPanelProps> & {
    Button: React.ForwardRefExoticComponent<{
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
    } & import("../../sx").SxProp & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
    Header: React.FC<{
        children?: React.ReactNode;
    } & {
        onBack?: (() => void) | undefined;
    }>;
    SearchInput: React.FC<TextInputProps>;
    Footer: ({ ...props }: {
        [x: string]: any;
    }) => React.JSX.Element | null;
    Loading: ({ children }: React.PropsWithChildren) => React.JSX.Element;
    Message: React.FC<SelectPanelMessageProps>;
    SecondaryAction: React.FC<SelectPanelSecondaryActionProps>;
};
//# sourceMappingURL=SelectPanel.d.ts.map