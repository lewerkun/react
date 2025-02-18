import React from 'react';
import type { AnchoredOverlayProps } from '../AnchoredOverlay';
import type { OverlayProps } from '../Overlay';
import type { ButtonProps } from '../Button';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
export type MenuCloseHandler = (gesture: 'anchor-click' | 'click-outside' | 'escape' | 'tab' | 'item-select' | 'arrow-left') => void;
export type MenuContextProps = Pick<AnchoredOverlayProps, 'anchorRef' | 'renderAnchor' | 'open' | 'onOpen' | 'anchorId'> & {
    onClose?: MenuCloseHandler;
    isSubmenu?: boolean;
};
export type ActionMenuProps = {
    /**
     * Recommended: `ActionMenu.Button` or `ActionMenu.Anchor` with `ActionMenu.Overlay`
     */
    children: React.ReactElement[] | React.ReactElement;
    /**
     * If defined, will control the open/closed state of the overlay. Must be used in conjunction with `onOpenChange`.
     */
    open?: boolean;
    /**
     * If defined, will control the open/closed state of the overlay. Must be used in conjunction with `open`.
     */
    onOpenChange?: (s: boolean) => void;
} & Pick<AnchoredOverlayProps, 'anchorRef'>;
export type ActionMenuAnchorProps = {
    children: React.ReactElement;
    id?: string;
};
/** this component is syntactical sugar 🍭 */
export type ActionMenuButtonProps = Omit<ButtonProps, 'children'> & {
    children: React.ReactNode;
};
type MenuOverlayProps = Partial<OverlayProps> & Pick<AnchoredOverlayProps, 'align' | 'side'> & {
    /**
     * Recommended: `ActionList`
     */
    children: React.ReactNode;
};
export declare const ActionMenu: React.FC<React.PropsWithChildren<ActionMenuProps>> & {
    Button: PolymorphicForwardRefComponent<"button", ActionMenuButtonProps>;
    Anchor: React.ForwardRefExoticComponent<ActionMenuAnchorProps & React.RefAttributes<HTMLElement>>;
    Overlay: React.FC<React.PropsWithChildren<MenuOverlayProps>>;
    Divider: React.FC<React.PropsWithChildren<import("..").SxProp>>;
};
export {};
//# sourceMappingURL=ActionMenu.d.ts.map