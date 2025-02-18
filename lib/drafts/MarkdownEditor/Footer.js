'use strict';

var React = require('react');
var octiconsReact = require('@primer/octicons-react');
require('../../theme.js');
require('../../constants.js');
require('../../BaseStyles.js');
require('../../ThemeProvider.js');
var Box = require('../../Box/Box.js');
require('../../Button/ButtonBase.js');
require('../../utils/defaultSxProp.js');
var Button = require('../../Button/Button.js');
require('../../TooltipV2/Tooltip.js');
require('../../Tooltip/Tooltip.js');
require('../../PageLayout/PageLayout.js');
require('../../SplitPageLayout/SplitPageLayout.js');
require('@primer/behaviors/utils');
require('../../ConfirmationDialog/ConfirmationDialog.js');
require('@primer/behaviors');
require('../../hooks/useMedia.js');
require('styled-components');
require('@styled-system/css');
require('deepmerge');
require('../../Radio/Radio.js');
require('../../ActionList/index.js');
require('../../ActionMenu/ActionMenu.js');
require('../../AnchoredOverlay/AnchoredOverlay.js');
require('../../Autocomplete/Autocomplete.js');
require('../../Avatar/Avatar.js');
require('../../AvatarPair/AvatarPair.js');
require('../../AvatarStack/AvatarStack.js');
require('../../BranchName/BranchName.js');
require('../../Breadcrumbs/Breadcrumbs.js');
require('../../ButtonGroup/ButtonGroup.js');
require('../../Caret.js');
require('../../CircleOcticon/CircleOcticon.js');
require('../../CheckboxGroup/CheckboxGroup.js');
require('../../CircleBadge/CircleBadge.js');
require('../../CounterLabel/CounterLabel.js');
require('../../Details/Details.js');
require('../../Dialog.js');
require('../../Flash/Flash.js');
require('../../FormControl/_FormControlContext.js');
require('../../FormControl/FormControl.js');
require('../../Header/Header.js');
require('../../Heading/Heading.js');
require('../../Label/Label.js');
require('../../LabelGroup/LabelGroup.js');
require('../../Link/Link.js');
require('../../NavList/NavList.js');
require('../../Octicon/Octicon.js');
require('../../Overlay/Overlay.js');
require('../../Pagehead/Pagehead.js');
require('../../Pagination/Pagination.js');
require('../../PointerBox/PointerBox.js');
require('../../Popover/Popover.js');
require('react-dom');
require('../../ProgressBar/index.js');
require('../../RadioGroup/RadioGroup.js');
require('../../RelativeTime/RelativeTime.js');
require('../../SegmentedControl/SegmentedControl.js');
require('../../Select.js');
require('../../SelectPanel/SelectPanel.js');
require('../../SideNav.js');
var Spinner = require('../../Spinner/Spinner.js');
require('../../StateLabel/StateLabel.js');
require('../../SubNav/SubNav.js');
require('../../ToggleSwitch/ToggleSwitch.js');
require('../../TabNav/TabNav.js');
require('../../TextInput/TextInput.js');
require('../../TextInputWithTokens/TextInputWithTokens.js');
var Text = require('../../Text/Text.js');
require('../../Timeline/Timeline.js');
require('../../Token/Token.js');
require('../../Token/IssueLabelToken.js');
require('../../Token/AvatarToken.js');
require('../../Truncate/Truncate.js');
require('../../Checkbox/Checkbox.js');
require('../../Textarea/Textarea.js');
require('../../TreeView/TreeView.js');
require('../../UnderlineNav/index.js');
require('../../ActionBar/index.js');
require('../../Stack/index.js');
require('../../PageHeader/PageHeader.js');
var _MarkdownEditorContext = require('./_MarkdownEditorContext.js');
var useSlots = require('../../hooks/useSlots.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const uploadingNote = ([current, total]) => total === 1 ? `Uploading your file…` : `Uploading your files… (${current}/${total})`;
const CoreFooter = ({
  children
}) => {
  const [slots, childrenWithoutSlots] = useSlots.useSlots(children, {
    footerButtons: FooterButton
  });
  const {
    fileUploadProgress,
    previewMode
  } = React.useContext(_MarkdownEditorContext.MarkdownEditorContext);
  return /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      pt: 2,
      display: 'flex',
      gap: 2,
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: '36px'
    },
    as: "footer"
  }, /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      display: 'flex',
      gap: 1,
      alignItems: 'center',
      fontSize: 0
    }
  }, previewMode ? /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null) : fileUploadProgress ? /*#__PURE__*/React__default.default.createElement(Text, {
    sx: {
      py: 1,
      px: 2,
      color: 'fg.muted'
    }
  }, /*#__PURE__*/React__default.default.createElement(Spinner, {
    size: "small",
    sx: {
      mr: 1,
      verticalAlign: 'text-bottom'
    }
  }), " ", uploadingNote(fileUploadProgress)) : null, slots.footerButtons && /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      display: 'flex',
      gap: 2
    }
  }, slots.footerButtons), /*#__PURE__*/React__default.default.createElement(DefaultFooterButtons, null)), !fileUploadProgress && /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      display: 'flex',
      gap: 2
    }
  }, childrenWithoutSlots));
};
CoreFooter.displayName = "CoreFooter";
const Footer = ({
  children
}) => /*#__PURE__*/React__default.default.createElement(CoreFooter, null, children);
Footer.displayName = "Footer";
Footer.displayName = 'MarkdownEditor.Footer';
const FooterButton = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    disabled
  } = React.useContext(_MarkdownEditorContext.MarkdownEditorContext);
  return /*#__PURE__*/React__default.default.createElement(Button.ButtonComponent, _extends({
    ref: ref,
    size: "small",
    disabled: disabled
  }, props));
});
FooterButton.displayName = 'MarkdownEditor.FooterButton';
const DefaultFooterButtons = /*#__PURE__*/React.memo(() => {
  const {
    uploadButtonProps,
    fileDraggedOver
  } = React.useContext(_MarkdownEditorContext.MarkdownEditorContext);
  return uploadButtonProps ? /*#__PURE__*/React__default.default.createElement(FileUploadButton, _extends({
    fileDraggedOver: fileDraggedOver
  }, uploadButtonProps)) : null;
});
DefaultFooterButtons.displayName = 'MarkdownEditor.DefaultFooterButtons';
const FileUploadButton = /*#__PURE__*/React.memo(({
  fileDraggedOver,
  ...props
}) => {
  const {
    condensed,
    disabled
  } = React.useContext(_MarkdownEditorContext.MarkdownEditorContext);
  return /*#__PURE__*/React__default.default.createElement(Button.ButtonComponent, _extends({
    variant: "invisible",
    leadingVisual: octiconsReact.PaperclipIcon,
    size: "small",
    sx: {
      color: 'fg.muted',
      fontWeight: 'normal',
      px: 2
    },
    onMouseDown: e => {
      // Prevent pulling focus from the textarea
      e.preventDefault();
    },
    disabled: disabled
  }, props), condensed ? 'Add files' : fileDraggedOver ? 'Drop to add files' : 'Paste, drop, or click to add files');
});

exports.CoreFooter = CoreFooter;
exports.Footer = Footer;
exports.FooterButton = FooterButton;
