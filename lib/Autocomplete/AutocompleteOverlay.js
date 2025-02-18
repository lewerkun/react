'use strict';

var React = require('react');
require('@primer/behaviors/utils');
var useAnchoredPosition = require('../hooks/useAnchoredPosition.js');
var useRefObjectAsForwardedRef = require('../hooks/useRefObjectAsForwardedRef.js');
var Overlay = require('../Overlay/Overlay.js');
var AutocompleteContext = require('./AutocompleteContext.js');
var _VisuallyHidden = require('../_VisuallyHidden.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// TODO: consider making 'aria-labelledby' required

function AutocompleteOverlay({
  menuAnchorRef,
  overlayProps: oldOverlayProps,
  children,
  ...newOverlayProps
}) {
  const autocompleteContext = React.useContext(AutocompleteContext.AutocompleteContext);
  if (autocompleteContext === null) {
    throw new Error('AutocompleteContext returned null values');
  }
  const overlayProps = {
    ...oldOverlayProps,
    ...newOverlayProps
  };
  const {
    inputRef,
    scrollContainerRef,
    selectedItemLength,
    setShowMenu,
    showMenu = false
  } = autocompleteContext;
  const {
    floatingElementRef,
    position
  } = useAnchoredPosition.useAnchoredPosition({
    side: 'outside-bottom',
    align: 'start',
    anchorElementRef: menuAnchorRef ? menuAnchorRef : inputRef
  }, [showMenu, selectedItemLength]);
  useRefObjectAsForwardedRef.useRefObjectAsForwardedRef(scrollContainerRef, floatingElementRef);
  const closeOptionList = React.useCallback(() => {
    setShowMenu(false);
  }, [setShowMenu]);
  if (typeof window === 'undefined') {
    return null;
  }
  return showMenu ? /*#__PURE__*/React__default.default.createElement(Overlay.default, _extends({
    returnFocusRef: inputRef,
    preventFocusOnOpen: true,
    onClickOutside: closeOptionList,
    onEscape: closeOptionList,
    ref: floatingElementRef,
    top: position === null || position === void 0 ? void 0 : position.top,
    left: position === null || position === void 0 ? void 0 : position.left,
    sx: {
      overflow: 'auto'
    }
  }, overlayProps), children) :
  /*#__PURE__*/
  // HACK: This ensures AutocompleteMenu is still mounted when closing the menu and all of the hooks inside of it are still called.
  // A better way to do this would be to move the hooks to AutocompleteOverlay or somewhere that won't get unmounted.
  React__default.default.createElement(_VisuallyHidden, {
    "aria-hidden": "true"
  }, children);
}
AutocompleteOverlay.displayName = 'AutocompleteOverlay';

module.exports = AutocompleteOverlay;
