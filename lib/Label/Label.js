'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variants = {
  default: {
    borderColor: 'border.default'
  },
  primary: {
    borderColor: 'fg.default'
  },
  secondary: {
    borderColor: 'border.muted',
    color: 'fg.muted'
  },
  accent: {
    borderColor: 'accent.emphasis',
    color: 'accent.fg'
  },
  success: {
    borderColor: 'success.emphasis',
    color: 'success.fg'
  },
  attention: {
    borderColor: 'attention.emphasis',
    color: 'attention.fg'
  },
  severe: {
    borderColor: 'severe.emphasis',
    color: 'severe.fg'
  },
  danger: {
    borderColor: 'danger.emphasis',
    color: 'danger.fg'
  },
  done: {
    borderColor: 'done.emphasis',
    color: 'done.fg'
  },
  sponsors: {
    borderColor: 'sponsors.emphasis',
    color: 'sponsors.fg'
  }
};
const sizes = {
  small: {
    height: '20px',
    padding: '0 7px' // hard-coded to align with Primer ViewComponents and Primer CSS
  },
  large: {
    height: '24px',
    padding: '0 10px' // hard-coded to align with Primer ViewComponents and Primer CSS
  }
};
const StyledLabel = styled__default.default.span.withConfig({
  displayName: "Label__StyledLabel",
  componentId: "sc-1dgcne-0"
})(["align-items:center;background-color:transparent;border-width:1px;border-radius:999px;border-style:solid;display:inline-flex;font-weight:", ";font-size:", ";line-height:1;white-space:nowrap;", ";", ";", ";"], constants.get('fontWeights.bold'), constants.get('fontSizes.0'), styledSystem.variant({
  variants
}), styledSystem.variant({
  prop: 'size',
  variants: sizes
}), sx.default);
const Label = /*#__PURE__*/React__default.default.forwardRef(function Label({
  as,
  size = 'small',
  variant = 'default',
  ...rest
}, ref) {
  return /*#__PURE__*/React__default.default.createElement(StyledLabel, _extends({
    as: as,
    size: size,
    variant: variant,
    ref: ref
  }, rest));
});

exports.default = Label;
exports.variants = variants;
