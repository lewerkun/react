import type { To } from 'history';
import React from 'react';
import type { SxProp } from '../sx';
import type { ComponentProps } from '../utils/types';
declare const BreadcrumbsBase: import("styled-components").StyledComponent<"nav", any, SxProp, never>;
export type BreadcrumbsProps = React.PropsWithChildren<{
    className?: string;
} & SxProp>;
declare function Breadcrumbs({ className, children, sx: sxProp }: React.PropsWithChildren<BreadcrumbsProps>): React.JSX.Element;
declare namespace Breadcrumbs {
    var displayName: string;
}
type StyledBreadcrumbsItemProps = {
    to?: To;
    selected?: boolean;
} & SxProp;
declare const BreadcrumbsItem: import("styled-components").StyledComponent<"a", any, StyledBreadcrumbsItemProps, never>;
export type BreadcrumbsItemProps = ComponentProps<typeof BreadcrumbsItem>;
declare const _default: typeof Breadcrumbs & {
    Item: import("styled-components").StyledComponent<"a", any, StyledBreadcrumbsItemProps, never>;
};
export default _default;
/**
 * @deprecated Use the `Breadcrumbs` component instead (i.e. `<Breadcrumb>` → `<Breadcrumbs>`)
 */
export declare const Breadcrumb: typeof Breadcrumbs & {
    Item: import("styled-components").StyledComponent<"a", any, StyledBreadcrumbsItemProps, never>;
};
/**
 * @deprecated Use the `BreadcrumbsProps` type instead
 */
export type BreadcrumbProps = ComponentProps<typeof BreadcrumbsBase>;
/**
 * @deprecated Use the `BreadcrumbsItemProps` type instead
 */
export type BreadcrumbItemProps = ComponentProps<typeof BreadcrumbsItem>;
//# sourceMappingURL=Breadcrumbs.d.ts.map