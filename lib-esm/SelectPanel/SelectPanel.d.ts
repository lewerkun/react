import React from 'react';
import type { AnchoredOverlayProps } from '../AnchoredOverlay';
import type { AnchoredOverlayWrapperAnchorProps } from '../AnchoredOverlay/AnchoredOverlay';
import type { FilteredActionListProps } from '../FilteredActionList';
import type { OverlayProps } from '../Overlay';
import type { ItemInput } from '../deprecated/ActionList/List';
interface SelectPanelSingleSelection {
    selected: ItemInput | undefined;
    onSelectedChange: (selected: ItemInput | undefined) => void;
}
interface SelectPanelMultiSelection {
    selected: ItemInput[];
    onSelectedChange: (selected: ItemInput[]) => void;
}
interface SelectPanelBaseProps {
    title?: string | React.ReactElement;
    subtitle?: string | React.ReactElement;
    onOpenChange: (open: boolean, gesture: 'anchor-click' | 'anchor-key-press' | 'click-outside' | 'escape' | 'selection') => void;
    placeholder?: string;
    inputLabel?: string;
    overlayProps?: Partial<OverlayProps>;
    footer?: string | React.ReactElement;
}
export type SelectPanelProps = SelectPanelBaseProps & Omit<FilteredActionListProps, 'selectionVariant'> & Pick<AnchoredOverlayProps, 'open'> & AnchoredOverlayWrapperAnchorProps & (SelectPanelSingleSelection | SelectPanelMultiSelection);
export declare function SelectPanel({ open, onOpenChange, renderAnchor, anchorRef: externalAnchorRef, placeholder, placeholderText, inputLabel, selected, title, subtitle, onSelectedChange, filterValue: externalFilterValue, onFilterChange: externalOnFilterChange, items, footer, textInputProps, overlayProps, sx, ...listProps }: SelectPanelProps): JSX.Element;
export declare namespace SelectPanel {
    var displayName: string;
}
export {};
//# sourceMappingURL=SelectPanel.d.ts.map