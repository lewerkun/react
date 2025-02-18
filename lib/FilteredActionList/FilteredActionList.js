'use strict';

var behaviors = require('@primer/behaviors');
var React = require('react');
var styled = require('styled-components');
var Box = require('../Box/Box.js');
var Spinner = require('../Spinner/Spinner.js');
var TextInput = require('../TextInput/TextInput.js');
var constants = require('../constants.js');
var index = require('../deprecated/ActionList/index.js');
var useFocusZone = require('../hooks/useFocusZone.js');
var useId = require('../hooks/useId.js');
var useProvidedRefOrCreate = require('../hooks/useProvidedRefOrCreate.js');
var useProvidedStateOrCreate = require('../hooks/useProvidedStateOrCreate.js');
var useScrollFlash = require('../hooks/useScrollFlash.js');
var VisuallyHidden = require('../internal/components/VisuallyHidden.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const menuScrollMargins = {
  startMargin: 0,
  endMargin: 8
};
const StyledHeader = styled__default.default.div.withConfig({
  displayName: "FilteredActionList__StyledHeader",
  componentId: "sc-1oqgb0s-0"
})(["box-shadow:0 1px 0 ", ";z-index:1;"], constants.get('colors.border.default'));
function FilteredActionList({
  loading = false,
  placeholderText,
  filterValue: externalFilterValue,
  onFilterChange,
  items,
  textInputProps,
  inputRef: providedInputRef,
  sx,
  ...listProps
}) {
  const [filterValue, setInternalFilterValue] = useProvidedStateOrCreate.useProvidedStateOrCreate(externalFilterValue, undefined, '');
  const onInputChange = React.useCallback(e => {
    const value = e.target.value;
    onFilterChange(value, e);
    setInternalFilterValue(value);
  }, [onFilterChange, setInternalFilterValue]);
  const scrollContainerRef = React.useRef(null);
  const listContainerRef = React.useRef(null);
  const inputRef = useProvidedRefOrCreate.useProvidedRefOrCreate(providedInputRef);
  const activeDescendantRef = React.useRef();
  const listId = useId.useId();
  const inputDescriptionTextId = useId.useId();
  const onInputKeyPress = React.useCallback(event => {
    if (event.key === 'Enter' && activeDescendantRef.current) {
      event.preventDefault();
      event.nativeEvent.stopImmediatePropagation();

      // Forward Enter key press to active descendant so that item gets activated
      const activeDescendantEvent = new KeyboardEvent(event.type, event.nativeEvent);
      activeDescendantRef.current.dispatchEvent(activeDescendantEvent);
    }
  }, [activeDescendantRef]);
  useFocusZone.useFocusZone({
    containerRef: listContainerRef,
    focusOutBehavior: 'wrap',
    focusableElementFilter: element => {
      return !(element instanceof HTMLInputElement);
    },
    activeDescendantFocus: inputRef,
    onActiveDescendantChanged: (current, previous, directlyActivated) => {
      activeDescendantRef.current = current;
      if (current && scrollContainerRef.current && directlyActivated) {
        behaviors.scrollIntoView(current, scrollContainerRef.current, menuScrollMargins);
      }
    }
  }, [
  // List ref isn't set while loading.  Need to re-bind focus zone when it changes
  loading]);
  React.useEffect(() => {
    // if items changed, we want to instantly move active descendant into view
    if (activeDescendantRef.current && scrollContainerRef.current) {
      behaviors.scrollIntoView(activeDescendantRef.current, scrollContainerRef.current, {
        ...menuScrollMargins,
        behavior: 'auto'
      });
    }
  }, [items]);
  useScrollFlash(scrollContainerRef);
  return /*#__PURE__*/React__default.default.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    sx: sx
  }, /*#__PURE__*/React__default.default.createElement(StyledHeader, null, /*#__PURE__*/React__default.default.createElement(TextInput, _extends({
    ref: inputRef,
    block: true,
    width: "auto",
    color: "fg.default",
    value: filterValue,
    onChange: onInputChange,
    onKeyPress: onInputKeyPress,
    placeholder: placeholderText,
    "aria-label": placeholderText,
    "aria-controls": listId,
    "aria-describedby": inputDescriptionTextId
  }, textInputProps))), /*#__PURE__*/React__default.default.createElement(VisuallyHidden.VisuallyHidden, {
    id: inputDescriptionTextId
  }, "Items will be filtered as you type"), /*#__PURE__*/React__default.default.createElement(Box, {
    ref: scrollContainerRef,
    overflow: "auto"
  }, loading ? /*#__PURE__*/React__default.default.createElement(Box, {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    pt: 6,
    pb: 7
  }, /*#__PURE__*/React__default.default.createElement(Spinner, null)) : /*#__PURE__*/React__default.default.createElement(index.ActionList, _extends({
    ref: listContainerRef,
    items: items
  }, listProps, {
    role: "listbox",
    id: listId
  }))));
}
FilteredActionList.displayName = "FilteredActionList";
FilteredActionList.displayName = 'FilteredActionList';

exports.FilteredActionList = FilteredActionList;
