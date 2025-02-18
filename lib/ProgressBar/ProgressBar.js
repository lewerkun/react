'use strict';

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var constants = require('../constants.js');
var sx = require('../sx.js');
var warning = require('../utils/warning.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shimmer = styled.keyframes(["from{mask-position:200%;}to{mask-position:0%;}"]);
const Item = styled__default.default.span.withConfig({
  displayName: "ProgressBar__Item",
  componentId: "sc-1jz8j7n-0"
})(["width:", ";background-color:", ";@media (prefers-reduced-motion:no-preference){&[data-animated='true']{mask-image:linear-gradient(75deg,#000 30%,rgba(0,0,0,0.65) 80%);mask-size:200%;animation:", ";animation-duration:1s;animation-iteration-count:infinite;}}", ";"], props => props.progress ? `${props.progress}%` : 0, constants.get('colors.success.emphasis'), shimmer, sx.default);
Item.displayName = 'ProgressBar.Item';
const sizeMap = {
  small: '5px',
  large: '10px',
  default: '8px'
};
const ProgressContainer = styled__default.default.span.withConfig({
  displayName: "ProgressBar__ProgressContainer",
  componentId: "sc-1jz8j7n-1"
})(["display:", ";overflow:hidden;background-color:", ";border-radius:", ";height:", ";", " ", ";"], props => props.inline ? 'inline-flex' : 'flex', constants.get('colors.border.default'), constants.get('radii.1'), props => sizeMap[props.barSize || 'default'], styledSystem.width, sx.default);
const ProgressBar = /*#__PURE__*/React.forwardRef(({
  animated,
  progress,
  bg = 'success.emphasis',
  barSize = 'default',
  children,
  ...rest
}, forwardRef) => {
  if (children && progress) {
    throw new Error('You should pass `progress` or children, not both.');
  }
  process.env.NODE_ENV !== "production" ? warning.warning(children && typeof rest['aria-valuenow'] === 'undefined' && typeof rest['aria-valuetext'] === 'undefined', 'Expected `aria-valuenow` or `aria-valuetext` to be provided to <ProgressBar>. Provide one of these values so screen reader users can determine the current progress. This warning will become an error in the next major release.') : void 0;
  const progressAsNumber = typeof progress === 'string' ? parseInt(progress, 10) : progress;
  const ariaAttributes = {
    'aria-valuenow': progressAsNumber ? Math.round(progressAsNumber) : undefined,
    'aria-valuemin': 0,
    'aria-valuemax': 100,
    'aria-busy': progressAsNumber ? progressAsNumber !== 100 : false
  };
  return /*#__PURE__*/React__default.default.createElement(ProgressContainer, _extends({
    ref: forwardRef,
    role: "progressbar",
    barSize: barSize
  }, ariaAttributes, rest), children !== null && children !== void 0 ? children : /*#__PURE__*/React__default.default.createElement(Item, {
    "data-animated": animated,
    progress: progress,
    sx: {
      backgroundColor: bg
    }
  }));
});
ProgressBar.displayName = 'ProgressBar';

exports.Item = Item;
exports.ProgressBar = ProgressBar;
