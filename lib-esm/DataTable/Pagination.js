import { ChevronLeftIcon, ChevronRightIcon } from '@primer/octicons-react';
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { get } from '../constants.js';
import { Button } from '../internal/components/ButtonReset.js';
import { LiveRegion, LiveRegionOutlet, Message } from '../internal/components/LiveRegion.js';
import { VisuallyHidden } from '../internal/components/VisuallyHidden.js';
import { warning } from '../utils/warning.js';
import { viewportRanges } from '../hooks/useResponsiveValue.js';

const StyledPagination = styled.nav.withConfig({
  displayName: "Pagination__StyledPagination",
  componentId: "sc-1auq45q-0"
})(["display:flex;align-items:center;justify-content:space-between;column-gap:1rem;width:100%;grid-area:footer;padding:0.5rem 1rem;border:1px solid ", ";border-top-width:0;border-end-start-radius:6px;border-end-end-radius:6px;.TablePaginationRange{color:", ";font-size:0.75rem;margin:0;}.TablePaginationSteps{display:flex;align-items:center;flex-wrap:wrap;list-style:none;color:", ";font-size:0.875rem;margin:0;padding:0;}.TablePaginationStep:first-of-type{margin-right:1rem;}.TablePaginationStep:last-of-type{margin-left:1rem;}.TablePaginationAction{display:flex;align-items:center;color:", ";font-size:0.875rem;line-height:calc(20 / 14);user-select:none;padding:0.5rem;border-radius:6px;}.TablePaginationAction[data-has-page]{color:", ";}.TablePaginationPage{min-width:2rem;min-height:2rem;display:flex;align-items:center;justify-content:center;font-size:0.875rem;line-height:calc(20 / 14);user-select:none;border-radius:6px;}.TablePaginationAction[data-has-page]:hover,.TablePaginationAction[data-has-page]:focus,.TablePaginationPage:hover,.TablePaginationPage:focus{background-color:", ";transition-duration:0.1s;}.TablePaginationPage[data-active='true']{background-color:", ";color:", ";}.TablePaginationTruncationStep{display:flex;align-items:center;justify-content:center;min-width:2rem;min-height:2rem;user-select:none;}", ""], get('colors.border.default'), get('colors.fg.muted'), get('colors.fg.default'), get('colors.fg.muted'), get('colors.accent.fg'), get('colors.actionListItem.default.hoverBg'), get('colors.accent.emphasis'), get('colors.fg.onEmphasis'),
// Hides pages based on the viewport range passed to `showPages`
Object.keys(viewportRanges).map(viewportRangeKey => {
  return `
      @media (${viewportRanges[viewportRangeKey]}) {
        .TablePaginationSteps[data-hidden-viewport-ranges*='${viewportRangeKey}'] > *:not(:first-child):not(:last-child) {
          display: none;
        }

        .TablePaginationSteps[data-hidden-viewport-ranges*='${viewportRangeKey}'] > *:first-child {
          margin-inline-end: 0;
        }

        .TablePaginationSteps[data-hidden-viewport-ranges*='${viewportRangeKey}'] > *:last-child {
          margin-inline-start: 0;
        }
      }
    `;
}).join(''));
/**
 * Specifies the maximum number of items in between the first and last page,
 * including truncated steps
 */
