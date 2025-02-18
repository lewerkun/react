'use strict';

var React = require('react');
var styled = require('styled-components');
var constants = require('../constants.js');
var TokenBase = require('./TokenBase.js');
var Token = require('./Token.js');
var Avatar = require('../Avatar/Avatar.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

// TODO: update props to only accept 'large' and 'xlarge' on the next breaking change

const AvatarContainer = styled__default.default.span.withConfig({
  displayName: "AvatarToken__AvatarContainer",
  componentId: "sc-62sih1-0"
})(["--spacing:calc(", " * 2);display:block;height:", ";width:", ";"], constants.get('space.1'), props => `calc(${TokenBase.tokenSizes[props.avatarSize]} - var(--spacing))`, props => `calc(${TokenBase.tokenSizes[props.avatarSize]} - var(--spacing))`);
const AvatarToken = /*#__PURE__*/React.forwardRef(({
  avatarSrc,
  id,
  size = TokenBase.defaultTokenSize,
  ...rest
}, forwardedRef) => {
  return /*#__PURE__*/React__default.default.createElement(Token, _extends({
    leadingVisual: () => /*#__PURE__*/React__default.default.createElement(AvatarContainer, {
      avatarSize: size
    }, /*#__PURE__*/React__default.default.createElement(Avatar.default, {
      src: avatarSrc,
      size: parseInt(TokenBase.tokenSizes[size], 10),
      sx: {
        width: '100%',
        height: '100%'
      }
    })),
    size: size,
    id: id === null || id === void 0 ? void 0 : id.toString(),
    sx: {
      paddingLeft: constants.get('space.1')
    }
  }, rest, {
    ref: forwardedRef
  }));
});
AvatarToken.displayName = 'AvatarToken';

module.exports = AvatarToken;
