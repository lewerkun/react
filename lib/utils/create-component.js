'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var createComponent$1 = require('../node_modules/@lit-labs/react/create-component.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

const rename = str => str[0].toUpperCase() + str.slice(1).replace(/(-\w)/g, s => s[1].toUpperCase());
// eslint-disable-next-line @typescript-eslint/ban-types
const createComponent = (elementClass, tagName, events = undefined) => {
  const output = Object.assign(Object.assign(styled__default.default(createComponent$1.createComponent({
    tagName,
    elementClass,
    react: React__default.default,
    events
  })), {
    displayName: rename(tagName)
  })(sx.default), {
    displayName: rename(tagName)
  });
  return output;
};

exports.createComponent = createComponent;
exports.default = createComponent;
