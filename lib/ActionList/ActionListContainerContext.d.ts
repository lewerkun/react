/** This context can be used by components that compose ActionList inside a Menu */
import React from 'react';
import type { AriaRole } from '../utils/types';
type ContextProps = {
    container?: string;
    listRole?: AriaRole;
    selectionVariant?: 'single' | 'multiple';
    selectionAttribute?: 'aria-selected' | 'aria-checked';
    listLabelledBy?: string;
    afterSelect?: Function;
    enableFocusZone?: boolean;
    defaultTrailingVisual?: React.ReactElement;
};
export declare const ActionListContainerContext: React.Context<ContextProps>;
export {};
//# sourceMappingURL=ActionListContainerContext.d.ts.map