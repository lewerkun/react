import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import { get } from '../constants.js';
import sx from '../sx.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ITEM_CLASS = 'SubNav-item';
const SELECTED_CLASS = 'selected';
const SubNavBase = styled.nav.withConfig({
  displayName: "SubNav__SubNavBase",
  componentId: "sc-1t692wx-0"
})(["display:flex;justify-content:space-between;.SubNav-body{display:flex;margin-bottom:-1px;> *{margin-left:", ";}> *:first-child{margin-left:0;}}.SubNav-actions{align-self:center;}", ";"], get('space.2'), sx);
function SubNav({
  actions,
  className,
  children,
  label,
  ...rest
}) {
  const classes = clsx(className, 'SubNav');
  return /*#__PURE__*/React.createElement(SubNavBase, _extends({
    className: classes,
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "SubNav-body"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "SubNav-actions"
  }, actions));
}
SubNav.displayName = "SubNav";
const SubNavLinks = styled.div.withConfig({
  displayName: "SubNav__SubNavLinks",
  componentId: "sc-1t692wx-1"
})(["display:flex;", ";"], sx);
const SubNavLink = styled.a.attrs(props => ({
  className: clsx(ITEM_CLASS, props.selected && SELECTED_CLASS, props.className)
})).withConfig({
  displayName: "SubNav__SubNavLink",
  componentId: "sc-1t692wx-2"
})(["padding-left:", ";padding-right:", ";font-weight:", ";font-size:", ";line-height:20px;min-height:34px;color:", ";text-align:center;text-decoration:none;border-top:1px solid ", ";border-bottom:1px solid ", ";border-right:1px solid ", ";display:flex;align-items:center;&:first-of-type{border-top-left-radius:", ";border-bottom-left-radius:", ";border-left:1px solid ", ";}&:last-of-type{border-top-right-radius:", ";border-bottom-right-radius:", ";}&:hover,&:focus{text-decoration:none;background-color:", ";transition:background-color 0.2s ease;.SubNav-octicon{color:", ";}}&.selected{color:", ";background-color:", ";border-color:", ";.SubNav-octicon{color:", ";}}", ";"], get('space.3'), get('space.3'), get('fontWeights.semibold'), get('fontSizes.1'), get('colors.fg.default'), get('colors.border.default'), get('colors.border.default'), get('colors.border.default'), get('radii.2'), get('radii.2'), get('colors.border.default'), get('radii.2'), get('radii.2'), get('colors.canvas.subtle'), get('colors.fg.muted'), get('colors.fg.onEmphasis'), get('colors.accent.emphasis'), get('colors.accent.emphasis'), get('colors.fg.onEmphasis'), sx);
SubNavLink.displayName = 'SubNav.Link';
SubNavLinks.displayName = 'SubNav.Links';
var SubNav$1 = Object.assign(SubNav, {
  Link: SubNavLink,
  Links: SubNavLinks
});

export { SubNav$1 as default };
