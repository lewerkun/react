import React from 'react';
import type { SxProp } from '../sx';
import type { TokenBaseProps } from './TokenBase';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
export interface TokenProps extends TokenBaseProps, SxProp {
    /**
     * A component that renders before the token text
     */
    leadingVisual?: React.ElementType;
}
declare const Token: PolymorphicForwardRefComponent<"button" | "a" | "span", TokenProps>;
export default Token;
//# sourceMappingURL=Token.d.ts.map