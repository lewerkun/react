import React from 'react';
import styled from 'styled-components';
import { createComponent as createComponent$1 } from '@lit-labs/react';
import sx from '../sx.js';

const rename = str => str[0].toUpperCase() + str.slice(1).replace(/(-\w)/g, s => s[1].toUpperCase());
// eslint-disable-next-line @typescript-eslint/ban-types
const createComponent = (elementClass, tagName, events = undefined) => {
  const output = Object.assign(Object.assign(styled(createComponent$1({
    tagName,
    elementClass,
    react: React,
    events
  })), {
    displayName: rename(tagName)
  })(sx), {
    displayName: rename(tagName)
  });
  return output;
};

export { createComponent, createComponent as default };