const MAX_TRUNCATED_STEP_COUNT = 7;
function Pagination({
  'aria-label': label,
  defaultPageIndex,
  id,
  onChange,
  pageSize = 25,
  showPages = {
    narrow: false
  },
  totalCount
}) {
  const {
    pageIndex,
    pageStart,
    pageEnd,
    pageCount,
    hasPreviousPage,
    hasNextPage,
    selectPage,
    selectNextPage,
    selectPreviousPage
  } = usePagination({
    defaultPageIndex,
    onChange,
    pageSize,
    totalCount
  });
  const truncatedPageCount = pageCount > 2 ? Math.min(pageCount - 2, MAX_TRUNCATED_STEP_COUNT) : 0;
  const [offsetStartIndex, setOffsetStartIndex] = useState(() => {
    return getDefaultOffsetStartIndex(pageIndex, pageCount, truncatedPageCount);
  });
  const offsetEndIndex = offsetStartIndex + truncatedPageCount - 1;
  const hasLeadingTruncation = offsetStartIndex >= 2;
  const hasTrailingTruncation = pageCount - 1 - offsetEndIndex > 1;
  const getViewportRangesToHidePages = useCallback(() => {
    if (typeof showPages !== 'boolean') {
      return Object.keys(showPages).filter(key => !showPages[key]);
    }
    if (showPages) {
      return [];
    } else {
      return Object.keys(viewportRanges);
    }
  }, [showPages]);
  return /*#__PURE__*/React.createElement(LiveRegion, null, /*#__PURE__*/React.createElement(LiveRegionOutlet, null), /*#__PURE__*/React.createElement(StyledPagination, {
    "aria-label": label,
    className: "TablePagination",
    id: id
  }, /*#__PURE__*/React.createElement(Range, {
    pageStart: pageStart,
    pageEnd: pageEnd,
    totalCount: totalCount
  }), /*#__PURE__*/React.createElement("ol", {
    className: "TablePaginationSteps",
    "data-hidden-viewport-ranges": getViewportRangesToHidePages().join(' ')
  }, /*#__PURE__*/React.createElement(Step, null, /*#__PURE__*/React.createElement(Button, {
    className: "TablePaginationAction",
    type: "button",
    "data-has-page": hasPreviousPage ? true : undefined,
    "aria-disabled": !hasPreviousPage ? true : undefined,
    onClick: () => {
      if (!hasPreviousPage) {
        return;
      }
      selectPreviousPage();
      if (hasLeadingTruncation) {
        if (pageIndex - 1 < offsetStartIndex + 1) {
          setOffsetStartIndex(offsetStartIndex - 1);
        }
      }
    }
  }, hasPreviousPage ? /*#__PURE__*/React.createElement(ChevronLeftIcon, null) : null, /*#__PURE__*/React.createElement("span", {
    className: "TablePaginationActionLabel"
  }, "Previous"), /*#__PURE__*/React.createElement(VisuallyHidden, null, "\xA0page"))), pageCount > 0 ? /*#__PURE__*/React.createElement(Step, null, /*#__PURE__*/React.createElement(Page, {
    active: pageIndex === 0,
    onClick: () => {
      selectPage(0);
      if (pageCount > 1) {
        setOffsetStartIndex(1);
      }
    }
  }, 1, hasLeadingTruncation ? /*#__PURE__*/React.createElement(VisuallyHidden, null, "\u2026") : null)) : null, pageCount > 2 ? Array.from({
    length: truncatedPageCount
  }).map((_, i) => {
    if (i === 0 && hasLeadingTruncation) {
      return /*#__PURE__*/React.createElement(TruncationStep, {
        key: `truncation-${i}`
      });
    }
    if (i === truncatedPageCount - 1 && hasTrailingTruncation) {
      return /*#__PURE__*/React.createElement(TruncationStep, {
        key: `truncation-${i}`
      });
    }
    const page = offsetStartIndex + i;
    return /*#__PURE__*/React.createElement(Step, {
      key: i
    }, /*#__PURE__*/React.createElement(Page, {
      active: pageIndex === page,
      onClick: () => {
        selectPage(page);
      }
    }, page + 1, i === truncatedPageCount - 2 && hasTrailingTruncation ? /*#__PURE__*/React.createElement(VisuallyHidden, null, "\u2026") : null));
  }) : null, pageCount > 1 ? /*#__PURE__*/React.createElement(Step, null, /*#__PURE__*/React.createElement(Page, {
    active: pageIndex === pageCount - 1,
    onClick: () => {
      selectPage(pageCount - 1);
      setOffsetStartIndex(pageCount - 1 - truncatedPageCount);
    }
  }, pageCount)) : null, /*#__PURE__*/React.createElement(Step, null, /*#__PURE__*/React.createElement(Button, {
    className: "TablePaginationAction",
    type: "button",
    "data-has-page": hasNextPage ? true : undefined,
    "aria-disabled": !hasNextPage ? true : undefined,
    onClick: () => {
      if (!hasNextPage) {
        return;
      }
      selectNextPage();
      if (hasTrailingTruncation) {
        if (pageIndex + 1 > offsetEndIndex - 1) {
          setOffsetStartIndex(offsetStartIndex + 1);
        }
      }
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "TablePaginationActionLabel"
  }, "Next"), /*#__PURE__*/React.createElement(VisuallyHidden, null, "\xA0page"), hasNextPage ? /*#__PURE__*/React.createElement(ChevronRightIcon, null) : null)))));
}
Pagination.displayName = "Pagination";
function getDefaultOffsetStartIndex(pageIndex, pageCount, truncatedPageCount) {
  // When the current page is closer to the end of the list than the beginning
  if (pageIndex > pageCount - 1 - pageIndex) {
    if (pageCount - 1 - pageIndex >= truncatedPageCount) {
      return pageIndex - 3;
    }
    return pageCount - 1 - truncatedPageCount;
  }

  // When the current page is closer to the beginning of the list than the end
  if (pageIndex < pageCount - 1 - pageIndex) {
    if (pageIndex >= truncatedPageCount) {
      return pageIndex - 3;
    }
    return 1;
  }

  // When the current page is the midpoint between the beginning and the end
  if (pageIndex < truncatedPageCount) {
    return pageIndex;
  }
  return pageIndex - 3;
}
function Range({
  pageStart,
  pageEnd,
  totalCount
}) {
  const start = pageStart + 1;
  const end = pageEnd === totalCount - 1 ? totalCount : pageEnd;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Message, {
    value: `Showing ${start} through ${end} of ${totalCount}`
  }), /*#__PURE__*/React.createElement("p", {
    className: "TablePaginationRange"
  }, start, /*#__PURE__*/React.createElement(VisuallyHidden, {
    as: "span"
  }, "\xA0through\xA0"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2012"), end, " of ", totalCount));
}
function TruncationStep() {
  return /*#__PURE__*/React.createElement("li", {
    "aria-hidden": "true",
    className: "TablePaginationTruncationStep"
  }, "\u2026");
}
TruncationStep.displayName = "TruncationStep";
function Step({
  children
}) {
  return /*#__PURE__*/React.createElement("li", {
    className: "TablePaginationStep"
  }, children);
}
Step.displayName = "Step";
function Page({
  active,
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement(Button, {
    className: "TablePaginationPage",
    type: "button",
    "data-active": active ? true : undefined,
    "aria-current": active ? true : undefined,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(VisuallyHidden, null, "Page\xA0"), children);
}
Page.displayName = "Page";
function usePagination(config) {
  const {
    defaultPageIndex,
    onChange,
    pageSize,
    totalCount
  } = config;
  const pageCount = Math.ceil(totalCount / pageSize);
  const [pageIndex, setPageIndex] = useState(() => {
    if (defaultPageIndex !== undefined) {
      if (defaultPageIndex >= 0 && defaultPageIndex < pageCount) {
        return defaultPageIndex;
      }
      process.env.NODE_ENV !== "production" ? warning(true,
      // eslint-disable-next-line github/unescaped-html-literal
      '<Pagination> expected `defaultPageIndex` to be less than the ' + 'total number of pages. Instead, received a `defaultPageIndex` ' + 'of %s with %s total pages.', defaultPageIndex, pageCount) : void 0;
    }
    return 0;
  });
  const pageStart = pageIndex * pageSize;
  const pageEnd = Math.min(pageIndex * pageSize + pageSize, totalCount - 1);
  const hasNextPage = pageIndex + 1 < pageCount;
  const hasPreviousPage = pageIndex > 0;
  function selectPage(newPageIndex) {
    if (pageIndex !== newPageIndex) {
      setPageIndex(newPageIndex);
      onChange === null || onChange === void 0 ? void 0 : onChange({
        pageIndex: newPageIndex
      });
    }
  }
  function selectPreviousPage() {
    if (hasPreviousPage) {
      selectPage(pageIndex - 1);
    }
  }
  function selectNextPage() {
    if (hasNextPage) {
      selectPage(pageIndex + 1);
    }
  }
  return {
    pageIndex,
    pageStart,
    pageEnd,
    pageCount,
    hasNextPage,
    hasPreviousPage,
    selectPage,
    selectPreviousPage,
    selectNextPage
  };
}

export { Pagination };
