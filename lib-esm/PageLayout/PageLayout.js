import React, { useRef } from 'react';
import { createGlobalStyle } from 'styled-components';
import Box from '../Box/Box.js';
import { useId } from '../hooks/useId.js';
import { useRefObjectAsForwardedRef } from '../hooks/useRefObjectAsForwardedRef.js';
import { isResponsiveValue, useResponsiveValue } from '../hooks/useResponsiveValue.js';
import { useSlots } from '../hooks/useSlots.js';
import '@styled-system/css';
import merge from 'deepmerge';
import { canUseDOM } from '../utils/environment.js';
import { useOverflow } from '../hooks/useOverflow.js';
import { warning } from '../utils/warning.js';
import { useStickyPaneHeight } from './useStickyPaneHeight.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const REGION_ORDER = {
  header: 0,
  paneStart: 1,
  content: 2,
  paneEnd: 3,
  footer: 4
};
const SPACING_MAP = {
  none: 0,
  condensed: 3,
  normal: [3, null, null, 4]
};
const PageLayoutContext = /*#__PURE__*/React.createContext({
  padding: 'normal',
  rowGap: 'normal',
  columnGap: 'normal',
  paneRef: {
    current: null
  }
});

// ----------------------------------------------------------------------------
// PageLayout

const containerWidths = {
  full: '100%',
  medium: '768px',
  large: '1012px',
  xlarge: '1280px'
};

