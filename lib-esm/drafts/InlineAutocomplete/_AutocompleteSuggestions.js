import React, { useRef, useState, useCallback } from 'react';
import StyledSpinner from '../../Spinner/Spinner.js';
import { ActionList } from '../../ActionList/index.js';
import Box from '../../Box/Box.js';
import { useCombobox } from '../hooks/useCombobox.js';
import Overlay from '../../Overlay/Overlay.js';
import { getSuggestionValue, getSuggestionKey } from './utils.js';
import useIsomorphicLayoutEffect from '../../utils/useIsomorphicLayoutEffect.js';

const LoadingIndicator = () => /*#__PURE__*/React.createElement(Box, {
  sx: {
    display: 'flex',
    justifyContent: 'center',
    py: 2
  }
}, /*#__PURE__*/React.createElement(StyledSpinner, {
  size: "small"
}));
LoadingIndicator.displayName = "LoadingIndicator";
const SuggestionListItem = ({
  suggestion
}) => {
  const value = getSuggestionValue(suggestion);
  const sharedProps = {
    id: value,
    children: value,
    role: 'option',
    sx: {
      '&[aria-selected]': {
        backgroundColor: 'actionListItem.default.activeBg'
      },
      '&[data-combobox-option-default]:not([aria-selected])': {
        backgroundColor: 'actionListItem.default.selectedBg'
      }
    }
  };
  return typeof suggestion === 'string' ? /*#__PURE__*/React.createElement(ActionList.Item, sharedProps) : suggestion.render(sharedProps);
};

/**
 * Renders an overlayed list at the given relative coordinates. Handles keyboard navigation
 * and accessibility concerns.
 */
const AutocompleteSuggestions = ({
  suggestions,
  portalName,
  triggerCharCoords,
  onClose,
  onCommit: externalOnCommit,
  inputRef,
  visible,
  tabInsertsSuggestions,
  defaultPlacement
}) => {
  const overlayRef = useRef(null);

  // It seems wierd to use state instead of a ref here, but because the list is inside an
  // AnchoredOverlay it is not always mounted - so we want to reinitialize the Combobox when it mounts
  const [list, setList] = useState(null);
  const onCommit = useCallback(({
    option
  }) => {
    externalOnCommit(getSuggestionValue(option));
  }, [externalOnCommit]);

  // Setup keyboard navigation
  useCombobox({
    // Even though the list is visible when loading, we don't want to do keyboard binding in that case
    isOpen: visible && suggestions !== 'loading',
    listElement: list,
    inputElement: inputRef.current,
    onCommit,
    options: Array.isArray(suggestions) ? suggestions : [],
    tabInsertsSuggestions,
    defaultFirstOption: true
  });
  const [top, setTop] = useState(0);
  useIsomorphicLayoutEffect(function recalculateTop() {
    var _overlayRef$current$o, _overlayRef$current;
    const overlayHeight = (_overlayRef$current$o = (_overlayRef$current = overlayRef.current) === null || _overlayRef$current === void 0 ? void 0 : _overlayRef$current.offsetHeight) !== null && _overlayRef$current$o !== void 0 ? _overlayRef$current$o : 0;
    const belowOffset = triggerCharCoords.top + triggerCharCoords.height;
    const wouldOverflowBelow = belowOffset + overlayHeight > window.innerHeight;
    const aboveOffset = triggerCharCoords.top - overlayHeight;
    const wouldOverflowAbove = aboveOffset < 0;

    // Only override the default if it would overflow in the default direction and it would not overflow in the override direction
    const result = {
      below: wouldOverflowBelow && !wouldOverflowAbove ? aboveOffset : belowOffset,
      above: wouldOverflowAbove && !wouldOverflowBelow ? belowOffset : aboveOffset
    }[defaultPlacement];

    // Sometimes the value can be NaN if layout is not available (ie, SSR or JSDOM)
    const resultNotNaN = Number.isNaN(result) ? 0 : result;
    setTop(resultNotNaN);
  },
  // this is a cheap effect and we want it to run when pretty much anything that could affect position changes
  [triggerCharCoords.top, triggerCharCoords.height, suggestions, visible, defaultPlacement]);

  // Conditional rendering appears wrong at first - it means that we are reconstructing the
  // Combobox instance every time the suggestions appear. But this is what we want - otherwise
  // the textarea would always have the `combobox` role, which is incorrect (a textarea should
  // not technically ever be a combobox). We compromise by dynamically applying the combobox
  // role only when suggestions are available.
  return visible ? /*#__PURE__*/React.createElement(Overlay, {
    onEscape: onClose,
    onClickOutside: onClose,
    returnFocusRef: inputRef,
    preventFocusOnOpen: true,
    portalContainerName: portalName,
    sx: {
      position: 'fixed'
    },
    top: top,
    left: triggerCharCoords.left,
    ref: overlayRef
  }, /*#__PURE__*/React.createElement(ActionList, {
    ref: setList,
    role: "listbox"
  }, suggestions === 'loading' ? /*#__PURE__*/React.createElement(LoadingIndicator, null) : suggestions === null || suggestions === void 0 ? void 0 : suggestions.map(suggestion => /*#__PURE__*/React.createElement(SuggestionListItem, {
    suggestion: suggestion,
    key: getSuggestionKey(suggestion)
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null);
};
AutocompleteSuggestions.displayName = 'SuggestionList';

export { AutocompleteSuggestions as default };
