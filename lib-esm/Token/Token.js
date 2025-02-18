import React, { forwardRef } from 'react';
import Box from '../Box/Box.js';
import '@styled-system/css';
import merge from 'deepmerge';
import { defaultSxProp } from '../utils/defaultSxProp.js';
import TokenBase, { isTokenInteractive, defaultTokenSize } from './TokenBase.js';
import RemoveTokenButton from './_RemoveTokenButton.js';
import TokenTextContainer from './_TokenTextContainer.js';
import VisuallyHidden from '../_VisuallyHidden.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

// Omitting onResize and onResizeCapture because seems like React 18 types includes these menthod in the expansion but React 17 doesn't.
// TODO: This is a temporary solution until we figure out why these methods are causing type errors.

const tokenBorderWidthPx = 1;
const LeadingVisualContainer = ({
  children,
  size
}) => /*#__PURE__*/React.createElement(Box, {
  sx: {
    flexShrink: 0,
    lineHeight: 0,
    marginRight: size && ['large', 'xlarge'].includes(size) ? 2 : 1
  }
}, children);
LeadingVisualContainer.displayName = "LeadingVisualContainer";
const Token = /*#__PURE__*/forwardRef((props, forwardedRef) => {
  const {
    as,
    onRemove,
    id,
    leadingVisual: LeadingVisual,
    text,
    size = defaultTokenSize,
    hideRemoveButton,
    href,
    onClick,
    sx: sxProp = defaultSxProp,
    ...rest
  } = props;
  const hasMultipleActionTargets = isTokenInteractive(props) && Boolean(onRemove) && !hideRemoveButton;
  const onRemoveClick = e => {
    e.stopPropagation();
    onRemove && onRemove();
  };
  const interactiveTokenProps = {
    as,
    href,
    onClick
  };
  const sx = merge({
    backgroundColor: 'neutral.subtle',
    borderColor: props.isSelected ? 'fg.default' : 'border.subtle',
    borderStyle: 'solid',
    borderWidth: `${tokenBorderWidthPx}px`,
    color: props.isSelected ? 'fg.default' : 'fg.muted',
    maxWidth: '100%',
    paddingRight: !(hideRemoveButton || !onRemove) ? 0 : undefined,
    ...(isTokenInteractive(props) ? {
      '&:hover': {
        backgroundColor: 'neutral.muted',
        boxShadow: 'shadow.medium',
        color: 'fg.default'
      }
    } : {})
  }, sxProp);
  return /*#__PURE__*/React.createElement(TokenBase, _extends({
    onRemove: onRemove,
    id: id === null || id === void 0 ? void 0 : id.toString(),
    text: text,
    size: size,
    sx: sx
  }, !hasMultipleActionTargets ? interactiveTokenProps : {}, rest, {
    ref: forwardedRef
  }), LeadingVisual ? /*#__PURE__*/React.createElement(LeadingVisualContainer, {
    size: size
  }, /*#__PURE__*/React.createElement(LeadingVisual, null)) : null, /*#__PURE__*/React.createElement(TokenTextContainer, hasMultipleActionTargets ? interactiveTokenProps : {}, text), onRemove && /*#__PURE__*/React.createElement(VisuallyHidden, null, " (press backspace or delete to remove)"), !hideRemoveButton && onRemove ? /*#__PURE__*/React.createElement(RemoveTokenButton, {
    borderOffset: tokenBorderWidthPx,
    onClick: onRemoveClick,
    size: size,
    isParentInteractive: isTokenInteractive(props),
    "aria-hidden": hasMultipleActionTargets ? 'true' : 'false'
  }) : null);
});
Token.displayName = 'Token';

export { Token as default };
