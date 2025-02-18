import { SearchIcon, TriangleDownIcon } from '@primer/octicons-react';
import React, { useCallback, useMemo } from 'react';
import { AnchoredOverlay } from '../AnchoredOverlay/AnchoredOverlay.js';
import Box from '../Box/Box.js';
import { FilteredActionList } from '../FilteredActionList/FilteredActionList.js';
import Heading from '../Heading/Heading.js';
import '../Button/ButtonBase.js';
import '../utils/defaultSxProp.js';
import { ButtonComponent } from '../Button/Button.js';
import '../TooltipV2/Tooltip.js';
import '../Tooltip/Tooltip.js';
import { useProvidedRefOrCreate } from '../hooks/useProvidedRefOrCreate.js';
import '@primer/behaviors/utils';
import '@primer/behaviors';
import { useProvidedStateOrCreate } from '../hooks/useProvidedStateOrCreate.js';
import { useId } from '../hooks/useId.js';
import { LiveRegion, LiveRegionOutlet, Message } from '../internal/components/LiveRegion.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function isMultiSelectVariant(selected) {
  return Array.isArray(selected);
}
const focusZoneSettings = {
  // Let FilteredActionList handle focus zone
  disabled: true
};
function SelectPanel({
  open,
  onOpenChange,
  renderAnchor = props => {
    const {
      children,
      ...rest
    } = props;
    return /*#__PURE__*/React.createElement(ButtonComponent, _extends({
      trailingAction: TriangleDownIcon
    }, rest), children);
  },
  anchorRef: externalAnchorRef,
  placeholder,
  placeholderText = 'Filter items',
  inputLabel = placeholderText,
  selected,
  title = isMultiSelectVariant(selected) ? 'Select items' : 'Select an item',
  subtitle,
  onSelectedChange,
  filterValue: externalFilterValue,
  onFilterChange: externalOnFilterChange,
  items,
  footer,
  textInputProps,
  overlayProps,
  sx,
  ...listProps
}) {
  const titleId = useId();
  const subtitleId = useId();
  const [filterValue, setInternalFilterValue] = useProvidedStateOrCreate(externalFilterValue, undefined, '');
  const onFilterChange = useCallback((value, e) => {
    externalOnFilterChange(value, e);
    setInternalFilterValue(value);
  }, [externalOnFilterChange, setInternalFilterValue]);
  const anchorRef = useProvidedRefOrCreate(externalAnchorRef);
  const onOpen = useCallback(gesture => onOpenChange(true, gesture), [onOpenChange]);
  const onClose = useCallback(gesture => {
    onOpenChange(false, gesture);
  }, [onOpenChange]);
  const renderMenuAnchor = useMemo(() => {
    if (renderAnchor === null) {
      return null;
    }
    const selectedItems = Array.isArray(selected) ? selected : [...(selected ? [selected] : [])];
    return props => {
      return renderAnchor({
        ...props,
        children: selectedItems.length ? selectedItems.map(item => item.text).join(', ') : placeholder
      });
    };
  }, [placeholder, renderAnchor, selected]);
  const itemsToRender = useMemo(() => {
    return items.map(item => {
      const isItemSelected = isMultiSelectVariant(selected) ? selected.includes(item) : selected === item;
      return {
        ...item,
        role: 'option',
        selected: 'selected' in item && item.selected === undefined ? undefined : isItemSelected,
        onAction: (itemFromAction, event) => {
          var _item$onAction;
          (_item$onAction = item.onAction) === null || _item$onAction === void 0 ? void 0 : _item$onAction.call(item, itemFromAction, event);
          if (event.defaultPrevented) {
            return;
          }
          if (isMultiSelectVariant(selected)) {
            const otherSelectedItems = selected.filter(selectedItem => selectedItem !== item);
            const newSelectedItems = selected.includes(item) ? otherSelectedItems : [...otherSelectedItems, item];
            const multiSelectOnChange = onSelectedChange;
            multiSelectOnChange(newSelectedItems);
            return;
          }

          // single select
          const singleSelectOnChange = onSelectedChange;
          singleSelectOnChange(item === selected ? undefined : item);
          onClose('selection');
        }
      };
    });
  }, [onClose, onSelectedChange, items, selected]);
  const inputRef = React.useRef(null);
  const focusTrapSettings = {
    initialFocusRef: inputRef
  };
  const extendedTextInputProps = useMemo(() => {
    return {
      sx: {
        m: 2
      },
      contrast: true,
      leadingVisual: SearchIcon,
      'aria-label': inputLabel,
      ...textInputProps
    };
  }, [inputLabel, textInputProps]);
  return /*#__PURE__*/React.createElement(LiveRegion, null, /*#__PURE__*/React.createElement(AnchoredOverlay, {
    renderAnchor: renderMenuAnchor,
    anchorRef: anchorRef,
    open: open,
    onOpen: onOpen,
    onClose: onClose,
    overlayProps: {
      role: 'dialog',
      'aria-labelledby': titleId,
      'aria-describedby': subtitle ? subtitleId : undefined,
      ...overlayProps
    },
    focusTrapSettings: focusTrapSettings,
    focusZoneSettings: focusZoneSettings
  }, /*#__PURE__*/React.createElement(LiveRegionOutlet, null), /*#__PURE__*/React.createElement(Message, {
    value: filterValue === '' ? 'Showing all items' : items.length <= 0 ? 'No matching items' : `${items.length} matching ${items.length === 1 ? 'item' : 'items'}`
  }), /*#__PURE__*/React.createElement(Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      height: 'inherit',
      maxHeight: 'inherit'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    sx: {
      pt: 2,
      px: 3
    }
  }, /*#__PURE__*/React.createElement(Heading, {
    as: "h1",
    id: titleId,
    sx: {
      fontSize: 1
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement(Box, {
    id: subtitleId,
    sx: {
      fontSize: 0,
      color: 'fg.muted'
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement(FilteredActionList, _extends({
    filterValue: filterValue,
    onFilterChange: onFilterChange,
    placeholderText: placeholderText
  }, listProps, {
    role: "listbox",
    "aria-multiselectable": isMultiSelectVariant(selected) ? 'true' : 'false',
    selectionVariant: isMultiSelectVariant(selected) ? 'multiple' : 'single',
    items: itemsToRender,
    textInputProps: extendedTextInputProps,
    inputRef: inputRef
    // inheriting height and maxHeight ensures that the FilteredActionList is never taller
    // than the Overlay (which would break scrolling the items)
    ,
    sx: {
      ...sx,
      height: 'inherit',
      maxHeight: 'inherit'
    }
  })), footer && /*#__PURE__*/React.createElement(Box, {
    sx: {
      display: 'flex',
      borderTop: '1px solid',
      borderColor: 'border.default',
      padding: 2
    }
  }, footer))));
}
SelectPanel.displayName = "SelectPanel";
SelectPanel.displayName = 'SelectPanel';

export { SelectPanel };
