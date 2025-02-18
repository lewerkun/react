import React, { forwardRef, useContext, memo } from 'react';
import { PaperclipIcon } from '@primer/octicons-react';
import '../../theme.js';
import '../../constants.js';
import '../../BaseStyles.js';
import '../../ThemeProvider.js';
import Box from '../../Box/Box.js';
import '../../Button/ButtonBase.js';
import '../../utils/defaultSxProp.js';
import { ButtonComponent } from '../../Button/Button.js';
import '../../TooltipV2/Tooltip.js';
import '../../Tooltip/Tooltip.js';
import '../../PageLayout/PageLayout.js';
import '../../SplitPageLayout/SplitPageLayout.js';
import '@primer/behaviors/utils';
import '../../ConfirmationDialog/ConfirmationDialog.js';
import '@primer/behaviors';
import '../../hooks/useMedia.js';
import 'styled-components';
import '@lit-labs/react';
import '@styled-system/css';
import 'deepmerge';
import '../../Radio/Radio.js';
import '../../ActionList/index.js';
import '../../ActionMenu/ActionMenu.js';
import '../../AnchoredOverlay/AnchoredOverlay.js';
import '../../Autocomplete/Autocomplete.js';
import '../../Avatar/Avatar.js';
import '../../AvatarPair/AvatarPair.js';
import '../../AvatarStack/AvatarStack.js';
import '../../BranchName/BranchName.js';
import '../../Breadcrumbs/Breadcrumbs.js';
import '../../ButtonGroup/ButtonGroup.js';
import '../../Caret.js';
import '../../CircleOcticon/CircleOcticon.js';
import '../../CheckboxGroup/CheckboxGroup.js';
import '../../CircleBadge/CircleBadge.js';
import '../../CounterLabel/CounterLabel.js';
import '../../Details/Details.js';
import '../../Dialog.js';
import '../../Flash/Flash.js';
import '../../FormControl/_FormControlContext.js';
import '../../FormControl/FormControl.js';
import '../../Header/Header.js';
import '../../Heading/Heading.js';
import '../../Label/Label.js';
import '../../LabelGroup/LabelGroup.js';
import '../../Link/Link.js';
import '../../NavList/NavList.js';
import '../../Octicon/Octicon.js';
import '../../Overlay/Overlay.js';
import '../../Pagehead/Pagehead.js';
import '../../Pagination/Pagination.js';
import '../../PointerBox/PointerBox.js';
import '../../Popover/Popover.js';
import 'react-dom';
import '../../ProgressBar/index.js';
import '../../RadioGroup/RadioGroup.js';
import '../../RelativeTime/RelativeTime.js';
import '../../SegmentedControl/SegmentedControl.js';
import '../../Select.js';
import '../../SelectPanel/SelectPanel.js';
import '../../SideNav.js';
import StyledSpinner from '../../Spinner/Spinner.js';
import '../../StateLabel/StateLabel.js';
import '../../SubNav/SubNav.js';
import '../../ToggleSwitch/ToggleSwitch.js';
import '../../TabNav/TabNav.js';
import '../../TextInput/TextInput.js';
import '../../TextInputWithTokens/TextInputWithTokens.js';
import Text from '../../Text/Text.js';
import '../../Timeline/Timeline.js';
import '../../Token/Token.js';
import '../../Token/IssueLabelToken.js';
import '../../Token/AvatarToken.js';
import '../../Truncate/Truncate.js';
import '../../Checkbox/Checkbox.js';
import '../../Textarea/Textarea.js';
import '../../TreeView/TreeView.js';
import '../../UnderlineNav/index.js';
import '../../ActionBar/index.js';
import '../../Stack/index.js';
import '../../PageHeader/PageHeader.js';
import { MarkdownEditorContext } from './_MarkdownEditorContext.js';
import { useSlots } from '../../hooks/useSlots.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const uploadingNote = ([current, total]) => total === 1 ? `Uploading your file…` : `Uploading your files… (${current}/${total})`;
const CoreFooter = ({
  children
}) => {
  const [slots, childrenWithoutSlots] = useSlots(children, {
    footerButtons: FooterButton
  });
  const {
    fileUploadProgress,
    previewMode
  } = useContext(MarkdownEditorContext);
  return /*#__PURE__*/React.createElement(Box, {
    sx: {
      pt: 2,
      display: 'flex',
      gap: 2,
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: '36px'
    },
    as: "footer"
  }, /*#__PURE__*/React.createElement(Box, {
    sx: {
      display: 'flex',
      gap: 1,
      alignItems: 'center',
      fontSize: 0
    }
  }, previewMode ? /*#__PURE__*/React.createElement(React.Fragment, null) : fileUploadProgress ? /*#__PURE__*/React.createElement(Text, {
    sx: {
      py: 1,
      px: 2,
      color: 'fg.muted'
    }
  }, /*#__PURE__*/React.createElement(StyledSpinner, {
    size: "small",
    sx: {
      mr: 1,
      verticalAlign: 'text-bottom'
    }
  }), " ", uploadingNote(fileUploadProgress)) : null, slots.footerButtons && /*#__PURE__*/React.createElement(Box, {
    sx: {
      display: 'flex',
      gap: 2
    }
  }, slots.footerButtons), /*#__PURE__*/React.createElement(DefaultFooterButtons, null)), !fileUploadProgress && /*#__PURE__*/React.createElement(Box, {
    sx: {
      display: 'flex',
      gap: 2
    }
  }, childrenWithoutSlots));
};
CoreFooter.displayName = "CoreFooter";
const Footer = ({
  children
}) => /*#__PURE__*/React.createElement(CoreFooter, null, children);
Footer.displayName = "Footer";
Footer.displayName = 'MarkdownEditor.Footer';
const FooterButton = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    disabled
  } = useContext(MarkdownEditorContext);
  return /*#__PURE__*/React.createElement(ButtonComponent, _extends({
    ref: ref,
    size: "small",
    disabled: disabled
  }, props));
});
FooterButton.displayName = 'MarkdownEditor.FooterButton';
const DefaultFooterButtons = /*#__PURE__*/memo(() => {
  const {
    uploadButtonProps,
    fileDraggedOver
  } = useContext(MarkdownEditorContext);
  return uploadButtonProps ? /*#__PURE__*/React.createElement(FileUploadButton, _extends({
    fileDraggedOver: fileDraggedOver
  }, uploadButtonProps)) : null;
});
DefaultFooterButtons.displayName = 'MarkdownEditor.DefaultFooterButtons';
const FileUploadButton = /*#__PURE__*/memo(({
  fileDraggedOver,
  ...props
}) => {
  const {
    condensed,
    disabled
  } = useContext(MarkdownEditorContext);
  return /*#__PURE__*/React.createElement(ButtonComponent, _extends({
    variant: "invisible",
    leadingVisual: PaperclipIcon,
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

export { CoreFooter, Footer, FooterButton };
