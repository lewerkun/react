'use strict';

var clsx = require('clsx');
var React = require('react');
var styled = require('styled-components');
var constants = require('../../constants.js');
var sx = require('../../sx.js');
var getGlobalFocusStyles = require('../../internal/utils/getGlobalFocusStyles.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var clsx__default = /*#__PURE__*/_interopDefault(clsx);
var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ITEM_CLASS = 'PRC-UnderlineNav-item';
const SELECTED_CLASS = 'PRC-selected';
const UnderlineNavBase = styled__default.default.nav.withConfig({
  displayName: "UnderlineNav__UnderlineNavBase",
  componentId: "sc-11ejk33-0"
})(["display:flex;justify-content:space-between;border-bottom:1px solid ", ";&.PRC-UnderlineNav--right{justify-content:flex-end;.PRC-UnderlineNav-item{margin-right:0;margin-left:", ";}.PRC-UnderlineNav-actions{flex:1 1 auto;}}&.PRC-UnderlineNav--full{display:block;}.PRC-UnderlineNav-body{display:flex;margin-bottom:-1px;}.PRC-UnderlineNav-actions{align-self:center;}", ";"], constants.get('colors.border.muted'), constants.get('space.3'), sx.default);
function UnderlineNav({
  actions,
  className,
  align,
  children,
  full,
  label,
  theme,
  ...rest
}) {
  const classes = clsx__default.default(className, 'PRC-UnderlineNav', align && `PRC-UnderlineNav--${align}`, full && 'PRC-UnderlineNav--full');
  return /*#__PURE__*/React__default.default.createElement(UnderlineNavBase, _extends({
    className: classes,
    "aria-label": label,
    theme: theme
  }, rest), /*#__PURE__*/React__default.default.createElement("div", {
    className: "PRC-UnderlineNav-body"
  }, children), actions && /*#__PURE__*/React__default.default.createElement("div", {
    className: "PRC-UnderlineNav-actions"
  }, actions));
}
UnderlineNav.displayName = "UnderlineNav";
const UnderlineNavLink = styled__default.default.a.attrs(props => ({
  className: clsx__default.default(ITEM_CLASS, props.selected && SELECTED_CLASS, props.className)
})).withConfig({
  displayName: "UnderlineNav__UnderlineNavLink",
  componentId: "sc-11ejk33-1"
})(["padding:", " ", ";margin-right:", ";font-size:", ";line-height:", ";color:", ";text-align:center;border-bottom:2px solid transparent;text-decoration:none;&:hover,&:focus{color:", ";text-decoration:none;border-bottom-color:", ";transition:border-bottom-color 0.2s ease;.PRC-UnderlineNav-octicon{color:", ";}}&.PRC-selected{color:", ";border-bottom-color:", ";.PRC-UnderlineNav-octicon{color:", ";}}", ";", ";"], constants.get('space.3'), constants.get('space.2'), constants.get('space.3'), constants.get('fontSizes.1'), constants.get('lineHeights.default'), constants.get('colors.fg.default'), constants.get('colors.fg.default'), constants.get('colors.neutral.muted'), constants.get('colors.fg.muted'), constants.get('colors.fg.default'), constants.get('colors.primer.border.active'), constants.get('colors.fg.default'), getGlobalFocusStyles('-8px'), sx.default);
UnderlineNavLink.displayName = 'UnderlineNav.Link';
/**
 * @deprecated UnderlineNav is deprecated and will be replaced by the draft `UnderlineNav` in the next major release. See https://primer.style/react/drafts/UnderlineNav2 for more details.
 */
var UnderlineNav$1 = Object.assign(UnderlineNav, {
  Link: UnderlineNavLink
});

module.exports = UnderlineNav$1;
