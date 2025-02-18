import React from 'react';
import type { FocusZoneSettings } from '@primer/behaviors';
export { FocusKeys } from '@primer/behaviors';
export type { Direction } from '@primer/behaviors';
export interface FocusZoneHookSettings extends Omit<FocusZoneSettings, 'activeDescendantControl'> {
    /**
     * Optional ref for the container that holds all elements participating in arrow key focus.
     * If one is not passed, we will create one for you and return it from the hook.
     */
    containerRef?: React.RefObject<HTMLElement>;
    /**
     * If using the "active descendant" focus pattern, pass `true` or a ref to the controlling
     * element. If a ref object is not passed, we will create one for you.
     */
    activeDescendantFocus?: boolean | React.RefObject<HTMLElement>;
    /**
     * Set to true to disable the focus zone and clean up listeners. Can be re-enabled at
     * any time.
     */
    disabled?: boolean;
}
export declare function useFocusZone(settings?: FocusZoneHookSettings, dependencies?: React.DependencyList): {
    containerRef: React.RefObject<HTMLElement>;
    activeDescendantControlRef: React.RefObject<HTMLElement>;
};
//# sourceMappingURL=useFocusZone.d.ts.map