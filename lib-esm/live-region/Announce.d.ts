import React from 'react';
import Box from '../Box';
export type AnnounceProps = React.ComponentPropsWithoutRef<typeof Box> & {
    /**
     * Specify if the content of the element should be announced when this
     * component is rendered and is not hidden
     * @default false
     */
    announceOnShow?: boolean;
    /**
     * Specify if the element is hidden
     * @default false
     */
    hidden?: boolean;
    /**
     * Provide a delay in milliseconds before the announcement is made. This will
     * only work with `polite` announcements
     */
    delayMs?: number;
    /**
     * The politeness level to use for the announcement
     * @default 'polite'
     */
    politeness?: 'assertive' | 'polite';
};
/**
 * `Announce` is a component that will announce the text content of the
 * `children` passed in to screen readers using the given politeness level. It
 * will also announce any changes to the text content of `children`
 */
export declare function Announce({ announceOnShow, children, delayMs, hidden, politeness, ...rest }: AnnounceProps): React.JSX.Element;
//# sourceMappingURL=Announce.d.ts.map