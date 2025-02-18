import React from 'react';
import Box from '../Box/Box.js';
import Truncate from '../Truncate/Truncate.js';
import '@styled-system/css';
import merge from 'deepmerge';
import { ItemContext } from './shared.js';

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
  } = React.useContext(ItemContext);
  return variant === 'block' ? /*#__PURE__*/React.createElement(Box, {
    as: "span",
    sx: merge(styles, sx),
    id: blockDescriptionId,
    "data-component": "ActionList.Description"
  }, props.children) : /*#__PURE__*/React.createElement(Truncate, {
    id: inlineDescriptionId,
    sx: merge(styles, sx),
    title: props.children,
    inline: true,
    maxWidth: "100%",
    "data-component": "ActionList.Description"
  }, props.children);
};

export { Description };
