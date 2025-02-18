'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var styledSystem = require('styled-system');
var constants = require('../../constants.js');
var sx = require('../../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const sizeDeprecatedVariants = styledSystem.variant({
  variants: {
    small: {
      minHeight: '28px',
      px: 2,
      py: '3px',
      fontSize: 0,
      lineHeight: '20px'
    },
    large: {
      px: 2,
      py: '10px',
      fontSize: 3
    }
  }
});
const sizeVariants = styledSystem.variant({
  prop: 'size',
  variants: {
    small: {
      '--inner-action-size': '20px',
      minHeight: '28px',
      px: 2,
      py: '3px',
      fontSize: 0,
      lineHeight: '20px'
    },
    medium: {
      '--inner-action-size': '24px'
    },
    large: {
      '--inner-action-size': '28px',
      px: 2,
      py: '10px',
      height: '40px'
    }
  }
});
const textInputBasePadding = '12px';
const textInputHorizPadding = textInputBasePadding;
const renderFocusStyles = (hasTrailingAction, isInputFocused) => {
  if (hasTrailingAction) {
    return isInputFocused && styled.css(["border-color:", ";outline:2px solid ", ";outline-offset:-1px;"], constants.get('colors.accent.fg'), constants.get('colors.accent.fg'));
  }
  return styled.css(["&:focus-within{border-color:", ";outline:2px solid ", ";outline-offset:-1px;}"], constants.get('colors.accent.fg'), constants.get('colors.accent.fg'));
};
const TextInputBaseWrapper = styled__default.default.span.withConfig({
  displayName: "TextInputWrapper__TextInputBaseWrapper",
  componentId: "sc-1mqhpbi-0"
})(["font-size:", ";line-height:20px;color:", ";vertical-align:middle;background-color:", ";border:1px solid var(--control-borderColor-rest,", ");border-radius:", ";outline:none;box-shadow:", ";display:inline-flex;align-items:stretch;min-height:32px;overflow:hidden;input,textarea{cursor:text;}select{cursor:pointer;}input,textarea,select{&::placeholder{color:var(---control-fgColor-placeholder,", ");}}", " > textarea{padding:", ";}", " ", " ", " ", " ", " ", " @media (min-width:", "){font-size:", ";}", " ", " ", " ", " ", " ", ";"], constants.get('fontSizes.1'), constants.get('colors.fg.default'), constants.get('colors.canvas.default'), constants.get('colors.border.default'), constants.get('radii.2'), constants.get('shadows.primer.shadow.inset'), constants.get('colors.fg.muted'), props => renderFocusStyles(Boolean(props.hasTrailingAction), Boolean(props.isInputFocused)), textInputBasePadding, props => props.contrast && styled.css(["background-color:", ";"], constants.get('colors.canvas.inset')), props => props.disabled && styled.css(["color:", ";background-color:", ";box-shadow:none;border-color:var(--control-borderColor-disabled,", ");input,textarea,select{cursor:not-allowed;}"], constants.get('colors.primer.fg.disabled'), constants.get('colors.input.disabledBg'), constants.get('colors.border.default')), props => props.monospace && styled.css(["font-family:", ";"], constants.get('fonts.mono')), props => props.validationStatus === 'error' && styled.css(["border-color:", ";", ""], constants.get('colors.danger.emphasis'), renderFocusStyles(Boolean(props.hasTrailingAction), Boolean(props.isInputFocused))), props => props.validationStatus === 'success' && styled.css(["border-color:", ";"], constants.get('colors.success.emphasis')), props => props.block && styled.css(["width:100%;display:flex;align-self:stretch;"]), constants.get('breakpoints.1'), constants.get('fontSizes.1'), styledSystem.width, styledSystem.minWidth, styledSystem.maxWidth, sizeDeprecatedVariants, sizeVariants, sx.default);
const TextInputWrapper = styled__default.default(TextInputBaseWrapper).withConfig({
  displayName: "TextInputWrapper",
  componentId: "sc-1mqhpbi-1"
})(["background-repeat:no-repeat;background-position:right 8px center;& > :not(:last-child){margin-right:", ";}.TextInput-icon,.TextInput-action{align-self:center;color:", ";flex-shrink:0;}", " ", ";"], constants.get('space.2'), constants.get('colors.fg.muted'), props => styled.css(["padding-left:", ";padding-right:", ";> input,> select{padding-left:", ";padding-right:", ";}"], props.hasLeadingVisual ? textInputHorizPadding : 0, props.hasTrailingVisual && !props.hasTrailingAction ? textInputHorizPadding : 0, !props.hasLeadingVisual ? textInputHorizPadding : 0, !props.hasTrailingVisual && !props.hasTrailingAction ? textInputHorizPadding : 0), sx.default);

exports.TextInputBaseWrapper = TextInputBaseWrapper;
exports.default = TextInputWrapper;
exports.textInputHorizPadding = textInputHorizPadding;
