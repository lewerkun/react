import type { To } from 'history';
import React from 'react';
import type { SxProp } from '../sx';
import type { ComponentProps } from '../utils/types';
declare const SubNavBase: import("styled-components").StyledComponent<"nav", any, SxProp, never>;
export type SubNavProps = {
    actions?: React.ReactNode;
    align?: 'right';
    full?: boolean;
    label?: string;
} & ComponentProps<typeof SubNavBase>;
declare function SubNav({ actions, className, children, label, ...rest }: SubNavProps): React.JSX.Element;
export type SubNavLinksProps = SxProp;
type StyledSubNavLinkProps = {
    to?: To;
    selected?: boolean;
} & SxProp;
declare const SubNavLink: import("styled-components").StyledComponent<"a", any, StyledSubNavLinkProps, never>;
export type SubNavLinkProps = ComponentProps<typeof SubNavLink>;
declare const _default: typeof SubNav & {
    Link: import("styled-components").StyledComponent<"a", any, StyledSubNavLinkProps, never>;
    Links: import("styled-components").StyledComponent<"div", any, SxProp, never>;
};
export default _default;
//# sourceMappingURL=SubNav.d.ts.map