// TODO: refs
const Root = ({
  containerWidth = 'xlarge',
  padding = 'normal',
  rowGap = 'normal',
  columnGap = 'normal',
  children,
  sx = {},
  _slotsConfig: slotsConfig
}) => {
  const {
    rootRef,
    enableStickyPane,
    disableStickyPane,
    contentTopRef,
    contentBottomRef,
    stickyPaneHeight
  } = useStickyPaneHeight();
  const paneRef = useRef(null);
  const [slots, rest] = useSlots(children, slotsConfig !== null && slotsConfig !== void 0 ? slotsConfig : {
    header: Header,
    footer: Footer
  });
  return /*#__PURE__*/React.createElement(PageLayoutContext.Provider, {
    value: {
      padding,
      rowGap,
      columnGap,
      enableStickyPane,
      disableStickyPane,
      contentTopRef,
      contentBottomRef,
      paneRef
    }
  }, /*#__PURE__*/React.createElement(Box, {
    ref: rootRef,
    style: {
      // @ts-ignore TypeScript doesn't know about CSS custom properties
      '--sticky-pane-height': stickyPaneHeight
    },
    sx: merge({
      padding: SPACING_MAP[padding]
    }, sx)
  }, /*#__PURE__*/React.createElement(Box, {
    sx: {
      maxWidth: containerWidths[containerWidth],
      marginX: 'auto',
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, slots.header, /*#__PURE__*/React.createElement(Box, {
    sx: {
      display: 'flex',
      flex: '1 1 100%',
      flexWrap: 'wrap',
      maxWidth: '100%'
    }
  }, rest), slots.footer)));
};
Root.displayName = "Root";
Root.displayName = 'PageLayout';

// ----------------------------------------------------------------------------
// Divider (internal)

const horizontalDividerVariants = {
  none: {
    display: 'none'
  },
  line: {
    display: 'block',
    height: 1,
    backgroundColor: 'border.default'
  },
  filled: {
    display: 'block',
    height: 8,
    backgroundColor: 'canvas.inset',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    boxShadow: theme => `inset 0 -1px 0 0 ${theme.colors.border.default}, inset 0 1px 0 0 ${theme.colors.border.default}`
  }
};
function negateSpacingValue(value) {
  if (Array.isArray(value)) {
    // Not using recursion to avoid deeply nested arrays
    return value.map(v => v === null ? null : -v);
  }
  return value === null ? null : -value;
}
const HorizontalDivider = ({
  variant = 'none',
  sx = {}
}) => {
  const {
    padding
  } = React.useContext(PageLayoutContext);
  const responsiveVariant = useResponsiveValue(variant, 'none');
  return /*#__PURE__*/React.createElement(Box
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  , {
    sx: theme => merge({
      // Stretch divider to viewport edges on narrow screens
      marginX: negateSpacingValue(SPACING_MAP[padding]),
      ...horizontalDividerVariants[responsiveVariant],
      [`@media screen and (min-width: ${theme.breakpoints[1]})`]: {
        marginX: '0 !important'
      }
    }, sx)
  });
};
HorizontalDivider.displayName = "HorizontalDivider";
const verticalDividerVariants = {
  none: {
    display: 'none'
  },
  line: {
    display: 'block',
    width: 1,
    backgroundColor: 'border.default'
  },
  filled: {
    display: 'block',
    width: 8,
    backgroundColor: 'canvas.inset',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    boxShadow: theme => `inset -1px 0 0 0 ${theme.colors.border.default}, inset 1px 0 0 0 ${theme.colors.border.default}`
  }
};
const DraggingGlobalStyles = createGlobalStyle(["body[data-page-layout-dragging=\"true\"]{cursor:col-resize;}body[data-page-layout-dragging=\"true\"] *{user-select:none;}"]);
const VerticalDivider = ({
  variant = 'none',
  draggable = false,
  onDragStart,
  onDrag,
  onDragEnd,
  onDoubleClick,
  sx = {}
}) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const [isKeyboardDrag, setIsKeyboardDrag] = React.useState(false);
  const responsiveVariant = useResponsiveValue(variant, 'none');
  const stableOnDrag = React.useRef(onDrag);
  const stableOnDragEnd = React.useRef(onDragEnd);
  const {
    paneRef
  } = React.useContext(PageLayoutContext);
  const [minWidth, setMinWidth] = React.useState(0);
  const [maxWidth, setMaxWidth] = React.useState(0);
  const [currentWidth, setCurrentWidth] = React.useState(0);
  React.useEffect(() => {
    if (paneRef.current !== null) {
      const paneStyles = getComputedStyle(paneRef.current);
      const maxPaneWidthDiffPixels = paneStyles.getPropertyValue('--pane-max-width-diff');
      const minWidthPixels = paneStyles.getPropertyValue('--pane-min-width');
      const paneWidth = paneRef.current.getBoundingClientRect().width;
      const maxPaneWidthDiff = Number(maxPaneWidthDiffPixels.split('px')[0]);
      const minPaneWidth = Number(minWidthPixels.split('px')[0]);
      const viewportWidth = window.innerWidth;
      const maxPaneWidth = viewportWidth > maxPaneWidthDiff ? viewportWidth - maxPaneWidthDiff : viewportWidth;
      setMinWidth(minPaneWidth);
      setMaxWidth(maxPaneWidth);
      setCurrentWidth(paneWidth || 0);
    }
  }, [paneRef, isKeyboardDrag, isDragging]);
  React.useEffect(() => {
    stableOnDrag.current = onDrag;
  }, [onDrag]);
  React.useEffect(() => {
    stableOnDragEnd.current = onDragEnd;
  }, [onDragEnd]);
  React.useEffect(() => {
    function handleDrag(event) {
      var _stableOnDrag$current;
      (_stableOnDrag$current = stableOnDrag.current) === null || _stableOnDrag$current === void 0 ? void 0 : _stableOnDrag$current.call(stableOnDrag, event.movementX, false);
      event.preventDefault();
    }
    function handleDragEnd(event) {
      var _stableOnDragEnd$curr;
      setIsDragging(false);
      (_stableOnDragEnd$curr = stableOnDragEnd.current) === null || _stableOnDragEnd$curr === void 0 ? void 0 : _stableOnDragEnd$curr.call(stableOnDragEnd);
      event.preventDefault();
    }
    function handleKeyDrag(event) {
      var _stableOnDrag$current2;
      let delta = 0;
      // https://github.com/github/accessibility/issues/5101#issuecomment-1822870655
      if ((event.key === 'ArrowLeft' || event.key === 'ArrowDown') && currentWidth > minWidth) {
        delta = -3;
      } else if ((event.key === 'ArrowRight' || event.key === 'ArrowUp') && currentWidth < maxWidth) {
        delta = 3;
      } else {
        return;
      }
      setCurrentWidth(currentWidth + delta);
      (_stableOnDrag$current2 = stableOnDrag.current) === null || _stableOnDrag$current2 === void 0 ? void 0 : _stableOnDrag$current2.call(stableOnDrag, delta, true);
      event.preventDefault();
    }
    function handleKeyDragEnd(event) {
      var _stableOnDragEnd$curr2;
      setIsKeyboardDrag(false);
      (_stableOnDragEnd$curr2 = stableOnDragEnd.current) === null || _stableOnDragEnd$curr2 === void 0 ? void 0 : _stableOnDragEnd$curr2.call(stableOnDragEnd);
      event.preventDefault();
    }
    // TODO: Support touch events
    if (isDragging || isKeyboardDrag) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('keydown', handleKeyDrag);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('keyup', handleKeyDragEnd);
      document.body.setAttribute('data-page-layout-dragging', 'true');
    } else {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('keydown', handleKeyDrag);
      window.removeEventListener('keyup', handleKeyDragEnd);
      document.body.removeAttribute('data-page-layout-dragging');
    }
    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('keydown', handleKeyDrag);
      window.removeEventListener('keyup', handleKeyDragEnd);
      document.body.removeAttribute('data-page-layout-dragging');
    };
  }, [isDragging, isKeyboardDrag, currentWidth, minWidth, maxWidth]);
  return /*#__PURE__*/React.createElement(Box, {
    sx: merge({
      height: '100%',
      position: 'relative',
      ...verticalDividerVariants[responsiveVariant]
    }, sx)
  }, draggable ?
  /*#__PURE__*/
  // Drag handle
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    sx: {
      position: 'absolute',
      inset: '0 -2px',
      cursor: 'col-resize',
      bg: isDragging || isKeyboardDrag ? 'accent.fg' : 'transparent',
      transitionDelay: '0.1s',
      '&:hover': {
        bg: isDragging || isKeyboardDrag ? 'accent.fg' : 'neutral.muted'
      }
    },
    role: "slider",
    "aria-label": "Draggable pane splitter",
    "aria-valuemin": minWidth,
    "aria-valuemax": maxWidth,
    "aria-valuenow": currentWidth,
    "aria-valuetext": `Pane width ${currentWidth} pixels`,
    tabIndex: 0,
    onMouseDown: event => {
      if (event.button === 0) {
        setIsDragging(true);
        onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart();
      }
    },
    onKeyDown: event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        setIsKeyboardDrag(true);
        onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart();
      }
    },
    onDoubleClick: onDoubleClick
  }), /*#__PURE__*/React.createElement(DraggingGlobalStyles, null)) : null);
};
VerticalDivider.displayName = "VerticalDivider"; // ----------------------------------------------------------------------------
// PageLayout.Header
const Header = ({
  'aria-label': label,
  'aria-labelledby': labelledBy,
  padding = 'none',
  divider = 'none',
  dividerWhenNarrow = 'inherit',
  hidden = false,
  children,
  sx = {}
}) => {
  // Combine divider and dividerWhenNarrow for backwards compatibility
  const dividerProp = !isResponsiveValue(divider) && dividerWhenNarrow !== 'inherit' ? {
    regular: divider,
    narrow: dividerWhenNarrow
  } : divider;
  const dividerVariant = useResponsiveValue(dividerProp, 'none');
  const isHidden = useResponsiveValue(hidden, false);
  const {
    rowGap
  } = React.useContext(PageLayoutContext);
  return /*#__PURE__*/React.createElement(Box, {
    as: "header",
    "aria-label": label,
    "aria-labelledby": labelledBy,
    hidden: isHidden,
    sx: merge({
      width: '100%',
      marginBottom: SPACING_MAP[rowGap]
    }, sx)
  }, /*#__PURE__*/React.createElement(Box, {
    sx: {
      padding: SPACING_MAP[padding]
    }
  }, children), /*#__PURE__*/React.createElement(HorizontalDivider, {
    variant: dividerVariant,
    sx: {
      marginTop: SPACING_MAP[rowGap]
    }
  }));
};
Header.displayName = "Header";
Header.displayName = 'PageLayout.Header';

