'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var clsx = require('clsx');
var React = require('react');
var styled = require('styled-components');
var Box = require('../Box/Box.js');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var clsx__default = /*#__PURE__*/_interopDefault(clsx);
var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

const SELECTED_CLASS = 'selected';
const Wrapper = styled__default.default.li.withConfig({
  displayName: "Breadcrumbs__Wrapper",
  componentId: "sc-9m4wsf-0"
})(["display:inline-block;white-space:nowrap;list-style:none;&::after{font-size:", ";content:'';display:inline-block;height:0.8em;margin:0 0.5em;border-right:0.1em solid;border-color:", ";transform:rotate(15deg) translateY(0.0625em);}&:first-child{margin-left:0;}&:last-child{&::after{content:none;}}"], constants.get('fontSizes.1'), constants.get('colors.fg.muted'));
const BreadcrumbsBase = styled__default.default.nav.withConfig({
  displayName: "Breadcrumbs__BreadcrumbsBase",
  componentId: "sc-9m4wsf-1"
})(["display:flex;justify-content:space-between;", ";"], sx.default);
function Breadcrumbs({
  className,
  children,
  sx: sxProp
}) {
  const wrappedChildren = React__default.default.Children.map(children, child => /*#__PURE__*/React__default.default.createElement(Wrapper, null, child));
  return /*#__PURE__*/React__default.default.createElement(BreadcrumbsBase, {
    className: className,
    "aria-label": "Breadcrumbs",
    sx: sxProp
  }, /*#__PURE__*/React__default.default.createElement(Box, {
    as: "ol",
    my: 0,
    pl: 0
  }, wrappedChildren));
}
Breadcrumbs.displayName = "Breadcrumbs";
const BreadcrumbsItem = styled__default.default.a.attrs(props => ({
  className: clsx__default.default(props.selected && SELECTED_CLASS, props.className),
  'aria-current': props.selected ? 'page' : null
})).withConfig({
  displayName: "Breadcrumbs__BreadcrumbsItem",
  componentId: "sc-9m4wsf-2"
})(["color:", ";display:inline-block;font-size:", ";text-decoration:none;&:hover,&:focus{text-decoration:underline;}&.selected{color:", ";pointer-events:none;}&.selected:focus{text-decoration:none;}", ";"], constants.get('colors.accent.fg'), constants.get('fontSizes.1'), constants.get('colors.fg.default'), sx.default);
Breadcrumbs.displayName = 'Breadcrumbs';
BreadcrumbsItem.displayName = 'Breadcrumbs.Item';
var Breadcrumbs$1 = Object.assign(Breadcrumbs, {
  Item: BreadcrumbsItem
});

/**
 * @deprecated Use the `Breadcrumbs` component instead (i.e. `<Breadcrumb>` → `<Breadcrumbs>`)
 */
const Breadcrumb = Object.assign(Breadcrumbs, {
  Item: BreadcrumbsItem
});

/**
 * @deprecated Use the `BreadcrumbsProps` type instead
 */

/**
 * @deprecated Use the `BreadcrumbsItemProps` type instead
 */

exports.Breadcrumb = Breadcrumb;
exports.default = Breadcrumbs$1;
