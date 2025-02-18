'use strict';

var List = require('./ActionList/List.js');
var Item = require('./ActionList/Item.js');
var Divider = require('./ActionList/Divider.js');
var Button = require('./Button/Button.js');
require('./Button/ButtonDanger.js');
require('./Button/ButtonOutline.js');
require('./Button/ButtonPrimary.js');
require('./Button/ButtonInvisible.js');
require('./Button/ButtonTableList.js');
require('./Button/ButtonClose.js');
var React = require('react');
var AnchoredOverlay = require('../AnchoredOverlay/AnchoredOverlay.js');
var useProvidedStateOrCreate = require('../hooks/useProvidedStateOrCreate.js');
var useProvidedRefOrCreate = require('../hooks/useProvidedRefOrCreate.js');
require('@primer/behaviors/utils');
require('@primer/behaviors');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ActionMenuItem = props => /*#__PURE__*/React__default.default.createElement(Item.Item, _extends({
  role: "menuitem"
}, props));
ActionMenuItem.displayName = "ActionMenuItem";
ActionMenuItem.displayName = 'ActionMenu.Item';
const ActionMenuBase = ({
  anchorContent,
  renderAnchor = props => /*#__PURE__*/React__default.default.createElement(Button, props),
  anchorRef: externalAnchorRef,
  onAction,
  open,
  setOpen,
  overlayProps,
  items,
  ...listProps
}) => {
  const [combinedOpenState, setCombinedOpenState] = useProvidedStateOrCreate.useProvidedStateOrCreate(open, setOpen, false);
  const anchorRef = useProvidedRefOrCreate.useProvidedRefOrCreate(externalAnchorRef);
  const onOpen = React.useCallback(() => setCombinedOpenState(true), [setCombinedOpenState]);
  const onClose = React.useCallback(() => setCombinedOpenState(false), [setCombinedOpenState]);
  const renderMenuAnchor = React.useMemo(() => {
    if (renderAnchor === null) {
      return null;
    }
    return props => {
      return renderAnchor({
        'aria-label': 'menu',
        children: anchorContent,
        ...props
      });
    };
  }, [anchorContent, renderAnchor]);
  const itemsToRender = React.useMemo(() => {
    return items.map(item => {
      return {
        ...item,
        role: 'menuitem',
        onAction: (props, event) => {
          var _item$onAction;
          const actionCallback = (_item$onAction = item.onAction) !== null && _item$onAction !== void 0 ? _item$onAction : onAction;
          actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback(props, event);
          if (!event.defaultPrevented) {
            onClose();
          }
        }
      };
    });
  }, [items, onAction, onClose]);
  return /*#__PURE__*/React__default.default.createElement(AnchoredOverlay.AnchoredOverlay, {
    renderAnchor: renderMenuAnchor,
    anchorRef: anchorRef,
    open: combinedOpenState,
    onOpen: onOpen,
    onClose: onClose,
    overlayProps: overlayProps
  }, /*#__PURE__*/React__default.default.createElement(List.List, _extends({}, listProps, {
    role: "menu",
    items: itemsToRender
  })));
};
ActionMenuBase.displayName = "ActionMenuBase";
ActionMenuBase.displayName = 'ActionMenu';

/**
 * @deprecated Use ActionMenu with composable API instead. See https://primer.style/react/ActionMenu for more details.
 */
const ActionMenu = Object.assign(ActionMenuBase, {
  Divider: Divider.Divider,
  Item: ActionMenuItem
});

exports.ActionMenu = ActionMenu;