// ----------------------------------------------------------------------------
// PageLayout.Content

// TODO: Account for pane width when centering content
const contentWidths = {
  full: '100%',
  medium: '768px',
  large: '1012px',
  xlarge: '1280px'
};
const Content = ({
  as = 'main',
  'aria-label': label,
  'aria-labelledby': labelledBy,
  width = 'full',
  padding = 'none',
  hidden = false,
  children,
  sx = {}
}) => {
  const isHidden = useResponsiveValue(hidden, false);
  const {
    contentTopRef,
    contentBottomRef
  } = React.useContext(PageLayoutContext);
  return /*#__PURE__*/React.createElement(Box, {
    as: as,
    "aria-label": label,
    "aria-labelledby": labelledBy,
    sx: merge({
      display: isHidden ? 'none' : 'flex',
      flexDirection: 'column',
      order: REGION_ORDER.content,
      // Set flex-basis to 0% to allow flex-grow to control the width of the content region.
      // Without this, the content region could wrap onto a different line
      // than the pane region on wide viewports if its contents are too wide.
      flexBasis: 0,
      flexGrow: 1,
      flexShrink: 1,
      minWidth: 1 // Hack to prevent overflowing content from pushing the pane region to the next line
    }, sx)
  }, /*#__PURE__*/React.createElement(Box, {
    ref: contentTopRef
  }), /*#__PURE__*/React.createElement(Box, {
    sx: {
      width: '100%',
      maxWidth: contentWidths[width],
      marginX: 'auto',
      flexGrow: 1,
      padding: SPACING_MAP[padding]
    }
  }, children), /*#__PURE__*/React.createElement(Box, {
    ref: contentBottomRef
  }));
};
Content.displayName = "Content";
Content.displayName = 'PageLayout.Content';

