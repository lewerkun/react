'use strict';

var clsx = require('clsx');
var React = require('react');
var styled = require('styled-components');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var clsx__default = /*#__PURE__*/_interopDefault(clsx);
var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ITEM_CLASS = 'SubNav-item';
const SELECTED_CLASS = 'selected';
const SubNavBase = styled__default.default.nav.withConfig({
  displayName: "SubNav__SubNavBase",
  componentId: "sc-1t692wx-0"
})(["display:flex;justify-content:space-between;.SubNav-body{display:flex;margin-bottom:-1px;> *{margin-left:", ";}> *:first-child{margin-left:0;}}.SubNav-actions{align-self:center;}", ";"], constants.get('space.2'), sx.default);
function SubNav({
  actions,
  className,
  children,
  label,
  ...rest
}) {
  const classes = clsx__default.default(className, 'SubNav');
  return /*#__PURE__*/React__default.default.createElement(SubNavBase, _extends({
    className: classes,
    "aria-label": label
  }, rest), /*#__PURE__*/React__default.default.createElement("div", {
    className: "SubNav-body"
  }, children), actions && /*#__PURE__*/React__default.default.createElement("div", {
    className: "SubNav-actions"
  }, actions));
}
SubNav.displayName = "SubNav";
const SubNavLinks = styled__default.default.div.withConfig({
  displayName: "SubNav__SubNavLinks",
  componentId: "sc-1t692wx-1"
})(["display:flex;", ";"], sx.default);
const SubNavLink = styled__default.default.a.attrs(props => ({
  className: clsx__default.default(ITEM_CLASS, props.selected && SELECTED_CLASS, props.className)
})).withConfig({
  displayName: "SubNav__SubNavLink",
  componentId: "sc-1t692wx-2"
})(["padding-left:", ";padding-right:", ";font-weight:", ";font-size:", ";line-height:20px;min-height:34px;color:", ";text-align:center;text-decoration:none;border-top:1px solid ", ";border-bottom:1px solid ", ";border-right:1px solid ", ";display:flex;align-items:center;&:first-of-type{border-top-left-radius:", ";border-bottom-left-radius:", ";border-left:1px solid ", ";}&:last-of-type{border-top-right-radius:", ";border-bottom-right-radius:", ";}&:hover,&:focus{text-decoration:none;background-color:", ";transition:background-color 0.2s ease;.SubNav-octicon{color:", ";}}&.selected{color:", ";background-color:", ";border-color:", ";.SubNav-octicon{color:", ";}}", ";"], constants.get('space.3'), constants.get('space.3'), constants.get('fontWeights.semibold'), constants.get('fontSizes.1'), constants.get('colors.fg.default'), constants.get('colors.border.default'), constants.get('colors.border.default'), constants.get('colors.border.default'), constants.get('radii.2'), constants.get('radii.2'), constants.get('colors.border.default'), constants.get('radii.2'), constants.get('radii.2'), constants.get('colors.canvas.subtle'), constants.get('colors.fg.muted'), constants.get('colors.fg.onEmphasis'), constants.get('colors.accent.emphasis'), constants.get('colors.accent.emphasis'), constants.get('colors.fg.onEmphasis'), sx.default);
SubNavLink.displayName = 'SubNav.Link';
SubNavLinks.displayName = 'SubNav.Links';
var SubNav$1 = Object.assign(SubNav, {
  Link: SubNavLink,
  Links: SubNavLinks
});

module.exports = SubNav$1;
