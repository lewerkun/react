'use strict';

var React = require('react');
var styled = require('styled-components');
var Box = require('../../../Box/Box.js');
var ValidationAnimationContainer = require('../ValidationAnimationContainer.js');
var constants = require('../../../constants.js');
var useId = require('../../../hooks/useId.js');
var CheckboxOrRadioGroupCaption = require('./CheckboxOrRadioGroupCaption.js');
var CheckboxOrRadioGroupLabel = require('./CheckboxOrRadioGroupLabel.js');
var CheckboxOrRadioGroupValidation = require('./CheckboxOrRadioGroupValidation.js');
var CheckboxOrRadioGroupContext = require('./CheckboxOrRadioGroupContext.js');
var _VisuallyHidden = require('../../../_VisuallyHidden.js');
var useSlots = require('../../../hooks/useSlots.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Body = styled__default.default.div.withConfig({
  displayName: "CheckboxOrRadioGroup__Body",
  componentId: "sc-1t4rdk-0"
})(["display:flex;flex-direction:column;list-style:none;margin:0;padding:0;> * + *{margin-top:", ";}"], constants.get('space.2'));
const CheckboxOrRadioGroup = ({
  'aria-labelledby': ariaLabelledby,
  children,
  disabled = false,
  id: idProp,
  required = false,
  sx
}) => {
  const [slots, rest] = useSlots.useSlots(children, {
    caption: CheckboxOrRadioGroupCaption,
    label: CheckboxOrRadioGroupLabel,
    validation: CheckboxOrRadioGroupValidation
  });
  const labelChild = React__default.default.Children.toArray(children).find(child => /*#__PURE__*/React__default.default.isValidElement(child) && child.type === CheckboxOrRadioGroupLabel);
  const validationChild = React__default.default.Children.toArray(children).find(child => /*#__PURE__*/React__default.default.isValidElement(child) && child.type === CheckboxOrRadioGroupValidation ? child : null);
  const captionChild = React__default.default.Children.toArray(children).find(child => /*#__PURE__*/React__default.default.isValidElement(child) && child.type === CheckboxOrRadioGroupCaption ? child : null);
  const id = useId.useId(idProp);
  const validationMessageId = validationChild ? `${id}-validationMessage` : undefined;
  const captionId = captionChild ? `${id}-caption` : undefined;
  if (!labelChild && !ariaLabelledby) {
    // eslint-disable-next-line no-console
    console.warn('A choice group must be labelled using a `CheckboxOrRadioGroup.Label` child, or by passing `aria-labelledby` to the CheckboxOrRadioGroup component.');
  }
  const isLegendVisible = /*#__PURE__*/React__default.default.isValidElement(labelChild) && !labelChild.props.visuallyHidden;
  return /*#__PURE__*/React__default.default.createElement(CheckboxOrRadioGroupContext.Provider, {
    value: {
      disabled,
      required,
      captionId,
      validationMessageId
    }
  }, /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement(Box, _extends({
    border: "none",
    margin: 0,
    mb: validationChild ? 2 : undefined,
    padding: 0
  }, labelChild && {
    as: 'fieldset',
    disabled
  }, {
    sx: sx
  }), labelChild ?
  /*#__PURE__*/
  /*
    Placing the caption text and validation text in the <legend> provides a better user
    experience for more screenreaders.
     Reference: https://blog.tenon.io/accessible-validation-of-checkbox-and-radiobutton-groups/
  */
  React__default.default.createElement(Box, {
    as: "legend",
    mb: isLegendVisible ? 2 : undefined,
    padding: 0
  }, slots.label, slots.caption, /*#__PURE__*/React__default.default.isValidElement(slots.validation) && slots.validation.props.children && /*#__PURE__*/React__default.default.createElement(_VisuallyHidden, null, slots.validation.props.children)) : (
  /*
    If CheckboxOrRadioGroup.Label wasn't passed as a child, we don't render a <legend>
    but we still want to render a caption
  */
  slots.caption), /*#__PURE__*/React__default.default.createElement(Body, !labelChild && {
    ['aria-labelledby']: ariaLabelledby,
    ['aria-describedby']: [validationMessageId, captionId].filter(Boolean).join(' '),
    as: 'div',
    role: 'group'
  }, React__default.default.Children.toArray(rest).filter(child => /*#__PURE__*/React__default.default.isValidElement(child)))), validationChild && /*#__PURE__*/React__default.default.createElement(ValidationAnimationContainer
  // If we have CheckboxOrRadioGroup.Label as a child, we render a screenreader-accessible validation message in the <legend>
  , {
    "aria-hidden": Boolean(labelChild),
    show: true
  }, slots.validation)));
};
CheckboxOrRadioGroup.displayName = "CheckboxOrRadioGroup";
var CheckboxOrRadioGroup$1 = Object.assign(CheckboxOrRadioGroup, {
  Caption: CheckboxOrRadioGroupCaption,
  Label: CheckboxOrRadioGroupLabel,
  Validation: CheckboxOrRadioGroupValidation
});

module.exports = CheckboxOrRadioGroup$1;
