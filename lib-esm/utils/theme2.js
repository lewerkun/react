import { getDefaultExportFromCjs } from '../_virtual/_commonjsHelpers.js';
import require$$0 from 'lodash.isempty';
import require$$1 from 'lodash.isobject';

// Utility functions used in theme-preval.js
// This file needs to be a JavaScript file using CommonJS to be compatible with preval

const isEmpty = require$$0;
const isObject = require$$1;
function fontStack(fonts) {
  return fonts.map(font => font.includes(' ') ? `"${font}"` : font).join(', ');
}

// The following functions are a temporary measure for splitting shadow values out from the colors object.
// Eventually, we will push these structural changes upstream to primer/primitives so this data manipulation
// will not be needed.

function isShadowValue(value) {
  return typeof value === 'string' && /(inset\s|)([0-9.]+(\w*)\s){1,4}(rgb[a]?\(.*\)|\w+)/.test(value);
}
function isColorValue(value) {
  if (isShadowValue(value)) return false;
  if (value.startsWith('#')) return true; // #hex
  if (value.startsWith('rgb')) return true; // rgb, rgba
  if (value.startsWith('hsl')) return true; // hsl, hsla
  if (value.startsWith('var')) return true; // var(--color)
  return false;
}
function filterObject(obj, predicate) {
  if (Array.isArray(obj)) {
    return obj.filter(predicate);
  }
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (isObject(value)) {
      const result = filterObject(value, predicate);

      // Don't include empty objects or arrays
      if (!isEmpty(result)) {
        acc[key] = result;
      }
    } else if (predicate(value)) {
      acc[key] = value;
    }
    return acc;
  }, {});
}
function partitionColors(colors) {
  return {
    colors: filterObject(colors, value => isColorValue(value)),
    shadows: filterObject(colors, value => isShadowValue(value))
  };
}
function omitScale(obj) {
  const {
    scale,
    ...rest
  } = obj;
  return rest;
}
var theme = {
  fontStack,
  isShadowValue,
  isColorValue,
  filterObject,
  partitionColors,
  omitScale
};

var theme$1 = /*@__PURE__*/getDefaultExportFromCjs(theme);

export { theme$1 as default, theme as t };
