'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var constants = require('../constants.js');
var sx = require('../sx.js');
var useResponsiveValue = require('../hooks/useResponsiveValue.js');
var getBreakpointDeclarations = require('../utils/getBreakpointDeclarations.js');
var defaultSxProp = require('../utils/defaultSxProp.js');
var merge = require('deepmerge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);
var merge__default = /*#__PURE__*/_interopDefault(merge);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_AVATAR_SIZE = 20;
const StyledAvatar = styled__default.default.img.attrs(props => ({
  height: props.size,
  width: props.size
})).withConfig({
  displayName: "Avatar__StyledAvatar",
  componentId: "sc-2lv0r8-0"
})(["display:inline-block;overflow:hidden;line-height:", ";vertical-align:middle;border-radius:", ";box-shadow:0 0 0 1px ", ";height:var(--avatar-size);width:var(--avatar-size);", ""], constants.get('lineHeights.condensedUltra'), props => props.square ? 'clamp(4px, var(--avatar-size) - 24px, 6px)' : '50%', constants.get('colors.avatar.border'), sx.default);
const Avatar = /*#__PURE__*/React__default.default.forwardRef(function Avatar({
  alt = '',
  size = DEFAULT_AVATAR_SIZE,
  square = false,
  sx: sxProp = defaultSxProp.defaultSxProp,
  ...rest
}, ref) {
  const avatarSx = useResponsiveValue.isResponsiveValue(size) ? merge__default.default(getBreakpointDeclarations.getBreakpointDeclarations(size, '--avatar-size', value => `${value || DEFAULT_AVATAR_SIZE}px`), sxProp) : merge__default.default({
    '--avatar-size': `${size}px`
  }, sxProp);
  return /*#__PURE__*/React__default.default.createElement(StyledAvatar, _extends({
    "data-component": "Avatar",
    ref: ref,
    alt: alt,
    size: size,
    square: square,
    sx: avatarSx
  }, rest));
});
if (process.env.NODE_ENV !== "production") {
  Avatar.displayName = 'Avatar';
}

exports.DEFAULT_AVATAR_SIZE = DEFAULT_AVATAR_SIZE;
exports.default = Avatar;
