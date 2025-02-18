'use strict';

var behaviors = require('@primer/behaviors');
var utils = require('@primer/behaviors/utils');
var props = require('@styled-system/props');
var React = require('react');
var reactIs = require('react-is');
var Box = require('../Box/Box.js');
var useRefObjectAsForwardedRef = require('../hooks/useRefObjectAsForwardedRef.js');
var useFocusZone = require('../hooks/useFocusZone.js');
var Text = require('../Text/Text.js');
var Token = require('../Token/Token.js');
var TextInputWrapper = require('../internal/components/TextInputWrapper.js');
var UnstyledTextInput = require('../internal/components/UnstyledTextInput.js');
var TextInputInnerVisualSlot = require('../internal/components/TextInputInnerVisualSlot.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

// eslint-disable-next-line @typescript-eslint/no-explicit-any

// NOTE: if these props or their JSDoc comments are updated, be sure to also update
// the prop table in docs/content/TextInputTokens.mdx

const overflowCountFontSizeMap = {
  small: 0,
  medium: 1,
  large: 1,
  xlarge: 2
};

// using forwardRef is important so that other components (ex. Autocomplete) can use the ref
function TextInputWithTokensInnerComponent({
  icon: IconComponent,
  leadingVisual: LeadingVisual,
  trailingVisual: TrailingVisual,
  loading,
  loaderPosition = 'auto',
  contrast,
  className,
  block,
  disabled,
  sx: sxProp,
  tokens,
  onTokenRemove,
  tokenComponent: TokenComponent = Token,
  preventTokenWrapping = false,
  size = 'xlarge',
  hideTokenRemoveButtons = false,
  maxHeight,
  width: widthProp,
  minWidth: minWidthProp,
  maxWidth: maxWidthProp,
  validationStatus,
  variant: variantProp,
  // deprecated. use `size` instead
  visibleTokenCount,
  ...rest
}, forwardedRef) {
  const {
    onBlur,
    onFocus,
    onKeyDown,
    ...inputPropsRest
  } = props.omit(rest);
  const ref = React.useRef(null);
  useRefObjectAsForwardedRef.useRefObjectAsForwardedRef(forwardedRef, ref);
  const [selectedTokenIndex, setSelectedTokenIndex] = React.useState();
  const [tokensAreTruncated, setTokensAreTruncated] = React.useState(Boolean(visibleTokenCount));
  const {
    containerRef
  } = useFocusZone.useFocusZone({
    focusOutBehavior: 'wrap',
    bindKeys: behaviors.FocusKeys.ArrowHorizontal | behaviors.FocusKeys.HomeAndEnd,
    focusableElementFilter: element => {
      return !element.getAttributeNames().includes('aria-hidden');
    },
    getNextFocusable: direction => {
      var _containerRef$current;
      if (!selectedTokenIndex && selectedTokenIndex !== 0) {
        return undefined;
      }
      let nextIndex = selectedTokenIndex + 1; // "+ 1" accounts for the first element: the text input

      if (direction === 'next') {
        nextIndex += 1;
      }
      if (direction === 'previous') {
        nextIndex -= 1;
      }
      if (nextIndex > tokens.length || nextIndex < 1) {
        return ref.current || undefined;
      }
      return (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.children[nextIndex];
    }
  }, [selectedTokenIndex]);
  const handleTokenRemove = tokenId => {
    onTokenRemove(tokenId);

    // HACK: wait a tick for the token node to be removed from the DOM
    setTimeout(() => {
      var _containerRef$current2, _containerRef$current3;
      const nextElementToFocus = (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.children[selectedTokenIndex || 0];

      // when removing the first token by keying "Backspace" or "Delete",
      // `nextFocusableElement` is the div that wraps the input
      const firstFocusable = nextElementToFocus && utils.isFocusable(nextElementToFocus) ? nextElementToFocus : Array.from(((_containerRef$current3 = containerRef.current) === null || _containerRef$current3 === void 0 ? void 0 : _containerRef$current3.children) || []).find(el => utils.isFocusable(el));
      if (firstFocusable) {
        firstFocusable.focus();
      } else {
        var _ref$current;
        // if there are no tokens left, focus the input
        (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus();
      }
    }, 0);
  };
  const handleTokenFocus = tokenIndex => () => {
    if (!disabled) setSelectedTokenIndex(tokenIndex);
  };
  const handleTokenBlur = () => {
    setSelectedTokenIndex(undefined);

    // HACK: wait a tick and check the focused element before hiding truncated tokens
    // this prevents the tokens from hiding when the user is moving focus between tokens,
    // but still hides the tokens when the user blurs the token by tabbing out or clicking somewhere else on the page
    setTimeout(() => {
      var _containerRef$current4;
      if (!((_containerRef$current4 = containerRef.current) !== null && _containerRef$current4 !== void 0 && _containerRef$current4.contains(document.activeElement)) && visibleTokenCount) {
        setTokensAreTruncated(true);
      }
    }, 0);
  };
  const handleTokenKeyUp = event => {
    if (event.key === 'Escape') {
      var _ref$current2;
      (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.focus();
    }
  };
  const handleInputFocus = event => {
    onFocus && onFocus(event);
    setSelectedTokenIndex(undefined);
    visibleTokenCount && setTokensAreTruncated(false);
  };
  const handleInputBlur = event => {
    onBlur && onBlur(event);

    // HACK: wait a tick and check the focused element before hiding truncated tokens
    // this prevents the tokens from hiding when the user is moving focus from the input to a token,
    // but still hides the tokens when the user blurs the input by tabbing out or clicking somewhere else on the page
    setTimeout(() => {
      var _containerRef$current5;
      if (!((_containerRef$current5 = containerRef.current) !== null && _containerRef$current5 !== void 0 && _containerRef$current5.contains(document.activeElement)) && visibleTokenCount) {
        setTokensAreTruncated(true);
      }
    }, 0);
  };
  const handleInputKeyDown = e => {
    var _ref$current3;
    if (onKeyDown) {
      onKeyDown(e);
    }
    if ((_ref$current3 = ref.current) !== null && _ref$current3 !== void 0 && _ref$current3.value) {
      return;
    }
    const lastToken = tokens[tokens.length - 1];
    if (e.key === 'Backspace' && lastToken) {
      handleTokenRemove(lastToken.id);
      if (ref.current) {
        // TODO: eliminate the first hack by making changes to the Autocomplete component
        //
        // HACKS:
        // 1. Directly setting `ref.current.value` instead of updating state because the autocomplete
        //    highlight behavior doesn't work correctly if we update the value with a setState action in onChange
        // 2. Adding an extra space so that when I backspace, it doesn't delete the last letter
        ref.current.value = `${lastToken.text} `;
      }

      // HACK: for some reason we need to wait a tick for `.select()` to work
      setTimeout(() => {
        var _ref$current4;
        (_ref$current4 = ref.current) === null || _ref$current4 === void 0 ? void 0 : _ref$current4.select();
      }, 0);
    }
  };
  const focusInput = () => {
    var _ref$current5;
    (_ref$current5 = ref.current) === null || _ref$current5 === void 0 ? void 0 : _ref$current5.focus();
  };
  const preventTokenClickPropagation = event => {
    event.stopPropagation();
  };
  const visibleTokens = tokensAreTruncated ? tokens.slice(0, visibleTokenCount) : tokens;
  const inputSizeMap = {
    small: 'small',
    medium: 'small',
    large: 'medium',
    xlarge: 'medium'
  };
  const showLeadingLoadingIndicator = loading && (loaderPosition === 'leading' || Boolean(LeadingVisual && loaderPosition !== 'trailing'));
  const showTrailingLoadingIndicator = loading && (loaderPosition === 'trailing' || loaderPosition === 'auto' && !LeadingVisual);
  return /*#__PURE__*/React__default.default.createElement(TextInputWrapper.default, {
    block: block,
    className: className,
    contrast: contrast,
    disabled: disabled,
    hasLeadingVisual: Boolean(LeadingVisual || showLeadingLoadingIndicator),
    hasTrailingVisual: Boolean(TrailingVisual || showTrailingLoadingIndicator),
    width: widthProp,
    minWidth: minWidthProp,
    maxWidth: maxWidthProp,
    size: inputSizeMap[size],
    validationStatus: validationStatus,
    variant: variantProp // deprecated. use `size` prop instead
    ,
    onClick: focusInput,
    sx: {
      paddingLeft: TextInputWrapper.textInputHorizPadding,
      py: `calc(${TextInputWrapper.textInputHorizPadding} / 2)`,
      ...(block ? {
        display: 'flex',
        width: '100%'
      } : {}),
      ...(maxHeight ? {
        maxHeight,
        overflow: 'auto'
      } : {}),
      ...(preventTokenWrapping ? {
        overflow: 'auto'
      } : {}),
      ...sxProp
    }
  }, IconComponent && !LeadingVisual && /*#__PURE__*/React__default.default.createElement(IconComponent, {
    className: "TextInput-icon"
  }), /*#__PURE__*/React__default.default.createElement(TextInputInnerVisualSlot, {
    hasLoadingIndicator: typeof loading === 'boolean',
    visualPosition: "leading",
    showLoadingIndicator: showLeadingLoadingIndicator
  }, typeof LeadingVisual !== 'string' && reactIs.isValidElementType(LeadingVisual) ? /*#__PURE__*/React__default.default.createElement(LeadingVisual, null) : LeadingVisual), /*#__PURE__*/React__default.default.createElement(Box, {
    ref: containerRef,
    display: "flex",
    sx: {
      alignItems: 'center',
      flexWrap: preventTokenWrapping ? 'nowrap' : 'wrap',
      marginLeft: '-0.25rem',
      marginBottom: '-0.25rem',
      flexGrow: 1,
      '> *': {
        flexShrink: 0,
        marginLeft: '0.25rem',
        marginBottom: '0.25rem'
      }
    }
  }, /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      order: 1,
      flexGrow: 1
    }
  }, /*#__PURE__*/React__default.default.createElement(UnstyledTextInput, _extends({
    ref: ref,
    disabled: disabled,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onKeyDown: handleInputKeyDown,
    type: "text",
    sx: {
      height: '100%'
    },
    "aria-invalid": validationStatus === 'error' ? 'true' : 'false'
  }, inputPropsRest))), visibleTokens.map(({
    id,
    ...tokenRest
  }, i) => /*#__PURE__*/React__default.default.createElement(TokenComponent, _extends({
    disabled: disabled,
    key: id,
    onFocus: handleTokenFocus(i),
    onBlur: handleTokenBlur,
    onKeyUp: handleTokenKeyUp,
    onClick: preventTokenClickPropagation,
    isSelected: selectedTokenIndex === i,
    onRemove: () => {
      handleTokenRemove(id);
    },
    hideRemoveButton: disabled || hideTokenRemoveButtons,
    size: size,
    tabIndex: 0
  }, tokenRest))), tokensAreTruncated && tokens.length - visibleTokens.length ? /*#__PURE__*/React__default.default.createElement(Text, {
    color: "fg.muted",
    fontSize: overflowCountFontSizeMap[size]
  }, "+", tokens.length - visibleTokens.length) : null), /*#__PURE__*/React__default.default.createElement(TextInputInnerVisualSlot, {
    hasLoadingIndicator: typeof loading === 'boolean',
    visualPosition: "trailing",
    showLoadingIndicator: showTrailingLoadingIndicator
  }, typeof TrailingVisual !== 'string' && reactIs.isValidElementType(TrailingVisual) ? /*#__PURE__*/React__default.default.createElement(TrailingVisual, null) : TrailingVisual));
}
TextInputWithTokensInnerComponent.displayName = "TextInputWithTokensInnerComponent";
const TextInputWithTokens = /*#__PURE__*/React__default.default.forwardRef(TextInputWithTokensInnerComponent);
TextInputWithTokens.displayName = 'TextInputWithTokens';

module.exports = TextInputWithTokens;
