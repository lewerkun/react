import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
import React from 'react';
import type { ActionListTrailingActionProps, ActionListDividerProps, ActionListLeadingVisualProps, ActionListTrailingVisualProps } from '../ActionList';
import type { SxProp } from '../sx';
export type NavListProps = {
    children: React.ReactNode;
} & SxProp & React.ComponentProps<'nav'>;
export type NavListItemProps = {
    children: React.ReactNode;
    defaultOpen?: boolean;
    href?: string;
    'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false' | boolean;
    inactiveText?: string;
} & SxProp;
export type NavListSubNavProps = {
    children: React.ReactNode;
} & SxProp;
export type NavListLeadingVisualProps = ActionListLeadingVisualProps;
export type NavListTrailingVisualProps = ActionListTrailingVisualProps;
export type NavListDividerProps = ActionListDividerProps;
export type NavListTrailingActionProps = ActionListTrailingActionProps;
export type NavListGroupProps = {
    children: React.ReactNode;
    title?: string;
} & SxProp;
export declare const NavList: React.ForwardRefExoticComponent<Omit<NavListProps, "ref"> & React.RefAttributes<HTMLElement>> & {
    Item: PolymorphicForwardRefComponent<"a", NavListItemProps>;
    SubNav: {
        ({ children, sx: sxProp }: NavListSubNavProps): React.JSX.Element | null;
        displayName: string;
    };
    LeadingVisual: React.FC<React.PropsWithChildren<import("../ActionList/Visuals").VisualProps>>;
    TrailingVisual: React.FC<React.PropsWithChildren<import("../ActionList/Visuals").VisualProps>>;
    TrailingAction: PolymorphicForwardRefComponent<"button" | "a", ActionListTrailingActionProps>;
    Divider: React.FC<React.PropsWithChildren<SxProp>>;
    Group: React.FC<NavListGroupProps>;
};
//# sourceMappingURL=NavList.d.ts.map