'use strict';

var React = require('react');
var Box = require('../Box/Box.js');
require('@styled-system/css');
var merge = require('deepmerge');
var defaultSxProp = require('../utils/defaultSxProp.js');
var TokenBase = require('./TokenBase.js');
var _RemoveTokenButton = require('./_RemoveTokenButton.js');
var _TokenTextContainer = require('./_TokenTextContainer.js');
var _VisuallyHidden = require('../_VisuallyHidden.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var merge__default = /*#__PURE__*/_interopDefault(merge);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

// Omitting onResize and onResizeCapture because seems like React 18 types includes these menthod in the expansion but React 17 doesn't.
// TODO: This is a temporary solution until we figure out why these methods are causing type errors.

const tokenBorderWidthPx = 1;
const LeadingVisualContainer = ({
  children,
  size
}) => /*#__PURE__*/React__default.default.createElement(Box, {
  sx: {
    flexShrink: 0,
    lineHeight: 0,
    marginRight: size && ['large', 'xlarge'].includes(size) ? 2 : 1
  }
}, children);
LeadingVisualContainer.displayName = "LeadingVisualContainer";
const Token = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const {
    as,
    onRemove,
    id,
    leadingVisual: LeadingVisual,
    text,
    size = TokenBase.defaultTokenSize,
    hideRemoveButton,
    href,
    onClick,
    sx: sxProp = defaultSxProp.defaultSxProp,
    ...rest
  } = props;
  const hasMultipleActionTargets = TokenBase.isTokenInteractive(props) && Boolean(onRemove) && !hideRemoveButton;
  const onRemoveClick = e => {
    e.stopPropagation();
    onRemove && onRemove();
  };
  const interactiveTokenProps = {
    as,
    href,
    onClick
  };
  const sx = merge__default.default({
    backgroundColor: 'neutral.subtle',
    borderColor: props.isSelected ? 'fg.default' : 'border.subtle',
    borderStyle: 'solid',
    borderWidth: `${tokenBorderWidthPx}px`,
    color: props.isSelected ? 'fg.default' : 'fg.muted',
    maxWidth: '100%',
    paddingRight: !(hideRemoveButton || !onRemove) ? 0 : undefined,
    ...(TokenBase.isTokenInteractive(props) ? {
      '&:hover': {
        backgroundColor: 'neutral.muted',
        boxShadow: 'shadow.medium',
        color: 'fg.default'
      }
    } : {})
  }, sxProp);
  return /*#__PURE__*/React__default.default.createElement(TokenBase.default, _extends({
    onRemove: onRemove,
    id: id === null || id === void 0 ? void 0 : id.toString(),
    text: text,
    size: size,
    sx: sx
  }, !hasMultipleActionTargets ? interactiveTokenProps : {}, rest, {
    ref: forwardedRef
  }), LeadingVisual ? /*#__PURE__*/React__default.default.createElement(LeadingVisualContainer, {
    size: size
  }, /*#__PURE__*/React__default.default.createElement(LeadingVisual, null)) : null, /*#__PURE__*/React__default.default.createElement(_TokenTextContainer, hasMultipleActionTargets ? interactiveTokenProps : {}, text), onRemove && /*#__PURE__*/React__default.default.createElement(_VisuallyHidden, null, " (press backspace or delete to remove)"), !hideRemoveButton && onRemove ? /*#__PURE__*/React__default.default.createElement(_RemoveTokenButton, {
    borderOffset: tokenBorderWidthPx,
    onClick: onRemoveClick,
    size: size,
    isParentInteractive: TokenBase.isTokenInteractive(props),
    "aria-hidden": hasMultipleActionTargets ? 'true' : 'false'
  }) : null);
});
Token.displayName = 'Token';

module.exports = Token;
