'use strict';

var styled = require('styled-components');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const ButtonGroup = styled__default.default.div.withConfig({
  displayName: "ButtonGroup",
  componentId: "sc-1gxhls1-0"
})(["display:inline-flex;vertical-align:middle;isolation:isolate;&& > *:not([data-loading-wrapper]){margin-inline-end:-1px;position:relative;border-radius:0;:first-child{border-top-left-radius:", ";border-bottom-left-radius:", ";}:last-child{border-top-right-radius:", ";border-bottom-right-radius:", ";}:focus,:active,:hover{z-index:1;}}[data-loading-wrapper]{:first-child{button,a{border-top-left-radius:", ";border-bottom-left-radius:", ";}}:last-child{button,a{border-top-right-radius:", ";border-bottom-right-radius:", ";}}}[data-loading-wrapper] > *{margin-inline-end:-1px;position:relative;border-radius:0;:focus,:active,:hover{z-index:1;}}", ";"], constants.get('radii.2'), constants.get('radii.2'), constants.get('radii.2'), constants.get('radii.2'), constants.get('radii.2'), constants.get('radii.2'), constants.get('radii.2'), constants.get('radii.2'), sx.default);

module.exports = ButtonGroup;
