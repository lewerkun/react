/// <reference types="react" />
/// <reference types="react" />
import type { SxProp } from '../../sx';
import type { ComponentProps } from '../../utils/types';
export declare const ButtonPrimary: import("styled-components").StyledComponent<"button", any, {
    as?: string | import("react").ComponentClass<any, any> | import("react").FunctionComponent<any> | undefined;
    variant?: "small" | "medium" | "large" | undefined;
} & {
    color?: string | undefined;
    property?: string | undefined;
    content?: string | undefined;
    translate?: "yes" | "no" | undefined;
    hidden?: boolean | undefined;
    "aria-keyshortcuts"?: string | undefined;
    form?: string | undefined;
    slot?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    title?: string | undefined;
    id?: string | undefined;
    dir?: string | undefined;
    children?: import("react").ReactNode;
    accessKey?: string | undefined;
    draggable?: (boolean | "false" | "true") | undefined;
    lang?: string | undefined;
    className?: string | undefined;
    prefix?: string | undefined;
    role?: import("react").AriaRole | undefined;
    contentEditable?: "inherit" | (boolean | "false" | "true") | "plaintext-only" | undefined;
    inputMode?: "search" | "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
    nonce?: string | undefined;
    tabIndex?: number | undefined;
    onChange?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    as?: string | import("react").ComponentClass<any, any> | import("react").FunctionComponent<any> | undefined;
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
    suppressHydrationWarning?: boolean | undefined;
    name?: string | undefined;
    type?: "reset" | "submit" | "button" | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "false" | "true") | undefined;
    "aria-autocomplete"?: "none" | "list" | "both" | "inline" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "false" | "true") | undefined;
    "aria-checked"?: boolean | "mixed" | "false" | "true" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "page" | "time" | "false" | "true" | "date" | "step" | "location" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "false" | "true") | undefined;
    "aria-dropeffect"?: "link" | "none" | "copy" | "move" | "execute" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "false" | "true") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "false" | "true") | undefined;
    "aria-haspopup"?: boolean | "grid" | "dialog" | "listbox" | "menu" | "tree" | "false" | "true" | undefined;
    "aria-hidden"?: (boolean | "false" | "true") | undefined;
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "false" | "true") | undefined;
    "aria-multiline"?: (boolean | "false" | "true") | undefined;
    "aria-multiselectable"?: (boolean | "false" | "true") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "mixed" | "false" | "true" | undefined;
    "aria-readonly"?: (boolean | "false" | "true") | undefined;
    "aria-relevant"?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "false" | "true") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "false" | "true") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCut?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onPaste?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onFocus?: import("react").FocusEventHandler<HTMLButtonElement> | undefined;
    onFocusCapture?: import("react").FocusEventHandler<HTMLButtonElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLButtonElement> | undefined;
    onBlurCapture?: import("react").FocusEventHandler<HTMLButtonElement> | undefined;
    onChangeCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onBeforeInput?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onInput?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onInputCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onReset?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onResetCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onSubmit?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onSubmitCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onInvalid?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onInvalidCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onLoad?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onError?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onErrorCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onKeyDown?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyUp?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onAbort?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onAbortCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlay?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onDurationChange?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEmptied?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEncrypted?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEnded?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEndedCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedData?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadStart?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPause?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPauseCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPlay?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPlayCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPlaying?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onProgress?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onProgressCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onRateChange?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onResize?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onResizeCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSeeked?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSeeking?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onStalled?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onStalledCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSuspend?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onVolumeChange?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onWaiting?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onAuxClick?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onClick?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onClickCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onContextMenu?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onDoubleClick?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onDrag?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnd?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragEndCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnter?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragExit?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragExitCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragLeave?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragOver?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragOverCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragStart?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragStartCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDrop?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDropCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onMouseDown?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseLeave?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseMove?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOut?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOver?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseUp?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onSelect?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSelectCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onTouchCancel?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchEnd?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchMove?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onPointerDown?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerMove?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerUp?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerCancel?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerEnter?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerLeave?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOver?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOut?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onScroll?: import("react").UIEventHandler<HTMLButtonElement> | undefined;
    onScrollCapture?: import("react").UIEventHandler<HTMLButtonElement> | undefined;
    onWheel?: import("react").WheelEventHandler<HTMLButtonElement> | undefined;
    onWheelCapture?: import("react").WheelEventHandler<HTMLButtonElement> | undefined;
    onAnimationStart?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLButtonElement> | undefined;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLButtonElement> | undefined;
    key?: import("react").Key | null | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    autoFocus?: boolean | undefined;
    contextMenu?: string | undefined;
    spellCheck?: (boolean | "false" | "true") | undefined;
    radioGroup?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "off" | "on" | undefined;
    is?: string | undefined;
    disabled?: boolean | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    value?: string | number | readonly string[] | undefined;
    variant?: "small" | "medium" | "large" | undefined;
} & {
    theme?: any;
} & SxProp, never>;
export type ButtonPrimaryProps = ComponentProps<typeof ButtonPrimary>;
export default ButtonPrimary;
//# sourceMappingURL=ButtonPrimary.d.ts.map