import styled from 'styled-components';
import React, { useContext } from 'react';
import sx from '../sx.js';
import { RadioGroupContext } from '../RadioGroup/RadioGroup.js';
import getGlobalFocusStyles from '../internal/utils/getGlobalFocusStyles.js';
import { get } from '../constants.js';
import { sharedCheckboxAndRadioStyles } from '../internal/utils/sharedCheckboxAndRadioStyles.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const StyledRadio = styled.input.withConfig({
  displayName: "Radio__StyledRadio",
  componentId: "sc-1tx0ht9-0"
})(["", ";border-radius:var(--borderRadius-full,100vh);transition:background-color,border-color 80ms cubic-bezier(0.33,1,0.68,1);&:checked{border-color:", ";border-width:var(--base-size-4,4px);&:disabled{cursor:not-allowed;border-color:", ";}}", ";@media (forced-colors:active){background-color:canvastext;border-color:canvastext;}", ""], sharedCheckboxAndRadioStyles, get('colors.accent.fg'), get('colors.fg.muted'), getGlobalFocusStyles(), sx);

/**
 * An accessible, native radio component for selecting one option from a list.
 */
const Radio = /*#__PURE__*/React.forwardRef(({
  checked,
  disabled,
  name: nameProp,
  onChange,
  sx: sxProp,
  required,
  validationStatus,
  value,
  ...rest
}, ref) => {
  const radioGroupContext = useContext(RadioGroupContext);
  const handleOnChange = e => {
    (radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.onChange) && radioGroupContext.onChange(e);
    onChange && onChange(e);
  };
  const name = nameProp || (radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.name);
  if (!name) {
    // eslint-disable-next-line no-console
    console.warn('A radio input must have a `name` attribute. Pass `name` as a prop directly to each Radio, or nest them in a `RadioGroup` component with a `name` prop');
  }
  return /*#__PURE__*/React.createElement(StyledRadio, _extends({
    type: "radio",
    value: value,
    name: name,
    ref: ref,
    disabled: disabled,
    checked: checked,
    "aria-checked": checked ? 'true' : 'false',
    required: required,
    "aria-required": required ? 'true' : 'false',
    "aria-invalid": validationStatus === 'error' ? 'true' : 'false',
    sx: sxProp,
    onChange: handleOnChange
  }, rest));
});
Radio.displayName = 'Radio';

export { Radio as default };
