import React from 'react';
import styled from 'styled-components';
import TextInputWrapper from './internal/components/TextInputWrapper.js';
import '@styled-system/css';
import merge from 'deepmerge';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const arrowRightOffset = '4px';
const StyledSelect = styled.select.withConfig({
  displayName: "Select__StyledSelect",
  componentId: "sc-li6bhs-0"
})(["appearance:none;border-radius:inherit;border:0;color:currentColor;font-size:inherit;outline:none;width:100%;background-color:inherit;margin-top:1px;margin-left:1px;margin-bottom:1px;&:disabled{background-color:transparent;}@media screen and (forced-colors:active){&:disabled{background-color:-moz-combobox;}}"]);
const ArrowIndicatorSVG = ({
  className
}) => /*#__PURE__*/React.createElement("svg", {
  "aria-hidden": "true",
  width: "16",
  height: "16",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  className: className
}, /*#__PURE__*/React.createElement("path", {
  d: "m4.074 9.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.043 9H4.251a.25.25 0 0 0-.177.427ZM4.074 7.47 7.47 4.073a.25.25 0 0 1 .354 0L11.22 7.47a.25.25 0 0 1-.177.426H4.251a.25.25 0 0 1-.177-.426Z"
}));
ArrowIndicatorSVG.displayName = "ArrowIndicatorSVG";
const ArrowIndicator = styled(ArrowIndicatorSVG).withConfig({
  displayName: "Select__ArrowIndicator",
  componentId: "sc-li6bhs-1"
})(["pointer-events:none;position:absolute;right:", ";top:50%;transform:translateY(-50%);"], arrowRightOffset);
const Select = /*#__PURE__*/React.forwardRef(({
  block,
  children,
  contrast,
  disabled,
  placeholder,
  size,
  required,
  validationStatus,
  sx = {},
  ...rest
}, ref) => /*#__PURE__*/React.createElement(TextInputWrapper, {
  block: block,
  contrast: contrast,
  disabled: disabled,
  size: size,
  validationStatus: validationStatus,
  sx: merge({
    overflow: 'hidden',
    position: 'relative',
    '@media screen and (forced-colors: active)': {
      svg: {
        fill: disabled ? 'GrayText' : 'FieldText'
      }
    }
  }, sx)
}, /*#__PURE__*/React.createElement(StyledSelect, _extends({
  ref: ref,
  required: required,
  disabled: disabled,
  "aria-invalid": validationStatus === 'error' ? 'true' : 'false',
  "data-hasplaceholder": Boolean(placeholder),
  defaultValue: placeholder !== null && placeholder !== void 0 ? placeholder : undefined
}, rest), placeholder && /*#__PURE__*/React.createElement("option", {
  value: "",
  disabled: required,
  hidden: required
}, placeholder), children), /*#__PURE__*/React.createElement(ArrowIndicator, null)));
const Option = props => /*#__PURE__*/React.createElement("option", props);
Option.displayName = "Option";
const OptGroup = props => /*#__PURE__*/React.createElement("optgroup", props);
OptGroup.displayName = "OptGroup";
var Select$1 = Object.assign(Select, {
  Option,
  OptGroup
});

export { Select$1 as default };
