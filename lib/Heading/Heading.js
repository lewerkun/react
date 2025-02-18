'use strict';

var React = require('react');
var styled = require('styled-components');
var constants = require('../constants.js');
require('@primer/behaviors/utils');
require('@primer/behaviors');
var useRefObjectAsForwardedRef = require('../hooks/useRefObjectAsForwardedRef.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const StyledHeading = styled__default.default.h2.withConfig({
  displayName: "Heading__StyledHeading",
  componentId: "sc-1c1dgg0-0"
})(["font-weight:", ";font-size:", ";margin:0;", ";"], constants.get('fontWeights.bold'), constants.get('fontSizes.5'), sx.default);
const Heading = /*#__PURE__*/React.forwardRef(({
  as: Component = 'h2',
  ...props
}, forwardedRef) => {
  const innerRef = React__default.default.useRef(null);
  useRefObjectAsForwardedRef.useRefObjectAsForwardedRef(forwardedRef, innerRef);
  if (process.env.NODE_ENV !== "production") {
    /**
     * The Linter yells because it thinks this conditionally calls an effect,
     * but since this is a compile-time flag and not a runtime conditional
     * this is safe, and ensures the entire effect is kept out of prod builds
     * shaving precious bytes from the output, and avoiding mounting a noop effect
     */
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      if (innerRef.current && !(innerRef.current instanceof HTMLHeadingElement)) {
        // eslint-disable-next-line no-console
        console.warn('This Heading component should be an instanceof of h1-h6');
      }
    }, [innerRef]);
  }
  return /*#__PURE__*/React__default.default.createElement(StyledHeading, _extends({
    as: Component
  }, props, {
    // @ts-ignore shh
    ref: innerRef
  }));
});
Heading.displayName = 'Heading';

module.exports = Heading;
