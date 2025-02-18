'use strict';

var React = require('react');
var InputLabel = require('../internal/components/InputLabel.js');
var _FormControlContext = require('./_FormControlContext.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const FormControlLabel = ({
  as,
  children,
  htmlFor,
  id,
  visuallyHidden,
  requiredIndicator = true,
  requiredText,
  sx,
  ...props
}) => {
  const {
    disabled,
    id: formControlId,
    required
  } = _FormControlContext.useFormControlContext();

  /**
   * Ensure we can pass through props correctly, since legend/span accept no defined 'htmlFor'
   */
  const labelProps = as === 'legend' || as === 'span' ? {
    as,
    id,
    visuallyHidden,
    required,
    requiredText,
    requiredIndicator,
    disabled,
    sx,
    ...props
  } : {
    as,
    id,
    visuallyHidden,
    htmlFor: htmlFor || formControlId,
    required,
    requiredText,
    requiredIndicator,
    disabled,
    sx,
    ...props
  };
  return /*#__PURE__*/React__default.default.createElement(InputLabel, labelProps, children);
};
FormControlLabel.displayName = "FormControlLabel";

module.exports = FormControlLabel;