// ----------------------------------------------------------------------------
// PageLayout.Pane

const isCustomWidthOptions = width => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return width.default !== undefined;
};
const isPaneWidth = width => {
  return ['small', 'medium', 'large'].includes(width);
};
const panePositions = {
  start: REGION_ORDER.paneStart,
  end: REGION_ORDER.paneEnd
};
const paneWidths = {
  small: ['100%', null, '240px', '256px'],
  medium: ['100%', null, '256px', '296px'],
  large: ['100%', null, '256px', '320px', '336px']
};
const defaultPaneWidth = {
  small: 256,
  medium: 296,
  large: 320
};
const Pane = /*#__PURE__*/React.forwardRef(({
  'aria-label': label,
  'aria-labelledby': labelledBy,
  position: responsivePosition = 'end',
  positionWhenNarrow = 'inherit',
  width = 'medium',
  minWidth = 256,
  padding = 'none',
  resizable = false,
  widthStorageKey = 'paneWidth',
  divider: responsiveDivider = 'none',
  dividerWhenNarrow = 'inherit',
  sticky = false,
  offsetHeader = 0,
  hidden: responsiveHidden = false,
  children,
  id,
  sx = {}
}, forwardRef) => {
  // Combine position and positionWhenNarrow for backwards compatibility
  const positionProp = !isResponsiveValue(responsivePosition) && positionWhenNarrow !== 'inherit' ? {
    regular: responsivePosition,
    narrow: positionWhenNarrow
  } : responsivePosition;
  const position = useResponsiveValue(positionProp, 'end');

  // Combine divider and dividerWhenNarrow for backwards compatibility
  const dividerProp = !isResponsiveValue(responsiveDivider) && dividerWhenNarrow !== 'inherit' ? {
    regular: responsiveDivider,
    narrow: dividerWhenNarrow
  } : responsiveDivider;
  const dividerVariant = useResponsiveValue(dividerProp, 'none');
  const isHidden = useResponsiveValue(responsiveHidden, false);
  const {
    rowGap,
    columnGap,
    enableStickyPane,
    disableStickyPane,
    paneRef
  } = React.useContext(PageLayoutContext);
  React.useEffect(() => {
    if (sticky) {
      enableStickyPane === null || enableStickyPane === void 0 ? void 0 : enableStickyPane(offsetHeader);
    } else {
      disableStickyPane === null || disableStickyPane === void 0 ? void 0 : disableStickyPane();
    }
  }, [sticky, enableStickyPane, disableStickyPane, offsetHeader]);
  const getDefaultPaneWidth = width => {
    if (isPaneWidth(width)) {
      return defaultPaneWidth[width];
    } else if (isCustomWidthOptions(width)) {
      return Number(width.default.split('px')[0]);
    }
    return 0;
  };
  const [paneWidth, setPaneWidth] = React.useState(() => {
    if (!canUseDOM) {
      return getDefaultPaneWidth(width);
    }
    let storedWidth;
    try {
      storedWidth = localStorage.getItem(widthStorageKey);
    } catch (error) {
      storedWidth = null;
    }
    return storedWidth && !isNaN(Number(storedWidth)) ? Number(storedWidth) : getDefaultPaneWidth(width);
  });
  const updatePaneWidth = width => {
    setPaneWidth(width);
    try {
      localStorage.setItem(widthStorageKey, width.toString());
    } catch (error) {
      // Ignore errors
    }
  };
  useRefObjectAsForwardedRef(forwardRef, paneRef);
  const hasOverflow = useOverflow(paneRef);
  const paneId = useId(id);
  const labelProp = {};
  if (hasOverflow) {
    process.env.NODE_ENV !== "production" ? warning(label === undefined && labelledBy === undefined, 'The <PageLayout.Pane> has overflow and `aria-label` or `aria-labelledby` has not been set. ' + 'Please provide `aria-label` or `aria-labelledby` to <PageLayout.Pane> in order to label this ' + 'region.') : void 0;
    if (labelledBy) {
      labelProp['aria-labelledby'] = labelledBy;
    } else if (label) {
      labelProp['aria-label'] = label;
    }
  }
  return /*#__PURE__*/React.createElement(Box
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  , {
    sx: theme => merge({
      // Narrow viewports
      display: isHidden ? 'none' : 'flex',
      order: panePositions[position],
      width: '100%',
      marginX: 0,
      ...(position === 'end' ? {
        flexDirection: 'column',
        marginTop: SPACING_MAP[rowGap]
      } : {
        flexDirection: 'column-reverse',
        marginBottom: SPACING_MAP[rowGap]
      }),
      // Regular and wide viewports
      [`@media screen and (min-width: ${theme.breakpoints[1]})`]: {
        width: 'auto',
        marginY: '0 !important',
        ...(sticky ? {
          position: 'sticky',
          // If offsetHeader has value, it will stick the pane to the position where the sticky top ends
          // else top will be 0 as the default value of offsetHeader
          top: typeof offsetHeader === 'number' ? `${offsetHeader}px` : offsetHeader,
          maxHeight: 'var(--sticky-pane-height)'
        } : {}),
        ...(position === 'end' ? {
          flexDirection: 'row-reverse',
          marginLeft: SPACING_MAP[columnGap]
        } : {
          flexDirection: 'row',
          marginRight: SPACING_MAP[columnGap]
        })
      }
    }, sx)
  }, /*#__PURE__*/React.createElement(HorizontalDivider, {
    variant: {
      narrow: dividerVariant,
      regular: 'none'
    },
    sx: {
      [position === 'end' ? 'marginBottom' : 'marginTop']: SPACING_MAP[rowGap]
    }
  }), /*#__PURE__*/React.createElement(Box, _extends({
    ref: paneRef,
    style: {
      // @ts-ignore CSS custom properties are not supported by TypeScript
      '--pane-width': `${paneWidth}px`
    },
    sx: theme => ({
      '--pane-min-width': isCustomWidthOptions(width) ? width.min : `${minWidth}px`,
      '--pane-max-width-diff': '511px',
      '--pane-max-width': isCustomWidthOptions(width) ? width.max : `calc(100vw - var(--pane-max-width-diff))`,
      width: resizable ? ['100%', null, 'clamp(var(--pane-min-width), var(--pane-width), var(--pane-max-width))'] : isPaneWidth(width) ? paneWidths[width] : width.default,
      padding: SPACING_MAP[padding],
      overflow: [null, null, 'auto'],
      [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
        '--pane-max-width-diff': '959px'
      }
    })
  }, hasOverflow && {
    tabIndex: 0,
    role: 'region'
  }, labelProp, id && {
    id: paneId
  }), children), /*#__PURE__*/React.createElement(VerticalDivider, {
    variant: {
      narrow: 'none',
      // If pane is resizable, always show a vertical divider on regular viewports
      regular: resizable ? 'line' : dividerVariant
    }
    // If pane is resizable, the divider should be draggable
    ,
    draggable: resizable,
    sx: {
      [position === 'end' ? 'marginRight' : 'marginLeft']: SPACING_MAP[columnGap]
    },
    onDrag: (delta, isKeyboard = false) => {
      // Get the number of pixels the divider was dragged
      let deltaWithDirection;
      if (isKeyboard) {
        deltaWithDirection = delta;
      } else {
        deltaWithDirection = position === 'end' ? -delta : delta;
      }
      updatePaneWidth(paneWidth + deltaWithDirection);
    }
    // Ensure `paneWidth` state and actual pane width are in sync when the drag ends
    ,
    onDragEnd: () => {
      var _paneRef$current;
      const paneRect = (_paneRef$current = paneRef.current) === null || _paneRef$current === void 0 ? void 0 : _paneRef$current.getBoundingClientRect();
      if (!paneRect) return;
      updatePaneWidth(paneRect.width);
    }
    // Reset pane width on double click
    ,
    onDoubleClick: () => updatePaneWidth(getDefaultPaneWidth(width))
  }));
});
Pane.displayName = 'PageLayout.Pane';

