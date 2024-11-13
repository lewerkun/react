import { createContext } from 'react';

// For performance, the properties in context MUST NOT be values that change often - every time
// any of the properties change, all components including memoized ones will be re-rendered

const MarkdownEditorContext = /*#__PURE__*/createContext({
  disabled: false,
  condensed: false,
  required: false,
  formattingToolsRef: {
    current: null
  },
  uploadButtonProps: null,
  fileDraggedOver: false,
  previewMode: false
});

export { MarkdownEditorContext };
