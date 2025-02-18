import React from 'react';
import type { SxProp } from '../sx';
import type { IconProps } from '@primer/octicons-react';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
export type LinkProps = {
    download?: string;
    href?: string;
    hrefLang?: string;
    media?: string;
    ping?: string;
    rel?: string;
    target?: string;
    type?: string;
    referrerPolicy?: React.AnchorHTMLAttributes<HTMLAnchorElement>['referrerPolicy'];
};
export type UnderlineNavItemProps = {
    /**
     * Primary content for an UnderlineNav
     */
    children?: React.ReactNode;
    /**
     * Callback that will trigger both on click selection and keyboard selection.
     */
    onSelect?: (event: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>) => void;
    /**
     * Is `UnderlineNav.Item` current page?
     */
    'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false' | boolean;
    /**
     *  Icon before the text
     */
    icon?: React.FunctionComponent<IconProps> | React.ReactElement;
    /**
     * Renders `UnderlineNav.Item` as given component i.e. react-router's Link
     **/
    as?: React.ElementType | 'a';
    /**
     * Counter
     */
    counter?: number | string;
} & SxProp & LinkProps;
export declare const UnderlineNavItem: PolymorphicForwardRefComponent<"a", UnderlineNavItemProps>;
//# sourceMappingURL=UnderlineNavItem.d.ts.map