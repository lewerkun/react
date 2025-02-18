import React, { useMemo } from 'react';
import { suggestionsCalculator } from './index.js';
import { ActionList } from '../../../ActionList/index.js';

const trigger = {
  triggerChar: ':',
  keepTriggerCharOnCommit: false
};
const emojiToSugggestion = emoji => ({
  value: 'character' in emoji ? emoji.character : `:${emoji.name}:`,
  key: emoji.name,
  // emoji characters may not be unique - ie haircut and haircut_man both have the same emoji codepoint. But names are guaranteed to be unique.
  render: props => /*#__PURE__*/React.createElement(ActionList.Item, props, /*#__PURE__*/React.createElement(ActionList.LeadingVisual, null, 'character' in emoji ? emoji.character : /*#__PURE__*/React.createElement("img", {
    src: emoji.url,
    alt: `${emoji.name} emoji`,
    height: "16",
    width: "16"
  })), emoji.name)
});

// for emojis we don't use a fuzzy search because they are short and easy to accurately search through
const scoreSuggestion = (query, emoji) => {
  const name = emoji.name.toLowerCase();
  const q = query.toLowerCase();
  let score = 0;
  if (name.includes(q)) {
    score += 5;
    if (name.startsWith(q)) score += 5;
  }
  return score;
};
const useEmojiSuggestions = emojis => {
  const calculateSuggestions = useMemo(() => suggestionsCalculator(emojis, scoreSuggestion, emojiToSugggestion), [emojis]);
  return {
    calculateSuggestions,
    trigger
  };
};

export { useEmojiSuggestions };
