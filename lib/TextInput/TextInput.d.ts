import React from 'react';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
import type { Merge } from '../utils/types';
import type { StyledWrapperProps } from '../internal/components/TextInputWrapper';
export type TextInputNonPassthroughProps = {
    /** @deprecated Use `leadingVisual` or `trailingVisual` prop instead */
    icon?: React.ElementType;
    /** Whether the to show a loading indicator in the input */
    loading?: boolean;
    /**
     * Which position to render the loading indicator
     * 'auto' (default): at the end of the input, unless a `leadingVisual` is passed. Then, it will render at the beginning
     * 'leading': at the beginning of the input
     * 'trailing': at the end of the input
     **/
    loaderPosition?: 'auto' | 'leading' | 'trailing';
    /**
     * A visual that renders inside the input before the typing area
     */
    leadingVisual?: React.ElementType | React.ReactNode;
    /**
     * A visual that renders inside the input after the typing area
     */
    trailingVisual?: React.ElementType | React.ReactNode;
    /**
     * A visual that renders inside the input after the typing area
     */
    trailingAction?: React.ReactElement<React.HTMLProps<HTMLButtonElement>>;
} & Pick<StyledWrapperProps, 'block' | 'contrast' | 'disabled' | 'monospace' | 'sx' | 'width' | 'maxWidth' | 'minWidth' | 'variant' | 'size' | 'validationStatus'>;
export type TextInputProps = Merge<React.ComponentPropsWithoutRef<'input'>, TextInputNonPassthroughProps>;
declare const _default: PolymorphicForwardRefComponent<"input", TextInputProps> & {
    Action: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size" | "aria-label" | "tooltipDirection"> & {
        children?: React.ReactNode;
        "aria-label"?: string | undefined;
        tooltipDirection?: "s" | "nw" | "n" | "ne" | "e" | "se" | "sw" | "w" | undefined; /** Whether the to show a loading indicator in the input */
        icon?: React.FunctionComponent<React.PropsWithChildren<import("@primer/octicons-react").IconProps>> | undefined;
        variant?: import("../Button/types").VariantType | undefined;
    } & import("..").SxProp & React.RefAttributes<HTMLButtonElement>>;
};
export default _default;
//# sourceMappingURL=TextInput.d.ts.map