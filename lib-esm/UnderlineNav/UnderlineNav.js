import React, { forwardRef, useRef, useState, useEffect, useCallback } from 'react';
import Box from '../Box/Box.js';
import sx from '../sx.js';
import { UnderlineNavContext } from './UnderlineNavContext.js';
import { useResizeObserver } from '../hooks/useResizeObserver.js';
import { useTheme } from '../ThemeProvider.js';
import VisuallyHidden from '../_VisuallyHidden.js';
import { getDividerStyle, moreBtnStyles, baseMenuMinWidth, baseMenuStyles, menuStyles, menuItemStyles } from './styles.js';
import { StyledUnderlineWrapper, StyledUnderlineItemList, LoadingCounter, GAP } from '../internal/components/UnderlineTabbedInterface.js';
import styled from 'styled-components';
import '../Button/ButtonBase.js';
import { defaultSxProp } from '../utils/defaultSxProp.js';
import { ButtonComponent } from '../Button/Button.js';
import '../TooltipV2/Tooltip.js';
import '../Tooltip/Tooltip.js';
import { TriangleDownIcon } from '@primer/octicons-react';
import { useOnEscapePress } from '../hooks/useOnEscapePress.js';
import { useOnOutsideClick } from '../hooks/useOnOutsideClick.js';
import { useId } from '../hooks/useId.js';
import { ActionList } from '../ActionList/index.js';
import CounterLabel from '../CounterLabel/CounterLabel.js';
import { invariant } from '../utils/invariant.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// When page is loaded, we don't have ref for the more button as it is not on the DOM yet.
// However, we need to calculate number of possible items when the more button present as well. So using the width of the more button as a constant.
const MORE_BTN_WIDTH = 86;
// The height is needed to make sure we don't have a layout shift when the more button is the only item in the nav.
const MORE_BTN_HEIGHT = 45;

