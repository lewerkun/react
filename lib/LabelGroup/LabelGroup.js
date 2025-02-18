'use strict';

var React = require('react');
var styled = require('styled-components');
var octiconsReact = require('@primer/octicons-react');
var utils = require('@primer/behaviors/utils');
var constants = require('../constants.js');
var _VisuallyHidden = require('../_VisuallyHidden.js');
var AnchoredOverlay = require('../AnchoredOverlay/AnchoredOverlay.js');
var Box = require('../Box/Box.js');
var IconButton = require('../Button/IconButton.js');
require('../Button/ButtonBase.js');
require('../utils/defaultSxProp.js');
var Button = require('../Button/Button.js');
var ThemeProvider = require('../ThemeProvider.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const StyledLabelGroupContainer = styled__default.default.div.withConfig({
  displayName: "LabelGroup__StyledLabelGroupContainer",
  componentId: "sc-6tqg8q-0"
})(["display:flex;flex-wrap:nowrap;gap:", ";line-height:1;max-width:100%;overflow:hidden;&[data-overflow='inline']{flex-wrap:wrap;}", ";"], constants.get('space.1'), sx.default);
const ItemWrapper = styled__default.default.div.withConfig({
  displayName: "LabelGroup__ItemWrapper",
  componentId: "sc-6tqg8q-1"
})(["display:flex;align-items:center;min-height:28px;&.ItemWrapper--hidden{order:9999;pointer-events:none;visibility:hidden;}"]);

