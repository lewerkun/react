import React, { useContext, useCallback } from 'react';
import '@primer/behaviors/utils';
import { useAnchoredPosition } from '../hooks/useAnchoredPosition.js';
import { useRefObjectAsForwardedRef } from '../hooks/useRefObjectAsForwardedRef.js';
import Overlay from '../Overlay/Overlay.js';
import { AutocompleteContext } from './AutocompleteContext.js';
import VisuallyHidden from '../_VisuallyHidden.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// TODO: consider making 'aria-labelledby' required

function AutocompleteOverlay({
  menuAnchorRef,
  overlayProps: oldOverlayProps,
  children,
  ...newOverlayProps
}) {
  const autocompleteContext = useContext(AutocompleteContext);
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
  } = useAnchoredPosition({
    side: 'outside-bottom',
    align: 'start',
    anchorElementRef: menuAnchorRef ? menuAnchorRef : inputRef
  }, [showMenu, selectedItemLength]);
  useRefObjectAsForwardedRef(scrollContainerRef, floatingElementRef);
  const closeOptionList = useCallback(() => {
    setShowMenu(false);
  }, [setShowMenu]);
  if (typeof window === 'undefined') {
    return null;
  }
  return showMenu ? /*#__PURE__*/React.createElement(Overlay, _extends({
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
  React.createElement(VisuallyHidden, {
    "aria-hidden": "true"
  }, children);
}
AutocompleteOverlay.displayName = 'AutocompleteOverlay';

export { AutocompleteOverlay as default };
