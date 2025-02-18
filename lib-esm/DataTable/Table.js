import { SortAscIcon, SortDescIcon } from '@primer/octicons-react';
import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import Box from '../Box/Box.js';
import Text from '../Text/Text.js';
import { get } from '../constants.js';
import sx from '../sx.js';
import VisuallyHidden from '../_VisuallyHidden.js';
import { SortDirection } from './sorting.js';
import { useTableLayout } from './useTable.js';
import { SkeletonText } from '../drafts/Skeleton/SkeletonText.js';
import { ScrollableRegion } from '../ScrollableRegion/ScrollableRegion.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

// ----------------------------------------------------------------------------
// Table
// ----------------------------------------------------------------------------

const StyledTable = styled.table.withConfig({
  displayName: "Table__StyledTable",
  componentId: "sc-jofqvq-0"
})(["--table-border-radius:0.375rem;--table-cell-padding:var(--cell-padding-block,0.5rem) var(--cell-padding-inline,0.75rem);--table-font-size:0.75rem;background-color:", ";border-spacing:0;border-collapse:separate;display:grid;font-size:var(--table-font-size);grid-template-columns:var(--grid-template-columns);line-height:calc(20 / var(--table-font-size));width:100%;&[data-cell-padding='condensed']{--cell-padding-block:0.25rem;--cell-padding-inline:0.5rem;}&[data-cell-padding='normal']{--cell-padding-block:0.5rem;--cell-padding-inline:0.75rem;}&[data-cell-padding='spacious']{--cell-padding-block:0.75rem;--cell-padding-inline:1rem;}.TableCell:first-child,.TableHeader:first-child{border-left:1px solid ", ";}.TableCell:last-child,.TableHeader:last-child{border-right:1px solid ", ";}.TableHeader,.TableCell{text-align:start;display:flex;align-items:center;border-bottom:1px solid ", ";padding:var(--table-cell-padding);}.TableHeader[data-cell-align='end'],.TableCell[data-cell-align='end']{text-align:end;display:flex;justify-content:flex-end;}.TableHeader[data-cell-align='end'] .TableSortButton{display:flex;flex-direction:row-reverse;}.TableHead .TableRow:first-of-type .TableHeader{border-top:1px solid ", ";}.TableHead .TableRow:first-of-type .TableHeader:first-child{border-top-left-radius:var(--table-border-radius);}.TableHead .TableRow:first-of-type .TableHeader:last-child{border-top-right-radius:var(--table-border-radius);}.TableOverflowWrapper:last-child & .TableBody .TableRow:last-of-type .TableCell:first-child{border-bottom-left-radius:var(--table-border-radius);}.TableOverflowWrapper:last-child & .TableBody .TableRow:last-of-type .TableCell:last-child{border-bottom-right-radius:var(--table-border-radius);}.TableRow > *:first-child:not(.TableCellSkeleton),.TableRow > *:first-child .TableCellSkeletonItem{padding-inline-start:1rem;}.TableRow > *:last-child:not(.TableCellSkeleton),.TableRow > *:last-child .TableCellSkeletonItem{padding-inline-end:1rem;}.TableHeader{background-color:", ";color:", ";font-weight:600;border-top:1px solid ", ";}.TableHeader[aria-sort='descending'],.TableHeader[aria-sort='ascending']{color:", ";}.TableSortIcon{visibility:hidden;}.TableHeader:hover .TableSortIcon--ascending,.TableHeader .TableSortButton:focus .TableSortIcon--ascending{visibility:visible;}.TableHeader[aria-sort='ascending'] .TableSortIcon--ascending,.TableHeader[aria-sort='descending'] .TableSortIcon--descending{visibility:visible;}.TableRow:hover .TableCell:not(.TableCellSkeleton){background-color:", ";}.TableCell[scope='row']{align-items:center;display:flex;color:", ";font-weight:600;}.TableCellSkeleton{padding:0;}.TableCellSkeletonItems{display:flex;flex-direction:column;width:100%;}.TableCellSkeletonItem{padding:var(--table-cell-padding);&:nth-of-type(5n + 1){--skeleton-item-width:85%;}&:nth-of-type(5n + 2){--skeleton-item-width:67.5%;}&:nth-of-type(5n + 3){--skeleton-item-width:80%;}&:nth-of-type(5n + 4){--skeleton-item-width:60%;}&:nth-of-type(5n + 5){--skeleton-item-width:75%;}}.TableCellSkeletonItem [data-component='SkeletonText']{width:var(--skeleton-item-width);}.TableCellSkeletonItem:not(:last-of-type){border-bottom:1px solid ", ";}.TableHead,.TableBody,.TableRow{display:contents;}@supports (grid-template-columns:subgrid){.TableHead,.TableBody,.TableRow{display:grid;grid-template-columns:subgrid;grid-column:-1 /1;}}"], get('colors.canvas.default'), get('colors.border.default'), get('colors.border.default'), get('colors.border.default'), get('colors.border.default'), get('colors.canvas.subtle'), get('colors.fg.muted'), get('colors.border.default'), get('colors.fg.default'), get('colors.actionListItem.default.hoverBg'), get('colors.fg.default'), get('colors.border.default'));
const Table = /*#__PURE__*/React.forwardRef(function Table({
  'aria-labelledby': labelledby,
  cellPadding = 'normal',
  className,
  gridTemplateColumns,
  ...rest
}, ref) {
  return (
    /*#__PURE__*/
    // TODO update type to be non-optional in next major release
    // @ts-expect-error this type should be required in the next major version
    React.createElement(ScrollableRegion, {
      "aria-labelledby": labelledby,
      className: "TableOverflowWrapper"
    }, /*#__PURE__*/React.createElement(StyledTable, _extends({}, rest, {
      "aria-labelledby": labelledby,
      "data-cell-padding": cellPadding,
      className: clsx('Table', className),
      role: "table",
      ref: ref,
      style: {
        '--grid-template-columns': gridTemplateColumns
      }
    })))
  );
});

