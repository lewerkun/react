import React, { forwardRef, useRef, useContext } from 'react';
import Box from '../Box/Box.js';
import { UnderlineNavContext } from './UnderlineNavContext.js';
import useIsomorphicLayoutEffect from '../utils/useIsomorphicLayoutEffect.js';
import { defaultSxProp } from '../utils/defaultSxProp.js';
import { UnderlineItem } from '../internal/components/UnderlineTabbedInterface.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

// adopted from React.AnchorHTMLAttributes

const UnderlineNavItem = /*#__PURE__*/forwardRef(({
  sx: sxProp = defaultSxProp,
  as: Component = 'a',
  href = '#',
  children,
  counter,
  onSelect,
  'aria-current': ariaCurrent,
  icon: Icon,
  ...props
}, forwardedRef) => {
  const backupRef = useRef(null);
  const ref = forwardedRef !== null && forwardedRef !== void 0 ? forwardedRef : backupRef;
  const {
    setChildrenWidth,
    setNoIconChildrenWidth,
    loadingCounters,
    iconsVisible
  } = useContext(UnderlineNavContext);
  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      const domRect = ref.current.getBoundingClientRect();
      const icon = Array.from(ref.current.children).find(child => child.getAttribute('data-component') === 'icon');
      const content = Array.from(ref.current.children).find(child => child.getAttribute('data-component') === 'text');
      const text = content.textContent;
      const iconWidthWithMargin = icon ? icon.getBoundingClientRect().width + Number(getComputedStyle(icon).marginRight.slice(0, -2)) + Number(getComputedStyle(icon).marginLeft.slice(0, -2)) : 0;
      setChildrenWidth({
        text,
        width: domRect.width
      });
      setNoIconChildrenWidth({
        text,
        width: domRect.width - iconWidthWithMargin
      });
    }
  }, [ref, setChildrenWidth, setNoIconChildrenWidth]);
  const keyDownHandler = React.useCallback(event => {
    if ((event.key === ' ' || event.key === 'Enter') && !event.defaultPrevented && typeof onSelect === 'function') {
      onSelect(event);
    }
  }, [onSelect]);
  const clickHandler = React.useCallback(event => {
    if (!event.defaultPrevented && typeof onSelect === 'function') {
      onSelect(event);
    }
  }, [onSelect]);
  return /*#__PURE__*/React.createElement(Box, {
    as: "li",
    sx: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(UnderlineItem, _extends({
    ref: ref,
    as: Component,
    href: href,
    "aria-current": ariaCurrent,
    onKeyDown: keyDownHandler,
    onClick: clickHandler,
    counter: counter,
    icon: Icon,
    loadingCounters: loadingCounters,
    iconsVisible: iconsVisible,
    sx: sxProp
  }, props), children));
});
UnderlineNavItem.displayName = 'UnderlineNavItem';

export { UnderlineNavItem };
