import React, { useRef, useState } from 'react';
import SegmentedControlButton from './SegmentedControlButton.js';
import { SegmentedControlIconButton } from './SegmentedControlIconButton.js';
import { ActionList } from '../ActionList/index.js';
import { ActionMenu } from '../ActionMenu/ActionMenu.js';
import { useTheme } from '../ThemeProvider.js';
import sx from '../sx.js';
import { useResponsiveValue } from '../hooks/useResponsiveValue.js';
import styled from 'styled-components';
import { defaultSxProp } from '../utils/defaultSxProp.js';
import merge from 'deepmerge';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

// Needed because passing a ref to `Box` causes a type error
const SegmentedControlList = styled.ul.withConfig({
  displayName: "SegmentedControl__SegmentedControlList",
  componentId: "sc-1rzig82-0"
})(["", ";"], sx);
const getSegmentedControlStyles = props => ({
  backgroundColor: 'segmentedControl.bg',
  borderRadius: 2,
  display: props.isFullWidth ? 'flex' : 'inline-flex',
  fontSize: props.size === 'small' ? 0 : 1,
  height: props.size === 'small' ? '28px' : '32px',
  // TODO: use primitive `control.{small|medium}.size` when it is available
  margin: 0,
  padding: 0,
  width: props.isFullWidth ? '100%' : undefined
});
const Root = ({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  children,
  fullWidth,
  onChange,
  size,
  sx: sxProp = defaultSxProp,
  variant = 'default',
  ...rest
}) => {
  const segmentedControlContainerRef = useRef(null);
  const {
    theme
  } = useTheme();
  const isUncontrolled = onChange === undefined || React.Children.toArray(children).some(child => /*#__PURE__*/React.isValidElement(child) && child.props.defaultSelected !== undefined);
  const responsiveVariant = useResponsiveValue(variant, 'default');
  const isFullWidth = useResponsiveValue(fullWidth, false);
  const selectedSegments = React.Children.toArray(children).map(child => /*#__PURE__*/React.isValidElement(child) && (child.props.defaultSelected || child.props.selected));
  const hasSelectedButton = selectedSegments.some(isSelected => isSelected);
  const selectedIndexExternal = hasSelectedButton ? selectedSegments.indexOf(true) : 0;
  const [selectedIndexInternalState, setSelectedIndexInternalState] = useState(selectedIndexExternal);
  const selectedIndex = isUncontrolled ? selectedIndexInternalState : selectedIndexExternal;
  const selectedChild = /*#__PURE__*/React.isValidElement(React.Children.toArray(children)[selectedIndex]) ? React.Children.toArray(children)[selectedIndex] : undefined;
  const getChildIcon = childArg => {
    if ( /*#__PURE__*/React.isValidElement(childArg) && childArg.type === SegmentedControlButton && childArg.props.leadingIcon) {
      return childArg.props.leadingIcon;
    }
    return /*#__PURE__*/React.isValidElement(childArg) ? childArg.props.icon : null;
  };
  const getChildText = childArg => {
    if ( /*#__PURE__*/React.isValidElement(childArg) && childArg.type === SegmentedControlButton) {
      return childArg.props.children;
    }
    return /*#__PURE__*/React.isValidElement(childArg) ? childArg.props['aria-label'] : null;
  };
  const listSx = merge(getSegmentedControlStyles({
    isFullWidth,
    size
  }), sxProp);
  if (!ariaLabel && !ariaLabelledby) {
    // eslint-disable-next-line no-console
    console.warn('Use the `aria-label` or `aria-labelledby` prop to provide an accessible label for assistive technologies');
  }
  return responsiveVariant === 'dropdown' ?
  /*#__PURE__*/
  // Render the 'dropdown' variant of the SegmentedControlButton or SegmentedControlIconButton
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActionMenu, null, /*#__PURE__*/React.createElement(ActionMenu.Button, {
    "aria-label": ariaLabel,
    leadingVisual: getChildIcon(selectedChild)
  }, getChildText(selectedChild)), /*#__PURE__*/React.createElement(ActionMenu.Overlay, {
    "aria-labelledby": ariaLabelledby
  }, /*#__PURE__*/React.createElement(ActionList, {
    selectionVariant: "single"
  }, React.Children.map(children, (child, index) => {
    const ChildIcon = getChildIcon(child);
    // Not a valid child element - skip rendering
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return null;
    }
    return /*#__PURE__*/React.createElement(ActionList.Item, {
      key: `segmented-control-action-btn-${index}`,
      selected: index === selectedIndex,
      onSelect: event => {
        isUncontrolled && setSelectedIndexInternalState(index);
        onChange && onChange(index);
        child.props.onClick && child.props.onClick(event);
      }
    }, ChildIcon && /*#__PURE__*/React.createElement(ChildIcon, null), " ", getChildText(child));
  }))))) :
  /*#__PURE__*/
  // Render a segmented control
  React.createElement(SegmentedControlList, _extends({
    sx: listSx,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    ref: segmentedControlContainerRef
  }, rest), React.Children.map(children, (child, index) => {
    // Not a valid child element - skip rendering child
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return null;
    }
    const sharedChildProps = {
      onClick: onChange ? event => {
        onChange(index);
        isUncontrolled && setSelectedIndexInternalState(index);
        child.props.onClick && child.props.onClick(event);
      } : event => {
        child.props.onClick && child.props.onClick(event);
        isUncontrolled && setSelectedIndexInternalState(index);
      },
      selected: index === selectedIndex,
      sx: {
        '--separator-color': index === selectedIndex || index === selectedIndex - 1 ? 'transparent' : theme === null || theme === void 0 ? void 0 : theme.colors.border.default,
        ...child.props.sx
      }
    };

    // Render the 'hideLabels' variant of the SegmentedControlButton
    if (responsiveVariant === 'hideLabels' && /*#__PURE__*/React.isValidElement(child) && child.type === SegmentedControlButton) {
      const {
        'aria-label': childAriaLabel,
        leadingIcon,
        children: childPropsChildren,
        ...restChildProps
      } = child.props;
      const {
        sx: sharedSxProp,
        ...restSharedChildProps
      } = sharedChildProps;
      if (!leadingIcon) {
        // eslint-disable-next-line no-console
        console.warn('A `leadingIcon` prop is required when hiding visible labels');
      } else {
        return /*#__PURE__*/React.createElement(SegmentedControlIconButton, _extends({
          "aria-label": childAriaLabel || childPropsChildren,
          icon: leadingIcon,
          sx: {
            ...sharedSxProp,
            // setting width here avoids having to pass `isFullWidth` directly to child components
            width: !isFullWidth ? '32px' : '100%' // TODO: use primitive `control.medium.size` when it is available instead of '32px'
          }
        }, restSharedChildProps, restChildProps));
      }
    }

    // Render the children as-is and add the shared child props
    return /*#__PURE__*/React.cloneElement(child, sharedChildProps);
  }));
};
Root.displayName = 'SegmentedControl';
const SegmentedControl = Object.assign(Root, {
  Button: SegmentedControlButton,
  IconButton: SegmentedControlIconButton
});

export { SegmentedControl };