// ----------------------------------------------------------------------------
// TableHead
// ----------------------------------------------------------------------------

function TableHead({
  children
}) {
  return (
    /*#__PURE__*/
    // We need to explicitly pass this role because some ATs and browsers drop table semantics
    // when we use `display: contents` or `display: grid` in the table
    React.createElement("thead", {
      className: "TableHead",
      role: "rowgroup"
    }, children)
  );
}
TableHead.displayName = "TableHead"; // ----------------------------------------------------------------------------
// TableBody
// ----------------------------------------------------------------------------
function TableBody({
  children
}) {
  return (
    /*#__PURE__*/
    // We need to explicitly pass this role because some ATs and browsers drop table semantics
    // when we use `display: contents` or `display: grid` in the table
    React.createElement("tbody", {
      className: "TableBody",
      role: "rowgroup"
    }, children)
  );
}
TableBody.displayName = "TableBody"; // ----------------------------------------------------------------------------
// TableHeader
// ----------------------------------------------------------------------------
function TableHeader({
  align,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("th", _extends({}, rest, {
    className: "TableHeader",
    role: "columnheader",
    scope: "col",
    "data-cell-align": align
  }), children);
}
TableHeader.displayName = "TableHeader";
function TableSortHeader({
  align,
  children,
  direction,
  onToggleSort,
  ...rest
}) {
  const ariaSort = direction === 'DESC' ? 'descending' : direction === 'ASC' ? 'ascending' : undefined;
  return /*#__PURE__*/React.createElement(TableHeader, _extends({}, rest, {
    "aria-sort": ariaSort,
    align: align
  }), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    className: "TableSortButton",
    onClick: () => {
      onToggleSort();
    }
  }, children, direction === SortDirection.NONE || direction === SortDirection.ASC ? /*#__PURE__*/React.createElement(SortAscIcon, {
    className: "TableSortIcon TableSortIcon--ascending"
  }) : null, direction === SortDirection.DESC ? /*#__PURE__*/React.createElement(SortDescIcon, {
    className: "TableSortIcon TableSortIcon--descending"
  }) : null));
}
TableSortHeader.displayName = "TableSortHeader"; // ----------------------------------------------------------------------------
// TableRow
// ----------------------------------------------------------------------------
function TableRow({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("tr", _extends({}, rest, {
    className: "TableRow",
    role: "row"
  }), children);
}
TableRow.displayName = "TableRow"; // ----------------------------------------------------------------------------
// TableCell
// ----------------------------------------------------------------------------
function TableCell({
  align,
  className,
  children,
  scope,
  ...rest
}) {
  const BaseComponent = scope ? 'th' : 'td';
  const role = scope ? 'rowheader' : 'cell';
  return /*#__PURE__*/React.createElement(BaseComponent, _extends({}, rest, {
    className: clsx('TableCell', className),
    scope: scope,
    role: role,
    "data-cell-align": align
  }), children);
}
TableCell.displayName = "TableCell";
function TableCellPlaceholder({
  children
}) {
  return /*#__PURE__*/React.createElement(Text, {
    color: "fg.subtle"
  }, children);
}
TableCellPlaceholder.displayName = "TableCellPlaceholder";
// ----------------------------------------------------------------------------
// TableContainer
// ----------------------------------------------------------------------------
const StyledTableContainer = styled.div.withConfig({
  displayName: "Table__StyledTableContainer",
  componentId: "sc-jofqvq-1"
})(["display:grid;grid-template-columns:1fr 1fr;grid-template-areas:'title actions' 'divider divider' 'subtitle subtitle' 'filter filter' 'table table' 'footer footer';column-gap:", ";", " .TableTitle{grid-area:title;align-self:center;}.TableSubtitle{grid-area:subtitle;}.TableActions{display:flex;column-gap:", ";align-items:center;grid-area:actions;justify-self:end;}.TableDivider{grid-area:divider;margin-top:", ";margin-bottom:", ";}.Table{grid-area:table;}.TableTitle + .TableOverflowWrapper,.TableSubtitle + .TableOverflowWrapper,.TableActions + .TableOverflowWrapper{margin-top:", ";}.TableOverflowWrapper{grid-area:table;}"], get('space.2'), sx, get('space.2'), get('space.3'), get('space.2'), get('space.2'));
function TableContainer({
  children,
  sx
}) {
  return /*#__PURE__*/React.createElement(StyledTableContainer, {
    sx: sx
  }, children);
}
TableContainer.displayName = "TableContainer";
const TableTitle = /*#__PURE__*/React.forwardRef(function TableTitle({
  as = 'h2',
  children,
  id
}, ref) {
  return /*#__PURE__*/React.createElement(Box, {
    as: as,
    className: "TableTitle",
    id: id,
    ref: ref,
    sx: {
      color: 'fg.default',
      fontWeight: 'bold',
      fontSize: 1,
      lineHeight: 'calc(20 / 14)',
      margin: 0
    }
  }, children);
});
function TableSubtitle({
  as,
  children,
  id
}) {
  return /*#__PURE__*/React.createElement(Box, {
    as: as,
    className: "TableSubtitle",
    id: id,
    sx: {
      color: 'fg.default',
      fontWeight: 'normal',
      fontSize: 0,
      lineHeight: 'default',
      margin: 0
    }
  }, children);
}
TableSubtitle.displayName = "TableSubtitle";
function TableDivider() {
  return /*#__PURE__*/React.createElement(Box, {
    className: "TableDivider",
    role: "presentation",
    sx: {
      backgroundColor: 'border.default',
      width: '100%',
      height: 1
    }
  });
}
TableDivider.displayName = "TableDivider";
function TableActions({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "TableActions"
  }, children);
}
TableActions.displayName = "TableActions"; // ----------------------------------------------------------------------------
// TableSkeleton
// ----------------------------------------------------------------------------
function TableSkeleton({
  cellPadding,
  columns,
  rows = 10,
  ...rest
}) {
  const {
    gridTemplateColumns
  } = useTableLayout(columns);
  return /*#__PURE__*/React.createElement(Table, _extends({}, rest, {
    cellPadding: cellPadding,
    gridTemplateColumns: gridTemplateColumns
  }), /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, null, Array.isArray(columns) ? columns.map((column, i) => {
    return /*#__PURE__*/React.createElement(TableHeader, {
      key: i
    }, typeof column.header === 'string' ? column.header : column.header());
  }) : null)), /*#__PURE__*/React.createElement(TableBody, null, /*#__PURE__*/React.createElement(TableRow, null, Array.from({
    length: columns.length
  }).map((_, i) => {
    return /*#__PURE__*/React.createElement(TableCell, {
      key: i,
      className: "TableCellSkeleton"
    }, /*#__PURE__*/React.createElement(VisuallyHidden, null, "Loading"), /*#__PURE__*/React.createElement("div", {
      className: "TableCellSkeletonItems"
    }, Array.from({
      length: rows
    }).map((_, i) => {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "TableCellSkeletonItem"
      }, /*#__PURE__*/React.createElement(SkeletonText, null));
    })));
  }))));
}
TableSkeleton.displayName = "TableSkeleton";
// ----------------------------------------------------------------------------
// Utilities
// ----------------------------------------------------------------------------

// Button "reset" component that provides an unstyled <button> element for use
// in the table
const Button = styled.button.withConfig({
  displayName: "Table__Button",
  componentId: "sc-jofqvq-2"
})(["padding:0;border:0;margin:0;display:inline-flex;padding:0;border:0;appearance:none;background:none;cursor:pointer;text-align:start;font:inherit;color:inherit;column-gap:0.5rem;align-items:center;&::-moz-focus-inner{border:0;}"]);

export { Table, TableActions, TableBody, TableCell, TableCellPlaceholder, TableContainer, TableDivider, TableHead, TableHeader, TableRow, TableSkeleton, TableSortHeader, TableSubtitle, TableTitle };
