/// <reference types="react" />
export type { MarkdownEditorHandle } from './MarkdownEditor';
/** @deprecated Will be removed in v37 (https://github.com/primer/react/issues/3604) */
declare const MarkdownEditor: import("react").ForwardRefExoticComponent<import("../..").SxProp & {
    value: string;
    onChange: (newMarkdown: string) => void;
    onRenderPreview: (markdown: string) => Promise<string>;
    children: import("react").ReactNode;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    maxLength?: number | undefined;
    fullHeight?: boolean | undefined;
    'aria-describedby'?: string | undefined;
    viewMode?: import("./_ViewSwitch").MarkdownViewMode | undefined;
    onChangeViewMode?: ((newViewMode: import("./_ViewSwitch").MarkdownViewMode) => void) | undefined;
    onPrimaryAction?: (() => void) | undefined;
    minHeightLines?: number | undefined;
    maxHeightLines?: number | undefined;
    emojiSuggestions?: import("./suggestions").SuggestionOptions<import("./suggestions/_useEmojiSuggestions").Emoji> | undefined;
    mentionSuggestions?: import("./suggestions").SuggestionOptions<import("./suggestions/_useMentionSuggestions").Mentionable> | undefined;
    referenceSuggestions?: import("./suggestions").SuggestionOptions<import("./suggestions/_useReferenceSuggestions").Reference> | undefined;
    onUploadFile?: ((file: File) => Promise<import("./_useFileHandling").FileUploadResult>) | undefined;
    acceptedFileTypes?: import("./_useFileHandling").FileType[] | undefined;
    monospace?: boolean | undefined;
    required?: boolean | undefined;
    name?: string | undefined;
    savedReplies?: import("./_SavedReplies").SavedReply[] | undefined;
    pasteUrlsAsPlainText?: boolean | undefined;
} & import("react").RefAttributes<import("./MarkdownEditor").MarkdownEditorHandle>> & {
    /** REQUIRED: An accessible label for the editor. */
    Label: import("react").FC<import("../..").SxProp & {
        visuallyHidden?: boolean | undefined;
        children?: import("react").ReactNode;
    }>;
    /**
     * An optional custom toolbar. The toolbar should contain `ToolbarButton`s before
     * and/or after a `DefaultToolbarButtons` instance. To create groups of buttons, wrap
     * them in an unstyled `Box`.
     */
    Toolbar: {
        ({ children }: {
            children?: import("react").ReactNode;
        }): import("react").JSX.Element;
        displayName: string;
    };
    /**
     * A custom toolbar button. This takes `IconButton` props. Every toolbar button should
     * have an `aria-label` defined.
     */
    ToolbarButton: import("react").ForwardRefExoticComponent<import("../..").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
    /**
     * The full set of default toolbar buttons. This is all the basic formatting tools in a
     * standardized order.
     */
    DefaultToolbarButtons: import("react").MemoExoticComponent<() => import("react").JSX.Element>;
    /** An optional custom footer to show below the editor. */
    Footer: {
        ({ children }: {
            children?: import("react").ReactNode;
        }): import("react").JSX.Element;
        displayName: string;
    };
    /** A button to show in the editor footer before the `DefaultFooterButtons`, i.e.
     * the "Markdown is supported" button and file upload button in a standardized order. */
    FooterButton: import("react").ForwardRefExoticComponent<{
        alignContent?: import("../../Button/types").AlignContent | undefined;
        icon?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | null | undefined;
        leadingVisual?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | null | undefined;
        trailingVisual?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | null | undefined;
        trailingAction?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | null | undefined;
        children?: import("react").ReactNode;
        count?: number | undefined;
    } & {
        variant?: import("../../Button/types").VariantType | undefined;
        size?: import("../../Button/types").Size | undefined;
        disabled?: boolean | undefined;
        block?: boolean | undefined;
        loading?: boolean | undefined;
        loadingAnnouncement?: string | undefined;
        inactive?: boolean | undefined;
        labelWrap?: boolean | undefined;
    } & import("../..").SxProp & import("react").ButtonHTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>;
    /**
     * Optionally define a set of custom buttons to show in the footer. Often if you
     * are defining custom buttons you should also wrap the editor in a `<form>`. This
     * component should only contain `ActionButton`s.
     */
    Actions: {
        ({ children }: {
            children?: import("react").ReactNode;
        }): import("react").JSX.Element;
        displayName: string;
    };
    /** A button to show in the editor footer after the `DefaultFooterButtons`, i.e.
     * the "Markdown is supported" button and file upload button in a standardized order. */
    ActionButton: import("react").ForwardRefExoticComponent<{
        alignContent?: import("../../Button/types").AlignContent | undefined;
        icon?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | null | undefined;
        leadingVisual?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | null | undefined;
        trailingVisual?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | null | undefined;
        trailingAction?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | null | undefined;
        children?: import("react").ReactNode;
        count?: number | undefined;
    } & {
        variant?: import("../../Button/types").VariantType | undefined;
        size?: import("../../Button/types").Size | undefined;
        disabled?: boolean | undefined;
        block?: boolean | undefined;
        loading?: boolean | undefined;
        loadingAnnouncement?: string | undefined;
        inactive?: boolean | undefined;
        labelWrap?: boolean | undefined;
    } & import("../..").SxProp & import("react").ButtonHTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>;
};
export default MarkdownEditor;
export type { MarkdownEditorProps } from './MarkdownEditor';
export type { Emoji } from './suggestions/_useEmojiSuggestions';
export type { Mentionable } from './suggestions/_useMentionSuggestions';
export type { Reference } from './suggestions/_useReferenceSuggestions';
export type { FileUploadResult, FileType } from './_useFileHandling';
export type { SavedReply } from './_SavedReplies';
//# sourceMappingURL=index.d.ts.map