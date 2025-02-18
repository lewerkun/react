import React, { useCallback } from 'react';
import '../../theme.js';
import '../../constants.js';
import '../../BaseStyles.js';
import '../../ThemeProvider.js';
import Box from '../../Box/Box.js';
import '../../Button/ButtonBase.js';
import '../../utils/defaultSxProp.js';
import '../../Button/Button.js';
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
import '../../Text/Text.js';
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
import { useLinkInterception } from './_useLinkInterception.js';
import { useListInteraction } from './_useListInteraction.js';

/** @deprecated Will be removed in v37 (https://github.com/primer/react/issues/3604) */
const MarkdownViewer = ({
  dangerousRenderedHTML,
  loading = false,
  markdownValue = '',
  onChange: externalOnChange,
  disabled = false,
  onLinkClick,
  openLinksInNewTab = false
}) => {
  // We're using state to store the HTML container because we want the value
  // to re-run effects when it changes
  const [htmlContainer, setHtmlContainer] = React.useState();
  const htmlContainerRef = React.useCallback(node => {
    if (!node) return;
    setHtmlContainer(node);
  }, []);
  const onChange = useCallback(async value => {
    try {
      await (externalOnChange === null || externalOnChange === void 0 ? void 0 : externalOnChange(value));
    } catch (error) {
      if (htmlContainer) {
        htmlContainer.innerHTML = dangerousRenderedHTML.__html;
      }
    }
  }, [externalOnChange, htmlContainer, dangerousRenderedHTML]);
  useListInteraction({
    onChange,
    disabled: disabled || !externalOnChange,
    htmlContainer,
    markdownValue,
    dependencies: [dangerousRenderedHTML]
  });
  useLinkInterception({
    htmlContainer,
    onLinkClick,
    openLinksInNewTab
  });
  return loading ? /*#__PURE__*/React.createElement(Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-around',
      p: 2
    }
  }, /*#__PURE__*/React.createElement(StyledSpinner, {
    "aria-label": "Loading content..."
  })) : /*#__PURE__*/React.createElement(Box, {
    ref: htmlContainerRef,
    className: "markdown-body",
    sx: {
      fontSize: 1,
      maxWidth: '100%',
      '& > div > :last-child': {
        mb: 0
      }
    },
    dangerouslySetInnerHTML: dangerousRenderedHTML
  });
};

export { MarkdownViewer as default };