// ----------------------------------------------------------------------------
// PageLayout.Footer

const Footer = ({
  'aria-label': label,
  'aria-labelledby': labelledBy,
  padding = 'none',
  divider = 'none',
  dividerWhenNarrow = 'inherit',
  hidden = false,
  children,
  sx = {}
}) => {
  // Combine divider and dividerWhenNarrow for backwards compatibility
  const dividerProp = !isResponsiveValue(divider) && dividerWhenNarrow !== 'inherit' ? {
    regular: divider,
    narrow: dividerWhenNarrow
  } : divider;
  const dividerVariant = useResponsiveValue(dividerProp, 'none');
  const isHidden = useResponsiveValue(hidden, false);
  const {
    rowGap
  } = React.useContext(PageLayoutContext);
  return /*#__PURE__*/React.createElement(Box, {
    as: "footer",
    "aria-label": label,
    "aria-labelledby": labelledBy,
    hidden: isHidden,
    sx: merge({
      order: REGION_ORDER.footer,
      width: '100%',
      marginTop: SPACING_MAP[rowGap]
    }, sx)
  }, /*#__PURE__*/React.createElement(HorizontalDivider, {
    variant: dividerVariant,
    sx: {
      marginBottom: SPACING_MAP[rowGap]
    }
  }), /*#__PURE__*/React.createElement(Box, {
    sx: {
      padding: SPACING_MAP[padding]
    }
  }, children));
};
Footer.displayName = "Footer";
Footer.displayName = 'PageLayout.Footer';

// ----------------------------------------------------------------------------
// Export

const PageLayout = Object.assign(Root, {
  Header,
  Content,
  Pane,
  Footer
});

export { PageLayout };
