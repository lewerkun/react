import React from 'react';
import type { SxProp } from '../sx';
import { type ActionListProps } from './shared';
import type { AriaRole } from '../utils/types';
import type { ActionListHeadingProps } from './Heading';
export type ActionListGroupProps = {
    /**
     * Style variations. Usage is discretionary.
     *
     * - `"filled"` - Superimposed on a background, offset from nearby content
     * - `"subtle"` - Relatively less offset from nearby content
     */
    variant?: 'subtle' | 'filled';
    /**
     * @deprecated (Use `ActionList.GroupHeading` instead. i.e. <ActionList.Group title="Group title"> → <ActionList.GroupHeading>Group title</ActionList.GroupHeading>)
     */
    title?: string;
    /**
     * Secondary text which provides additional information about a `Group`.
     */
    auxiliaryText?: string;
    /**
     * The ARIA role describing the function of the list inside `Group` component. `listbox` or `menu` are a common values.
     */
    role?: AriaRole;
} & SxProp & {
    /**
     * Whether multiple Items or a single Item can be selected in the Group. Overrides value on ActionList root.
     */
    selectionVariant?: ActionListProps['selectionVariant'] | false;
};
type ContextProps = Pick<ActionListGroupProps, 'selectionVariant'> & {
    groupHeadingId: string | undefined;
};
export declare const GroupContext: React.Context<ContextProps>;
export declare const Group: React.FC<React.PropsWithChildren<ActionListGroupProps>>;
export type GroupHeadingProps = Pick<ActionListGroupProps, 'variant' | 'auxiliaryText'> & Omit<ActionListHeadingProps, 'as'> & SxProp & React.HTMLAttributes<HTMLElement> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    _internalBackwardCompatibleTitle?: string;
};
/**
 * Heading of  a `Group`.
 *
 * As default, the role of ActionList is "list" and therefore group heading is rendered as a proper heading tag.
 * If the role is "listbox" or "menu" (ActionMenu), the group heading is rendered as a div with presentation role and it is
 * hidden from the accessibility tree due to the limitation of listbox children. https://w3c.github.io/aria/#listbox
 * groups under menu or listbox are labelled by `aria-label`
 */
export declare const GroupHeading: React.FC<React.PropsWithChildren<GroupHeadingProps>>;
export {};
//# sourceMappingURL=Group.d.ts.map