// Needed this because passing a ref using HTMLULListElement to `Box` causes a type error
styled.ul.withConfig({
  displayName: "UnderlineNav__NavigationList",
  componentId: "sc-1jfr31k-0"
})(["", ";"], sx);
const MoreMenuListItem = styled.li.withConfig({
  displayName: "UnderlineNav__MoreMenuListItem",
  componentId: "sc-1jfr31k-1"
})(["display:flex;align-items:center;height:", "px;"], MORE_BTN_HEIGHT);
const overflowEffect = (navWidth, moreMenuWidth, childArray, childWidthArray, noIconChildWidthArray, updateListAndMenu) => {
  let iconsVisible = true;
  if (childWidthArray.length === 0) {
    updateListAndMenu({
      items: childArray,
      menuItems: []
    }, iconsVisible);
  }
  const numberOfItemsPossible = calculatePossibleItems(childWidthArray, navWidth);
  const numberOfItemsWithoutIconPossible = calculatePossibleItems(noIconChildWidthArray, navWidth);
  // We need to take more menu width into account when calculating the number of items possible
  const numberOfItemsPossibleWithMoreMenu = calculatePossibleItems(noIconChildWidthArray, navWidth, moreMenuWidth || MORE_BTN_WIDTH);
  const items = [];
  const menuItems = [];

  // First, we check if we can fit all the items with their icons
  if (childArray.length <= numberOfItemsPossible) {
    items.push(...childArray);
  } else if (childArray.length <= numberOfItemsWithoutIconPossible) {
    // if we can't fit all the items with their icons, we check if we can fit all the items without their icons
    iconsVisible = false;
    items.push(...childArray);
  } else {
    // if we can't fit all the items without their icons, we keep the icons hidden and show the ones that doesn't fit into the list in the overflow menu
    iconsVisible = false;

    /* Below is an accessibility requirement. Never show only one item in the overflow menu.
     * If there is only one item left to display in the overflow menu according to the calculation,
     * we need to pull another item from the list into the overflow menu.
     */
    const numberOfItemsInMenu = childArray.length - numberOfItemsPossibleWithMoreMenu;
    const numberOfListItems = numberOfItemsInMenu === 1 ? numberOfItemsPossibleWithMoreMenu - 1 : numberOfItemsPossibleWithMoreMenu;
    for (const [index, child] of childArray.entries()) {
      if (index < numberOfListItems) {
        items.push(child);
      } else {
        const ariaCurrent = child.props['aria-current'];
        const isCurrent = Boolean(ariaCurrent) && ariaCurrent !== 'false';
        // We need to make sure to keep the selected item always visible.
        // To do that, we swap the selected item with the last item in the list to make it visible. (When there is at least 1 item in the list to swap.)
        if (isCurrent && numberOfListItems > 0) {
          // If selected item couldn't make in to the list, we swap it with the last item in the list.
          const indexToReplaceAt = numberOfListItems - 1; // because we are replacing the last item in the list
          // splice method modifies the array by removing 1 item here at the given index and replace it with the "child" element then returns the removed item.
          const propsectiveAction = items.splice(indexToReplaceAt, 1, child)[0];
          menuItems.push(propsectiveAction);
        } else {
          menuItems.push(child);
        }
      }
    }
  }
  updateListAndMenu({
    items,
    menuItems
  }, iconsVisible);
};
const getValidChildren = children => {
  return React.Children.toArray(children).filter(child => /*#__PURE__*/React.isValidElement(child));
};
const calculatePossibleItems = (childWidthArray, navWidth, moreMenuWidth = 0) => {
  const widthToFit = navWidth - moreMenuWidth;
  let breakpoint = childWidthArray.length; // assume all items will fit
  let sumsOfChildWidth = 0;
  for (const [index, childWidth] of childWidthArray.entries()) {
    sumsOfChildWidth = sumsOfChildWidth + childWidth.width + GAP;
    if (sumsOfChildWidth > widthToFit) {
      breakpoint = index;
      break;
    } else {
      continue;
    }
  }
  return breakpoint;
};
const UnderlineNav = /*#__PURE__*/forwardRef(({
  as = 'nav',
  'aria-label': ariaLabel,
  sx: sxProp = defaultSxProp,
  loadingCounters = false,
  children
}, forwardedRef) => {
  var _listRef$current2;
  const backupRef = useRef(null);
  const navRef = forwardedRef !== null && forwardedRef !== void 0 ? forwardedRef : backupRef;
  const listRef = useRef(null);
  const moreMenuRef = useRef(null);
  const moreMenuBtnRef = useRef(null);
  const containerRef = React.useRef(null);
  const disclosureWidgetId = useId();
  const {
    theme
  } = useTheme();
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [iconsVisible, setIconsVisible] = useState(true);
  const [childWidthArray, setChildWidthArray] = useState([]);
  const [noIconChildWidthArray, setNoIconChildWidthArray] = useState([]);
  const validChildren = getValidChildren(children);

  // Responsive props object manages which items are in the list and which items are in the menu.
  const [responsiveProps, setResponsiveProps] = useState({
    items: validChildren,
    menuItems: []
  });

  // Make sure to have the fresh props data for list items when children are changed (keeping aria-current up-to-date)
  const listItems = responsiveProps.items.map(item => {
    var _validChildren$find;
    return (_validChildren$find = validChildren.find(child => child.key === item.key)) !== null && _validChildren$find !== void 0 ? _validChildren$find : item;
  });

  // Make sure to have the fresh props data for menu items when children are changed (keeping aria-current up-to-date)
  const menuItems = responsiveProps.menuItems.map(menuItem => {
    var _validChildren$find2;
    return (_validChildren$find2 = validChildren.find(child => child.key === menuItem.key)) !== null && _validChildren$find2 !== void 0 ? _validChildren$find2 : menuItem;
  });
  // This is the case where the viewport is too narrow to show any list item with the more menu. In this case, we only show the dropdown
  const onlyMenuVisible = responsiveProps.items.length === 0;
  if (process.env.NODE_ENV !== "production") {
    // Practically, this is not a conditional hook, it is just making sure this hook runs only on DEV not PROD.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      // Address illegal state where there are multiple items that have `aria-current='page'` attribute
      const activeElements = validChildren.filter(child => {
        return child.props['aria-current'] !== undefined;
      });
      !(activeElements.length <= 1) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Only one current element is allowed') : invariant(false) : void 0;
      !ariaLabel ? process.env.NODE_ENV !== "production" ? invariant(false, 'Use the `aria-label` prop to provide an accessible label for assistive technology') : invariant(false) : void 0;
    });
  }
  function getItemsWidth(itemText) {
    var _noIconChildWidthArra, _noIconChildWidthArra2;
    return (_noIconChildWidthArra = (_noIconChildWidthArra2 = noIconChildWidthArray.find(item => item.text === itemText)) === null || _noIconChildWidthArra2 === void 0 ? void 0 : _noIconChildWidthArra2.width) !== null && _noIconChildWidthArra !== void 0 ? _noIconChildWidthArra : 0;
  }
  const swapMenuItemWithListItem = (prospectiveListItem, indexOfProspectiveListItem, event, callback) => {
    var _listRef$current$getB, _listRef$current;
    // get the selected menu item's width
    const widthToFitIntoList = getItemsWidth(prospectiveListItem.props.children);
    // Check if there is any empty space on the right side of the list
    const availableSpace = navRef.current.getBoundingClientRect().width - ((_listRef$current$getB = (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.getBoundingClientRect().width) !== null && _listRef$current$getB !== void 0 ? _listRef$current$getB : 0);

    // Calculate how many items need to be pulled in to the menu to make room for the selected menu item
    // I.e. if we need to pull 2 items in (index 0 and index 1), breakpoint (index) will return 1.
    const index = getBreakpointForItemSwapping(widthToFitIntoList, availableSpace);
    const indexToSliceAt = responsiveProps.items.length - 1 - index;
    // Form the new list of items
    const itemsLeftInList = [...responsiveProps.items].slice(0, indexToSliceAt);
    const updatedItemList = [...itemsLeftInList, prospectiveListItem];
    // Form the new menu items
    const itemsToAddToMenu = [...responsiveProps.items].slice(indexToSliceAt);
    const updatedMenuItems = [...menuItems];
    // Add itemsToAddToMenu array's items to the menu at the index of the prospectiveListItem and remove 1 count of items (prospectiveListItem)
    updatedMenuItems.splice(indexOfProspectiveListItem, 1, ...itemsToAddToMenu);
    callback({
      items: updatedItemList,
      menuItems: updatedMenuItems
    }, false);
  };
  // How many items do we need to pull in to the menu to make room for the selected menu item.
  function getBreakpointForItemSwapping(widthToFitIntoList, availableSpace) {
    let widthToSwap = 0;
    let breakpoint = 0;
    for (const [index, item] of [...responsiveProps.items].reverse().entries()) {
      widthToSwap += getItemsWidth(item.props.children);
      if (widthToFitIntoList < widthToSwap + availableSpace) {
        breakpoint = index;
        break;
      }
    }
    return breakpoint;
  }
  const updateListAndMenu = useCallback((props, displayIcons) => {
    setResponsiveProps(props);
    setIconsVisible(displayIcons);
  }, []);
  const setChildrenWidth = useCallback(size => {
    setChildWidthArray(arr => {
      const newArr = [...arr, size];
      return newArr;
    });
  }, []);
  const setNoIconChildrenWidth = useCallback(size => {
    setNoIconChildWidthArray(arr => {
      const newArr = [...arr, size];
      return newArr;
    });
  }, []);
  const closeOverlay = React.useCallback(() => {
    setIsWidgetOpen(false);
  }, [setIsWidgetOpen]);
  const focusOnMoreMenuBtn = React.useCallback(() => {
    var _moreMenuBtnRef$curre;
    (_moreMenuBtnRef$curre = moreMenuBtnRef.current) === null || _moreMenuBtnRef$curre === void 0 ? void 0 : _moreMenuBtnRef$curre.focus();
  }, []);
  const onAnchorClick = useCallback(event => {
    if (event.defaultPrevented || event.button !== 0) {
      return;
    }
    setIsWidgetOpen(isWidgetOpen => !isWidgetOpen);
  }, []);
  useOnEscapePress(event => {
    if (isWidgetOpen) {
      event.preventDefault();
      closeOverlay();
      focusOnMoreMenuBtn();
    }
  }, [isWidgetOpen]);
  useOnOutsideClick({
    onClickOutside: closeOverlay,
    containerRef,
    ignoreClickRefs: [moreMenuBtnRef]
  });
  useResizeObserver(resizeObserverEntries => {
    var _moreMenuRef$current$, _moreMenuRef$current;
    const navWidth = resizeObserverEntries[0].contentRect.width;
    const moreMenuWidth = (_moreMenuRef$current$ = (_moreMenuRef$current = moreMenuRef.current) === null || _moreMenuRef$current === void 0 ? void 0 : _moreMenuRef$current.getBoundingClientRect().width) !== null && _moreMenuRef$current$ !== void 0 ? _moreMenuRef$current$ : 0;
    navWidth !== 0 && overflowEffect(navWidth, moreMenuWidth, validChildren, childWidthArray, noIconChildWidthArray, updateListAndMenu);
  }, navRef);
  return /*#__PURE__*/React.createElement(UnderlineNavContext.Provider, {
    value: {
      theme,
      setChildrenWidth,
      setNoIconChildrenWidth,
      loadingCounters,
      iconsVisible
    }
  }, ariaLabel && /*#__PURE__*/React.createElement(VisuallyHidden, {
    as: "h2"
  }, `${ariaLabel} navigation`), /*#__PURE__*/React.createElement(StyledUnderlineWrapper, {
    as: as,
    "aria-label": ariaLabel,
    ref: navRef,
    sx: sxProp
  }, /*#__PURE__*/React.createElement(StyledUnderlineItemList, {
    ref: listRef,
    role: "list"
  }, listItems, menuItems.length > 0 && /*#__PURE__*/React.createElement(MoreMenuListItem, {
    ref: moreMenuRef
  }, !onlyMenuVisible && /*#__PURE__*/React.createElement(Box, {
    sx: getDividerStyle(theme)
  }), /*#__PURE__*/React.createElement(ButtonComponent, {
    ref: moreMenuBtnRef,
    sx: moreBtnStyles,
    "aria-controls": disclosureWidgetId,
    "aria-expanded": isWidgetOpen,
    onClick: onAnchorClick,
    trailingAction: TriangleDownIcon
  }, /*#__PURE__*/React.createElement(Box, {
    as: "span"
  }, onlyMenuVisible ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VisuallyHidden, {
    as: "span"
  }, `${ariaLabel}`, "\xA0"), "Menu") : /*#__PURE__*/React.createElement(React.Fragment, null, "More", /*#__PURE__*/React.createElement(VisuallyHidden, {
    as: "span"
  }, "\xA0", `${ariaLabel} items`)))), /*#__PURE__*/React.createElement(ActionList, {
    selectionVariant: "single",
    ref: containerRef,
    id: disclosureWidgetId,
    sx: (_listRef$current2 = listRef.current) !== null && _listRef$current2 !== void 0 && _listRef$current2.clientWidth && listRef.current.clientWidth >= baseMenuMinWidth ? baseMenuStyles : menuStyles(containerRef.current, listRef.current),
    style: {
      display: isWidgetOpen ? 'block' : 'none'
    }
  }, menuItems.map((menuItem, index) => {
    const {
      children: menuItemChildren,
      counter,
      'aria-current': ariaCurrent,
      onSelect,
      ...menuItemProps
    } = menuItem.props;

    // This logic is used to pop the selected item out of the menu and into the list when the navigation is control externally
    if (Boolean(ariaCurrent) && ariaCurrent !== 'false') {
      const event = new MouseEvent('click');
      !onlyMenuVisible && swapMenuItemWithListItem(menuItem, index,
      // @ts-ignore - not a big deal because it is internally creating an event but ask help
      event, updateListAndMenu);
    }
    return /*#__PURE__*/React.createElement(ActionList.LinkItem, _extends({
      key: menuItemChildren,
      sx: menuItemStyles,
      onClick: event => {
        // When there are no items in the list, do not run the swap function as we want to keep everything in the menu.
        !onlyMenuVisible && swapMenuItemWithListItem(menuItem, index, event, updateListAndMenu);
        closeOverlay();
        focusOnMoreMenuBtn();
        // fire onSelect event that comes from the UnderlineNav.Item (if it is defined)
        typeof onSelect === 'function' && onSelect(event);
      }
    }, menuItemProps), /*#__PURE__*/React.createElement(Box, {
      as: "span",
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, menuItemChildren, loadingCounters ? /*#__PURE__*/React.createElement(LoadingCounter, null) : counter !== undefined && /*#__PURE__*/React.createElement(Box, {
      as: "span",
      "data-component": "counter"
    }, /*#__PURE__*/React.createElement(CounterLabel, null, counter))));
  }))))));
});
UnderlineNav.displayName = 'UnderlineNav';

export { MORE_BTN_WIDTH, MoreMenuListItem, UnderlineNav, getValidChildren };
