import React from 'react';
type SkeletonTextProps = {
    /** Size of the text that the skeleton is replacing. */
    size?: 'display' | 'titleLarge' | 'titleMedium' | 'titleSmall' | 'bodyLarge' | 'bodyMedium' | 'bodySmall' | 'subtitle';
    /** Number of lines of skeleton text to render. */
    lines?: number;
    /** Maximum width that the line(s) of skeleton text can take up.  Accepts any valid CSS `max-width` value. */
    maxWidth?: React.CSSProperties['maxWidth'];
    /** Class name for custom styling */
    className?: string;
};
export declare const SkeletonText: React.FC<SkeletonTextProps>;
export {};
//# sourceMappingURL=SkeletonText.d.ts.map