import React from 'react';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
type ElementProps = {
    as?: 'button';
    href?: never;
} | {
    as: 'a';
    href: string;
};
export type ActionListTrailingActionProps = ElementProps & {
    icon?: React.ElementType;
    label: string;
};
export declare const TrailingAction: PolymorphicForwardRefComponent<"button" | "a", ActionListTrailingActionProps>;
export {};
//# sourceMappingURL=TrailingAction.d.ts.map