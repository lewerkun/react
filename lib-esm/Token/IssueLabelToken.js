import React, { forwardRef, useMemo } from 'react';
import TokenBase, { isTokenInteractive, defaultTokenSize } from './TokenBase.js';
import RemoveTokenButton from './_RemoveTokenButton.js';
import { parseToRgba, parseToHsla } from 'color2k';
import { useTheme } from '../ThemeProvider.js';
import TokenTextContainer from './_TokenTextContainer.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tokenBorderWidthPx = 1;
const lightModeStyles = {
  '--lightness-threshold': '0.453',
  '--border-threshold': '0.96',
  '--border-alpha': 'max(0, min(calc((var(--perceived-lightness) - var(--border-threshold)) * 100), 1))',
  background: 'rgb(var(--label-r), var(--label-g), var(--label-b))',
  color: 'hsl(0, 0%, calc(var(--lightness-switch) * 100%))',
  borderWidth: tokenBorderWidthPx,
  borderStyle: 'solid',
  borderColor: 'hsla(var(--label-h),calc(var(--label-s) * 1%),calc((var(--label-l) - 25) * 1%),var(--border-alpha))'
};
const darkModeStyles = {
  '--lightness-threshold': '0.6',
  '--background-alpha': '0.18',
  '--border-alpha': '0.3',
  '--lighten-by': 'calc(((var(--lightness-threshold) - var(--perceived-lightness)) * 100) * var(--lightness-switch))',
  borderWidth: tokenBorderWidthPx,
  borderStyle: 'solid',
  background: 'rgba(var(--label-r), var(--label-g), var(--label-b), var(--background-alpha))',
  color: 'hsl(var(--label-h), calc(var(--label-s) * 1%), calc((var(--label-l) + var(--lighten-by)) * 1%))',
  borderColor: 'hsla(var(--label-h), calc(var(--label-s) * 1%),calc((var(--label-l) + var(--lighten-by)) * 1%),var(--border-alpha))'
};
const IssueLabelToken = /*#__PURE__*/forwardRef((props, forwardedRef) => {
  const {
    as,
    fillColor = '#999',
    onRemove,
    id,
    isSelected,
    text,
    size = defaultTokenSize,
    hideRemoveButton,
    href,
    onClick,
    ...rest
  } = props;
  const interactiveTokenProps = {
    as,
    href,
    onClick
  };
  const {
    resolvedColorScheme
  } = useTheme();
  const hasMultipleActionTargets = isTokenInteractive(props) && Boolean(onRemove) && !hideRemoveButton;
  const onRemoveClick = e => {
    e.stopPropagation();
    onRemove && onRemove();
  };
  const labelStyles = useMemo(() => {
    const [r, g, b] = parseToRgba(fillColor);
    const [h, s, l] = parseToHsla(fillColor);
    const isLightScheme = !(resolvedColorScheme !== null && resolvedColorScheme !== void 0 && resolvedColorScheme.startsWith('dark')); // fall back to light colors for unknown schemes

    // label hack taken from https://github.com/github/github/blob/master/app/assets/stylesheets/hacks/hx_primer-labels.scss#L43-L108
    // this logic should eventually live in primer/components. Also worthy of note is that the dotcom hack code will be moving to primer/css soon.
    return {
      '--label-r': String(r),
      '--label-g': String(g),
      '--label-b': String(b),
      '--label-h': String(Math.round(h)),
      '--label-s': String(Math.round(s * 100)),
      '--label-l': String(Math.round(l * 100)),
      '--perceived-lightness': 'calc(((var(--label-r) * 0.2126) + (var(--label-g) * 0.7152) + (var(--label-b) * 0.0722)) / 255)',
      '--lightness-switch': 'max(0, min(calc((var(--perceived-lightness) - var(--lightness-threshold)) * -1000), 1))',
      paddingRight: hideRemoveButton || !onRemove ? undefined : 0,
      position: 'relative',
      ...(isLightScheme ? lightModeStyles : darkModeStyles),
      ...(isSelected ? {
        background: isLightScheme ? 'hsl(var(--label-h), calc(var(--label-s) * 1%), calc((var(--label-l) - 5) * 1%))' : darkModeStyles.background,
        ':focus': {
          outline: 'none'
        },
        ':after': {
          content: '""',
          position: 'absolute',
          zIndex: 1,
          top: `-${tokenBorderWidthPx * 2}px`,
          right: `-${tokenBorderWidthPx * 2}px`,
          bottom: `-${tokenBorderWidthPx * 2}px`,
          left: `-${tokenBorderWidthPx * 2}px`,
          display: 'block',
          pointerEvents: 'none',
          boxShadow: `0 0 0 ${tokenBorderWidthPx * 2}px ${isLightScheme ? 'rgb(var(--label-r), var(--label-g), var(--label-b))' : 'hsl(var(--label-h), calc(var(--label-s) * 1%), calc((var(--label-l) + var(--lighten-by)) * 1%))'}`,
          borderRadius: '999px'
        }
      } : {}),
      ...(isTokenInteractive(props) ? {
        '&:hover': {
          ...(isLightScheme ? {
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(rgb(var(--label-r),var(--label-g),var(--label-b)), rgb(var(--label-r),var(--label-g),var(--label-b)))'
          } : {
            background: 'hsla(var(--label-h), calc(var(--label-s) * 1%), calc(calc(var(--label-l) + 10) * 1%), 0.3);'
          }),
          boxShadow: 'shadow.medium'
        }
      } : {})
    };
  }, [fillColor, resolvedColorScheme, hideRemoveButton, onRemove, isSelected, props]);
  return /*#__PURE__*/React.createElement(TokenBase, _extends({
    onRemove: onRemove,
    id: id === null || id === void 0 ? void 0 : id.toString(),
    isSelected: isSelected,
    text: text,
    size: size,
    sx: labelStyles
  }, !hasMultipleActionTargets ? interactiveTokenProps : {}, rest, {
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(TokenTextContainer, hasMultipleActionTargets ? interactiveTokenProps : {}, text), !hideRemoveButton && onRemove ? /*#__PURE__*/React.createElement(RemoveTokenButton, {
    borderOffset: tokenBorderWidthPx,
    onClick: onRemoveClick,
    size: size,
    "aria-hidden": hasMultipleActionTargets ? 'true' : 'false',
    isParentInteractive: isTokenInteractive(props),
    sx: hasMultipleActionTargets ? {
      position: 'relative',
      zIndex: '1'
    } : {}
  }) : null);
});
IssueLabelToken.displayName = 'IssueLabelToken';

export { IssueLabelToken as default };
