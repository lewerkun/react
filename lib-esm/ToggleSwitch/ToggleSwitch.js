import React, { useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import Box from '../Box/Box.js';
import StyledSpinner from '../Spinner/Spinner.js';
import Text from '../Text/Text.js';
import { get } from '../constants.js';
import '@primer/behaviors/utils';
import '@primer/behaviors';
import { useProvidedStateOrCreate } from '../hooks/useProvidedStateOrCreate.js';
import sx from '../sx.js';
import getGlobalFocusStyles from '../internal/utils/getGlobalFocusStyles.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TRANSITION_DURATION = '80ms';
const EASE_OUT_QUAD_CURVE = 'cubic-bezier(0.5, 1, 0.89, 1)';
const sizeVariants = variant({
  prop: 'size',
  variants: {
    small: {
      height: '24px',
      width: '48px'
    }
  }
});
const CircleIcon = ({
  size
}) => /*#__PURE__*/React.createElement("svg", {
  "aria-hidden": "true",
  width: size === 'small' ? '12' : '16',
  height: size === 'small' ? '12' : '16',
  viewBox: "0 0 16 16",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M8 12.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z"
}));
CircleIcon.displayName = "CircleIcon";
const LineIcon = ({
  size
}) => /*#__PURE__*/React.createElement("svg", {
  "aria-hidden": "true",
  width: size === 'small' ? '12' : '16',
  height: size === 'small' ? '12' : '16',
  viewBox: "0 0 16 16",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M8 2a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 8 2Z"
}));
LineIcon.displayName = "LineIcon";
const SwitchButton = styled.button.withConfig({
  displayName: "ToggleSwitch__SwitchButton",
  componentId: "sc-e6gszy-0"
})(["vertical-align:middle;cursor:pointer;user-select:none;appearance:none;text-decoration:none;padding:0;transition-property:background-color,border-color;transition-duration:", ";transition-timing-function:", ";border-radius:", ";border-style:solid;border-width:1px;display:block;height:32px;width:64px;position:relative;overflow:hidden;", ";@media (pointer:coarse){&:before{content:'';position:absolute;left:0;right:0;transform:translateY(-50%);top:50%;min-height:44px;}}@media (prefers-reduced-motion){transition:none;*{transition:none;}}&:hover,&:focus:focus-visible{background-color:", ";}&:active,&:active:focus-visible{background-color:", ";}", " ", " ", ""], TRANSITION_DURATION, EASE_OUT_QUAD_CURVE, get('radii.2'), getGlobalFocusStyles('3px'), get('colors.switchTrack.hoverBg'), get('colors.switchTrack.activeBg'), props => {
  if (props.disabled) {
    return css(["background-color:", ";border-color:transparent;cursor:not-allowed;transition-property:none;"], get('colors.switchTrack.disabledBg'));
  }
  if (props.checked) {
    return css(["background-color:", ";border-color:transparent;&:hover,&:focus:focus-visible{background-color:", ";}&:active,&:active:focus-visible{background-color:", ";}"], get('colors.switchTrack.checked.bg'), get('colors.switchTrack.checked.hoverBg'), get('colors.switchTrack.checked.activeBg'));
  } else {
    return css(["background-color:", ";border-color:transparent;&:active{background-color:", ";}"], get('colors.switchTrack.bg'), get('colors.switchTrack.activeBg'));
  }
}, sx, sizeVariants);
const ToggleKnob = styled.div.withConfig({
  displayName: "ToggleSwitch__ToggleKnob",
  componentId: "sc-e6gszy-1"
})(["background-color:", ";border-width:1px;border-style:solid;border-color:", ";border-radius:calc(", " - 1px);width:50%;position:absolute;top:0;bottom:0;transition-property:transform;transition-duration:", ";transition-timing-function:", ";transform:", ";z-index:1;@media (prefers-reduced-motion){transition:none;}", ""], get('colors.switchKnob.bg'), props => props.disabled ? get('colors.switchTrack.disabledBg') : get('colors.switchKnob.border'), get('radii.2'), TRANSITION_DURATION, EASE_OUT_QUAD_CURVE, props => `translateX(${props.checked ? '100%' : '0px'})`, props => {
  if (props.disabled) {
    return css(["border-color:", ";"], get('colors.switchTrack.disabledBg'));
  }
  if (props.checked) {
    return css(["border-color:", ";"], get('colors.switchKnob.checked.border'));
  }
});
const hiddenTextStyles = {
  visibility: 'hidden',
  height: 0
};
const ToggleSwitch = /*#__PURE__*/React.forwardRef(function ToggleSwitch(props, ref) {
  const {
    'aria-labelledby': ariaLabelledby,
    'aria-describedby': ariaDescribedby,
    defaultChecked,
    disabled,
    loading,
    checked,
    onChange,
    onClick,
    size = 'medium',
    statusLabelPosition = 'start',
    sx: sxProp,
    ...rest
  } = props;
  const isControlled = typeof checked !== 'undefined';
  const [isOn, setIsOn] = useProvidedStateOrCreate(checked, onChange, Boolean(defaultChecked));
  const acceptsInteraction = !disabled && !loading;
  const handleToggleClick = useCallback(e => {
    if (!isControlled) {
      setIsOn(!isOn);
    }
    onClick && onClick(e);
  }, [onClick, isControlled, isOn, setIsOn]);
  useEffect(() => {
    if (onChange && isControlled) {
      onChange(Boolean(checked));
    }
  }, [onChange, checked, isControlled]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "inline-flex",
    alignItems: "center",
    flexDirection: statusLabelPosition === 'start' ? 'row' : 'row-reverse',
    sx: sxProp
  }, rest), loading ? /*#__PURE__*/React.createElement(StyledSpinner, {
    size: "small"
  }) : null, /*#__PURE__*/React.createElement(Text, {
    color: acceptsInteraction ? 'fg.default' : 'fg.muted',
    fontSize: size === 'small' ? 0 : 1,
    mx: 2,
    "aria-hidden": "true",
    sx: {
      position: 'relative',
      cursor: 'pointer'
    },
    onClick: handleToggleClick
  }, /*#__PURE__*/React.createElement(Box, {
    textAlign: "right",
    sx: isOn ? null : hiddenTextStyles
  }, "On"), /*#__PURE__*/React.createElement(Box, {
    textAlign: "right",
    sx: isOn ? hiddenTextStyles : null
  }, "Off")), /*#__PURE__*/React.createElement(SwitchButton, {
    ref: ref,
    onClick: handleToggleClick,
    "aria-labelledby": ariaLabelledby,
    "aria-describedby": ariaDescribedby,
    "aria-pressed": isOn,
    checked: isOn,
    size: size,
    disabled: !acceptsInteraction
  }, /*#__PURE__*/React.createElement(Box, {
    "aria-hidden": "true",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden"
  }, /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "50%",
    color: acceptsInteraction ? 'switchTrack.checked.fg' : 'switchTrack.checked.disabledFg',
    lineHeight: "0",
    sx: {
      transform: `translateX(${isOn ? '0' : '-100%'})`,
      transitionProperty: 'transform',
      transitionDuration: TRANSITION_DURATION
    }
  }, /*#__PURE__*/React.createElement(LineIcon, {
    size: size
  })), /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "50%",
    color: acceptsInteraction ? 'switchTrack.fg' : 'switchTrack.disabledFg',
    lineHeight: "0",
    sx: {
      transform: `translateX(${isOn ? '100%' : '0'})`,
      transitionProperty: 'transform',
      transitionDuration: TRANSITION_DURATION
    }
  }, /*#__PURE__*/React.createElement(CircleIcon, {
    size: size
  }))), /*#__PURE__*/React.createElement(ToggleKnob, {
    "aria-hidden": "true",
    disabled: !acceptsInteraction,
    checked: isOn
  })));
});
if (process.env.NODE_ENV !== "production") {
  ToggleSwitch.displayName = 'ToggleSwitch';
}

export { ToggleSwitch as default };
