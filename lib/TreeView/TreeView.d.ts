import React from 'react';
export type TreeViewProps = {
    'aria-label'?: React.AriaAttributes['aria-label'];
    'aria-labelledby'?: React.AriaAttributes['aria-labelledby'];
    children: React.ReactNode;
    flat?: boolean;
    className?: string;
};
export type TreeViewItemProps = {
    'aria-label'?: React.AriaAttributes['aria-label'];
    'aria-labelledby'?: React.AriaAttributes['aria-labelledby'];
    id: string;
    children: React.ReactNode;
    containIntrinsicSize?: string;
    current?: boolean;
    defaultExpanded?: boolean;
    expanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    onSelect?: (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    className?: string;
};
export type SubTreeState = 'initial' | 'loading' | 'done' | 'error';
export type TreeViewSubTreeProps = {
    children?: React.ReactNode;
    state?: SubTreeState;
    /**
     * Display a skeleton loading state with the specified count of items
     */
    count?: number;
};
export type TreeViewVisualProps = {
    children: React.ReactNode | ((props: {
        isExpanded: boolean;
    }) => React.ReactNode);
    label?: string;
};
export type TreeViewErrorDialogProps = {
    children: React.ReactNode;
    title?: string;
    onRetry?: () => void;
    onDismiss?: () => void;
};
export declare const TreeView: React.FC<TreeViewProps> & {
    Item: React.ForwardRefExoticComponent<TreeViewItemProps & React.RefAttributes<HTMLElement>>;
    SubTree: React.FC<TreeViewSubTreeProps>;
    LeadingAction: React.FC<TreeViewVisualProps>;
    LeadingVisual: React.FC<TreeViewVisualProps>;
    TrailingVisual: React.FC<TreeViewVisualProps>;
    DirectoryIcon: () => React.JSX.Element;
    ErrorDialog: React.FC<TreeViewErrorDialogProps>;
};
//# sourceMappingURL=TreeView.d.ts.map