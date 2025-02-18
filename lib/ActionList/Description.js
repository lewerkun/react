'use strict';

var React = require('react');
var Box = require('../Box/Box.js');
var Truncate = require('../Truncate/Truncate.js');
require('@styled-system/css');
var merge = require('deepmerge');
var shared = require('./shared.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var merge__default = /*#__PURE__*/_interopDefault(merge);

const Description = ({
  variant = 'inline',
  sx = {},
  ...props
}) => {
  const styles = {
    fontSize: 0,
    lineHeight: '16px',
    flexGrow: 1,
    flexBasis: 0,
    minWidth: 0,
    marginLeft: variant === 'block' ? 0 : 2,
    color: 'fg.muted',
    'li[aria-disabled="true"] &[data-component="ActionList.Description"]': {
      color: 'inherit'
    },
    'li[data-variant="danger"]:hover &[data-component="ActionList.Description"], li[data-variant="danger"]:active &[data-component="ActionList.Description"]': {
      color: 'inherit'
    }
  };
  const {
    blockDescriptionId,
    inlineDescriptionId
  } = React__default.default.useContext(shared.ItemContext);
  return variant === 'block' ? /*#__PURE__*/React__default.default.createElement(Box, {
    as: "span",
    sx: merge__default.default(styles, sx),
    id: blockDescriptionId,
    "data-component": "ActionList.Description"
  }, props.children) : /*#__PURE__*/React__default.default.createElement(Truncate, {
    id: inlineDescriptionId,
    sx: merge__default.default(styles, sx),
    title: props.children,
    inline: true,
    maxWidth: "100%",
    "data-component": "ActionList.Description"
  }, props.children);
};

exports.Description = Description;
