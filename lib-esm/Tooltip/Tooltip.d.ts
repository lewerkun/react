import React from 'react';
import type { SxProp } from '../sx';
import type { ComponentProps } from '../utils/types';
declare const TooltipBase: import("styled-components").StyledComponent<"span", any, SxProp, never>;
export type TooltipProps = {
    direction?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
    text?: string;
    noDelay?: boolean;
    align?: 'left' | 'right';
    wrap?: boolean;
} & ComponentProps<typeof TooltipBase>;
export declare const TooltipContext: React.Context<{
    tooltipId?: string | undefined;
}>;
declare function Tooltip({ direction, children, className, text, noDelay, align, wrap, id, ...rest }: TooltipProps): React.JSX.Element;
declare namespace Tooltip {
    var alignments: string[];
    var directions: string[];
}
export default Tooltip;
//# sourceMappingURL=Tooltip.d.ts.map