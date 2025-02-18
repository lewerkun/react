import React from 'react';
import type { SxProp } from '../sx';
import type { ComponentProps } from '../utils/types';
declare const StyledTooltip: import("styled-components").StyledComponent<"span", any, SxProp, never>;
export type TooltipDirection = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w';
export type TooltipProps = React.PropsWithChildren<{
    direction?: TooltipDirection;
    text: string;
    type?: 'label' | 'description';
} & SxProp & ComponentProps<typeof StyledTooltip>>;
export type TriggerPropsType = {
    'aria-describedby'?: string;
    'aria-labelledby'?: string;
    'aria-label'?: string;
    onBlur?: React.FocusEventHandler;
    onFocus?: React.FocusEventHandler;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    ref?: React.RefObject<HTMLElement>;
};
export declare const TooltipContext: React.Context<{
    tooltipId?: string | undefined;
}>;
export declare const Tooltip: React.ForwardRefExoticComponent<Omit<TooltipProps, "ref"> & React.RefAttributes<unknown>>;
export {};
//# sourceMappingURL=Tooltip.d.ts.map