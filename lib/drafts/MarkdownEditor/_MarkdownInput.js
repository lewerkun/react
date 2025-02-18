'use strict';

var index_esm = require('../../node_modules/@github/paste-markdown/dist/index.esm.js');
var React = require('react');
var useDynamicTextareaHeight = require('../hooks/useDynamicTextareaHeight.js');
var InlineAutocomplete = require('../InlineAutocomplete/InlineAutocomplete.js');
var Textarea = require('../../Textarea/Textarea.js');
var _useEmojiSuggestions = require('./suggestions/_useEmojiSuggestions.js');
var _useMentionSuggestions = require('./suggestions/_useMentionSuggestions.js');
var _useReferenceSuggestions = require('./suggestions/_useReferenceSuggestions.js');
require('@primer/behaviors/utils');
require('@primer/behaviors');
var useRefObjectAsForwardedRef = require('../../hooks/useRefObjectAsForwardedRef.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const emptyArray = []; // constant reference to avoid re-running effects

const MarkdownInput = /*#__PURE__*/React.forwardRef(({
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
  const [suggestions, setSuggestions] = React.useState(null);
  const [event, setEvent] = React.useState(null);
  const {
    trigger: emojiTrigger,
    calculateSuggestions: calculateEmojiSuggestions
  } = _useEmojiSuggestions.useEmojiSuggestions(emojiSuggestions !== null && emojiSuggestions !== void 0 ? emojiSuggestions : emptyArray);
  const {
    trigger: mentionsTrigger,
    calculateSuggestions: calculateMentionSuggestions
  } = _useMentionSuggestions.useMentionSuggestions(mentionSuggestions !== null && mentionSuggestions !== void 0 ? mentionSuggestions : emptyArray);
  const {
    trigger: referencesTrigger,
    calculateSuggestions: calculateReferenceSuggestions
  } = _useReferenceSuggestions.useReferenceSuggestions(referenceSuggestions !== null && referenceSuggestions !== void 0 ? referenceSuggestions : emptyArray);
  const triggers = React.useMemo(() => [mentionsTrigger, referencesTrigger, emojiTrigger], [mentionsTrigger, referencesTrigger, emojiTrigger]);
  const lastEventRef = React.useRef(null);
  const onHideSuggestions = () => {
    setEvent(null);
    setSuggestions(null); // the effect would do this anyway, but this allows React to batch the update
  };

  // running the calculation in an effect (rather than in the onShowSuggestions handler) allows us
  // to automatically recalculate if the suggestions change while the menu is open
  React.useEffect(() => {
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
  const ref = React.useRef(null);
  useRefObjectAsForwardedRef.useRefObjectAsForwardedRef(forwardedRef, ref);
  React.useEffect(() => {
    const subscription = ref.current && index_esm.subscribe(ref.current, {
      defaultPlainTextPaste: {
        urlLinks: pasteUrlsAsPlainText
      }
    });
    return subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe;
  }, [pasteUrlsAsPlainText]);
  const heightStyles = useDynamicTextareaHeight.useDynamicTextareaHeight({
    // if fullHeight is enabled, there is no need to compute a dynamic height (for perfs reasons)
    disabled: fullHeight,
    maxHeightLines,
    minHeightLines,
    elementRef: ref,
    value
  });
  return /*#__PURE__*/React__default.default.createElement(InlineAutocomplete, {
    triggers: triggers,
    suggestions: suggestions,
    onShowSuggestions: setEvent,
    onHideSuggestions: onHideSuggestions,
    sx: {
      flex: 'auto'
    },
    tabInsertsSuggestions: true
  }, /*#__PURE__*/React__default.default.createElement(Textarea.default, _extends({
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

exports.MarkdownInput = MarkdownInput;
