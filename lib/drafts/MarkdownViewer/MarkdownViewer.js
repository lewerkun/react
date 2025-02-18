'use strict';

var React = require('react');
require('../../theme.js');
require('../../constants.js');
require('../../BaseStyles.js');
require('../../ThemeProvider.js');
var Box = require('../../Box/Box.js');
require('../../Button/ButtonBase.js');
require('../../utils/defaultSxProp.js');
require('../../Button/Button.js');
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
require('../../Text/Text.js');
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
var _useLinkInterception = require('./_useLinkInterception.js');
var _useListInteraction = require('./_useListInteraction.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

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
  const [htmlContainer, setHtmlContainer] = React__default.default.useState();
  const htmlContainerRef = React__default.default.useCallback(node => {
    if (!node) return;
    setHtmlContainer(node);
  }, []);
  const onChange = React.useCallback(async value => {
    try {
      await (externalOnChange === null || externalOnChange === void 0 ? void 0 : externalOnChange(value));
    } catch (error) {
      if (htmlContainer) {
        htmlContainer.innerHTML = dangerousRenderedHTML.__html;
      }
    }
  }, [externalOnChange, htmlContainer, dangerousRenderedHTML]);
  _useListInteraction.useListInteraction({
    onChange,
    disabled: disabled || !externalOnChange,
    htmlContainer,
    markdownValue,
    dependencies: [dangerousRenderedHTML]
  });
  _useLinkInterception.useLinkInterception({
    htmlContainer,
    onLinkClick,
    openLinksInNewTab
  });
  return loading ? /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-around',
      p: 2
    }
  }, /*#__PURE__*/React__default.default.createElement(Spinner, {
    "aria-label": "Loading content..."
  })) : /*#__PURE__*/React__default.default.createElement(Box, {
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

module.exports = MarkdownViewer;
