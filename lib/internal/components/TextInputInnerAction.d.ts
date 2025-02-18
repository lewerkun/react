import React from 'react';
import type { IconProps } from '@primer/octicons-react';
import type { ButtonProps } from '../../Button';
import type { SxProp } from '../../sx';
declare const TextInputAction: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size" | "aria-label" | "tooltipDirection"> & {
    /** @deprecated Text input action buttons should only use icon buttons */
    children?: React.ReactNode;
    /** Text that appears in a tooltip. If an icon is passed, this is also used as the label used by assistive technologies. */
    "aria-label"?: string | undefined;
    /** Position of tooltip. If no position is passed or defaults to "n" */
    tooltipDirection?: "s" | "nw" | "n" | "ne" | "e" | "se" | "sw" | "w" | undefined;
    /** The icon to render inside the button */
    icon?: React.FunctionComponent<React.PropsWithChildren<IconProps>> | undefined;
    /**
     * @deprecated Text input action buttons should only use the 'invisible' button variant
     * Determine's the styles on a button one of 'default' | 'primary' | 'invisible' | 'danger'
     */
    variant?: ButtonProps['variant'];
} & SxProp & React.RefAttributes<HTMLButtonElement>>;
export default TextInputAction;
//# sourceMappingURL=TextInputInnerAction.d.ts.map