// Calculates the width of the overlay to cover the labels/tokens and the expand button.
const getOverlayWidth = (buttonClientRect, containerRef, overlayPaddingPx) => {
  var _containerRef$current;
  return overlayPaddingPx + buttonClientRect.right - (((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.getBoundingClientRect().left) || 0);
};
const InlineToggle = ({
  collapseButtonRef,
  collapseInlineExpandedChildren,
  expandButtonRef,
  hiddenItemIds,
  isOverflowShown,
  showAllTokensInline,
  totalLength
}) => isOverflowShown ? /*#__PURE__*/React__default.default.createElement(Button.ButtonComponent, {
  ref: collapseButtonRef,
  onClick: collapseInlineExpandedChildren,
  size: "small",
  variant: "invisible"
}, "Show less") : hiddenItemIds.length ? /*#__PURE__*/React__default.default.createElement(Button.ButtonComponent, {
  ref: expandButtonRef,
  variant: "invisible",
  size: "small",
  onClick: showAllTokensInline
}, /*#__PURE__*/React__default.default.createElement(_VisuallyHidden, null, "Show all ", totalLength), /*#__PURE__*/React__default.default.createElement("span", {
  "aria-hidden": "true"
}, "+", hiddenItemIds.length)) : null;
const OverlayToggle = ({
  children,
  closeOverflowOverlay,
  expandButtonRef,
  hiddenItemIds,
  isOverflowShown,
  openOverflowOverlay,
  overlayPaddingPx,
  overlayWidth,
  totalLength
}) => hiddenItemIds.length ? /*#__PURE__*/React__default.default.createElement(AnchoredOverlay.AnchoredOverlay, {
  open: isOverflowShown,
  onOpen: openOverflowOverlay,
  onClose: closeOverflowOverlay,
  width: "auto",
  height: "auto",
  align: "start",
  side: "inside-right"
  // expandButtonRef satisfies React.RefObject<HTMLButtonElement> because we manually set `.current` in the `useCallback` above
  ,
  anchorRef: expandButtonRef,
  anchorOffset: overlayPaddingPx * -1,
  alignmentOffset: overlayPaddingPx * -1,
  renderAnchor: props => /*#__PURE__*/React__default.default.createElement(Button.ButtonComponent, _extends({
    variant: "invisible",
    size: "small"
  }, props, {
    ref: expandButtonRef
  }), /*#__PURE__*/React__default.default.createElement(_VisuallyHidden, null, "Show all ", totalLength), /*#__PURE__*/React__default.default.createElement("span", {
    "aria-hidden": "true"
  }, "+", hiddenItemIds.length)),
  focusZoneSettings: {
    disabled: true
  }
}, /*#__PURE__*/React__default.default.createElement(Box, {
  alignItems: "flex-start",
  display: "flex",
  width: overlayWidth,
  padding: `${overlayPaddingPx}px`
}, /*#__PURE__*/React__default.default.createElement(Box, {
  display: "flex",
  flexWrap: "wrap",
  sx: {
    gap: 1
  }
}, children), /*#__PURE__*/React__default.default.createElement(IconButton.IconButton, {
  onClick: closeOverflowOverlay,
  icon: octiconsReact.XIcon,
  "aria-label": "Close",
  variant: "invisible",
  sx: {
    flexShrink: 0
  }
}))) : null;

// TODO: reduce re-renders
const LabelGroup = ({
  children,
  visibleChildCount,
  overflowStyle = 'overlay',
  sx: sxProp
}) => {
  const containerRef = React__default.default.useRef(null);
  const collapseButtonRef = React__default.default.useRef(null);
  const firstHiddenIndexRef = React__default.default.useRef(undefined);
  const [visibilityMap, setVisibilityMap] = React__default.default.useState({});
  const [isOverflowShown, setIsOverflowShown] = React__default.default.useState(false);
  const [buttonClientRect, setButtonClientRect] = React__default.default.useState({
    width: 0,
    right: 0,
    height: 0,
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    bottom: 0,
    toJSON: () => undefined
  });
  const {
    theme
  } = ThemeProvider.useTheme();
  const overlayPaddingPx = parseInt(constants.get('space.2')(theme), 10);
  const hiddenItemIds = Object.keys(visibilityMap).filter(key => !visibilityMap[key]);

  // `overlayWidth` is only needed when we render an overlay
  // if we don't use an overlay, we can skip the width calculation
  // and save on reflows caused by measuring DOM nodes.
  const overlayWidth = hiddenItemIds.length && overflowStyle === 'overlay' ? getOverlayWidth(buttonClientRect, containerRef, overlayPaddingPx) : undefined;
  const expandButtonRef = React__default.default.useCallback(node => {
    if (node !== null) {
      const nodeClientRect = node.getBoundingClientRect();
      if (nodeClientRect.width !== buttonClientRect.width || nodeClientRect.right !== buttonClientRect.right) {
        setButtonClientRect(nodeClientRect);
      }

      // @ts-ignore you can set `.current` on ref objects or ref callbacks in React
      expandButtonRef.current = node;
    }
  }, [buttonClientRect]);

  // Sets the visibility map to hide children after the given index.
  const hideChildrenAfterIndex = React__default.default.useCallback(truncateAfter => {
    var _containerRef$current2;
    const containerChildren = ((_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.children) || [];
    const updatedEntries = {};
    for (const child of containerChildren) {
      const targetId = child.getAttribute('data-index');
      if (targetId) {
        updatedEntries[targetId] = parseInt(targetId, 10) < truncateAfter;
      }
    }
    setVisibilityMap(updatedEntries);
  }, []);
  const openOverflowOverlay = React__default.default.useCallback(() => setIsOverflowShown(true), [setIsOverflowShown]);
  const closeOverflowOverlay = React__default.default.useCallback(() => {
    setIsOverflowShown(false);
  }, [setIsOverflowShown]);
  const collapseInlineExpandedChildren = React__default.default.useCallback(() => {
    setIsOverflowShown(false);
    if (visibleChildCount && typeof visibleChildCount === 'number') {
      hideChildrenAfterIndex(visibleChildCount);
    }

    // We need to manually re-focus the collapse button if we're not showing the full
    // list in an overlay.
    // TODO: get rid of this hack
    setTimeout(() => {
      var _expandButtonRef$curr;
      // @ts-ignore you can set `.current` on ref objects or ref callbacks in React
      (_expandButtonRef$curr = expandButtonRef.current) === null || _expandButtonRef$curr === void 0 ? void 0 : _expandButtonRef$curr.focus();
    }, 10);
  }, [expandButtonRef, hideChildrenAfterIndex, visibleChildCount]);
  const showAllTokensInline = React__default.default.useCallback(() => {
    setVisibilityMap({});
    setIsOverflowShown(true);
  }, [setVisibilityMap, setIsOverflowShown]);
  React__default.default.useEffect(() => {
    // If we're not truncating, we don't need to run this useEffect.
    if (!visibleChildCount || isOverflowShown) {
      return;
    }
    if (visibleChildCount === 'auto') {
      // Instatiates the IntersectionObserver to track when children fit in the container.
      const observer = new IntersectionObserver(entries => {
        const updatedEntries = {};
        for (const entry of entries) {
          // Checks which children are intersecting the root container
          const targetId = entry.target.getAttribute('data-index');
          if (targetId) {
            updatedEntries[targetId] = entry.isIntersecting;
          }
        }

        // Updates the visibility map based on the intersection results.
        setVisibilityMap(prev => ({
          ...prev,
          ...updatedEntries
        }));
      }, {
        root: containerRef.current,
        rootMargin: `0px -${buttonClientRect.width}px 0px 0px`,
        threshold: 1
      });
      for (const item of ((_containerRef$current3 = containerRef.current) === null || _containerRef$current3 === void 0 ? void 0 : _containerRef$current3.children) || []) {
        var _containerRef$current3;
        if (item.getAttribute('data-index')) {
          observer.observe(item);
        }
      }
      return () => observer.disconnect();
    }
    // We're not auto truncating, so we need to hide children after the given `visibleChildCount`.
    else {
      hideChildrenAfterIndex(visibleChildCount);
    }
  }, [buttonClientRect, visibleChildCount, hideChildrenAfterIndex, isOverflowShown]);

  // Updates the index of the first hidden child.
  // We need to keep track of this so we can focus the first hidden child when the overflow is shown inline.
  React__default.default.useEffect(() => {
    // If we're using an overlay, we don't need to keep track of the first hidden index.
    if (overflowStyle === 'overlay') {
      return;
    }
    if (hiddenItemIds.length) {
      firstHiddenIndexRef.current = parseInt(hiddenItemIds[0], 10);
    }
  }, [hiddenItemIds, overflowStyle, isOverflowShown]);

  // Updates the index of the first hidden child.
  // We need to keep track of this so we can focus the first hidden child when the overflow is shown inline.
  React__default.default.useEffect(() => {
    // If we're using an overlay, we don't need to focus the first child that was previously hidden.
    if (overflowStyle === 'overlay') {
      return;
    }
    const firstHiddenChildDOM = document.querySelector(`[data-index="${firstHiddenIndexRef.current}"]`);
    const focusableChild = firstHiddenChildDOM ? utils.getFocusableChild(firstHiddenChildDOM) : null;
    if (isOverflowShown) {
      // If the first hidden child is focusable, focus it.
      // Otherwise, focus the collapse button.
      if (focusableChild) {
        focusableChild.focus();
      } else {
        var _collapseButtonRef$cu;
        (_collapseButtonRef$cu = collapseButtonRef.current) === null || _collapseButtonRef$cu === void 0 ? void 0 : _collapseButtonRef$cu.focus();
      }
    }
  }, [overflowStyle, isOverflowShown]);

  // If truncation is enabled, we need to render based on truncation logic.
  return visibleChildCount ? /*#__PURE__*/React__default.default.createElement(StyledLabelGroupContainer, {
    ref: containerRef,
    "data-overflow": overflowStyle === 'inline' && isOverflowShown ? 'inline' : undefined,
    sx: sxProp
  }, React__default.default.Children.map(children, (child, index) => /*#__PURE__*/React__default.default.createElement(ItemWrapper
  // data-index is used as an identifier we can use in the IntersectionObserver
  , {
    "data-index": index,
    className: hiddenItemIds.includes(index.toString()) ? 'ItemWrapper--hidden' : undefined
  }, child)), overflowStyle === 'inline' ? /*#__PURE__*/React__default.default.createElement(InlineToggle, {
    collapseButtonRef: collapseButtonRef,
    collapseInlineExpandedChildren: collapseInlineExpandedChildren,
    expandButtonRef: expandButtonRef,
    hiddenItemIds: hiddenItemIds,
    isOverflowShown: isOverflowShown,
    showAllTokensInline: showAllTokensInline,
    totalLength: React__default.default.Children.toArray(children).length
  }) : /*#__PURE__*/React__default.default.createElement(OverlayToggle, {
    closeOverflowOverlay: closeOverflowOverlay,
    expandButtonRef: expandButtonRef,
    hiddenItemIds: hiddenItemIds,
    isOverflowShown: isOverflowShown,
    openOverflowOverlay: openOverflowOverlay,
    overlayPaddingPx: overlayPaddingPx,
    overlayWidth: overlayWidth,
    totalLength: React__default.default.Children.toArray(children).length
  }, children)) : /*#__PURE__*/React__default.default.createElement(StyledLabelGroupContainer, {
    "data-overflow": "inline",
    sx: sxProp
  }, children);
};
LabelGroup.displayName = 'LabelGroup';

module.exports = LabelGroup;
