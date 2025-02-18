import styled from 'styled-components';
import React, { useContext, useEffect } from 'react';
import { useProvidedRefOrCreate } from '../hooks/useProvidedRefOrCreate.js';
import '@primer/behaviors/utils';
import '@primer/behaviors';
import useIsomorphicLayoutEffect from '../utils/useIsomorphicLayoutEffect.js';
import sx from '../sx.js';
import { CheckboxGroupContext } from '../CheckboxGroup/CheckboxGroupContext.js';
import getGlobalFocusStyles from '../internal/utils/getGlobalFocusStyles.js';
import { get } from '../constants.js';
import { sharedCheckboxAndRadioStyles } from '../internal/utils/sharedCheckboxAndRadioStyles.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const StyledCheckbox = styled.input.withConfig({
  displayName: "Checkbox__StyledCheckbox",
  componentId: "sc-1ga3qj3-0"
})(["", ";border-radius:", ";transition:background-color,border-color 80ms cubic-bezier(0.33,1,0.68,1);&::before{width:var(--base-size-16,16px);height:var(--base-size-16,16px);visibility:hidden;content:'';background-color:", ";transition:visibility 0s linear 230ms;clip-path:inset(var(--base-size-16,16px) 0 0 0);mask-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNzgwMyAwLjIxOTYyNUMxMS45MjEgMC4zNjA0MjcgMTIgMC41NTEzMDUgMTIgMC43NTAzMTNDMTIgMC45NDkzMjEgMTEuOTIxIDEuMTQwMTkgMTEuNzgwMyAxLjI4MUw0LjUxODYgOC41NDA0MkM0LjM3Nzc1IDguNjgxIDQuMTg2ODIgOC43NiAzLjk4Nzc0IDguNzZDMy43ODg2NyA4Ljc2IDMuNTk3NzMgOC42ODEgMy40NTY4OSA4LjU0MDQyTDAuMjAxNjIyIDUuMjg2MkMwLjA2ODkyNzcgNS4xNDM4MyAtMC4wMDMzMDkwNSA0Ljk1NTU1IDAuMDAwMTE2NDkzIDQuNzYwOThDMC4wMDM1NTIwNSA0LjU2NjQzIDAuMDgyMzg5NCA0LjM4MDgxIDAuMjIwMDMyIDQuMjQzMjFDMC4zNTc2NjUgNC4xMDU2MiAwLjU0MzM1NSA0LjAyNjgxIDAuNzM3OTcgNC4wMjMzOEMwLjkzMjU4NCA0LjAxOTk0IDEuMTIwOTMgNC4wOTIxNyAxLjI2MzM0IDQuMjI0ODJMMy45ODc3NCA2Ljk0ODM1TDEwLjcxODYgMC4yMTk2MjVDMTAuODU5NSAwLjA3ODk5MjMgMTEuMDUwNCAwIDExLjI0OTUgMEMxMS40NDg1IDAgMTEuNjM5NSAwLjA3ODk5MjMgMTEuNzgwMyAwLjIxOTYyNVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=');mask-size:75%;mask-repeat:no-repeat;mask-position:center;animation:checkmarkOut 80ms cubic-bezier(0.65,0,0.35,1) forwards;}&:checked,&:indeterminate{background:", ";border-color:", ";&::before{animation:checkmarkIn 80ms cubic-bezier(0.65,0,0.35,1) forwards 80ms;}}&:disabled{cursor:not-allowed;}&:checked{transition:background-color,border-color 80ms cubic-bezier(0.32,0,0.67,0) 0ms;&::before{visibility:visible;transition:visibility 0s linear 0s;}&:disabled{background-color:", ";border-color:", ";opacity:1;&::before{background-color:", ";}}@media (forced-colors:active){background-color:canvastext;border-color:canvastext;}}&:indeterminate{background:", ";&::before{mask-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMiIgdmlld0JveD0iMCAwIDEwIDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAxQzAgMC40NDc3MTUgMC40NDc3MTUgMCAxIDBIOUM5LjU1MjI5IDAgMTAgMC40NDc3MTUgMTAgMUMxMCAxLjU1MjI4IDkuNTUyMjkgMiA5IDJIMUMwLjQ0NzcxNSAyIDAgMS41NTIyOCAwIDFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');visibility:visible;}}", ";", ";@keyframes checkmarkIn{from{clip-path:inset(var(--base-size-16,16px) 0 0 0);}to{clip-path:inset(0 0 0 0);}}@keyframes checkmarkOut{from{clip-path:inset(0 0 0 0);}to{clip-path:inset(var(--base-size-16,16px) 0 0 0);}}"], sharedCheckboxAndRadioStyles, get('radii.1'), get('colors.fg.onEmphasis'), get('colors.accent.fg'), get('colors.accent.fg'), get('colors.fg.muted'), get('colors.fg.muted'), get('colors.fg.onEmphasis'), get('colors.accent.fg'), getGlobalFocusStyles(), sx);

/**
 * An accessible, native checkbox component
 */
const Checkbox = /*#__PURE__*/React.forwardRef(({
  checked,
  defaultChecked,
  indeterminate,
  disabled,
  onChange,
  sx: sxProp,
  required,
  validationStatus,
  value,
  ...rest
}, ref) => {
  const checkboxRef = useProvidedRefOrCreate(ref);
  const checkboxGroupContext = useContext(CheckboxGroupContext);
  const handleOnChange = e => {
    checkboxGroupContext.onChange && checkboxGroupContext.onChange(e);
    onChange && onChange(e);
  };
  useIsomorphicLayoutEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate || false;
    }
  }, [indeterminate, checked, checkboxRef]);
  useEffect(() => {
    const {
      current: checkbox
    } = checkboxRef;
    if (!checkbox) {
      return;
    }
    if (indeterminate) {
      checkbox.setAttribute('aria-checked', 'mixed');
    } else {
      checkbox.setAttribute('aria-checked', checkbox.checked ? 'true' : 'false');
    }
  });
  return /*#__PURE__*/React.createElement(StyledCheckbox, _extends({
    type: "checkbox",
    disabled: disabled,
    ref: checkboxRef,
    checked: indeterminate ? false : checked,
    defaultChecked: defaultChecked,
    sx: sxProp,
    required: required,
    "aria-required": required ? 'true' : 'false',
    "aria-invalid": validationStatus === 'error' ? 'true' : 'false',
    onChange: handleOnChange,
    value: value,
    name: value
  }, rest));
});
Checkbox.displayName = 'Checkbox';

export { Checkbox as default };
