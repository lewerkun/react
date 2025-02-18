import React from 'react';
import type { ResponsiveValue } from '../hooks/useResponsiveValue';
import type { SxProp } from '../sx';
import type { LinkProps as BaseLinkProps } from '../Link';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
export type ChildrenPropTypes = {
    className?: string;
    hidden?: boolean | ResponsiveValue<boolean>;
} & SxProp;
export type PageHeaderProps = {
    'aria-label'?: React.AriaAttributes['aria-label'];
    as?: React.ElementType | 'header' | 'div';
    className?: string;
} & SxProp;
type LinkProps = Pick<React.AnchorHTMLAttributes<HTMLAnchorElement> & BaseLinkProps, 'download' | 'href' | 'hrefLang' | 'media' | 'ping' | 'rel' | 'target' | 'type' | 'referrerPolicy' | 'as'> & {
    'aria-label'?: React.AriaAttributes['aria-label'];
};
export type ParentLinkProps = React.PropsWithChildren<ChildrenPropTypes & LinkProps>;
type TitleAreaProps = {
    variant?: 'subtitle' | 'medium' | 'large' | ResponsiveValue<'subtitle' | 'medium' | 'large'>;
} & ChildrenPropTypes;
export type TitleProps = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & ChildrenPropTypes;
export type NavigationProps = {
    as?: 'nav' | 'div';
    'aria-label'?: React.AriaAttributes['aria-label'];
    'aria-labelledby'?: React.AriaAttributes['aria-labelledby'];
} & ChildrenPropTypes;
export declare const PageHeader: PolymorphicForwardRefComponent<"div", PageHeaderProps> & {
    ContextArea: React.FC<React.PropsWithChildren<ChildrenPropTypes>>;
    ParentLink: PolymorphicForwardRefComponent<"a", ParentLinkProps>;
    ContextBar: React.FC<React.PropsWithChildren<ChildrenPropTypes>>;
    TitleArea: PolymorphicForwardRefComponent<"div", TitleAreaProps>;
    ContextAreaActions: React.FC<React.PropsWithChildren<ChildrenPropTypes>>;
    LeadingAction: React.FC<React.PropsWithChildren<ChildrenPropTypes>>;
    Breadcrumbs: React.FC<React.PropsWithChildren<ChildrenPropTypes>>;
    LeadingVisual: React.FC<React.PropsWithChildren<ChildrenPropTypes>>;
    Title: React.FC<React.PropsWithChildren<TitleProps>>;
    TrailingVisual: React.FC<React.PropsWithChildren<ChildrenPropTypes>>;
    TrailingAction: React.FC<React.PropsWithChildren<ChildrenPropTypes>>;
    Actions: React.FC<React.PropsWithChildren<ChildrenPropTypes>>;
    Description: React.FC<React.PropsWithChildren<ChildrenPropTypes>>;
    Navigation: React.FC<React.PropsWithChildren<NavigationProps>>;
};
export {};
//# sourceMappingURL=PageHeader.d.ts.map