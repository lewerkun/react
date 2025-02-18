/// <reference types="react" />
import { DataTable } from './DataTable';
import { ErrorDialog } from './ErrorDialog';
import { TableHead, TableBody, TableRow, TableHeader, TableCell, TableCellPlaceholder, TableContainer, TableSubtitle, TableActions, TableDivider, TableSkeleton } from './Table';
import { Pagination } from './Pagination';
declare const Table: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> & {
    'aria-describedby'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    gridTemplateColumns?: import("csstype").Property.GridTemplateColumns<string | number> | undefined;
    cellPadding?: "normal" | "condensed" | "spacious" | undefined;
} & import("react").RefAttributes<HTMLTableElement>> & {
    Container: typeof TableContainer;
    Title: import("react").ForwardRefExoticComponent<{
        as?: keyof JSX.IntrinsicElements | import("react").ComponentType<{}> | undefined;
        id: string;
    } & {
        children?: import("react").ReactNode;
    } & import("react").RefAttributes<HTMLElement>>;
    Subtitle: typeof TableSubtitle;
    Actions: typeof TableActions;
    Divider: typeof TableDivider;
    Skeleton: typeof TableSkeleton;
    Head: typeof TableHead;
    Body: typeof TableBody;
    Header: typeof TableHeader;
    Row: typeof TableRow;
    Cell: typeof TableCell;
    CellPlaceholder: typeof TableCellPlaceholder;
    Pagination: typeof Pagination;
    ErrorDialog: typeof ErrorDialog;
};
export { DataTable, Table };
export type { DataTableProps } from './DataTable';
export type { TableProps, TableHeadProps, TableBodyProps, TableRowProps, TableHeaderProps, TableCellProps, TableContainerProps, TableTitleProps, TableSubtitleProps, TableActionsProps, TableSkeletonProps, } from './Table';
export { createColumnHelper } from './column';
export type { Column } from './column';
//# sourceMappingURL=index.d.ts.map