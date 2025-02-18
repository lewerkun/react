declare const colors: {
    readonly canvasDefaultTransparent: "var(--bgColor-transparent, var(--color-canvas-default-transparent, rgba(255,255,255,0)))";
    readonly pageHeaderBg: "var(--page-header-bgColor, var(--color-page-header-bg, #f6f8fa))";
    readonly marketingIcon: {
        readonly primary: "var(--color-marketing-icon-primary, #218bff)";
        readonly secondary: "var(--color-marketing-icon-secondary, #54aeff)";
    };
    readonly diffBlob: {
        readonly addition: {
            readonly numText: "var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, #24292f))";
            readonly fg: "var(--diffBlob-addition-fgColor-text, var(--color-diff-blob-addition-fg, #24292f))";
            readonly numBg: "var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg, rgba(84,174,255,0.4)))";
            readonly lineBg: "var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg, rgba(221,244,255,0.5)))";
            readonly wordBg: "var(--diffBlob-addition-bgColor-word, var(--color-diff-blob-addition-word-bg, rgba(84,174,255,0.4)))";
        };
        readonly deletion: {
            readonly numText: "var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, #24292f))";
            readonly fg: "var(--diffBlob-deletion-fgColor-text, var(--color-diff-blob-deletion-fg, #24292f))";
            readonly numBg: "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, rgba(247,153,57,0.4)))";
            readonly lineBg: "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, rgba(255,245,232,0.5)))";
            readonly wordBg: "var(--diffBlob-deletion-bgColor-word, var(--color-diff-blob-deletion-word-bg, rgba(255,188,109,0.5)))";
        };
        readonly hunk: {
            readonly numBg: "var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg, rgba(84,174,255,0.4)))";
        };
        readonly expander: {
            readonly icon: "var(--diffBlob-expander-iconColor, var(--color-diff-blob-expander-icon, #57606a))";
        };
        readonly selectedLineHighlightMixBlendMode: "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, multiply)";
    };
    readonly diffstat: {
        readonly deletionBorder: "var(--color-diffstat-deletion-border, rgba(27,31,36,0.15))";
        readonly additionBorder: "var(--color-diffstat-addition-border, rgba(27,31,36,0.15))";
        readonly additionBg: "var(undefined, var(--color-diffstat-addition-bg, #0969da))";
    };
    readonly searchKeyword: {
        readonly hl: "var(--highlight-neutral-bgColor, var(--color-search-keyword-hl, #fff8c5))";
    };
    readonly prettylights: {
        readonly syntax: {
            readonly comment: "var(--color-prettylights-syntax-comment, #57606a)";
            readonly constant: "var(--color-prettylights-syntax-constant, #0550ae)";
            readonly entity: "var(--color-prettylights-syntax-entity, #6639ba)";
            readonly storageModifierImport: "var(--color-prettylights-syntax-storage-modifier-import, #24292f)";
            readonly entityTag: "var(--color-prettylights-syntax-entity-tag, #0550ae)";
            readonly keyword: "var(--color-prettylights-syntax-keyword, #b35900)";
            readonly string: "var(--color-prettylights-syntax-string, #0a3069)";
            readonly variable: "var(--color-prettylights-syntax-variable, #8a4600)";
            readonly brackethighlighterUnmatched: "var(--color-prettylights-syntax-brackethighlighter-unmatched, #6f3800)";
            readonly invalidIllegalText: "var(--color-prettylights-syntax-invalid-illegal-text, #f6f8fa)";
            readonly invalidIllegalBg: "var(--color-prettylights-syntax-invalid-illegal-bg, #6f3800)";
            readonly carriageReturnText: "var(--color-prettylights-syntax-carriage-return-text, #f6f8fa)";
            readonly carriageReturnBg: "var(--color-prettylights-syntax-carriage-return-bg, #b35900)";
            readonly stringRegexp: "var(--color-prettylights-syntax-string-regexp, #0550ae)";
            readonly markupList: "var(--color-prettylights-syntax-markup-list, #3b2300)";
            readonly markupHeading: "var(--color-prettylights-syntax-markup-heading, #0550ae)";
            readonly markupItalic: "var(--color-prettylights-syntax-markup-italic, #24292f)";
            readonly markupBold: "var(--color-prettylights-syntax-markup-bold, #24292f)";
            readonly markupDeletedText: "var(--color-prettylights-syntax-markup-deleted-text, #6f3800)";
            readonly markupDeletedBg: "var(--color-prettylights-syntax-markup-deleted-bg, #fff5e8)";
            readonly markupInsertedText: "var(--color-prettylights-syntax-markup-inserted-text, #0550ae)";
            readonly markupInsertedBg: "var(--color-prettylights-syntax-markup-inserted-bg, #ddf4ff)";
            readonly markupChangedText: "var(--color-prettylights-syntax-markup-changed-text, #8a4600)";
            readonly markupChangedBg: "var(--color-prettylights-syntax-markup-changed-bg, #ffddb0)";
            readonly markupIgnoredText: "var(--color-prettylights-syntax-markup-ignored-text, #eaeef2)";
            readonly markupIgnoredBg: "var(--color-prettylights-syntax-markup-ignored-bg, #0550ae)";
            readonly metaDiffRange: "var(--color-prettylights-syntax-meta-diff-range, #8250df)";
            readonly brackethighlighterAngle: "var(--color-prettylights-syntax-brackethighlighter-angle, #57606a)";
            readonly sublimelinterGutterMark: "var(--color-prettylights-syntax-sublimelinter-gutter-mark, #8c959f)";
            readonly constantOtherReferenceLink: "var(--color-prettylights-syntax-constant-other-reference-link, #0a3069)";
        };
    };
    readonly codemirror: {
        readonly text: "var(--codeMirror-fgColor, var(--color-codemirror-text, #24292f))";
        readonly bg: "var(--codeMirror-bgColor, var(--color-codemirror-bg, #ffffff))";
        readonly guttersBg: "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, #ffffff))";
        readonly guttermarkerText: "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, #ffffff))";
        readonly guttermarkerSubtleText: "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, #6e7781))";
        readonly linenumberText: "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, #57606a))";
        readonly cursor: "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, #24292f))";
        readonly selectionBg: "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, rgba(84,174,255,0.4)))";
        readonly activelineBg: "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, rgba(234,238,242,0.5)))";
        readonly matchingbracketText: "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, #24292f))";
        readonly linesBg: "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, #ffffff))";
        readonly syntax: {
            readonly comment: "var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, #24292f))";
            readonly constant: "var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, #0550ae))";
            readonly entity: "var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, #8250df))";
            readonly keyword: "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #b35900))";
            readonly storage: "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #b35900))";
            readonly string: "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #0a3069))";
            readonly support: "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #0550ae))";
            readonly variable: "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #8a4600))";
        };
    };
    readonly checks: {
        readonly bg: "var(--color-checks-bg, #24292f)";
        readonly runBorderWidth: "var(--color-checks-run-border-width, 0px)";
        readonly containerBorderWidth: "var(--color-checks-container-border-width, 0px)";
        readonly textPrimary: "var(--color-checks-text-primary, #f6f8fa)";
        readonly textSecondary: "var(--color-checks-text-secondary, #8c959f)";
        readonly textLink: "var(--color-checks-text-link, #54aeff)";
        readonly btnIcon: "var(--color-checks-btn-icon, #afb8c1)";
        readonly btnHoverIcon: "var(--color-checks-btn-hover-icon, #f6f8fa)";
        readonly btnHoverBg: "var(--color-checks-btn-hover-bg, rgba(255,255,255,0.125))";
        readonly inputText: "var(--color-checks-input-text, #eaeef2)";
        readonly inputPlaceholderText: "var(--color-checks-input-placeholder-text, #8c959f)";
        readonly inputFocusText: "var(--color-checks-input-focus-text, #8c959f)";
        readonly inputBg: "var(--color-checks-input-bg, #32383f)";
        readonly inputShadow: "var(--color-checks-input-shadow, none)";
        readonly donutError: "var(--color-checks-donut-error, #dd7815)";
        readonly donutPending: "var(--color-checks-donut-pending, #bf8700)";
        readonly donutSuccess: "var(--color-checks-donut-success, #0969da)";
        readonly donutNeutral: "var(--color-checks-donut-neutral, #afb8c1)";
        readonly dropdownText: "var(--color-checks-dropdown-text, #afb8c1)";
        readonly dropdownBg: "var(--color-checks-dropdown-bg, #32383f)";
        readonly dropdownBorder: "var(--color-checks-dropdown-border, #424a53)";
        readonly dropdownShadow: "var(--color-checks-dropdown-shadow, rgba(27,31,36,0.3))";
        readonly dropdownHoverText: "var(--color-checks-dropdown-hover-text, #f6f8fa)";
        readonly dropdownHoverBg: "var(--color-checks-dropdown-hover-bg, #424a53)";
        readonly dropdownBtnHoverText: "var(--color-checks-dropdown-btn-hover-text, #f6f8fa)";
        readonly dropdownBtnHoverBg: "var(--color-checks-dropdown-btn-hover-bg, #32383f)";
        readonly scrollbarThumbBg: "var(--color-checks-scrollbar-thumb-bg, #57606a)";
        readonly headerLabelText: "var(--color-checks-header-label-text, #d0d7de)";
        readonly headerLabelOpenText: "var(--color-checks-header-label-open-text, #f6f8fa)";
        readonly headerBorder: "var(--color-checks-header-border, #32383f)";
        readonly headerIcon: "var(--color-checks-header-icon, #8c959f)";
        readonly lineText: "var(--color-checks-line-text, #d0d7de)";
        readonly lineNumText: "var(--color-checks-line-num-text, rgba(140,149,159,0.75))";
        readonly lineTimestampText: "var(--color-checks-line-timestamp-text, #8c959f)";
        readonly lineHoverBg: "var(--color-checks-line-hover-bg, #32383f)";
        readonly lineSelectedBg: "var(--color-checks-line-selected-bg, rgba(33,139,255,0.15))";
        readonly lineSelectedNumText: "var(--color-checks-line-selected-num-text, #54aeff)";
        readonly lineDtFmText: "var(--color-checks-line-dt-fm-text, #24292f)";
        readonly lineDtFmBg: "var(--color-checks-line-dt-fm-bg, #9a6700)";
        readonly gateBg: "var(--color-checks-gate-bg, rgba(125,78,0,0.15))";
        readonly gateText: "var(--color-checks-gate-text, #d0d7de)";
        readonly gateWaitingText: "var(--color-checks-gate-waiting-text, #d4a72c)";
        readonly stepHeaderOpenBg: "var(--color-checks-step-header-open-bg, #32383f)";
        readonly stepErrorText: "var(--color-checks-step-error-text, #f79939)";
        readonly stepWarningText: "var(--color-checks-step-warning-text, #d4a72c)";
        readonly loglineText: "var(--color-checks-logline-text, #8c959f)";
        readonly loglineNumText: "var(--color-checks-logline-num-text, rgba(140,149,159,0.75))";
        readonly loglineDebugText: "var(--color-checks-logline-debug-text, #c297ff)";
        readonly loglineErrorText: "var(--color-checks-logline-error-text, #d0d7de)";
        readonly loglineErrorNumText: "var(--color-checks-logline-error-num-text, #f79939)";
        readonly loglineErrorBg: "var(--color-checks-logline-error-bg, rgba(138,70,0,0.15))";
        readonly loglineWarningText: "var(--color-checks-logline-warning-text, #d0d7de)";
        readonly loglineWarningNumText: "var(--color-checks-logline-warning-num-text, #d4a72c)";
        readonly loglineWarningBg: "var(--color-checks-logline-warning-bg, rgba(125,78,0,0.15))";
        readonly loglineCommandText: "var(--color-checks-logline-command-text, #54aeff)";
        readonly loglineSectionText: "var(--color-checks-logline-section-text, #54aeff)";
        readonly ansi: {
            readonly black: "var(--color-checks-ansi-black, #24292f)";
            readonly blackBright: "var(--color-checks-ansi-black-bright, #32383f)";
            readonly white: "var(--color-checks-ansi-white, #d0d7de)";
            readonly whiteBright: "var(--color-checks-ansi-white-bright, #d0d7de)";
            readonly gray: "var(--color-checks-ansi-gray, #8c959f)";
            readonly red: "var(--color-checks-ansi-red, #f79939)";
            readonly redBright: "var(--color-checks-ansi-red-bright, #ffbc6d)";
            readonly green: "var(--color-checks-ansi-green, #54aeff)";
            readonly greenBright: "var(--color-checks-ansi-green-bright, #80ccff)";
            readonly yellow: "var(--color-checks-ansi-yellow, #d4a72c)";
            readonly yellowBright: "var(--color-checks-ansi-yellow-bright, #eac54f)";
            readonly blue: "var(--color-checks-ansi-blue, #54aeff)";
            readonly blueBright: "var(--color-checks-ansi-blue-bright, #80ccff)";
            readonly magenta: "var(--color-checks-ansi-magenta, #c297ff)";
            readonly magentaBright: "var(--color-checks-ansi-magenta-bright, #d8b9ff)";
            readonly cyan: "var(--color-checks-ansi-cyan, #76e3ea)";
            readonly cyanBright: "var(--color-checks-ansi-cyan-bright, #b3f0ff)";
        };
    };
    readonly project: {
        readonly headerBg: "var(--color-project-header-bg, #24292f)";
        readonly sidebarBg: "var(--color-project-sidebar-bg, #ffffff)";
        readonly gradientIn: "var(--color-project-gradient-in, #ffffff)";
        readonly gradientOut: "var(--color-project-gradient-out, rgba(255,255,255,0))";
    };
    readonly mktg: {
        readonly btn: {
            readonly bg: "var(--color-mktg-btn-bg, #1b1f23))";
            readonly shadow: {
                readonly outline: "var(--color-mktg-btn-shadow-outline, rgb(0 0 0 / 15%) 0 0 0 1px inset))";
                readonly focus: "var(--color-mktg-btn-shadow-focus, rgb(0 0 0 / 15%) 0 0 0 4px))";
                readonly hover: "var(--color-mktg-btn-shadow-hover, 0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02)))";
                readonly hoverMuted: "var(--color-mktg-btn-shadow-hover-muted, rgb(0 0 0 / 70%) 0 0 0 2px inset))";
            };
        };
    };
    readonly control: {
        readonly borderColor: {
            readonly emphasis: "var(--control-borderColor-emphasis, var(--color-control-border-color-emphasis, #858F99))";
        };
    };
    readonly avatar: {
        readonly bg: "var(--avatar-bgColor, var(--color-avatar-bg, #ffffff))";
        readonly border: "var(--avatar-borderColor, var(--color-avatar-border, rgba(27,31,36,0.15)))";
        readonly stackFade: "var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, #afb8c1))";
        readonly stackFadeMore: "var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, #d0d7de))";
        readonly childShadow: "var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px rgba(255,255,255,0.8)))";
    };
    readonly topicTag: {
        readonly border: "var(--topicTag-borderColor, var(--color-topic-tag-border, transparent))";
    };
    readonly counter: {
        readonly border: "var(--counter-borderColor, var(--color-counter-border, transparent))";
    };
    readonly selectMenu: {
        readonly backdropBorder: "var(--selectMenu-borderColor, var(--color-select-menu-backdrop-border, transparent))";
        readonly tapHighlight: "var(--control-bgColor-active, var(--color-select-menu-tap-highlight, rgba(175,184,193,0.5)))";
        readonly tapFocusBg: "var(--selectMenu-bgColor-active, var(--color-select-menu-tap-focus-bg, #b6e3ff))";
    };
    readonly overlay: {
        readonly shadow: "var(--shadow-floating-small, var(--color-overlay-shadow, 0 1px 3px rgba(27,31,36,0.12), 0 8px 24px rgba(66,74,83,0.12)))";
        readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, rgba(140,149,159,0.2)))";
    };
    readonly header: {
        readonly text: "var(--header-fgColor-default, var(--color-header-text, rgba(255,255,255,0.7)))";
        readonly bg: "var(--header-bgColor, var(--color-header-bg, #24292f))";
        readonly divider: "var(--header-borderColor-divider, var(--color-header-divider, #57606a))";
        readonly logo: "var(--header-fgColor-logo, var(--color-header-logo, #ffffff))";
    };
    readonly headerSearch: {
        readonly bg: "var(--headerSearch-bgColor, var(--color-header-search-bg, #24292f))";
        readonly border: "var(--headerSearch-borderColor, var(--color-header-search-border, #57606a))";
    };
    readonly sidenav: {
        readonly selectedBg: "var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, #ffffff))";
    };
    readonly menu: {
        readonly bgActive: "var(--menu-bgColor-active, var(--color-menu-bg-active, transparent))";
    };
    readonly input: {
        readonly disabledBg: "var(--control-bgColor-disabled, var(--color-input-disabled-bg, rgba(175,184,193,0.2)))";
    };
    readonly timeline: {
        readonly badgeBg: "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #eaeef2))";
    };
    readonly ansi: {
        readonly black: "var(--color-ansi-black, #24292f)";
        readonly blackBright: "var(--color-ansi-black-bright, #57606a)";
        readonly white: "var(--color-ansi-white, #6e7781)";
        readonly whiteBright: "var(--color-ansi-white-bright, #8c959f)";
        readonly gray: "var(--color-ansi-gray, #6e7781)";
        readonly red: "var(--color-ansi-red, #b35900)";
        readonly redBright: "var(--color-ansi-red-bright, #8a4600)";
        readonly green: "var(--color-ansi-green, #0550ae)";
        readonly greenBright: "var(--color-ansi-green-bright, #0969da)";
        readonly yellow: "var(--color-ansi-yellow, #4d2d00)";
        readonly yellowBright: "var(--color-ansi-yellow-bright, #633c01)";
        readonly blue: "var(--color-ansi-blue, #0969da)";
        readonly blueBright: "var(--color-ansi-blue-bright, #218bff)";
        readonly magenta: "var(--color-ansi-magenta, #8250df)";
        readonly magentaBright: "var(--color-ansi-magenta-bright, #a475f9)";
        readonly cyan: "var(--color-ansi-cyan, #1b7c83)";
        readonly cyanBright: "var(--color-ansi-cyan-bright, #3192aa)";
    };
    readonly btn: {
        readonly text: "var(--button-default-fgColor-rest, var(--color-btn-text, #24292f))";
        readonly bg: "var(--button-default-bgColor-rest, var(--color-btn-bg, #f6f8fa))";
        readonly border: "var(--button-default-borderColor-rest, var(--color-btn-border, rgba(27,31,36,0.15)))";
        readonly shadow: "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 1px 0 rgba(27,31,36,0.04)))";
        readonly insetShadow: "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.25)))";
        readonly hoverBg: "var(--button-default-bgColor-hover, var(--color-btn-hover-bg, #f3f4f6))";
        readonly hoverBorder: "var(--button-default-borderColor-hover, var(--color-btn-hover-border, rgba(27,31,36,0.15)))";
        readonly activeBg: "var(--button-default-bgColor-active, var(--color-btn-active-bg, hsla(220,14%,93%,1)))";
        readonly activeBorder: "var(--button-default-borderColor-active, var(--color-btn-active-border, rgba(27,31,36,0.15)))";
        readonly selectedBg: "var(--button-default-bgColor-selected, var(--color-btn-selected-bg, hsla(220,14%,94%,1)))";
        readonly counterBg: "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, rgba(27,31,36,0.08)))";
        readonly primary: {
            readonly text: "var(--button-primary-fgColor-rest, var(--color-btn-primary-text, #ffffff))";
            readonly bg: "var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, #0969da))";
            readonly border: "var(--button-primary-borderColor-rest, var(--color-btn-primary-border, rgba(27,31,36,0.15)))";
            readonly shadow: "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 1px 0 rgba(27,31,36,0.1)))";
            readonly insetShadow: "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))";
            readonly hoverBg: "var(--button-primary-bgColor-hover, var(--color-btn-primary-hover-bg, #0969da))";
            readonly hoverBorder: "var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, rgba(27,31,36,0.15)))";
            readonly selectedBg: "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, hsla(212,92%,43%,1)))";
            readonly selectedShadow: "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, inset 0 1px 0 rgba(0,33,85,0.2)))";
            readonly disabledText: "var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, rgba(255,255,255,0.8)))";
            readonly disabledBg: "var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, #80ccff))";
            readonly disabledBorder: "var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, rgba(27,31,36,0.15)))";
            readonly icon: "var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, rgba(255,255,255,0.8)))";
            readonly counterBg: "var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, rgba(0,33,85,0.2)))";
        };
        readonly outline: {
            readonly text: "var(--button-outline-fgColor-rest, var(--color-btn-outline-text, #0969da))";
            readonly hoverText: "var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, #ffffff))";
            readonly hoverBg: "var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, #0969da))";
            readonly hoverBorder: "var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, rgba(27,31,36,0.15)))";
            readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 rgba(27,31,36,0.1)))";
            readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))";
            readonly hoverCounterBg: "var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, rgba(255,255,255,0.2)))";
            readonly selectedText: "var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, #ffffff))";
            readonly selectedBg: "var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, hsla(212,92%,42%,1)))";
            readonly selectedBorder: "var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, rgba(27,31,36,0.15)))";
            readonly selectedShadow: "var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, inset 0 1px 0 rgba(0,33,85,0.2)))";
            readonly disabledText: "var(--button-outline-fgColor-disabled, var(--color-btn-outline-disabled-text, rgba(9,105,218,0.5)))";
            readonly disabledBg: "var(--button-outline-bgColor-disabled, var(--color-btn-outline-disabled-bg, #f6f8fa))";
            readonly disabledCounterBg: "var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, rgba(9,105,218,0.05)))";
            readonly counterBg: "var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, #0969da1a))";
            readonly counterFg: "var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, #0550ae))";
            readonly hoverCounterFg: "var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, #ffffff))";
            readonly disabledCounterFg: "var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, rgba(9,105,218,0.5)))";
        };
        readonly danger: {
            readonly text: "var(--button-danger-fgColor-rest, var(--color-btn-danger-text, #b35900))";
            readonly hoverText: "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, #ffffff))";
            readonly hoverBg: "var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, #8a4600))";
            readonly hoverBorder: "var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, rgba(27,31,36,0.15)))";
            readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 1px 0 rgba(27,31,36,0.1)))";
            readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))";
            readonly hoverCounterBg: "var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, rgba(255,255,255,0.2)))";
            readonly selectedText: "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))";
            readonly selectedBg: "var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, hsla(30,100%,32%,1)))";
            readonly selectedBorder: "var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, rgba(27,31,36,0.15)))";
            readonly selectedShadow: "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, inset 0 1px 0 rgba(65,32,0,0.2)))";
            readonly disabledText: "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(179,89,0,0.5)))";
            readonly disabledBg: "var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, #f6f8fa))";
            readonly disabledCounterBg: "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(179,89,0,0.05)))";
            readonly counterBg: "var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, rgba(179,89,0,0.1)))";
            readonly icon: "var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, #b35900))";
            readonly hoverIcon: "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, #ffffff))";
            readonly counterFg: "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, #8a4600))";
            readonly hoverCounterFg: "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #ffffff))";
            readonly disabledCounterFg: "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, rgba(179,89,0,0.5)))";
        };
        readonly inactive: {
            readonly bg: "var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, #eaeef2))";
            readonly text: "var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, #57606a))";
        };
    };
    readonly underlinenav: {
        readonly icon: "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, #6e7781))";
        readonly borderHover: "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, rgba(175,184,193,0.2)))";
    };
    readonly actionListItem: {
        readonly inlineDivider: "var(--borderColor-muted, var(--color-action-list-item-inline-divider, rgba(208,215,222,0.48)))";
        readonly default: {
            readonly hoverBg: "var(--control-transparent-bgColor-hover, var(--color-action-list-item-default-hover-bg, rgba(208,215,222,0.32)))";
            readonly hoverBorder: "var(--control-transparent-borderColor-hover, var(--color-action-list-item-default-hover-border, transparent))";
            readonly activeBg: "var(--control-transparent-bgColor-active, var(--color-action-list-item-default-active-bg, rgba(208,215,222,0.48)))";
            readonly activeBorder: "var(--control-transparent-borderColor-active, var(--color-action-list-item-default-active-border, transparent))";
            readonly selectedBg: "var(--control-transparent-bgColor-selected, var(--color-action-list-item-default-selected-bg, rgba(208,215,222,0.24)))";
        };
        readonly danger: {
            readonly hoverBg: "var(--control-danger-bgColor-hover, var(--color-action-list-item-default-danger-hover-bg, rgba(255,245,232,0.64)))";
            readonly activeBg: "var(--control-danger-bgColor-active, var(--color-action-list-item-default-danger-active-bg, #fff5e8))";
            readonly hoverText: "var(--control-danger-fgColor-hover, var(--color-action-list-item-default-danger-hover-text, #b35900))";
        };
    };
    readonly switchTrack: {
        readonly bg: "var(--controlTrack-bgColor-rest, var(--color-switch-track-bg, #eaeef2))";
        readonly hoverBg: "var(--controlTrack-bgColor-hover, var(--color-switch-track-hover-bg, hsla(210,24%,90%,1)))";
        readonly activeBg: "var(--controlTrack-bgColor-active, var(--color-switch-track-active-bg, hsla(210,24%,88%,1)))";
        readonly disabledBg: "var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, #8c959f))";
        readonly fg: "var(--controlTrack-fgColor-rest, var(--color-switch-track-fg, #57606a))";
        readonly disabledFg: "var(--controlTrack-fgColor-disabled, var(--color-switch-track-disabled-fg, #ffffff))";
        readonly border: "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))";
        readonly checked: {
            readonly bg: "var(--control-checked-bgColor-rest, var(--color-switch-track-checked-bg, #0969da))";
            readonly hoverBg: "var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, #0860CA))";
            readonly activeBg: "var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, #0757BA))";
            readonly fg: "var(--control-checked-fgColor-rest, var(--color-switch-track-checked-fg, #ffffff))";
            readonly disabledFg: "var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, #ffffff))";
            readonly border: "var(--borderColor-transparent, var(--color-switch-track-checked-border, transparent))";
        };
    };
    readonly switchKnob: {
        readonly bg: "var(--controlKnob-bgColor-rest, var(--color-switch-knob-bg, #ffffff))";
        readonly disabledBg: "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-disabled-bg, #f6f8fa))";
        readonly border: "var(--controlKnob-borderColor-rest, var(--color-switch-knob-border, #858F99))";
        readonly checked: {
            readonly bg: "var(--controlKnob-bgColor-checked, var(--color-switch-knob-checked-bg, #ffffff))";
            readonly disabledBg: "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-checked-disabled-bg, #f6f8fa))";
            readonly border: "var(--controlKnob-borderColor-checked, var(--color-switch-knob-checked-border, #0969da))";
        };
    };
    readonly segmentedControl: {
        readonly bg: "var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, #eaeef2))";
        readonly button: {
            readonly bg: "var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, #ffffff))";
            readonly hover: {
                readonly bg: "var(--controlTrack-bgColor-hover, var(--color-segmented-control-button-hover-bg, rgba(175,184,193,0.2)))";
            };
            readonly active: {
                readonly bg: "var(--controlTrack-bgColor-active, var(--color-segmented-control-button-hover-active-bg, rgba(175,184,193,0.4)))";
            };
            readonly selected: {
                readonly border: "var(--controlKnob-borderColor-rest, var(--color-segmented-control-button-hover-active-selected-border, #8c959f))";
            };
        };
    };
    readonly treeViewItem: {
        readonly chevron: {
            readonly hoverBg: "var(--control-transparent-bgColor-hover, var(--color-tree-view-item-chevron-hover-bg, rgba(208,215,222,0.32)))";
        };
        readonly directory: {
            readonly fill: "var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-chevron-directory-fill, #54aeff))";
        };
    };
    readonly fg: {
        readonly default: "var(--fgColor-default, var(--color-fg-default, #24292f))";
        readonly muted: "var(--fgColor-muted, var(--color-fg-muted, #57606a))";
        readonly subtle: "var(--fgColor-muted, var(--color-fg-subtle, #6e7781))";
        readonly onEmphasis: "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))";
    };
    readonly canvas: {
        readonly default: "var(--bgColor-default, var(--color-canvas-default, #ffffff))";
        readonly overlay: "var(--overlay-bgColor, var(--color-canvas-overlay, #ffffff))";
        readonly inset: "var(--bgColor-inset, var(--color-canvas-inset, #f6f8fa))";
        readonly subtle: "var(--bgColor-muted, var(--color-canvas-subtle, #f6f8fa))";
    };
    readonly border: {
        readonly default: "var(--borderColor-default, var(--color-border-default, #d0d7de))";
        readonly muted: "var(--borderColor-muted, var(--color-border-muted, hsla(210,18%,87%,1)))";
        readonly subtle: "var(--borderColor-muted, var(--color-border-subtle, rgba(27,31,36,0.15)))";
    };
    readonly shadow: {
        readonly small: "var(--shadow-resting-small, var(--color-shadow-small, 0 1px 0 rgba(27,31,36,0.04)))";
        readonly medium: "var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px rgba(140,149,159,0.15)))";
        readonly large: "var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px rgba(140,149,159,0.2)))";
        readonly extraLarge: "var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 28px rgba(140,149,159,0.3)))";
    };
    readonly neutral: {
        readonly emphasisPlus: "var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, #24292f))";
        readonly emphasis: "var(--bgColor-neutral-emphasis, var(--color-neutral-emphasis, #6e7781))";
        readonly muted: "var(--bgColor-neutral-muted, var(--color-neutral-muted, rgba(175,184,193,0.2)))";
        readonly subtle: "var(--bgColor-neutral-muted, var(--color-neutral-subtle, rgba(234,238,242,0.5)))";
    };
    readonly accent: {
        readonly fg: "var(--fgColor-accent, var(--color-accent-fg, #0969da))";
        readonly emphasis: "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #0969da))";
        readonly muted: "var(--borderColor-accent-muted, var(--color-accent-muted, rgba(84,174,255,0.4)))";
        readonly subtle: "var(--bgColor-accent-muted, var(--color-accent-subtle, #ddf4ff))";
    };
    readonly success: {
        readonly fg: "var(--fgColor-success, var(--color-success-fg, #0969da))";
        readonly emphasis: "var(--bgColor-success-emphasis, var(--color-success-emphasis, #0969da))";
        readonly muted: "var(--borderColor-success-muted, var(--color-success-muted, rgba(84,174,255,0.4)))";
        readonly subtle: "var(--bgColor-success-muted, var(--color-success-subtle, #ddf4ff))";
    };
    readonly attention: {
        readonly fg: "var(--fgColor-attention, var(--color-attention-fg, #9a6700))";
        readonly emphasis: "var(--bgColor-attention-emphasis, var(--color-attention-emphasis, #9a6700))";
        readonly muted: "var(--borderColor-attention-muted, var(--color-attention-muted, rgba(212,167,44,0.4)))";
        readonly subtle: "var(--bgColor-attention-muted, var(--color-attention-subtle, #fff8c5))";
    };
    readonly severe: {
        readonly fg: "var(--fgColor-severe, var(--color-severe-fg, #b35900))";
        readonly emphasis: "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #b35900))";
        readonly muted: "var(--borderColor-severe-muted, var(--color-severe-muted, rgba(247,153,57,0.4)))";
        readonly subtle: "var(--bgColor-severe-muted, var(--color-severe-subtle, #fff5e8))";
    };
    readonly danger: {
        readonly fg: "var(--fgColor-danger, var(--color-danger-fg, #b35900))";
        readonly emphasis: "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #b35900))";
        readonly muted: "var(--borderColor-danger-muted, var(--color-danger-muted, rgba(247,153,57,0.4)))";
        readonly subtle: "var(--bgColor-danger-muted, var(--color-danger-subtle, #fff5e8))";
    };
    readonly open: {
        readonly fg: "var(--fgColor-open, var(--color-open-fg, #b35900))";
        readonly emphasis: "var(--bgColor-open-emphasis, var(--color-open-emphasis, #dd7815))";
        readonly muted: "var(--borderColor-open-muted, var(--color-open-muted, rgba(247,153,57,0.4)))";
        readonly subtle: "var(--bgColor-open-muted, var(--color-open-subtle, #fff5e8))";
    };
    readonly closed: {
        readonly fg: "var(--fgColor-closed, var(--color-closed-fg, #6e7781))";
        readonly emphasis: "var(--bgColor-closed-emphasis, var(--color-closed-emphasis, #6e7781))";
        readonly muted: "var(--borderColor-closed-muted, var(--color-closed-muted, rgba(175,184,193,0.4)))";
        readonly subtle: "var(--bgColor-closed-muted, var(--color-closed-subtle, #f6f8fa))";
    };
    readonly done: {
        readonly fg: "var(--fgColor-done, var(--color-done-fg, #8250df))";
        readonly emphasis: "var(--bgColor-done-emphasis, var(--color-done-emphasis, #8250df))";
        readonly muted: "var(--borderColor-done-muted, var(--color-done-muted, rgba(194,151,255,0.4)))";
        readonly subtle: "var(--bgColor-done-muted, var(--color-done-subtle, #fbefff))";
    };
    readonly sponsors: {
        readonly fg: "var(--fgColor-sponsors, var(--color-sponsors-fg, #bf3989))";
        readonly emphasis: "var(--bgColor-sponsors-emphasis, var(--color-sponsors-emphasis, #bf3989))";
        readonly muted: "var(--borderColor-sponsors-muted, var(--color-sponsors-muted, rgba(255,128,200,0.4)))";
        readonly subtle: "var(--bgColor-sponsors-muted, var(--color-sponsors-subtle, #ffeff7))";
    };
    readonly primer: {
        readonly fg: {
            readonly disabled: "var(--fgColor-disabled, var(--color-primer-fg-disabled, #8c959f))";
        };
        readonly canvas: {
            readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-primer-fg-canvas-backdrop, rgba(27,31,36,0.5)))";
            readonly sticky: "var(--color-primer-canvas-sticky, rgba(255,255,255,0.95))";
        };
        readonly border: {
            readonly active: "var(--underlineNav-borderColor-active, var(--color-primer-border-active, #fd8c73))";
            readonly contrast: "var(--borderColor-muted, var(--color-primer-border-contrast, rgba(27,31,36,0.1)))";
        };
        readonly shadow: {
            readonly highlight: "var(--shadow-highlight, var(--color-primer-shadow-highlight, inset 0 1px 0 rgba(255,255,255,0.25)))";
            readonly inset: "var(--shadow-inset, var(--color-primer-shadow-inset, inset 0 1px 0 rgba(208,215,222,0.2)))";
        };
    };
    readonly scale: {
        readonly black: "#1b1f24";
        readonly white: "#ffffff";
        readonly gray: readonly ["#f6f8fa", "#eaeef2", "#d0d7de", "#afb8c1", "#8c959f", "#6e7781", "#57606a", "#424a53", "#32383f", "#24292f"];
        readonly blue: readonly ["#ddf4ff", "#b6e3ff", "#80ccff", "#54aeff", "#218bff", "#0969da", "#0550ae", "#033d8b", "#0a3069", "#002155"];
        readonly green: readonly ["#ddf4ff", "#b6e3ff", "#80ccff", "#54aeff", "#218bff", "#0969da", "#0550ae", "#033d8b", "#0a3069", "#002155"];
        readonly yellow: readonly ["#fff8c5", "#fae17d", "#eac54f", "#d4a72c", "#bf8700", "#9a6700", "#7d4e00", "#633c01", "#4d2d00", "#3b2300"];
        readonly orange: readonly ["#fff5e8", "#ffddb0", "#ffbc6d", "#f79939", "#dd7815", "#b35900", "#8a4600", "#6f3800", "#572c00", "#412000"];
        readonly red: readonly ["#fff5e8", "#ffddb0", "#ffbc6d", "#f79939", "#dd7815", "#b35900", "#8a4600", "#6f3800", "#572c00", "#412000"];
        readonly purple: readonly ["#fbefff", "#ecd8ff", "#d8b9ff", "#c297ff", "#a475f9", "#8250df", "#6639ba", "#512a97", "#3e1f79", "#2e1461"];
        readonly pink: readonly ["#ffeff7", "#ffd3eb", "#ffadda", "#ff80c8", "#e85aad", "#bf3989", "#99286e", "#772057", "#611347", "#4d0336"];
        readonly coral: readonly ["#fff0eb", "#ffd6cc", "#ffb4a1", "#fd8c73", "#ec6547", "#c4432b", "#9e2f1c", "#801f0f", "#691105", "#510901"];
    };
};
export default colors;
//# sourceMappingURL=light_colorblind.d.ts.map