'use strict';

var behaviors = require('@primer/behaviors');

const getDividerStyle = theme => ({
  display: 'inline-block',
  borderLeft: '1px solid',
  width: '1px',
  borderLeftColor: `${theme === null || theme === void 0 ? void 0 : theme.colors.border.muted}`,
  marginRight: 1,
  height: '24px' // The height of the divider - reference from Figma
});
const moreBtnStyles = {
  //set margin 0 here because safari puts extra margin around the button, rest is to reset style to make it look like a list element
  margin: 0,
  border: 0,
  background: 'transparent',
  fontWeight: 'normal',
  boxShadow: 'none',
  paddingY: 1,
  paddingX: 2,
  '& > span[data-component="trailingVisual"]': {
    marginLeft: 0
  }
};
const menuItemStyles = {
  // This is needed to hide the selected check icon on the menu item. https://github.com/primer/react/tree/main/packages/react/src/ActionList/Selection.tsx#L32
  '& > span': {
    display: 'none'
  },
  // To reset the style when the menu items are rendered as react router links
  textDecoration: 'none'
};
const baseMenuMinWidth = 192;
const baseMenuStyles = {
  position: 'absolute',
  zIndex: 1,
  top: '90%',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  borderRadius: '12px',
  backgroundColor: 'canvas.overlay',
  listStyle: 'none',
  // Values are from ActionMenu
  minWidth: `${baseMenuMinWidth}px`,
  maxWidth: '640px',
  right: '0'
};

/**
 *
 * @param containerRef The Menu List Container Reference.
 * @param listRef The Underline Nav Container Reference.
 * @description This calculates the position of the menu
 */
const menuStyles = (containerRef, listRef) => {
  if (containerRef && listRef) {
    const {
      left
    } = behaviors.getAnchoredPosition(containerRef, listRef, {
      align: 'start',
      side: 'outside-bottom'
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      right,
      ...rest
    } = baseMenuStyles;
    return {
      ...rest,
      left
    };
  }
  return baseMenuStyles;
};

exports.baseMenuMinWidth = baseMenuMinWidth;
exports.baseMenuStyles = baseMenuStyles;
exports.getDividerStyle = getDividerStyle;
exports.menuItemStyles = menuItemStyles;
exports.menuStyles = menuStyles;
exports.moreBtnStyles = moreBtnStyles;
