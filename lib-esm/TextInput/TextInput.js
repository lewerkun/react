import React, { useState, useCallback } from 'react';
import { isValidElementType } from 'react-is';
import clsx from 'clsx';
import TextInputInnerVisualSlot from '../internal/components/TextInputInnerVisualSlot.js';
import { useProvidedRefOrCreate } from '../hooks/useProvidedRefOrCreate.js';
import '@primer/behaviors/utils';
import '@primer/behaviors';
import TextInputWrapper from '../internal/components/TextInputWrapper.js';
import TextInputAction from '../internal/components/TextInputInnerAction.js';
import UnstyledTextInput from '../internal/components/UnstyledTextInput.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// using forwardRef is important so that other components can autofocus the input
const TextInput = /*#__PURE__*/React.forwardRef(({
  icon: IconComponent,
  leadingVisual: LeadingVisual,
  trailingVisual: TrailingVisual,
  trailingAction,
  block,
  className,
  contrast,
  disabled,
  loading,
  loaderPosition = 'auto',
  monospace,
  validationStatus,
  sx: sxProp,
  size: sizeProp,
  onFocus,
  onBlur,
  // start deprecated props
  width: widthProp,
  minWidth: minWidthProp,
  maxWidth: maxWidthProp,
  variant: variantProp,
  // end deprecated props
  type = 'text',
  required,
  ...inputProps
}, ref) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useProvidedRefOrCreate(ref);
  // this class is necessary to style FilterSearch, plz no touchy!
  const wrapperClasses = clsx(className, 'TextInput-wrapper');
  const showLeadingLoadingIndicator = loading && (loaderPosition === 'leading' || Boolean(LeadingVisual && loaderPosition !== 'trailing'));
  const showTrailingLoadingIndicator = loading && (loaderPosition === 'trailing' || Boolean(loaderPosition === 'auto' && !LeadingVisual));
  const focusInput = () => {
    var _inputRef$current;
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  };
  const handleInputFocus = useCallback(e => {
    setIsInputFocused(true);
    onFocus && onFocus(e);
  }, [onFocus]);
  const handleInputBlur = useCallback(e => {
    setIsInputFocused(false);
    onBlur && onBlur(e);
  }, [onBlur]);
  return /*#__PURE__*/React.createElement(TextInputWrapper, {
    block: block,
    className: wrapperClasses,
    validationStatus: validationStatus,
    contrast: contrast,
    disabled: disabled,
    monospace: monospace,
    sx: sxProp,
    size: sizeProp,
    width: widthProp,
    minWidth: minWidthProp,
    maxWidth: maxWidthProp,
    variant: variantProp,
    hasLeadingVisual: Boolean(LeadingVisual || showLeadingLoadingIndicator),
    hasTrailingVisual: Boolean(TrailingVisual || showTrailingLoadingIndicator),
    hasTrailingAction: Boolean(trailingAction),
    isInputFocused: isInputFocused,
    onClick: focusInput,
    "aria-busy": Boolean(loading)
  }, IconComponent && /*#__PURE__*/React.createElement(IconComponent, {
    className: "TextInput-icon"
  }), /*#__PURE__*/React.createElement(TextInputInnerVisualSlot, {
    visualPosition: "leading",
    showLoadingIndicator: showLeadingLoadingIndicator,
    hasLoadingIndicator: typeof loading === 'boolean'
  }, typeof LeadingVisual !== 'string' && isValidElementType(LeadingVisual) ? /*#__PURE__*/React.createElement(LeadingVisual, null) : LeadingVisual), /*#__PURE__*/React.createElement(UnstyledTextInput, _extends({
    ref: inputRef,
    disabled: disabled,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    type: type,
    "aria-required": required,
    "aria-invalid": validationStatus === 'error' ? 'true' : undefined
  }, inputProps, {
    "data-component": "input"
  })), /*#__PURE__*/React.createElement(TextInputInnerVisualSlot, {
    visualPosition: "trailing",
    showLoadingIndicator: showTrailingLoadingIndicator,
    hasLoadingIndicator: typeof loading === 'boolean'
  }, typeof TrailingVisual !== 'string' && isValidElementType(TrailingVisual) ? /*#__PURE__*/React.createElement(TrailingVisual, null) : TrailingVisual), trailingAction);
});
TextInput.displayName = 'TextInput';
var TextInput$1 = Object.assign(TextInput, {
  Action: TextInputAction
});

export { TextInput$1 as default };
