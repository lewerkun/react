'use strict';

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variants = styledSystem.variant({
  variants: {
    default: {
      color: 'fg.default',
      backgroundColor: 'accent.subtle',
      borderColor: 'accent.muted',
      svg: {
        color: 'accent.fg'
      }
    },
    success: {
      color: 'fg.default',
      backgroundColor: 'success.subtle',
      borderColor: 'success.muted',
      svg: {
        color: 'success.fg'
      }
    },
    danger: {
      color: 'fg.default',
      backgroundColor: 'danger.subtle',
      borderColor: 'danger.muted',
      svg: {
        color: 'danger.fg'
      }
    },
    warning: {
      color: 'fg.default',
      backgroundColor: 'attention.subtle',
      borderColor: 'attention.muted',
      svg: {
        color: 'attention.fg'
      }
    }
  }
});
const StyledFlash = styled__default.default.div.withConfig({
  displayName: "Flash__StyledFlash",
  componentId: "sc-hzrzfc-0"
})(["position:relative;color:", ";padding:", ";border-style:solid;border-width:", ";border-radius:", ";margin-top:", ";p:last-child{margin-bottom:0;}svg{margin-right:", ";}", ";", ";"], constants.get('colors.fg.default'), constants.get('space.3'), props => props.full ? '1px 0px' : '1px', props => props.full ? '0' : constants.get('radii.2'), props => props.full ? '-1px' : '0', constants.get('space.2'), variants, sx.default);
const Flash = /*#__PURE__*/React__default.default.forwardRef(function Flash({
  as,
  variant = 'default',
  ...rest
}, ref) {
  return /*#__PURE__*/React__default.default.createElement(StyledFlash, _extends({
    ref: ref,
    as: as,
    variant: variant
  }, rest));
});
if (process.env.NODE_ENV !== "production") {
  Flash.displayName = 'Flash';
}

module.exports = Flash;
