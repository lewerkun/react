import React, { useContext, useRef, useState, useMemo, useEffect } from 'react';
import { scrollIntoView } from '@primer/behaviors';
import { ActionList } from '../ActionList/index.js';
import { useFocusZone } from '../hooks/useFocusZone.js';
import Box from '../Box/Box.js';
import StyledSpinner from '../Spinner/Spinner.js';
import { useId } from '../hooks/useId.js';
import { AutocompleteContext } from './AutocompleteContext.js';
import { PlusIcon } from '@primer/octicons-react';
import VisuallyHidden from '../_VisuallyHidden.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const getDefaultSortFn = isItemSelectedFn => (itemIdA, itemIdB) => isItemSelectedFn(itemIdA) === isItemSelectedFn(itemIdB) ? 0 : isItemSelectedFn(itemIdA) ? -1 : 1;
const menuScrollMargins = {
  startMargin: 0,
  endMargin: 8
};
function getDefaultItemFilter(filterValue) {
  return function (item, _i) {
    var _item$text;
    return Boolean((_item$text = item.text) === null || _item$text === void 0 ? void 0 : _item$text.toLowerCase().startsWith(filterValue.toLowerCase()));
  };
}
function getdefaultCheckedSelectionChange(setInputValueFn) {
  return function (itemOrItems) {
    const {
      text = ''
    } = Array.isArray(itemOrItems) ? itemOrItems.slice(-1)[0] : itemOrItems;
    setInputValueFn(text);
  };
}
const isItemSelected = (itemId, selectedItemIds) => selectedItemIds.includes(itemId);
function getItemById(itemId, items) {
  return items.find(item => item.id === itemId);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any

function AutocompleteMenu(props) {
  const autocompleteContext = useContext(AutocompleteContext);
  if (autocompleteContext === null) {
    throw new Error('AutocompleteContext returned null values');
  }
  const {
    activeDescendantRef,
    id,
    inputRef,
    inputValue = '',
    scrollContainerRef,
    setAutocompleteSuggestion,
    setShowMenu,
    setInputValue,
    setIsMenuDirectlyActivated,
    setSelectedItemLength,
    showMenu
  } = autocompleteContext;
  const {
    items,
    selectedItemIds,
    sortOnCloseFn,
    emptyStateText = 'No selectable options',
    addNewItem,
    loading,
    selectionVariant = 'single',
    filterFn,
    'aria-labelledby': ariaLabelledBy,
    onOpenChange,
    onSelectedChange,
    customScrollContainerRef
  } = props;
  const listContainerRef = useRef(null);
  const allItemsToRenderRef = useRef([]);
  const [highlightedItem, setHighlightedItem] = useState();
  const [sortedItemIds, setSortedItemIds] = useState(items.map(({
    id: itemId
  }) => itemId));
  const generatedUniqueId = useId(id);
  const selectableItems = useMemo(() => items.map(selectableItem => {
    return {
      ...selectableItem,
      role: 'option',
      id: selectableItem.id,
      active: (highlightedItem === null || highlightedItem === void 0 ? void 0 : highlightedItem.id) === selectableItem.id,
      selected: selectionVariant === 'multiple' ? selectedItemIds.includes(selectableItem.id) : undefined,
      onAction: item => {
        const otherSelectedItemIds = selectedItemIds.filter(selectedItemId => selectedItemId !== item.id);
        const newSelectedItemIds = selectedItemIds.includes(item.id) ? otherSelectedItemIds : [...otherSelectedItemIds, item.id];
        const onSelectedChangeFn = onSelectedChange ? onSelectedChange : getdefaultCheckedSelectionChange(setInputValue);
        onSelectedChangeFn(newSelectedItemIds.map(newSelectedItemId => getItemById(newSelectedItemId, items)));
        if (selectionVariant === 'multiple') {
          setInputValue('');
          setAutocompleteSuggestion('');
        } else {
          var _inputRef$current;
          setShowMenu(false);
          (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
        }
      }
    };
  }), [highlightedItem, items, selectedItemIds, inputRef, onSelectedChange, selectionVariant, setAutocompleteSuggestion, setInputValue, setShowMenu]);
  const itemSortOrderData = useMemo(() => sortedItemIds.reduce((acc, curr, i) => {
    acc[curr] = i;
    return acc;
  }, {}), [sortedItemIds]);
  const sortedAndFilteredItemsToRender = useMemo(() => selectableItems.filter(filterFn ? filterFn : getDefaultItemFilter(inputValue)).sort((a, b) => itemSortOrderData[a.id] - itemSortOrderData[b.id]), [selectableItems, itemSortOrderData, filterFn, inputValue]);
  const allItemsToRender = useMemo(() => [
  // sorted and filtered selectable items
  ...sortedAndFilteredItemsToRender,
  // menu item used for creating a token from whatever is in the text input
  ...(addNewItem ? [{
    ...addNewItem,
    role: 'option',
    key: addNewItem.id,
    active: (highlightedItem === null || highlightedItem === void 0 ? void 0 : highlightedItem.id) === addNewItem.id,
    selected: selectionVariant === 'multiple' ? selectedItemIds.includes(addNewItem.id) : undefined,
    leadingVisual: () => /*#__PURE__*/React.createElement(PlusIcon, null),
    onAction: item => {
      // TODO: make it possible to pass a leadingVisual when using `addNewItem`
      addNewItem.handleAddItem({
        ...item,
        id: item.id || generatedUniqueId,
        leadingVisual: undefined
      });
      if (selectionVariant === 'multiple') {
        setInputValue('');
        setAutocompleteSuggestion('');
      }
    }
  }] : [])], [sortedAndFilteredItemsToRender, addNewItem, setAutocompleteSuggestion, selectionVariant, setInputValue, generatedUniqueId, highlightedItem, selectedItemIds]);
  React.useEffect(() => {
    allItemsToRenderRef.current = allItemsToRender;
  });
  useFocusZone({
    containerRef: listContainerRef,
    focusOutBehavior: 'wrap',
    focusableElementFilter: element => {
      return !(element instanceof HTMLInputElement);
    },
    activeDescendantFocus: inputRef,
    onActiveDescendantChanged: (current, _previous, directlyActivated) => {
      activeDescendantRef.current = current || null;
      if (current) {
        const selectedItem = allItemsToRenderRef.current.find(item => {
          var _current$closest;
          return item.id === ((_current$closest = current.closest('li')) === null || _current$closest === void 0 ? void 0 : _current$closest.getAttribute('data-id'));
        });
        setHighlightedItem(selectedItem);
        setIsMenuDirectlyActivated(directlyActivated);
      }
      if (current && customScrollContainerRef && customScrollContainerRef.current && directlyActivated) {
        scrollIntoView(current, customScrollContainerRef.current, menuScrollMargins);
      } else if (current && scrollContainerRef.current && directlyActivated) {
        scrollIntoView(current, scrollContainerRef.current, menuScrollMargins);
      }
    }
  }, [loading]);
  useEffect(() => {
    var _highlightedItem$text;
    if (highlightedItem !== null && highlightedItem !== void 0 && (_highlightedItem$text = highlightedItem.text) !== null && _highlightedItem$text !== void 0 && _highlightedItem$text.startsWith(inputValue) && !selectedItemIds.includes(highlightedItem.id)) {
      setAutocompleteSuggestion(highlightedItem.text);
    } else {
      setAutocompleteSuggestion('');
    }
  }, [highlightedItem, inputValue, selectedItemIds, setAutocompleteSuggestion]);
  useEffect(() => {
    const itemIdSortResult = [...sortedItemIds].sort(sortOnCloseFn ? sortOnCloseFn : getDefaultSortFn(itemId => isItemSelected(itemId, selectedItemIds)));
    const sortResultMatchesState = itemIdSortResult.length === sortedItemIds.length && itemIdSortResult.every((element, index) => element === sortedItemIds[index]);
    if (showMenu === false && !sortResultMatchesState) {
      setSortedItemIds(itemIdSortResult);
    }
    onOpenChange && onOpenChange(Boolean(showMenu));
  }, [showMenu, onOpenChange, selectedItemIds, sortOnCloseFn, sortedItemIds]);
  useEffect(() => {
    if (selectedItemIds.length) {
      setSelectedItemLength(selectedItemIds.length);
    }
  }, [selectedItemIds, setSelectedItemLength]);
  if (selectionVariant === 'single' && selectedItemIds.length > 1) {
    throw new Error('Autocomplete: selectionVariant "single" cannot be used with multiple selected items');
  }
  return /*#__PURE__*/React.createElement(VisuallyHidden, {
    isVisible: showMenu
  }, loading ? /*#__PURE__*/React.createElement(Box, {
    p: 3,
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(StyledSpinner, null)) : /*#__PURE__*/React.createElement("div", {
    ref: listContainerRef
  }, allItemsToRender.length ? /*#__PURE__*/React.createElement(ActionList, {
    selectionVariant: selectionVariant // TODO: make this configurable
    ,
    role: "listbox",
    id: `${id}-listbox`,
    "aria-labelledby": ariaLabelledBy
  }, allItemsToRender.map(item => {
    const {
      id,
      onAction,
      children,
      text,
      leadingVisual: LeadingVisual,
      trailingVisual: TrailingVisual,
      ...itemProps
    } = item;
    return /*#__PURE__*/React.createElement(ActionList.Item, _extends({
      key: id,
      onSelect: () => onAction(item)
    }, itemProps, {
      id: id,
      "data-id": id
    }), LeadingVisual && /*#__PURE__*/React.createElement(ActionList.LeadingVisual, null, /*#__PURE__*/React.createElement(LeadingVisual, null)), children !== null && children !== void 0 ? children : text, TrailingVisual && /*#__PURE__*/React.createElement(ActionList.TrailingVisual, null, /*#__PURE__*/React.createElement(TrailingVisual, null)));
  })) : emptyStateText !== false && emptyStateText !== null ? /*#__PURE__*/React.createElement(Box, {
    p: 3
  }, emptyStateText) : null));
}
AutocompleteMenu.displayName = "AutocompleteMenu";
AutocompleteMenu.displayName = 'AutocompleteMenu';

export { AutocompleteMenu as default };
