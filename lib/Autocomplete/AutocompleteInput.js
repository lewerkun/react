'use strict';

var React = require('react');
var AutocompleteContext = require('./AutocompleteContext.js');
var TextInput = require('../TextInput/TextInput.js');
var useRefObjectAsForwardedRef = require('../hooks/useRefObjectAsForwardedRef.js');
var useSafeTimeout = require('../hooks/useSafeTimeout.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ARROW_KEYS_NAV = new Set(['ArrowUp', 'ArrowDown']);
const AutocompleteInput = /*#__PURE__*/React__default.default.forwardRef(({
  as: Component = TextInput,
  onFocus,
  onBlur,
  onChange,
  onKeyDown,
  onKeyUp,
  onKeyPress,
  value,
  openOnFocus = true,
  ...props
}, forwardedRef) => {
  const autocompleteContext = React.useContext(AutocompleteContext.AutocompleteContext);
  if (autocompleteContext === null) {
    throw new Error('AutocompleteContext returned null values');
  }
  const {
    activeDescendantRef,
    autocompleteSuggestion = '',
    id,
    inputRef,
    inputValue = '',
    isMenuDirectlyActivated,
    setInputValue,
    setShowMenu,
    showMenu
  } = autocompleteContext;
  useRefObjectAsForwardedRef.useRefObjectAsForwardedRef(forwardedRef, inputRef);
  const [highlightRemainingText, setHighlightRemainingText] = React.useState(true);
  const {
    safeSetTimeout
  } = useSafeTimeout();
  const handleInputFocus = React.useCallback(event => {
    if (openOnFocus) {
      onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
      setShowMenu(true);
    }
  }, [onFocus, setShowMenu, openOnFocus]);
  const handleInputBlur = React.useCallback(event => {
    onBlur && onBlur(event);

    // HACK: wait a tick and check the focused element before hiding the autocomplete menu
    // this prevents the menu from hiding when the user is clicking an option in the Autoselect.Menu,
    // but still hides the menu when the user blurs the input by tabbing out or clicking somewhere else on the page
    safeSetTimeout(() => {
      if (document.activeElement !== inputRef.current) {
        setShowMenu(false);
      }
    }, 0);
  }, [onBlur, setShowMenu, inputRef, safeSetTimeout]);
  const handleInputChange = React.useCallback(event => {
    onChange && onChange(event);
    setInputValue(event.currentTarget.value);
    if (!showMenu) {
      setShowMenu(true);
    }
  }, [onChange, setInputValue, setShowMenu, showMenu]);
  const handleInputKeyDown = React.useCallback(event => {
    var _inputRef$current;
    onKeyDown && onKeyDown(event);
    if (event.key === 'Backspace') {
      setHighlightRemainingText(false);
    }
    if (event.key === 'Escape' && (_inputRef$current = inputRef.current) !== null && _inputRef$current !== void 0 && _inputRef$current.value) {
      setInputValue('');
      inputRef.current.value = '';
    }
    if (!showMenu && ARROW_KEYS_NAV.has(event.key) && !event.altKey) {
      setShowMenu(true);
    }
  }, [inputRef, setInputValue, setHighlightRemainingText, onKeyDown, showMenu, setShowMenu]);
  const handleInputKeyUp = React.useCallback(event => {
    onKeyUp && onKeyUp(event);
    if (event.key === 'Backspace') {
      setHighlightRemainingText(true);
    }
  }, [setHighlightRemainingText, onKeyUp]);
  const onInputKeyPress = React.useCallback(event => {
    onKeyPress && onKeyPress(event);
    if (showMenu && event.key === 'Enter' && activeDescendantRef.current) {
      event.preventDefault();
      event.nativeEvent.stopImmediatePropagation();

      // Forward Enter key press to active descendant so that item gets activated
      const activeDescendantEvent = new KeyboardEvent(event.type, event.nativeEvent);
      activeDescendantRef.current.dispatchEvent(activeDescendantEvent);
    }
  }, [activeDescendantRef, showMenu, onKeyPress]);
  React.useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    // resets input value to being empty after a selection has been made
    if (!autocompleteSuggestion) {
      inputRef.current.value = inputValue;
    }

    // TODO: fix bug where this function prevents `onChange` from being triggered if the highlighted item text
    //       is the same as what I'm typing
    //       e.g.: typing 'tw' highlights 'two', but when I 'two', the text input change does not get triggered
    if (highlightRemainingText && autocompleteSuggestion && (inputValue || isMenuDirectlyActivated)) {
      inputRef.current.value = autocompleteSuggestion;
      if (autocompleteSuggestion.toLowerCase().indexOf(inputValue.toLowerCase()) === 0) {
        inputRef.current.setSelectionRange(inputValue.length, autocompleteSuggestion.length);
      }
    }

    // calling this useEffect when `highlightRemainingText` changes breaks backspace functionality
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autocompleteSuggestion, inputValue, inputRef, isMenuDirectlyActivated]);
  React.useEffect(() => {
    setInputValue(typeof value !== 'undefined' ? value.toString() : '');
  }, [value, setInputValue]);
  return /*#__PURE__*/React__default.default.createElement(Component, _extends({
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onChange: handleInputChange,
    onKeyDown: handleInputKeyDown,
    onKeyPress: onInputKeyPress,
    onKeyUp: handleInputKeyUp,
    ref: inputRef,
    "aria-controls": `${id}-listbox`,
    "aria-autocomplete": "both",
    role: "combobox",
    "aria-expanded": showMenu,
    "aria-haspopup": "listbox",
    "aria-owns": `${id}-listbox`,
    autoComplete: "off",
    id: id
  }, props));
});
AutocompleteInput.displayName = 'AutocompleteInput';

module.exports = AutocompleteInput;
