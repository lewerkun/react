import type { SxProp } from '../sx';
import type { ComponentProps } from '../utils/types';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
type StyledFlashProps = {
    variant?: 'default' | 'warning' | 'success' | 'danger';
    full?: boolean;
} & SxProp;
declare const StyledFlash: import("styled-components").StyledComponent<"div", any, StyledFlashProps, never>;
export type FlashProps = ComponentProps<typeof StyledFlash>;
declare const Flash: PolymorphicForwardRefComponent<"div", StyledFlashProps>;
export default Flash;
//# sourceMappingURL=Flash.d.ts.map