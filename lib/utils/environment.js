'use strict';

/**
 * Indicate whether current execution environment can access the DOM.
 *
 * @see https://github.com/facebook/fbjs/blob/4d1751311d3f67af2dcce2e40df8512a23c7b9c6/packages/fbjs/src/core/ExecutionEnvironment.js#L12
 */
// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.canUseDOM = canUseDOM;
