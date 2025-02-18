import styled, { css } from 'styled-components';
import { variant, width, minWidth, maxWidth } from 'styled-system';
import { get } from '../../constants.js';
import sx from '../../sx.js';

const sizeDeprecatedVariants = variant({
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
const sizeVariants = variant({
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
    return isInputFocused && css(["border-color:", ";outline:2px solid ", ";outline-offset:-1px;"], get('colors.accent.fg'), get('colors.accent.fg'));
  }
  return css(["&:focus-within{border-color:", ";outline:2px solid ", ";outline-offset:-1px;}"], get('colors.accent.fg'), get('colors.accent.fg'));
};
const TextInputBaseWrapper = styled.span.withConfig({
  displayName: "TextInputWrapper__TextInputBaseWrapper",
  componentId: "sc-1mqhpbi-0"
})(["font-size:", ";line-height:20px;color:", ";vertical-align:middle;background-color:", ";border:1px solid var(--control-borderColor-rest,", ");border-radius:", ";outline:none;box-shadow:", ";display:inline-flex;align-items:stretch;min-height:32px;overflow:hidden;input,textarea{cursor:text;}select{cursor:pointer;}input,textarea,select{&::placeholder{color:var(---control-fgColor-placeholder,", ");}}", " > textarea{padding:", ";}", " ", " ", " ", " ", " ", " @media (min-width:", "){font-size:", ";}", " ", " ", " ", " ", " ", ";"], get('fontSizes.1'), get('colors.fg.default'), get('colors.canvas.default'), get('colors.border.default'), get('radii.2'), get('shadows.primer.shadow.inset'), get('colors.fg.muted'), props => renderFocusStyles(Boolean(props.hasTrailingAction), Boolean(props.isInputFocused)), textInputBasePadding, props => props.contrast && css(["background-color:", ";"], get('colors.canvas.inset')), props => props.disabled && css(["color:", ";background-color:", ";box-shadow:none;border-color:var(--control-borderColor-disabled,", ");input,textarea,select{cursor:not-allowed;}"], get('colors.primer.fg.disabled'), get('colors.input.disabledBg'), get('colors.border.default')), props => props.monospace && css(["font-family:", ";"], get('fonts.mono')), props => props.validationStatus === 'error' && css(["border-color:", ";", ""], get('colors.danger.emphasis'), renderFocusStyles(Boolean(props.hasTrailingAction), Boolean(props.isInputFocused))), props => props.validationStatus === 'success' && css(["border-color:", ";"], get('colors.success.emphasis')), props => props.block && css(["width:100%;display:flex;align-self:stretch;"]), get('breakpoints.1'), get('fontSizes.1'), width, minWidth, maxWidth, sizeDeprecatedVariants, sizeVariants, sx);
const TextInputWrapper = styled(TextInputBaseWrapper).withConfig({
  displayName: "TextInputWrapper",
  componentId: "sc-1mqhpbi-1"
})(["background-repeat:no-repeat;background-position:right 8px center;& > :not(:last-child){margin-right:", ";}.TextInput-icon,.TextInput-action{align-self:center;color:", ";flex-shrink:0;}", " ", ";"], get('space.2'), get('colors.fg.muted'), props => css(["padding-left:", ";padding-right:", ";> input,> select{padding-left:", ";padding-right:", ";}"], props.hasLeadingVisual ? textInputHorizPadding : 0, props.hasTrailingVisual && !props.hasTrailingAction ? textInputHorizPadding : 0, !props.hasLeadingVisual ? textInputHorizPadding : 0, !props.hasTrailingVisual && !props.hasTrailingAction ? textInputHorizPadding : 0), sx);

export { TextInputBaseWrapper, TextInputWrapper as default, textInputHorizPadding };
