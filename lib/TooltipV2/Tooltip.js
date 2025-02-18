'use strict';

var React = require('react');
var sx = require('../sx.js');
var useProvidedRefOrCreate = require('../hooks/useProvidedRefOrCreate.js');
var useOnEscapePress = require('../hooks/useOnEscapePress.js');
require('@primer/behaviors/utils');
var behaviors = require('@primer/behaviors');
var useId = require('../hooks/useId.js');
var invariant = require('../utils/invariant.js');
var warning = require('../utils/warning.js');
var styled = require('styled-components');
var constants = require('../constants.js');
var popoverFn = require('../node_modules/@oddbird/popover-polyfill/dist/popover-fn.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const animationStyles = `
  animation-name: tooltip-appear;
  animation-duration: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-delay: 0s;
`;
const StyledTooltip = styled__default.default.span.withConfig({
  displayName: "Tooltip__StyledTooltip",
  componentId: "sc-e45c7z-0"
})(["display:none;&[popover]{position:absolute;padding:0.5em 0.75em;width:max-content;margin:auto;clip:auto;white-space:normal;font:normal normal 11px/1.5 ", ";-webkit-font-smoothing:subpixel-antialiased;color:", ";text-align:center;word-wrap:break-word;background:", ";border-radius:", ";border:0;opacity:0;max-width:250px;inset:auto;overflow:visible;}&[popover]:popover-open{display:block;}&[popover].\\:popover-open{display:block;}@media (forced-colors:active){outline:1px solid transparent;}&::after{position:absolute;display:block;right:0;left:0;height:var(--overlay-offset,0.25rem);content:'';}&[data-direction='n']::after,&[data-direction='ne']::after,&[data-direction='nw']::after{top:100%;}&[data-direction='s']::after,&[data-direction='se']::after,&[data-direction='sw']::after{bottom:100%;}&[data-direction='w']::after{position:absolute;display:block;height:100%;width:8px;content:'';bottom:0;left:100%;}&[data-direction='e']::after{position:absolute;display:block;height:100%;width:8px;content:'';bottom:0;right:100%;margin-left:-8px;}@keyframes tooltip-appear{from{opacity:0;}to{opacity:1;}}&:popover-open,&:popover-open::before{", "}&.\\:popover-open,&.\\:popover-open::before{", "}", ";"], constants.get('fonts.normal'), constants.get('colors.fg.onEmphasis'), constants.get('colors.neutral.emphasisPlus'), constants.get('radii.2'), animationStyles, animationStyles, sx.default);
// map tooltip direction to anchoredPosition props
const directionToPosition = {
  nw: {
    side: 'outside-top',
    align: 'end'
  },
  n: {
    side: 'outside-top',
    align: 'center'
  },
  ne: {
    side: 'outside-top',
    align: 'start'
  },
  e: {
    side: 'outside-right',
    align: 'center'
  },
  se: {
    side: 'outside-bottom',
    align: 'start'
  },
  s: {
    side: 'outside-bottom',
    align: 'center'
  },
  sw: {
    side: 'outside-bottom',
    align: 'end'
  },
  w: {
    side: 'outside-left',
    align: 'center'
  }
};

// map anchoredPosition props to tooltip direction
const positionToDirection = {
  'outside-top-end': 'nw',
  'outside-top-center': 'n',
  'outside-top-start': 'ne',
  'outside-right-center': 'e',
  'outside-bottom-start': 'se',
  'outside-bottom-center': 's',
  'outside-bottom-end': 'sw',
  'outside-left-center': 'w'
};

// The list is from GitHub's custom-axe-rules https://github.com/github/github/blob/master/app/assets/modules/github/axe-custom-rules.ts#L3
const interactiveElements = ['a[href]', 'button:not(:disabled)', 'summary', 'select', 'input:not([type=hidden])', 'textarea'];
const isInteractive = element => {
  return interactiveElements.some(selector => element.matches(selector)) || element.hasAttribute('role') && element.getAttribute('role') === 'button';
};
const TooltipContext = /*#__PURE__*/React__default.default.createContext({});
const Tooltip = /*#__PURE__*/React__default.default.forwardRef(({
  direction = 's',
  text,
  type = 'description',
  children,
  id,
  ...rest
}, forwardedRef) => {
  const tooltipId = useId.useId(id);
  const child = React.Children.only(children);
  const triggerRef = useProvidedRefOrCreate.useProvidedRefOrCreate(forwardedRef);
  const tooltipElRef = React.useRef(null);
  const [calculatedDirection, setCalculatedDirection] = React.useState(direction);
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  const openTooltip = () => {
    if (tooltipElRef.current && triggerRef.current && tooltipElRef.current.hasAttribute('popover') && !tooltipElRef.current.matches(':popover-open')) {
      const tooltip = tooltipElRef.current;
      const trigger = triggerRef.current;
      tooltip.showPopover();
      setIsPopoverOpen(true);
      /*
       * TOOLTIP POSITIONING
       */
      const settings = {
        side: directionToPosition[direction].side,
        align: directionToPosition[direction].align
      };
      const {
        top,
        left,
        anchorAlign,
        anchorSide
      } = behaviors.getAnchoredPosition(tooltip, trigger, settings);
      // This is required to make sure the popover is positioned correctly i.e. when there is not enough space on the specified direction, we set a new direction to position the ::after
      const calculatedDirection = positionToDirection[`${anchorSide}-${anchorAlign}`];
      setCalculatedDirection(calculatedDirection);
      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
    }
  };
  const closeTooltip = () => {
    if (tooltipElRef.current && triggerRef.current && tooltipElRef.current.hasAttribute('popover') && tooltipElRef.current.matches(':popover-open')) {
      tooltipElRef.current.hidePopover();
      setIsPopoverOpen(false);
    }
  };

  // context value
  const value = React.useMemo(() => ({
    tooltipId
  }), [tooltipId]);
  React.useEffect(() => {
    if (!tooltipElRef.current || !triggerRef.current) return;
    /*
     * ACCESSIBILITY CHECKS
     */
    // Has trigger element or any of its children interactive elements?
    const isTriggerInteractive = isInteractive(triggerRef.current);
    const triggerChildren = triggerRef.current.childNodes;
    const hasInteractiveChild = Array.from(triggerChildren).some(child => {
      return child instanceof HTMLElement && isInteractive(child);
    });
    !(isTriggerInteractive || hasInteractiveChild) ? process.env.NODE_ENV !== "production" ? invariant.invariant(false, 'The `Tooltip` component expects a single React element that contains interactive content. Consider using a `<button>` or equivalent interactive element instead.') : invariant.invariant(false) : void 0;
    // If the tooltip is used for labelling the interactive element, the trigger element or any of its children should not have aria-label
    if (type === 'label') {
      const hasAriaLabel = triggerRef.current.hasAttribute('aria-label');
      const hasAriaLabelInChildren = Array.from(triggerRef.current.childNodes).some(child => child instanceof HTMLElement && child.hasAttribute('aria-label'));
      process.env.NODE_ENV !== "production" ? warning.warning(hasAriaLabel || hasAriaLabelInChildren, 'The label type `Tooltip` is going to be used here to label the trigger element. Please remove the aria-label from the trigger element.') : void 0;
    }

    // SSR safe polyfill apply
    if (typeof window !== 'undefined') {
      if (!popoverFn.isSupported()) {
        popoverFn.apply();
      }
    }
    const tooltip = tooltipElRef.current;
    tooltip.setAttribute('popover', 'auto');
  }, [tooltipElRef, triggerRef, direction, type]);
  useOnEscapePress.useOnEscapePress(event => {
    if (isPopoverOpen) {
      event.stopImmediatePropagation();
      event.preventDefault();
      closeTooltip();
    }
  }, [isPopoverOpen]);
  return /*#__PURE__*/React__default.default.createElement(TooltipContext.Provider, {
    value: value
  }, /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, /*#__PURE__*/React__default.default.isValidElement(child) && /*#__PURE__*/React__default.default.cloneElement(child, {
    ref: triggerRef,
    // If it is a type description, we use tooltip to describe the trigger
    'aria-describedby': type === 'description' ? tooltipId : child.props['aria-describedby'],
    // If it is a label type, we use tooltip to label the trigger
    'aria-labelledby': type === 'label' ? tooltipId : child.props['aria-labelledby'],
    onBlur: event => {
      var _child$props$onBlur, _child$props;
      closeTooltip();
      (_child$props$onBlur = (_child$props = child.props).onBlur) === null || _child$props$onBlur === void 0 ? void 0 : _child$props$onBlur.call(_child$props, event);
    },
    onFocus: event => {
      var _child$props$onFocus, _child$props2;
      // only show tooltip on :focus-visible, not on :focus
      try {
        if (!event.target.matches(':focus-visible')) return;
      } catch (error) {
        // jsdom (jest) does not support `:focus-visible` yet and would throw an error
        // https://github.com/jsdom/jsdom/issues/3426
      }
      openTooltip();
      (_child$props$onFocus = (_child$props2 = child.props).onFocus) === null || _child$props$onFocus === void 0 ? void 0 : _child$props$onFocus.call(_child$props2, event);
    },
    onMouseEnter: event => {
      var _child$props$onMouseE, _child$props3;
      openTooltip();
      (_child$props$onMouseE = (_child$props3 = child.props).onMouseEnter) === null || _child$props$onMouseE === void 0 ? void 0 : _child$props$onMouseE.call(_child$props3, event);
    },
    onMouseLeave: event => {
      var _child$props$onMouseL, _child$props4;
      closeTooltip();
      (_child$props$onMouseL = (_child$props4 = child.props).onMouseLeave) === null || _child$props$onMouseL === void 0 ? void 0 : _child$props$onMouseL.call(_child$props4, event);
    }
  }), /*#__PURE__*/React__default.default.createElement(StyledTooltip, _extends({
    ref: tooltipElRef,
    "data-direction": calculatedDirection
  }, rest, {
    // Only need tooltip role if the tooltip is a description for supplementary information
    role: type === 'description' ? 'tooltip' : undefined
    // stop AT from announcing the tooltip twice when it is a label type because it will be announced with "aria-labelledby"
    ,
    "aria-hidden": type === 'label' ? true : undefined,
    id: tooltipId
    // mouse leave and enter on the tooltip itself is needed to keep the tooltip open when the mouse is over the tooltip
    ,
    onMouseEnter: openTooltip,
    onMouseLeave: closeTooltip
  }), text)));
});

exports.Tooltip = Tooltip;
exports.TooltipContext = TooltipContext;
