import React, { forwardRef, useEffect } from 'react';
import styled from 'styled-components';
import { get } from '../constants.js';
import '@primer/behaviors/utils';
import '@primer/behaviors';
import { useRefObjectAsForwardedRef } from '../hooks/useRefObjectAsForwardedRef.js';
import sx from '../sx.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const StyledHeading = styled.h2.withConfig({
  displayName: "Heading__StyledHeading",
  componentId: "sc-1c1dgg0-0"
})(["font-weight:", ";font-size:", ";margin:0;", ";"], get('fontWeights.bold'), get('fontSizes.5'), sx);
const Heading = /*#__PURE__*/forwardRef(({
  as: Component = 'h2',
  ...props
}, forwardedRef) => {
  const innerRef = React.useRef(null);
  useRefObjectAsForwardedRef(forwardedRef, innerRef);
  if (process.env.NODE_ENV !== "production") {
    /**
     * The Linter yells because it thinks this conditionally calls an effect,
     * but since this is a compile-time flag and not a runtime conditional
     * this is safe, and ensures the entire effect is kept out of prod builds
     * shaving precious bytes from the output, and avoiding mounting a noop effect
     */
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (innerRef.current && !(innerRef.current instanceof HTMLHeadingElement)) {
        // eslint-disable-next-line no-console
        console.warn('This Heading component should be an instanceof of h1-h6');
      }
    }, [innerRef]);
  }
  return /*#__PURE__*/React.createElement(StyledHeading, _extends({
    as: Component
  }, props, {
    // @ts-ignore shh
    ref: innerRef
  }));
});
Heading.displayName = 'Heading';

export { Heading as default };
