'use strict';

var React = require('react');
var reactIs = require('react-is');
var clsx = require('clsx');
var TextInputInnerVisualSlot = require('../internal/components/TextInputInnerVisualSlot.js');
var useProvidedRefOrCreate = require('../hooks/useProvidedRefOrCreate.js');
require('@primer/behaviors/utils');
require('@primer/behaviors');
var TextInputWrapper = require('../internal/components/TextInputWrapper.js');
var TextInputInnerAction = require('../internal/components/TextInputInnerAction.js');
var UnstyledTextInput = require('../internal/components/UnstyledTextInput.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var clsx__default = /*#__PURE__*/_interopDefault(clsx);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// using forwardRef is important so that other components can autofocus the input
const TextInput = /*#__PURE__*/React__default.default.forwardRef(({
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
  const [isInputFocused, setIsInputFocused] = React.useState(false);
  const inputRef = useProvidedRefOrCreate.useProvidedRefOrCreate(ref);
  // this class is necessary to style FilterSearch, plz no touchy!
  const wrapperClasses = clsx__default.default(className, 'TextInput-wrapper');
  const showLeadingLoadingIndicator = loading && (loaderPosition === 'leading' || Boolean(LeadingVisual && loaderPosition !== 'trailing'));
  const showTrailingLoadingIndicator = loading && (loaderPosition === 'trailing' || Boolean(loaderPosition === 'auto' && !LeadingVisual));
  const focusInput = () => {
    var _inputRef$current;
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  };
  const handleInputFocus = React.useCallback(e => {
    setIsInputFocused(true);
    onFocus && onFocus(e);
  }, [onFocus]);
  const handleInputBlur = React.useCallback(e => {
    setIsInputFocused(false);
    onBlur && onBlur(e);
  }, [onBlur]);
  return /*#__PURE__*/React__default.default.createElement(TextInputWrapper.default, {
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
  }, IconComponent && /*#__PURE__*/React__default.default.createElement(IconComponent, {
    className: "TextInput-icon"
  }), /*#__PURE__*/React__default.default.createElement(TextInputInnerVisualSlot, {
    visualPosition: "leading",
    showLoadingIndicator: showLeadingLoadingIndicator,
    hasLoadingIndicator: typeof loading === 'boolean'
  }, typeof LeadingVisual !== 'string' && reactIs.isValidElementType(LeadingVisual) ? /*#__PURE__*/React__default.default.createElement(LeadingVisual, null) : LeadingVisual), /*#__PURE__*/React__default.default.createElement(UnstyledTextInput, _extends({
    ref: inputRef,
    disabled: disabled,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    type: type,
    "aria-required": required,
    "aria-invalid": validationStatus === 'error' ? 'true' : undefined
  }, inputProps, {
    "data-component": "input"
  })), /*#__PURE__*/React__default.default.createElement(TextInputInnerVisualSlot, {
    visualPosition: "trailing",
    showLoadingIndicator: showTrailingLoadingIndicator,
    hasLoadingIndicator: typeof loading === 'boolean'
  }, typeof TrailingVisual !== 'string' && reactIs.isValidElementType(TrailingVisual) ? /*#__PURE__*/React__default.default.createElement(TrailingVisual, null) : TrailingVisual), trailingAction);
});
TextInput.displayName = 'TextInput';
var TextInput$1 = Object.assign(TextInput, {
  Action: TextInputInnerAction
});

module.exports = TextInput$1;
