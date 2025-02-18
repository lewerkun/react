import React from 'react';
import styled from 'styled-components';
import Box from '../Box/Box.js';
import { get } from '../constants.js';
import sx from '../sx.js';
import getGlobalFocusStyles from '../internal/utils/getGlobalFocusStyles.js';
import { buildPaginationModel, buildComponentData } from './model.js';
import { viewportRanges } from '../hooks/useResponsiveValue.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const getViewportRangesToHidePages = showPages => {
  if (showPages && typeof showPages !== 'boolean') {
    return Object.keys(showPages).filter(key => !showPages[key]);
  }
  if (showPages) {
    return [];
  } else {
    return Object.keys(viewportRanges);
  }
};
const Page = styled.a.withConfig({
  displayName: "Pagination__Page",
  componentId: "sc-cp45c9-0"
})(["display:inline-block;min-width:32px;height:32px;padding:0.5rem calc((2rem - 1.25rem) / 2);font-style:normal;line-height:1;color:", ";text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;user-select:none;text-decoration:none;margin-right:", ";&:last-child{margin-right:0;}background-color:transparent;border-radius:", ";transition:background-color 0.2s cubic-bezier(0.3,0,0.5,1);&:hover,&:focus{text-decoration:none;background-color:", ";outline:0;transition-duration:0.1s;}", ";&:active{border-color:", ";}&[rel='prev'],&[rel='next']{color:", ";}&[aria-current],&[aria-current]:hover{color:", ";background-color:", ";border-color:transparent;}&[aria-disabled],&[aria-disabled]:hover{color:", ";cursor:default;background-color:transparent;border-color:transparent;font-size:inherit;font-family:inherit;padding-top:inherit;padding-bottom:inherit;}&[aria-disabled],&[aria-disabled]:hover,&[role='presentation'],&[role='presentation']:hover{color:", ";cursor:default;background-color:transparent;}@supports (clip-path:polygon(50% 0,100% 50%,50% 100%)){&[rel='prev']::before,&[rel='next']::after{display:inline-block;width:16px;height:16px;vertical-align:text-bottom;content:'';background-color:currentColor;}&[rel='prev']::before{margin-right:", ";clip-path:polygon( 9.8px 12.8px,8.7px 12.8px,4.5px 8.5px,4.5px 7.5px,8.7px 3.2px,9.8px 4.3px,6.1px 8px,9.8px 11.7px,9.8px 12.8px );}&[rel='next']::after{margin-left:", ";clip-path:polygon( 6.2px 3.2px,7.3px 3.2px,11.5px 7.5px,11.5px 8.5px,7.3px 12.8px,6.2px 11.7px,9.9px 8px,6.2px 4.3px,6.2px 3.2px );}}"], get('colors.fg.default'), get('space.1'), get('radii.2'), get('colors.actionListItem.default.hoverBg'), getGlobalFocusStyles(0), get('colors.border.muted'), get('colors.accent.fg'), get('colors.fg.onEmphasis'), get('colors.accent.emphasis'), get('colors.primer.fg.disabled'), get('colors.primer.fg.disabled'), get('space.1'), get('space.1'));
function usePaginationPages({
  theme,
  pageCount,
  currentPage,
  onPageChange,
  hrefBuilder,
  marginPageCount,
  showPages,
  surroundingPageCount
}) {
  const pageChange = React.useCallback(n => e => onPageChange(e, n), [onPageChange]);
  const model = React.useMemo(() => {
    return buildPaginationModel(pageCount, currentPage, !!showPages, marginPageCount, surroundingPageCount);
  }, [pageCount, currentPage, showPages, marginPageCount, surroundingPageCount]);
  const children = React.useMemo(() => {
    return model.map(page => {
      const {
        props,
        key,
        content
      } = buildComponentData(page, hrefBuilder, pageChange(page.num));
      return /*#__PURE__*/React.createElement(Page, _extends({}, props, {
        key: key,
        theme: theme
      }), content);
    });
  }, [model, hrefBuilder, pageChange, theme]);
  return children;
}
const PaginationContainer = styled.nav.withConfig({
  displayName: "Pagination__PaginationContainer",
  componentId: "sc-cp45c9-1"
})(["margin-top:20px;margin-bottom:15px;text-align:center;", " ", ";"],
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
}).join(''), sx);
function Pagination({
  theme,
  pageCount,
  currentPage,
  onPageChange = noop,
  hrefBuilder = defaultHrefBuilder,
  marginPageCount = 1,
  showPages = true,
  surroundingPageCount = 2,
  ...rest
}) {
  const pageElements = usePaginationPages({
    theme,
    pageCount,
    currentPage,
    onPageChange,
    hrefBuilder,
    marginPageCount,
    showPages,
    surroundingPageCount
  });
  return /*#__PURE__*/React.createElement(PaginationContainer, _extends({
    "aria-label": "Pagination"
  }, rest, {
    theme: theme
  }), /*#__PURE__*/React.createElement(Box, {
    display: "inline-block",
    theme: theme,
    className: "TablePaginationSteps",
    "data-hidden-viewport-ranges": getViewportRangesToHidePages(showPages).join(' ')
  }, pageElements));
}
Pagination.displayName = "Pagination";
function defaultHrefBuilder(pageNum) {
  return `#${pageNum}`;
}
function noop() {}

export { Pagination as default };
