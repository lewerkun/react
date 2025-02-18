import React from 'react';
import type { SxProp } from '../sx';
import { type TooltipProps } from '../TooltipV2';
export type VisualProps = SxProp & React.HTMLAttributes<HTMLSpanElement>;
export declare const LeadingVisualContainer: React.FC<React.PropsWithChildren<VisualProps>>;
export type ActionListLeadingVisualProps = VisualProps;
export declare const LeadingVisual: React.FC<React.PropsWithChildren<VisualProps>>;
export type ActionListTrailingVisualProps = VisualProps;
export declare const TrailingVisual: React.FC<React.PropsWithChildren<VisualProps>>;
export declare const VisualOrIndicator: React.FC<React.PropsWithChildren<{
    inactiveText?: TooltipProps['text'];
    itemHasLeadingVisual: boolean;
    labelId?: string;
    loading?: boolean;
    position: 'leading' | 'trailing';
}>>;
//# sourceMappingURL=Visuals.d.ts.map