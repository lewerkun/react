import type { TokenBaseProps } from './TokenBase';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
export interface IssueLabelTokenProps extends TokenBaseProps {
    /**
     * The color that corresponds to the label
     */
    fillColor?: string;
}
declare const IssueLabelToken: PolymorphicForwardRefComponent<"button" | "a" | "span", IssueLabelTokenProps>;
export default IssueLabelToken;
//# sourceMappingURL=IssueLabelToken.d.ts.map