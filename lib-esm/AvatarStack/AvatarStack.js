import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import { get } from '../constants.js';
import Box from '../Box/Box.js';
import sx from '../sx.js';
import { DEFAULT_AVATAR_SIZE } from '../Avatar/Avatar.js';
import { isResponsiveValue } from '../hooks/useResponsiveValue.js';
import { getBreakpointDeclarations } from '../utils/getBreakpointDeclarations.js';
import { defaultSxProp } from '../utils/defaultSxProp.js';
import merge from 'deepmerge';

const AvatarStackWrapper = styled.span.withConfig({
  displayName: "AvatarStack__AvatarStackWrapper",
  componentId: "sc-4pdg6v-0"
})(["--avatar-border-width:1px;--avatar-two-margin:calc(var(--avatar-stack-size) * -0.55);--avatar-three-margin:calc(var(--avatar-stack-size) * -0.85);display:flex;position:relative;height:var(--avatar-stack-size);min-width:var(--avatar-stack-size);.pc-AvatarStackBody{display:flex;position:absolute;}.pc-AvatarItem{--avatar-size:var(--avatar-stack-size);flex-shrink:0;height:var(--avatar-stack-size);width:var(--avatar-stack-size);box-shadow:0 0 0 var(--avatar-border-width) ", ";position:relative;overflow:hidden;&:first-child{margin-left:0;z-index:10;}&:nth-child(n + 2){margin-left:var(--avatar-two-margin);z-index:9;}&:nth-child(n + 3){margin-left:var(--avatar-three-margin);opacity:", "%;z-index:8;}&:nth-child(n + 4){opacity:", "%;z-index:7;}&:nth-child(n + 5){opacity:", "%;z-index:6;}&:nth-child(n + 6){opacity:0;visibility:hidden;}}&.pc-AvatarStack--two{min-width:calc( var(--avatar-stack-size) + calc(var(--avatar-stack-size) + var(--avatar-two-margin)) + var(--avatar-border-width) );}&.pc-AvatarStack--three{min-width:calc( var(--avatar-stack-size) + calc( calc(var(--avatar-stack-size) + var(--avatar-two-margin)) + calc(var(--avatar-stack-size) + var(--avatar-three-margin)) ) );}&.pc-AvatarStack--three-plus{min-width:calc( var(--avatar-stack-size) + calc( calc(var(--avatar-stack-size) + var(--avatar-two-margin)) + calc(var(--avatar-stack-size) + var(--avatar-three-margin)) * 2 ) );}&.pc-AvatarStack--right{justify-content:flex-end;.pc-AvatarItem{margin-left:0 !important;&:first-child{margin-right:0;}&:nth-child(n + 2){margin-right:var(--avatar-two-margin);}&:nth-child(n + 3){margin-right:var(--avatar-three-margin);}}.pc-AvatarStackBody{flex-direction:row-reverse;&:not(.pc-AvatarStack--disableExpand):hover{.pc-AvatarItem{margin-right:", "!important;margin-left:0 !important;&:first-child{margin-right:0 !important;}}}}}.pc-AvatarStackBody:not(.pc-AvatarStack--disableExpand):hover{width:auto;.pc-AvatarItem{margin-left:", ";opacity:100%;visibility:visible;", " transition:margin 0.2s ease-in-out,opacity 0.2s ease-in-out,visibility 0.2s ease-in-out,box-shadow 0.1s ease-in-out;&:first-child{margin-left:0;}}}.pc-AvatarStack--disableExpand{position:relative;}", ";"], props => props.count === 1 ? get('colors.avatar.border') : get('colors.canvas.default'), 100 - 3 * 15, 100 - 4 * 15, 100 - 5 * 15, get('space.1'), get('space.1'), props => props.count === 1 ? '' : `box-shadow: inset 0 0 0 4px ${get('colors.canvas.default')};`, sx);
const transformChildren = children => {
  return React.Children.map(children, child => {
    if (! /*#__PURE__*/React.isValidElement(child)) return child;
    return /*#__PURE__*/React.cloneElement(child, {
      ...child.props,
      className: clsx(child.props.className, 'pc-AvatarItem')
    });
  });
};
const AvatarStack = ({
  children,
  alignRight,
  disableExpand,
  size,
  sx: sxProp = defaultSxProp
}) => {
  const count = React.Children.count(children);
  const wrapperClassNames = clsx({
    'pc-AvatarStack--two': count === 2,
    'pc-AvatarStack--three': count === 3,
    'pc-AvatarStack--three-plus': count > 3,
    'pc-AvatarStack--right': alignRight
  });
  const bodyClassNames = clsx('pc-AvatarStackBody', {
    'pc-AvatarStack--disableExpand': disableExpand
  });
  const getAvatarChildSizes = () => {
    const avatarSizeMap = {
      narrow: [],
      regular: [],
      wide: []
    };
    return React.Children.toArray(children).reduce((acc, child) => {
      // if child is not an Avatar, return the default avatar sizes from the accumulator
      if (! /*#__PURE__*/React.isValidElement(child)) return acc;
      for (const responsiveKey of Object.keys(avatarSizeMap)) {
        // if the child has responsive `size` prop values, push the value to the appropriate viewport property in the avatarSizeMap
        if (isResponsiveValue(child.props.size)) {
          avatarSizeMap[responsiveKey].push(child.props.size[responsiveKey] || DEFAULT_AVATAR_SIZE);
        }
        // otherwise, the size is a number (or undefined), so push the value to all viewport properties in the avatarSizeMap
        else {
          avatarSizeMap[responsiveKey].push(child.props.size || DEFAULT_AVATAR_SIZE);
        }

        // set the smallest size in each viewport property as the value for that viewport property in the accumulator
        acc[responsiveKey] = Math.min(...avatarSizeMap[responsiveKey]);
      }
      return acc;
    }, {
      narrow: DEFAULT_AVATAR_SIZE,
      regular: DEFAULT_AVATAR_SIZE,
      wide: DEFAULT_AVATAR_SIZE
    });
  };
  const getResponsiveAvatarSizeStyles = () => {
    // if there is no size set on the AvatarStack, use the `size` props of the Avatar children to set the `--avatar-stack-size` CSS variable
    if (!size) {
      return getBreakpointDeclarations(getAvatarChildSizes(), '--avatar-stack-size', value => `${value}px`);
    }

    // if the `size` prop is set and responsive, set the `--avatar-stack-size` CSS variable for each viewport
    if (isResponsiveValue(size)) {
      return getBreakpointDeclarations(size, '--avatar-stack-size', value => `${value || DEFAULT_AVATAR_SIZE}px`);
    }

    // if the `size` prop is set and not responsive, it is a number, so we can just set the `--avatar-stack-size` CSS variable to that number
    return {
      '--avatar-stack-size': `${size}px`
    };
  };
  const avatarStackSx = merge(getResponsiveAvatarSizeStyles(), sxProp);
  return /*#__PURE__*/React.createElement(AvatarStackWrapper, {
    count: count,
    className: wrapperClassNames,
    sx: avatarStackSx
  }, /*#__PURE__*/React.createElement(Box, {
    className: bodyClassNames
  }, " ", transformChildren(children)));
};
AvatarStack.displayName = "AvatarStack";

export { AvatarStack as default };
