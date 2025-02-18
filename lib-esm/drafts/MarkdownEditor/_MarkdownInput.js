import { subscribe } from '@github/paste-markdown';
import React, { forwardRef, useState, useMemo, useRef, useEffect } from 'react';
import { useDynamicTextareaHeight } from '../hooks/useDynamicTextareaHeight.js';
import InlineAutocomplete from '../InlineAutocomplete/InlineAutocomplete.js';
import Textarea from '../../Textarea/Textarea.js';
import { useEmojiSuggestions } from './suggestions/_useEmojiSuggestions.js';
import { useMentionSuggestions } from './suggestions/_useMentionSuggestions.js';
import { useReferenceSuggestions } from './suggestions/_useReferenceSuggestions.js';
import '@primer/behaviors/utils';
import '@primer/behaviors';
import { useRefObjectAsForwardedRef } from '../../hooks/useRefObjectAsForwardedRef.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const emptyArray = []; // constant reference to avoid re-running effects

const MarkdownInput = /*#__PURE__*/forwardRef(({
  value,
  onChange,
  disabled,
  placeholder,
  id,
  maxLength,
  onKeyDown,
  fullHeight,
  isDraggedOver,
  emojiSuggestions,
  mentionSuggestions,
  referenceSuggestions,
  minHeightLines,
  maxHeightLines,
  visible,
  monospace,
  pasteUrlsAsPlainText,
  ...props
}, forwardedRef) => {
  const [suggestions, setSuggestions] = useState(null);
  const [event, setEvent] = useState(null);
  const {
    trigger: emojiTrigger,
    calculateSuggestions: calculateEmojiSuggestions
  } = useEmojiSuggestions(emojiSuggestions !== null && emojiSuggestions !== void 0 ? emojiSuggestions : emptyArray);
  const {
    trigger: mentionsTrigger,
    calculateSuggestions: calculateMentionSuggestions
  } = useMentionSuggestions(mentionSuggestions !== null && mentionSuggestions !== void 0 ? mentionSuggestions : emptyArray);
  const {
    trigger: referencesTrigger,
    calculateSuggestions: calculateReferenceSuggestions
  } = useReferenceSuggestions(referenceSuggestions !== null && referenceSuggestions !== void 0 ? referenceSuggestions : emptyArray);
  const triggers = useMemo(() => [mentionsTrigger, referencesTrigger, emojiTrigger], [mentionsTrigger, referencesTrigger, emojiTrigger]);
  const lastEventRef = useRef(null);
  const onHideSuggestions = () => {
    setEvent(null);
    setSuggestions(null); // the effect would do this anyway, but this allows React to batch the update
  };

  // running the calculation in an effect (rather than in the onShowSuggestions handler) allows us
  // to automatically recalculate if the suggestions change while the menu is open
  useEffect(() => {
    if (!event) {
      setSuggestions(null);
      return;
    }
    (async function () {
      lastEventRef.current = event;
      setSuggestions('loading');
      if (event.trigger.triggerChar === emojiTrigger.triggerChar) {
        setSuggestions(await calculateEmojiSuggestions(event.query));
      } else if (event.trigger.triggerChar === mentionsTrigger.triggerChar) {
        setSuggestions(await calculateMentionSuggestions(event.query));
      } else if (event.trigger.triggerChar === referencesTrigger.triggerChar) {
        setSuggestions(await calculateReferenceSuggestions(event.query));
      }
    })();
  }, [event, calculateEmojiSuggestions, calculateMentionSuggestions, calculateReferenceSuggestions,
  // The triggers never actually change because they are statically defined
  emojiTrigger, mentionsTrigger, referencesTrigger]);
  const ref = useRef(null);
  useRefObjectAsForwardedRef(forwardedRef, ref);
  useEffect(() => {
    const subscription = ref.current && subscribe(ref.current, {
      defaultPlainTextPaste: {
        urlLinks: pasteUrlsAsPlainText
      }
    });
    return subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe;
  }, [pasteUrlsAsPlainText]);
  const heightStyles = useDynamicTextareaHeight({
    // if fullHeight is enabled, there is no need to compute a dynamic height (for perfs reasons)
    disabled: fullHeight,
    maxHeightLines,
    minHeightLines,
    elementRef: ref,
    value
  });
  return /*#__PURE__*/React.createElement(InlineAutocomplete, {
    triggers: triggers,
    suggestions: suggestions,
    onShowSuggestions: setEvent,
    onHideSuggestions: onHideSuggestions,
    sx: {
      flex: 'auto'
    },
    tabInsertsSuggestions: true
  }, /*#__PURE__*/React.createElement(Textarea, _extends({
    id: id,
    ref: ref,
    placeholder: placeholder,
    maxLength: maxLength,
    value: value,
    onKeyDown: onKeyDown,
    disabled: disabled,
    "aria-label": "Markdown value",
    onChange: onChange,
    sx: {
      borderStyle: 'none',
      boxShadow: 'none',
      height: fullHeight ? '100%' : undefined,
      outline: theme => {
        return isDraggedOver ? `dashed 2px ${theme.colors.border.muted}` : undefined;
      },
      outlineOffset: '-4px',
      display: visible ? undefined : 'none',
      '&: focus-within': {
        boxShadow: 'none',
        outline: 'none'
      },
      '& textarea': {
        lineHeight: 'var(--text-body-lineHeight-medium, 1.4285)',
        resize: fullHeight ? 'none' : 'vertical',
        p: 3,
        fontFamily: monospace ? 'mono' : 'normal',
        ...heightStyles
      }
    }
  }, props)));
});
MarkdownInput.displayName = 'MarkdownInput';

export { MarkdownInput };
