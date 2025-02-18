import React from 'react';
import InputLabel from '../internal/components/InputLabel';
import type { SxProp } from '../sx';
export type Props = {
    /**
     * Whether the label should be visually hidden
     */
    visuallyHidden?: boolean;
    requiredText?: string;
    requiredIndicator?: boolean;
    id?: string;
} & SxProp;
declare const FormControlLabel: React.FC<React.PropsWithChildren<{
    htmlFor?: string;
} & React.ComponentProps<typeof InputLabel> & Props>>;
export default FormControlLabel;
//# sourceMappingURL=_FormControlLabel.d.ts.map