import React from 'react';
import type { SxProp } from '../../sx';
type BaseProps = SxProp & {
    disabled?: boolean;
    required?: boolean;
    requiredText?: string;
    requiredIndicator?: boolean;
    visuallyHidden?: boolean;
    id?: string;
};
export type LabelProps = BaseProps & {
    htmlFor?: string;
    as?: 'label';
};
export type LegendOrSpanProps = BaseProps & {
    as: 'legend' | 'span';
    htmlFor?: undefined;
};
type Props = LabelProps | LegendOrSpanProps;
declare const InputLabel: React.FC<React.PropsWithChildren<Props>>;
export default InputLabel;
//# sourceMappingURL=InputLabel.d.ts.map