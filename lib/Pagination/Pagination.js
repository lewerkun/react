'use strict';

var React = require('react');
var styled = require('styled-components');
var Box = require('../Box/Box.js');
var constants = require('../constants.js');
var sx = require('../sx.js');
var getGlobalFocusStyles = require('../internal/utils/getGlobalFocusStyles.js');
var model = require('./model.js');
var useResponsiveValue = require('../hooks/useResponsiveValue.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const getViewportRangesToHidePages = showPages => {
  if (showPages && typeof showPages !== 'boolean') {
    return Object.keys(showPages).filter(key => !showPages[key]);
  }
  if (showPages) {
    return [];
  } else {
    return Object.keys(useResponsiveValue.viewportRanges);
  }
};
const Page = styled__default.default.a.withConfig({
  displayName: "Pagination__Page",
  componentId: "sc-cp45c9-0"
})(["display:inline-block;min-width:32px;height:32px;padding:0.5rem calc((2rem - 1.25rem) / 2);font-style:normal;line-height:1;color:", ";text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;user-select:none;text-decoration:none;margin-right:", ";&:last-child{margin-right:0;}background-color:transparent;border-radius:", ";transition:background-color 0.2s cubic-bezier(0.3,0,0.5,1);&:hover,&:focus{text-decoration:none;background-color:", ";outline:0;transition-duration:0.1s;}", ";&:active{border-color:", ";}&[rel='prev'],&[rel='next']{color:", ";}&[aria-current],&[aria-current]:hover{color:", ";background-color:", ";border-color:transparent;}&[aria-disabled],&[aria-disabled]:hover{color:", ";cursor:default;background-color:transparent;border-color:transparent;font-size:inherit;font-family:inherit;padding-top:inherit;padding-bottom:inherit;}&[aria-disabled],&[aria-disabled]:hover,&[role='presentation'],&[role='presentation']:hover{color:", ";cursor:default;background-color:transparent;}@supports (clip-path:polygon(50% 0,100% 50%,50% 100%)){&[rel='prev']::before,&[rel='next']::after{display:inline-block;width:16px;height:16px;vertical-align:text-bottom;content:'';background-color:currentColor;}&[rel='prev']::before{margin-right:", ";clip-path:polygon( 9.8px 12.8px,8.7px 12.8px,4.5px 8.5px,4.5px 7.5px,8.7px 3.2px,9.8px 4.3px,6.1px 8px,9.8px 11.7px,9.8px 12.8px );}&[rel='next']::after{margin-left:", ";clip-path:polygon( 6.2px 3.2px,7.3px 3.2px,11.5px 7.5px,11.5px 8.5px,7.3px 12.8px,6.2px 11.7px,9.9px 8px,6.2px 4.3px,6.2px 3.2px );}}"], constants.get('colors.fg.default'), constants.get('space.1'), constants.get('radii.2'), constants.get('colors.actionListItem.default.hoverBg'), getGlobalFocusStyles(0), constants.get('colors.border.muted'), constants.get('colors.accent.fg'), constants.get('colors.fg.onEmphasis'), constants.get('colors.accent.emphasis'), constants.get('colors.primer.fg.disabled'), constants.get('colors.primer.fg.disabled'), constants.get('space.1'), constants.get('space.1'));
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
  const pageChange = React__default.default.useCallback(n => e => onPageChange(e, n), [onPageChange]);
  const model$1 = React__default.default.useMemo(() => {
    return model.buildPaginationModel(pageCount, currentPage, !!showPages, marginPageCount, surroundingPageCount);
  }, [pageCount, currentPage, showPages, marginPageCount, surroundingPageCount]);
  const children = React__default.default.useMemo(() => {
    return model$1.map(page => {
      const {
        props,
        key,
        content
      } = model.buildComponentData(page, hrefBuilder, pageChange(page.num));
      return /*#__PURE__*/React__default.default.createElement(Page, _extends({}, props, {
        key: key,
        theme: theme
      }), content);
    });
  }, [model$1, hrefBuilder, pageChange, theme]);
  return children;
}
const PaginationContainer = styled__default.default.nav.withConfig({
  displayName: "Pagination__PaginationContainer",
  componentId: "sc-cp45c9-1"
})(["margin-top:20px;margin-bottom:15px;text-align:center;", " ", ";"],
// Hides pages based on the viewport range passed to `showPages`
Object.keys(useResponsiveValue.viewportRanges).map(viewportRangeKey => {
  return `
      @media (${useResponsiveValue.viewportRanges[viewportRangeKey]}) {
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
}).join(''), sx.default);
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
  return /*#__PURE__*/React__default.default.createElement(PaginationContainer, _extends({
    "aria-label": "Pagination"
  }, rest, {
    theme: theme
  }), /*#__PURE__*/React__default.default.createElement(Box, {
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

module.exports = Pagination;
