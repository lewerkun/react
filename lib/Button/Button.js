'use strict';

var React = require('react');
var ButtonBase = require('./ButtonBase.js');
var defaultSxProp = require('../utils/defaultSxProp.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ButtonComponent = /*#__PURE__*/React.forwardRef(({
  children,
  sx: sxProp = defaultSxProp.defaultSxProp,
  ...props
}, forwardedRef) => {
  const {
    block,
    size,
    leadingVisual,
    trailingVisual,
    trailingAction
  } = props;
  let sxStyles = sxProp;
  const style = {};
  if (sxProp !== null && Object.keys(sxProp).length > 0) {
    sxStyles = generateCustomSxProp({
      block,
      size,
      leadingVisual,
      trailingVisual,
      trailingAction
    }, sxProp);

    // @ts-ignore sxProp can have color attribute
    const {
      color
    } = sxProp;
    if (color) style['--button-color'] = color;
  }
  return /*#__PURE__*/React__default.default.createElement(ButtonBase.ButtonBase, _extends({
    ref: forwardedRef,
    as: "button",
    sx: sxStyles,
    style: style,
    type: "button"
  }, props), children);
});

// This function is used to generate a custom cssSelector for the sxProp

// The usual sx prop can like this:
// sx={{
//   [`@media (max-width: 768px)`]: {
//     '& > ul': {
//       backgroundColor: 'deeppink',
//     },
//     '&:hover': {
//       backgroundColor: 'yellow',
//     },
//   },
//  '&:hover': {
//     backgroundColor: 'yellow',
//   },
//  '&': {
//  width : 320px
// }
// }}
//*
/* What we want for Button styles is this:
sx={{
//   [`@media (max-width: 768px)`]: {
//     '&[data-attribute="something"] > ul': {
//       backgroundColor: 'deeppink',
//     },
//     '&[data-attribute="something"]:hover': {
//       backgroundColor: 'yellow',
//     },
//   },
//  '&[data-attribute="something"]:hover': {
//     backgroundColor: 'yellow',
//   },
//  '&[data-attribute="something"]': {
//     width : 320px
//  }
// }}

// We need to make sure we append the customCSSSelector to the original class selector. i.e & - > &[data-attribute="Icon"][data-size="small"]
*/
function generateCustomSxProp(props, providedSx) {
  // Possible data attributes: data-size, data-block, data-no-visuals
  const size = props.size && props.size !== 'medium' ? `[data-size="${props.size}"]` : ''; // medium is a default size therefore it doesn't have a data attribute that used for styling
  const block = props.block ? `[data-block="block"]` : '';
  const noVisuals = props.leadingVisual || props.trailingVisual || props.trailingAction ? '' : '[data-no-visuals]';

  // this is a custom selector. We need to make sure we add the data attributes to the base css class (& -> &[data-attributename="value"]])
  const cssSelector = `&${size}${block}${noVisuals}`; // &[data-size="small"][data-block="block"][data-no-visuals]

  const customSxProp = {};
  if (!providedSx) return customSxProp;else {
    customSxProp[cssSelector] = providedSx;
    return customSxProp;
  }
}
ButtonComponent.displayName = 'Button';

exports.ButtonComponent = ButtonComponent;
exports.generateCustomSxProp = generateCustomSxProp;
