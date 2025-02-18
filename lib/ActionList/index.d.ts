/// <reference types="react" />
export type { ActionListProps } from './shared';
export type { ActionListGroupProps } from './Group';
export type { ActionListItemProps } from './shared';
export type { ActionListLinkItemProps } from './LinkItem';
export type { ActionListDividerProps } from './Divider';
export type { ActionListDescriptionProps } from './Description';
export type { ActionListLeadingVisualProps, ActionListTrailingVisualProps } from './Visuals';
export type { ActionListHeadingProps } from './Heading';
export type { ActionListTrailingActionProps } from './TrailingAction';
/**
 * Collection of list-related components.
 */
export declare const ActionList: import("../utils/polymorphic").ForwardRefComponent<"ul", import("./shared").ActionListProps> & {
    /** Collects related `Items` in an `ActionList`. */
    Group: import("react").FC<import("react").PropsWithChildren<import("./Group").ActionListGroupProps>>;
    /** An actionable or selectable `Item` */
    Item: import("../utils/polymorphic").ForwardRefComponent<"li", import("./shared").ActionListItemProps>;
    /** A `Item` that renders a full-size anchor inside ListItem */
    LinkItem: import("../utils/polymorphic").ForwardRefComponent<"a", import("./LinkItem").ActionListLinkItemProps>;
    /** Visually separates `Item`s or `Group`s in an `ActionList`. */
    Divider: import("react").FC<import("react").PropsWithChildren<import("..").SxProp>>;
    /** Secondary text which provides additional information about an `Item`. */
    Description: import("react").FC<import("react").PropsWithChildren<import("./Description").ActionListDescriptionProps>>;
    /** Icon (or similar) positioned before `Item` text. */
    LeadingVisual: import("react").FC<import("react").PropsWithChildren<import("./Visuals").VisualProps>>;
    /** Icon (or similar) positioned after `Item` text. */
    TrailingVisual: import("react").FC<import("react").PropsWithChildren<import("./Visuals").VisualProps>>;
    /** Heading for an `ActionList`. */
    Heading: import("../utils/polymorphic").ForwardRefComponent<"h1" | "h2" | "h3" | "h4" | "h5" | "h6", import("./Heading").ActionListHeadingProps>;
    /** Heading for `ActionList.Group` */
    GroupHeading: import("react").FC<import("react").PropsWithChildren<import("./Group").GroupHeadingProps>>;
    /** Secondary action */
    TrailingAction: import("../utils/polymorphic").ForwardRefComponent<"button" | "a", import("./TrailingAction").ActionListTrailingActionProps>;
};
//# sourceMappingURL=index.d.ts.map