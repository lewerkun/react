'use strict';

var React = require('react');
var client = require('react-dom/client');
var styled = require('styled-components');
var Box = require('../Box/Box.js');
var ThemeProvider = require('../ThemeProvider.js');
var behaviors = require('@primer/behaviors');
var constants = require('../constants.js');
var Dialog = require('../Dialog/Dialog.js');
var useFocusZone = require('../hooks/useFocusZone.js');
var BaseStyles = require('../BaseStyles.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

/**
 * Props to customize the ConfirmationDialog.
 */

const StyledConfirmationHeader = styled__default.default.div.withConfig({
  displayName: "ConfirmationDialog__StyledConfirmationHeader",
  componentId: "sc-11fz0jh-0"
})(["padding:", ";display:flex;flex-direction:row;"], constants.get('space.2'));
const StyledTitle = styled__default.default(Box).attrs({
  as: 'h1'
}).withConfig({
  displayName: "ConfirmationDialog__StyledTitle",
  componentId: "sc-11fz0jh-1"
})(["font-size:", ";font-weight:", ";padding:6px ", ";flex-grow:1;margin:0;"], constants.get('fontSizes.3'), constants.get('fontWeights.bold'), constants.get('space.2'));
const ConfirmationHeader = ({
  title,
  onClose,
  dialogLabelId
}) => {
  const onCloseClick = React.useCallback(() => {
    onClose('close-button');
  }, [onClose]);
  return /*#__PURE__*/React__default.default.createElement(StyledConfirmationHeader, null, /*#__PURE__*/React__default.default.createElement(StyledTitle, {
    id: dialogLabelId
  }, title), /*#__PURE__*/React__default.default.createElement(Dialog.Dialog.CloseButton, {
    onClose: onCloseClick
  }));
};
ConfirmationHeader.displayName = "ConfirmationHeader";
const StyledConfirmationBody = styled__default.default(Box).withConfig({
  displayName: "ConfirmationDialog__StyledConfirmationBody",
  componentId: "sc-11fz0jh-2"
})(["font-size:", ";padding:0 ", " ", " ", ";color:", ";flex-grow:1;"], constants.get('fontSizes.1'), constants.get('space.3'), constants.get('space.3'), constants.get('space.3'), constants.get('colors.fg.muted'));
const ConfirmationBody = ({
  children
}) => {
  return /*#__PURE__*/React__default.default.createElement(StyledConfirmationBody, null, children);
};
ConfirmationBody.displayName = "ConfirmationBody";
const StyledConfirmationFooter = styled__default.default(Box).withConfig({
  displayName: "ConfirmationDialog__StyledConfirmationFooter",
  componentId: "sc-11fz0jh-3"
})(["display:grid;grid-auto-flow:column;grid-auto-columns:max-content;grid-gap:", ";align-items:end;justify-content:end;padding:", " ", " ", ";"], constants.get('space.2'), constants.get('space.1'), constants.get('space.3'), constants.get('space.3'));
const ConfirmationFooter = ({
  footerButtons
}) => {
  const {
    containerRef: footerRef
  } = useFocusZone.useFocusZone({
    bindKeys: behaviors.FocusKeys.ArrowHorizontal | behaviors.FocusKeys.Tab,
    focusInStrategy: 'closest'
  });
  // Must have exactly 2 buttons!
  return /*#__PURE__*/React__default.default.createElement(StyledConfirmationFooter, {
    ref: footerRef
  }, /*#__PURE__*/React__default.default.createElement(Dialog.Dialog.Buttons, {
    buttons: footerButtons !== null && footerButtons !== void 0 ? footerButtons : []
  }));
};
ConfirmationFooter.displayName = "ConfirmationFooter";
/**
 * A ConfirmationDialog is a special kind of dialog with more rigid behavior. It
 * is used to confirm a user action. ConfirmationDialogs always have exactly
 * two buttons: one to cancel the action and one to confirm it. No custom
 * rendering capabilities are provided for ConfirmationDialog.
 */
const ConfirmationDialog = props => {
  const {
    onClose,
    title,
    cancelButtonContent = 'Cancel',
    confirmButtonContent = 'OK',
    confirmButtonType = 'normal',
    children
  } = props;
  const onCancelButtonClick = React.useCallback(() => {
    onClose('cancel');
  }, [onClose]);
  const onConfirmButtonClick = React.useCallback(() => {
    onClose('confirm');
  }, [onClose]);
  const isConfirmationDangerous = confirmButtonType === 'danger';
  const cancelButton = {
    content: cancelButtonContent,
    onClick: onCancelButtonClick,
    autoFocus: isConfirmationDangerous
  };
  const confirmButton = {
    content: confirmButtonContent,
    buttonType: confirmButtonType,
    onClick: onConfirmButtonClick,
    autoFocus: !isConfirmationDangerous
  };
  const footerButtons = [cancelButton, confirmButton];
  return /*#__PURE__*/React__default.default.createElement(Dialog.Dialog, {
    onClose: onClose,
    title: title,
    footerButtons: footerButtons,
    role: "alertdialog",
    width: "medium",
    renderHeader: ConfirmationHeader,
    renderBody: ConfirmationBody,
    renderFooter: ConfirmationFooter
  }, children);
};
ConfirmationDialog.displayName = "ConfirmationDialog";
let hostElement = null;
async function confirm(themeProps, options) {
  const {
    content,
    ...confirmationDialogProps
  } = options;
  return new Promise(resolve => {
    hostElement ||= document.createElement('div');
    if (!hostElement.isConnected) document.body.append(hostElement);
    const root = client.createRoot(hostElement);
    const onClose = gesture => {
      root.unmount();
      if (gesture === 'confirm') {
        resolve(true);
      } else {
        resolve(false);
      }
    };
    root.render( /*#__PURE__*/React__default.default.createElement(ThemeProvider.ThemeProvider, themeProps, /*#__PURE__*/React__default.default.createElement(BaseStyles, null, /*#__PURE__*/React__default.default.createElement(ConfirmationDialog, _extends({}, confirmationDialogProps, {
      onClose: onClose
    }), content))));
  });
}

/**
 * This hook takes no parameters and returns an `async` function, `confirm`. When `confirm`
 * is called, it shows the confirmation dialog. When the dialog is dismissed, a promise is
 * resolved with `true` or `false` depending on whether or not the confirm button was used.
 */
function useConfirm() {
  const {
    theme,
    colorMode,
    dayScheme,
    nightScheme
  } = ThemeProvider.useTheme();
  const result = React.useCallback(options => {
    const themeProps = {
      theme,
      colorMode,
      dayScheme,
      nightScheme
    };
    return confirm(themeProps, options);
  }, [theme, colorMode, dayScheme, nightScheme]);
  return result;
}

exports.ConfirmationDialog = ConfirmationDialog;
exports.useConfirm = useConfirm;
