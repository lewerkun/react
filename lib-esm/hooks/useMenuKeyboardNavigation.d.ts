import React from 'react';
import type { MenuCloseHandler } from '../ActionMenu';
/**
 * Keyboard navigation is a mix of 4 hooks
 * 1. useMenuInitialFocus
 * 2. useTypeaheadFocus
 * 3. useCloseMenuOnTab
 * 4. useMoveFocusToMenuItem
 */
export declare const useMenuKeyboardNavigation: (open: boolean, onClose: MenuCloseHandler | undefined, containerRef: React.RefObject<HTMLElement>, anchorRef: React.RefObject<HTMLElement>, isSubmenu: boolean) => void;
//# sourceMappingURL=useMenuKeyboardNavigation.d.ts.map