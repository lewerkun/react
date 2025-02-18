export declare const colors: {
    light: {
        readonly canvasDefaultTransparent: "var(--bgColor-transparent, var(--color-canvas-default-transparent, rgba(255,255,255,0)))";
        readonly pageHeaderBg: "var(--page-header-bgColor, var(--color-page-header-bg, #f6f8fa))";
        readonly marketingIcon: {
            readonly primary: "var(--color-marketing-icon-primary, #218bff)";
            readonly secondary: "var(--color-marketing-icon-secondary, #54aeff)";
        };
        readonly diffBlob: {
            readonly addition: {
                readonly numText: "var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, #1F2328))";
                readonly fg: "var(--diffBlob-addition-fgColor-text, var(--color-diff-blob-addition-fg, #1F2328))";
                readonly numBg: "var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg, #ccffd8))";
                readonly lineBg: "var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg, #e6ffec))";
                readonly wordBg: "var(--diffBlob-addition-bgColor-word, var(--color-diff-blob-addition-word-bg, #abf2bc))";
            };
            readonly deletion: {
                readonly numText: "var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, #1F2328))";
                readonly fg: "var(--diffBlob-deletion-fgColor-text, var(--color-diff-blob-deletion-fg, #1F2328))";
                readonly numBg: "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, #ffd7d5))";
                readonly lineBg: "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, #ffebe9))";
                readonly wordBg: "var(--diffBlob-deletion-bgColor-word, var(--color-diff-blob-deletion-word-bg, rgba(255,129,130,0.4)))";
            };
            readonly hunk: {
                readonly numBg: "var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg, rgba(84,174,255,0.4)))";
            };
            readonly expander: {
                readonly icon: "var(--diffBlob-expander-iconColor, var(--color-diff-blob-expander-icon, #656d76))";
            };
            readonly selectedLineHighlightMixBlendMode: "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, multiply)";
        };
        readonly diffstat: {
            readonly deletionBorder: "var(--color-diffstat-deletion-border, rgba(31,35,40,0.15))";
            readonly additionBorder: "var(--color-diffstat-addition-border, rgba(31,35,40,0.15))";
            readonly additionBg: "var(undefined, var(--color-diffstat-addition-bg, #1f883d))";
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
                readonly entityTag: "var(--color-prettylights-syntax-entity-tag, #116329)";
                readonly keyword: "var(--color-prettylights-syntax-keyword, #cf222e)";
                readonly string: "var(--color-prettylights-syntax-string, #0a3069)";
                readonly variable: "var(--color-prettylights-syntax-variable, #953800)";
                readonly brackethighlighterUnmatched: "var(--color-prettylights-syntax-brackethighlighter-unmatched, #82071e)";
                readonly invalidIllegalText: "var(--color-prettylights-syntax-invalid-illegal-text, #f6f8fa)";
                readonly invalidIllegalBg: "var(--color-prettylights-syntax-invalid-illegal-bg, #82071e)";
                readonly carriageReturnText: "var(--color-prettylights-syntax-carriage-return-text, #f6f8fa)";
                readonly carriageReturnBg: "var(--color-prettylights-syntax-carriage-return-bg, #cf222e)";
                readonly stringRegexp: "var(--color-prettylights-syntax-string-regexp, #116329)";
                readonly markupList: "var(--color-prettylights-syntax-markup-list, #3b2300)";
                readonly markupHeading: "var(--color-prettylights-syntax-markup-heading, #0550ae)";
                readonly markupItalic: "var(--color-prettylights-syntax-markup-italic, #24292f)";
                readonly markupBold: "var(--color-prettylights-syntax-markup-bold, #24292f)";
                readonly markupDeletedText: "var(--color-prettylights-syntax-markup-deleted-text, #82071e)";
                readonly markupDeletedBg: "var(--color-prettylights-syntax-markup-deleted-bg, #ffebe9)";
                readonly markupInsertedText: "var(--color-prettylights-syntax-markup-inserted-text, #116329)";
                readonly markupInsertedBg: "var(--color-prettylights-syntax-markup-inserted-bg, #dafbe1)";
                readonly markupChangedText: "var(--color-prettylights-syntax-markup-changed-text, #953800)";
                readonly markupChangedBg: "var(--color-prettylights-syntax-markup-changed-bg, #ffd8b5)";
                readonly markupIgnoredText: "var(--color-prettylights-syntax-markup-ignored-text, #eaeef2)";
                readonly markupIgnoredBg: "var(--color-prettylights-syntax-markup-ignored-bg, #0550ae)";
                readonly metaDiffRange: "var(--color-prettylights-syntax-meta-diff-range, #8250df)";
                readonly brackethighlighterAngle: "var(--color-prettylights-syntax-brackethighlighter-angle, #57606a)";
                readonly sublimelinterGutterMark: "var(--color-prettylights-syntax-sublimelinter-gutter-mark, #8c959f)";
                readonly constantOtherReferenceLink: "var(--color-prettylights-syntax-constant-other-reference-link, #0a3069)";
            };
        };
        readonly codemirror: {
            readonly text: "var(--codeMirror-fgColor, var(--color-codemirror-text, #1F2328))";
            readonly bg: "var(--codeMirror-bgColor, var(--color-codemirror-bg, #ffffff))";
            readonly guttersBg: "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, #ffffff))";
            readonly guttermarkerText: "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, #ffffff))";
            readonly guttermarkerSubtleText: "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, #6e7781))";
            readonly linenumberText: "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, #656d76))";
            readonly cursor: "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, #1F2328))";
            readonly selectionBg: "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, rgba(84,174,255,0.4)))";
            readonly activelineBg: "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, rgba(234,238,242,0.5)))";
            readonly matchingbracketText: "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, #1F2328))";
            readonly linesBg: "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, #ffffff))";
            readonly syntax: {
                readonly comment: "var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, #24292f))";
                readonly constant: "var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, #0550ae))";
                readonly entity: "var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, #8250df))";
                readonly keyword: "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #cf222e))";
                readonly storage: "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #cf222e))";
                readonly string: "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #0a3069))";
                readonly support: "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #0550ae))";
                readonly variable: "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #953800))";
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
            readonly donutError: "var(--color-checks-donut-error, #fa4549)";
            readonly donutPending: "var(--color-checks-donut-pending, #bf8700)";
            readonly donutSuccess: "var(--color-checks-donut-success, #1f883d)";
            readonly donutNeutral: "var(--color-checks-donut-neutral, #afb8c1)";
            readonly dropdownText: "var(--color-checks-dropdown-text, #afb8c1)";
            readonly dropdownBg: "var(--color-checks-dropdown-bg, #32383f)";
            readonly dropdownBorder: "var(--color-checks-dropdown-border, #424a53)";
            readonly dropdownShadow: "var(--color-checks-dropdown-shadow, rgba(31,35,40,0.3))";
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
            readonly stepErrorText: "var(--color-checks-step-error-text, #ff8182)";
            readonly stepWarningText: "var(--color-checks-step-warning-text, #d4a72c)";
            readonly loglineText: "var(--color-checks-logline-text, #8c959f)";
            readonly loglineNumText: "var(--color-checks-logline-num-text, rgba(140,149,159,0.75))";
            readonly loglineDebugText: "var(--color-checks-logline-debug-text, #c297ff)";
            readonly loglineErrorText: "var(--color-checks-logline-error-text, #d0d7de)";
            readonly loglineErrorNumText: "var(--color-checks-logline-error-num-text, #ff8182)";
            readonly loglineErrorBg: "var(--color-checks-logline-error-bg, rgba(164,14,38,0.15))";
            readonly loglineWarningText: "var(--color-checks-logline-warning-text, #d0d7de)";
            readonly loglineWarningNumText: "var(--color-checks-logline-warning-num-text, #d4a72c)";
            readonly loglineWarningBg: "var(--color-checks-logline-warning-bg, rgba(125,78,0,0.15))";
            readonly loglineCommandText: "var(--color-checks-logline-command-text, #54aeff)";
            readonly loglineSectionText: "var(--color-checks-logline-section-text, #4ac26b)";
            readonly ansi: {
                readonly black: "var(--color-checks-ansi-black, #24292f)";
                readonly blackBright: "var(--color-checks-ansi-black-bright, #32383f)";
                readonly white: "var(--color-checks-ansi-white, #d0d7de)";
                readonly whiteBright: "var(--color-checks-ansi-white-bright, #d0d7de)";
                readonly gray: "var(--color-checks-ansi-gray, #8c959f)";
                readonly red: "var(--color-checks-ansi-red, #ff8182)";
                readonly redBright: "var(--color-checks-ansi-red-bright, #ffaba8)";
                readonly green: "var(--color-checks-ansi-green, #4ac26b)";
                readonly greenBright: "var(--color-checks-ansi-green-bright, #6fdd8b)";
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
            readonly border: "var(--avatar-borderColor, var(--color-avatar-border, rgba(31,35,40,0.15)))";
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
            readonly shadow: "var(--shadow-floating-small, var(--color-overlay-shadow, 0 1px 3px rgba(31,35,40,0.12), 0 8px 24px rgba(66,74,83,0.12)))";
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
            readonly red: "var(--color-ansi-red, #cf222e)";
            readonly redBright: "var(--color-ansi-red-bright, #a40e26)";
            readonly green: "var(--color-ansi-green, #116329)";
            readonly greenBright: "var(--color-ansi-green-bright, #1a7f37)";
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
            readonly border: "var(--button-default-borderColor-rest, var(--color-btn-border, rgba(31,35,40,0.15)))";
            readonly shadow: "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 1px 0 rgba(31,35,40,0.04)))";
            readonly insetShadow: "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.25)))";
            readonly hoverBg: "var(--button-default-bgColor-hover, var(--color-btn-hover-bg, #f3f4f6))";
            readonly hoverBorder: "var(--button-default-borderColor-hover, var(--color-btn-hover-border, rgba(31,35,40,0.15)))";
            readonly activeBg: "var(--button-default-bgColor-active, var(--color-btn-active-bg, hsla(220,14%,93%,1)))";
            readonly activeBorder: "var(--button-default-borderColor-active, var(--color-btn-active-border, rgba(31,35,40,0.15)))";
            readonly selectedBg: "var(--button-default-bgColor-selected, var(--color-btn-selected-bg, hsla(220,14%,94%,1)))";
            readonly counterBg: "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, rgba(31,35,40,0.08)))";
            readonly primary: {
                readonly text: "var(--button-primary-fgColor-rest, var(--color-btn-primary-text, #ffffff))";
                readonly bg: "var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, #1f883d))";
                readonly border: "var(--button-primary-borderColor-rest, var(--color-btn-primary-border, rgba(31,35,40,0.15)))";
                readonly shadow: "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 1px 0 rgba(31,35,40,0.1)))";
                readonly insetShadow: "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))";
                readonly hoverBg: "var(--button-primary-bgColor-hover, var(--color-btn-primary-hover-bg, #1a7f37))";
                readonly hoverBorder: "var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, rgba(31,35,40,0.15)))";
                readonly selectedBg: "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, hsla(137,66%,28%,1)))";
                readonly selectedShadow: "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, inset 0 1px 0 rgba(0,45,17,0.2)))";
                readonly disabledText: "var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, rgba(255,255,255,0.8)))";
                readonly disabledBg: "var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, #94d3a2))";
                readonly disabledBorder: "var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, rgba(31,35,40,0.15)))";
                readonly icon: "var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, rgba(255,255,255,0.8)))";
                readonly counterBg: "var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, rgba(0,45,17,0.2)))";
            };
            readonly outline: {
                readonly text: "var(--button-outline-fgColor-rest, var(--color-btn-outline-text, #0969da))";
                readonly hoverText: "var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, #ffffff))";
                readonly hoverBg: "var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, #0969da))";
                readonly hoverBorder: "var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, rgba(31,35,40,0.15)))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 rgba(31,35,40,0.1)))";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))";
                readonly hoverCounterBg: "var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, rgba(255,255,255,0.2)))";
                readonly selectedText: "var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, #ffffff))";
                readonly selectedBg: "var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, hsla(212,92%,42%,1)))";
                readonly selectedBorder: "var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, rgba(31,35,40,0.15)))";
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
                readonly text: "var(--button-danger-fgColor-rest, var(--color-btn-danger-text, #cf222e))";
                readonly hoverText: "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, #ffffff))";
                readonly hoverBg: "var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, #a40e26))";
                readonly hoverBorder: "var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, rgba(31,35,40,0.15)))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 1px 0 rgba(31,35,40,0.1)))";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))";
                readonly hoverCounterBg: "var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, rgba(255,255,255,0.2)))";
                readonly selectedText: "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))";
                readonly selectedBg: "var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, hsla(356,72%,44%,1)))";
                readonly selectedBorder: "var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, rgba(31,35,40,0.15)))";
                readonly selectedShadow: "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, inset 0 1px 0 rgba(76,0,20,0.2)))";
                readonly disabledText: "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(207,34,46,0.5)))";
                readonly disabledBg: "var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, #f6f8fa))";
                readonly disabledCounterBg: "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(207,34,46,0.05)))";
                readonly counterBg: "var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, rgba(207,34,46,0.1)))";
                readonly icon: "var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, #cf222e))";
                readonly hoverIcon: "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, #ffffff))";
                readonly counterFg: "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, #a40e26))";
                readonly hoverCounterFg: "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #ffffff))";
                readonly disabledCounterFg: "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, rgba(207,34,46,0.5)))";
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
                readonly hoverBg: "var(--control-danger-bgColor-hover, var(--color-action-list-item-default-danger-hover-bg, rgba(255,235,233,0.64)))";
                readonly activeBg: "var(--control-danger-bgColor-active, var(--color-action-list-item-default-danger-active-bg, #ffebe9))";
                readonly hoverText: "var(--control-danger-fgColor-hover, var(--color-action-list-item-default-danger-hover-text, #d1242f))";
            };
        };
        readonly switchTrack: {
            readonly bg: "var(--controlTrack-bgColor-rest, var(--color-switch-track-bg, #eaeef2))";
            readonly hoverBg: "var(--controlTrack-bgColor-hover, var(--color-switch-track-hover-bg, hsla(210,24%,90%,1)))";
            readonly activeBg: "var(--controlTrack-bgColor-active, var(--color-switch-track-active-bg, hsla(210,24%,88%,1)))";
            readonly disabledBg: "var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, #8c959f))";
            readonly fg: "var(--controlTrack-fgColor-rest, var(--color-switch-track-fg, #656d76))";
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
            readonly default: "var(--fgColor-default, var(--color-fg-default, #1F2328))";
            readonly muted: "var(--fgColor-muted, var(--color-fg-muted, #656d76))";
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
            readonly subtle: "var(--borderColor-muted, var(--color-border-subtle, rgba(31,35,40,0.15)))";
        };
        readonly shadow: {
            readonly small: "var(--shadow-resting-small, var(--color-shadow-small, 0 1px 0 rgba(31,35,40,0.04)))";
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
            readonly fg: "var(--fgColor-success, var(--color-success-fg, #1a7f37))";
            readonly emphasis: "var(--bgColor-success-emphasis, var(--color-success-emphasis, #1f883d))";
            readonly muted: "var(--borderColor-success-muted, var(--color-success-muted, rgba(74,194,107,0.4)))";
            readonly subtle: "var(--bgColor-success-muted, var(--color-success-subtle, #dafbe1))";
        };
        readonly attention: {
            readonly fg: "var(--fgColor-attention, var(--color-attention-fg, #9a6700))";
            readonly emphasis: "var(--bgColor-attention-emphasis, var(--color-attention-emphasis, #9a6700))";
            readonly muted: "var(--borderColor-attention-muted, var(--color-attention-muted, rgba(212,167,44,0.4)))";
            readonly subtle: "var(--bgColor-attention-muted, var(--color-attention-subtle, #fff8c5))";
        };
        readonly severe: {
            readonly fg: "var(--fgColor-severe, var(--color-severe-fg, #bc4c00))";
            readonly emphasis: "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #bc4c00))";
            readonly muted: "var(--borderColor-severe-muted, var(--color-severe-muted, rgba(251,143,68,0.4)))";
            readonly subtle: "var(--bgColor-severe-muted, var(--color-severe-subtle, #fff1e5))";
        };
        readonly danger: {
            readonly fg: "var(--fgColor-danger, var(--color-danger-fg, #d1242f))";
            readonly emphasis: "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #cf222e))";
            readonly muted: "var(--borderColor-danger-muted, var(--color-danger-muted, rgba(255,129,130,0.4)))";
            readonly subtle: "var(--bgColor-danger-muted, var(--color-danger-subtle, #ffebe9))";
        };
        readonly open: {
            readonly fg: "var(--fgColor-open, var(--color-open-fg, #1a7f37))";
            readonly emphasis: "var(--bgColor-open-emphasis, var(--color-open-emphasis, #1f883d))";
            readonly muted: "var(--borderColor-open-muted, var(--color-open-muted, rgba(74,194,107,0.4)))";
            readonly subtle: "var(--bgColor-open-muted, var(--color-open-subtle, #dafbe1))";
        };
        readonly closed: {
            readonly fg: "var(--fgColor-closed, var(--color-closed-fg, #d1242f))";
            readonly emphasis: "var(--bgColor-closed-emphasis, var(--color-closed-emphasis, #cf222e))";
            readonly muted: "var(--borderColor-closed-muted, var(--color-closed-muted, rgba(255,129,130,0.4)))";
            readonly subtle: "var(--bgColor-closed-muted, var(--color-closed-subtle, #ffebe9))";
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
                readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-primer-fg-canvas-backdrop, rgba(31,35,40,0.5)))";
                readonly sticky: "var(--color-primer-canvas-sticky, rgba(255,255,255,0.95))";
            };
            readonly border: {
                readonly active: "var(--underlineNav-borderColor-active, var(--color-primer-border-active, #fd8c73))";
                readonly contrast: "var(--borderColor-muted, var(--color-primer-border-contrast, rgba(31,35,40,0.1)))";
            };
            readonly shadow: {
                readonly highlight: "var(--shadow-highlight, var(--color-primer-shadow-highlight, inset 0 1px 0 rgba(255,255,255,0.25)))";
                readonly inset: "var(--shadow-inset, var(--color-primer-shadow-inset, inset 0 1px 0 rgba(208,215,222,0.2)))";
            };
        };
        readonly scale: {
            readonly black: "#1F2328";
            readonly white: "#ffffff";
            readonly gray: readonly ["#f6f8fa", "#eaeef2", "#d0d7de", "#afb8c1", "#8c959f", "#6e7781", "#57606a", "#424a53", "#32383f", "#24292f"];
            readonly blue: readonly ["#ddf4ff", "#b6e3ff", "#80ccff", "#54aeff", "#218bff", "#0969da", "#0550ae", "#033d8b", "#0a3069", "#002155"];
            readonly green: readonly ["#dafbe1", "#aceebb", "#6fdd8b", "#4ac26b", "#2da44e", "#1a7f37", "#116329", "#044f1e", "#003d16", "#002d11"];
            readonly yellow: readonly ["#fff8c5", "#fae17d", "#eac54f", "#d4a72c", "#bf8700", "#9a6700", "#7d4e00", "#633c01", "#4d2d00", "#3b2300"];
            readonly orange: readonly ["#fff1e5", "#ffd8b5", "#ffb77c", "#fb8f44", "#e16f24", "#bc4c00", "#953800", "#762c00", "#5c2200", "#471700"];
            readonly red: readonly ["#ffebe9", "#ffcecb", "#ffaba8", "#ff8182", "#fa4549", "#cf222e", "#a40e26", "#82071e", "#660018", "#4c0014"];
            readonly purple: readonly ["#fbefff", "#ecd8ff", "#d8b9ff", "#c297ff", "#a475f9", "#8250df", "#6639ba", "#512a97", "#3e1f79", "#2e1461"];
            readonly pink: readonly ["#ffeff7", "#ffd3eb", "#ffadda", "#ff80c8", "#e85aad", "#bf3989", "#99286e", "#772057", "#611347", "#4d0336"];
            readonly coral: readonly ["#fff0eb", "#ffd6cc", "#ffb4a1", "#fd8c73", "#ec6547", "#c4432b", "#9e2f1c", "#801f0f", "#691105", "#510901"];
        };
    };
    light_high_contrast: {
        readonly canvasDefaultTransparent: "var(--bgColor-transparent, var(--color-canvas-default-transparent, rgba(255,255,255,0)))";
        readonly pageHeaderBg: "var(--page-header-bgColor, var(--color-page-header-bg, #ffffff))";
        readonly marketingIcon: {
            readonly primary: "var(--color-marketing-icon-primary, #1168e3)";
            readonly secondary: "var(--color-marketing-icon-secondary, #368cf9)";
        };
        readonly diffBlob: {
            readonly addition: {
                readonly numText: "var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, #0e1116))";
                readonly fg: "var(--diffBlob-addition-fgColor-text, var(--color-diff-blob-addition-fg, #ffffff))";
                readonly numBg: "var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg, #ccffd8))";
                readonly lineBg: "var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg, #e6ffec))";
                readonly wordBg: "var(--diffBlob-addition-bgColor-word, var(--color-diff-blob-addition-word-bg, #055d20))";
            };
            readonly deletion: {
                readonly numText: "var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, #0e1116))";
                readonly fg: "var(--diffBlob-deletion-fgColor-text, var(--color-diff-blob-deletion-fg, #ffffff))";
                readonly numBg: "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, #ffd7d5))";
                readonly lineBg: "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, #fff0ee))";
                readonly wordBg: "var(--diffBlob-deletion-bgColor-word, var(--color-diff-blob-deletion-word-bg, #a0111f))";
            };
            readonly hunk: {
                readonly numBg: "var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg, #9cd7ff))";
            };
            readonly expander: {
                readonly icon: "var(--diffBlob-expander-iconColor, var(--color-diff-blob-expander-icon, #0e1116))";
            };
            readonly selectedLineHighlightMixBlendMode: "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, multiply)";
        };
        readonly diffstat: {
            readonly deletionBorder: "var(--color-diffstat-deletion-border, rgba(1,4,9,0.8))";
            readonly additionBorder: "var(--color-diffstat-addition-border, rgba(1,4,9,0.8))";
            readonly additionBg: "var(undefined, var(--color-diffstat-addition-bg, #055d20))";
        };
        readonly searchKeyword: {
            readonly hl: "var(--highlight-neutral-bgColor, var(--color-search-keyword-hl, #fcf7be))";
        };
        readonly prettylights: {
            readonly syntax: {
                readonly comment: "var(--color-prettylights-syntax-comment, #4b535d)";
                readonly constant: "var(--color-prettylights-syntax-constant, #023b95)";
                readonly entity: "var(--color-prettylights-syntax-entity, #512598)";
                readonly storageModifierImport: "var(--color-prettylights-syntax-storage-modifier-import, #0e1116)";
                readonly entityTag: "var(--color-prettylights-syntax-entity-tag, #024c1a)";
                readonly keyword: "var(--color-prettylights-syntax-keyword, #a0111f)";
                readonly string: "var(--color-prettylights-syntax-string, #032563)";
                readonly variable: "var(--color-prettylights-syntax-variable, #702c00)";
                readonly brackethighlighterUnmatched: "var(--color-prettylights-syntax-brackethighlighter-unmatched, #6e011a)";
                readonly invalidIllegalText: "var(--color-prettylights-syntax-invalid-illegal-text, #ffffff)";
                readonly invalidIllegalBg: "var(--color-prettylights-syntax-invalid-illegal-bg, #6e011a)";
                readonly carriageReturnText: "var(--color-prettylights-syntax-carriage-return-text, #ffffff)";
                readonly carriageReturnBg: "var(--color-prettylights-syntax-carriage-return-bg, #a0111f)";
                readonly stringRegexp: "var(--color-prettylights-syntax-string-regexp, #024c1a)";
                readonly markupList: "var(--color-prettylights-syntax-markup-list, #2e1800)";
                readonly markupHeading: "var(--color-prettylights-syntax-markup-heading, #023b95)";
                readonly markupItalic: "var(--color-prettylights-syntax-markup-italic, #0e1116)";
                readonly markupBold: "var(--color-prettylights-syntax-markup-bold, #0e1116)";
                readonly markupDeletedText: "var(--color-prettylights-syntax-markup-deleted-text, #6e011a)";
                readonly markupDeletedBg: "var(--color-prettylights-syntax-markup-deleted-bg, #fff0ee)";
                readonly markupInsertedText: "var(--color-prettylights-syntax-markup-inserted-text, #024c1a)";
                readonly markupInsertedBg: "var(--color-prettylights-syntax-markup-inserted-bg, #d2fedb)";
                readonly markupChangedText: "var(--color-prettylights-syntax-markup-changed-text, #702c00)";
                readonly markupChangedBg: "var(--color-prettylights-syntax-markup-changed-bg, #ffc67b)";
                readonly markupIgnoredText: "var(--color-prettylights-syntax-markup-ignored-text, #e7ecf0)";
                readonly markupIgnoredBg: "var(--color-prettylights-syntax-markup-ignored-bg, #023b95)";
                readonly metaDiffRange: "var(--color-prettylights-syntax-meta-diff-range, #622cbc)";
                readonly brackethighlighterAngle: "var(--color-prettylights-syntax-brackethighlighter-angle, #4b535d)";
                readonly sublimelinterGutterMark: "var(--color-prettylights-syntax-sublimelinter-gutter-mark, #88929d)";
                readonly constantOtherReferenceLink: "var(--color-prettylights-syntax-constant-other-reference-link, #032563)";
            };
        };
        readonly codemirror: {
            readonly text: "var(--codeMirror-fgColor, var(--color-codemirror-text, #0e1116))";
            readonly bg: "var(--codeMirror-bgColor, var(--color-codemirror-bg, #ffffff))";
            readonly guttersBg: "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, #ffffff))";
            readonly guttermarkerText: "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, #ffffff))";
            readonly guttermarkerSubtleText: "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, #66707b))";
            readonly linenumberText: "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, #0e1116))";
            readonly cursor: "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, #0e1116))";
            readonly selectionBg: "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, #368cf9))";
            readonly activelineBg: "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, #e7ecf0))";
            readonly matchingbracketText: "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, #0e1116))";
            readonly linesBg: "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, #ffffff))";
            readonly syntax: {
                readonly comment: "var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, #0e1116))";
                readonly constant: "var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, #023b95))";
                readonly entity: "var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, #622cbc))";
                readonly keyword: "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #a0111f))";
                readonly storage: "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #a0111f))";
                readonly string: "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #032563))";
                readonly support: "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #023b95))";
                readonly variable: "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #702c00))";
            };
        };
        readonly checks: {
            readonly bg: "var(--color-checks-bg, #0e1116)";
            readonly runBorderWidth: "var(--color-checks-run-border-width, 0px)";
            readonly containerBorderWidth: "var(--color-checks-container-border-width, 0px)";
            readonly textPrimary: "var(--color-checks-text-primary, #ffffff)";
            readonly textSecondary: "var(--color-checks-text-secondary, #88929d)";
            readonly textLink: "var(--color-checks-text-link, #368cf9)";
            readonly btnIcon: "var(--color-checks-btn-icon, #acb6c0)";
            readonly btnHoverIcon: "var(--color-checks-btn-hover-icon, #ffffff)";
            readonly btnHoverBg: "var(--color-checks-btn-hover-bg, rgba(255,255,255,0.125))";
            readonly inputText: "var(--color-checks-input-text, #e7ecf0)";
            readonly inputPlaceholderText: "var(--color-checks-input-placeholder-text, #88929d)";
            readonly inputFocusText: "var(--color-checks-input-focus-text, #88929d)";
            readonly inputBg: "var(--color-checks-input-bg, #20252c)";
            readonly inputShadow: "var(--color-checks-input-shadow, none)";
            readonly donutError: "var(--color-checks-donut-error, #d5232c)";
            readonly donutPending: "var(--color-checks-donut-pending, #956400)";
            readonly donutSuccess: "var(--color-checks-donut-success, #055d20)";
            readonly donutNeutral: "var(--color-checks-donut-neutral, #acb6c0)";
            readonly dropdownText: "var(--color-checks-dropdown-text, #acb6c0)";
            readonly dropdownBg: "var(--color-checks-dropdown-bg, #20252c)";
            readonly dropdownBorder: "var(--color-checks-dropdown-border, #343b43)";
            readonly dropdownShadow: "var(--color-checks-dropdown-shadow, rgba(1,4,9,0.3))";
            readonly dropdownHoverText: "var(--color-checks-dropdown-hover-text, #ffffff)";
            readonly dropdownHoverBg: "var(--color-checks-dropdown-hover-bg, #343b43)";
            readonly dropdownBtnHoverText: "var(--color-checks-dropdown-btn-hover-text, #ffffff)";
            readonly dropdownBtnHoverBg: "var(--color-checks-dropdown-btn-hover-bg, #20252c)";
            readonly scrollbarThumbBg: "var(--color-checks-scrollbar-thumb-bg, #4b535d)";
            readonly headerLabelText: "var(--color-checks-header-label-text, #ced5dc)";
            readonly headerLabelOpenText: "var(--color-checks-header-label-open-text, #ffffff)";
            readonly headerBorder: "var(--color-checks-header-border, #20252c)";
            readonly headerIcon: "var(--color-checks-header-icon, #88929d)";
            readonly lineText: "var(--color-checks-line-text, #ced5dc)";
            readonly lineNumText: "var(--color-checks-line-num-text, rgba(136,146,157,0.75))";
            readonly lineTimestampText: "var(--color-checks-line-timestamp-text, #88929d)";
            readonly lineHoverBg: "var(--color-checks-line-hover-bg, #20252c)";
            readonly lineSelectedBg: "var(--color-checks-line-selected-bg, rgba(17,104,227,0.15))";
            readonly lineSelectedNumText: "var(--color-checks-line-selected-num-text, #368cf9)";
            readonly lineDtFmText: "var(--color-checks-line-dt-fm-text, #0e1116)";
            readonly lineDtFmBg: "var(--color-checks-line-dt-fm-bg, #744500)";
            readonly gateBg: "var(--color-checks-gate-bg, rgba(96,55,0,0.15))";
            readonly gateText: "var(--color-checks-gate-text, #ced5dc)";
            readonly gateWaitingText: "var(--color-checks-gate-waiting-text, #b58407)";
            readonly stepHeaderOpenBg: "var(--color-checks-step-header-open-bg, #20252c)";
            readonly stepErrorText: "var(--color-checks-step-error-text, #ee5a5d)";
            readonly stepWarningText: "var(--color-checks-step-warning-text, #b58407)";
            readonly loglineText: "var(--color-checks-logline-text, #88929d)";
            readonly loglineNumText: "var(--color-checks-logline-num-text, rgba(136,146,157,0.75))";
            readonly loglineDebugText: "var(--color-checks-logline-debug-text, #a371f7)";
            readonly loglineErrorText: "var(--color-checks-logline-error-text, #ced5dc)";
            readonly loglineErrorNumText: "var(--color-checks-logline-error-num-text, #ee5a5d)";
            readonly loglineErrorBg: "var(--color-checks-logline-error-bg, rgba(134,6,29,0.15))";
            readonly loglineWarningText: "var(--color-checks-logline-warning-text, #ced5dc)";
            readonly loglineWarningNumText: "var(--color-checks-logline-warning-num-text, #b58407)";
            readonly loglineWarningBg: "var(--color-checks-logline-warning-bg, rgba(96,55,0,0.15))";
            readonly loglineCommandText: "var(--color-checks-logline-command-text, #368cf9)";
            readonly loglineSectionText: "var(--color-checks-logline-section-text, #26a148)";
            readonly ansi: {
                readonly black: "var(--color-checks-ansi-black, #0e1116)";
                readonly blackBright: "var(--color-checks-ansi-black-bright, #20252c)";
                readonly white: "var(--color-checks-ansi-white, #ced5dc)";
                readonly whiteBright: "var(--color-checks-ansi-white-bright, #ced5dc)";
                readonly gray: "var(--color-checks-ansi-gray, #88929d)";
                readonly red: "var(--color-checks-ansi-red, #ee5a5d)";
                readonly redBright: "var(--color-checks-ansi-red-bright, #ff8e8a)";
                readonly green: "var(--color-checks-ansi-green, #26a148)";
                readonly greenBright: "var(--color-checks-ansi-green-bright, #43c663)";
                readonly yellow: "var(--color-checks-ansi-yellow, #b58407)";
                readonly yellowBright: "var(--color-checks-ansi-yellow-bright, #d5a824)";
                readonly blue: "var(--color-checks-ansi-blue, #368cf9)";
                readonly blueBright: "var(--color-checks-ansi-blue-bright, #67b3fd)";
                readonly magenta: "var(--color-checks-ansi-magenta, #a371f7)";
                readonly magentaBright: "var(--color-checks-ansi-magenta-bright, #c49bff)";
                readonly cyan: "var(--color-checks-ansi-cyan, #76e3ea)";
                readonly cyanBright: "var(--color-checks-ansi-cyan-bright, #b3f0ff)";
            };
        };
        readonly project: {
            readonly headerBg: "var(--color-project-header-bg, #0e1116)";
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
                readonly emphasis: "var(--control-borderColor-emphasis, var(--color-control-border-color-emphasis, #20252c))";
            };
        };
        readonly avatar: {
            readonly bg: "var(--avatar-bgColor, var(--color-avatar-bg, #ffffff))";
            readonly border: "var(--avatar-borderColor, var(--color-avatar-border, rgba(1,4,9,0.8)))";
            readonly stackFade: "var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, #acb6c0))";
            readonly stackFadeMore: "var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, #ced5dc))";
            readonly childShadow: "var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px rgba(255,255,255,0.8)))";
        };
        readonly topicTag: {
            readonly border: "var(--topicTag-borderColor, var(--color-topic-tag-border, #0349b4))";
        };
        readonly counter: {
            readonly border: "var(--counter-borderColor, var(--color-counter-border, #20252c))";
        };
        readonly selectMenu: {
            readonly backdropBorder: "var(--selectMenu-borderColor, var(--color-select-menu-backdrop-border, transparent))";
            readonly tapHighlight: "var(--control-bgColor-active, var(--color-select-menu-tap-highlight, rgba(172,182,192,0.5)))";
            readonly tapFocusBg: "var(--selectMenu-bgColor-active, var(--color-select-menu-tap-focus-bg, #9cd7ff))";
        };
        readonly overlay: {
            readonly shadow: "var(--shadow-floating-small, var(--color-overlay-shadow, 0 1px 3px rgba(1,4,9,0.12), 0 8px 24px rgba(52,59,67,0.12)))";
            readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, rgba(136,146,157,0.2)))";
        };
        readonly header: {
            readonly text: "var(--header-fgColor-default, var(--color-header-text, rgba(255,255,255,0.7)))";
            readonly bg: "var(--header-bgColor, var(--color-header-bg, #0e1116))";
            readonly divider: "var(--header-borderColor-divider, var(--color-header-divider, #acb6c0))";
            readonly logo: "var(--header-fgColor-logo, var(--color-header-logo, #ffffff))";
        };
        readonly headerSearch: {
            readonly bg: "var(--headerSearch-bgColor, var(--color-header-search-bg, #0e1116))";
            readonly border: "var(--headerSearch-borderColor, var(--color-header-search-border, #4b535d))";
        };
        readonly sidenav: {
            readonly selectedBg: "var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, #ffffff))";
        };
        readonly menu: {
            readonly bgActive: "var(--menu-bgColor-active, var(--color-menu-bg-active, transparent))";
        };
        readonly input: {
            readonly disabledBg: "var(--control-bgColor-disabled, var(--color-input-disabled-bg, rgba(172,182,192,0.2)))";
        };
        readonly timeline: {
            readonly badgeBg: "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #e7ecf0))";
        };
        readonly ansi: {
            readonly black: "var(--color-ansi-black, #0e1116)";
            readonly blackBright: "var(--color-ansi-black-bright, #4b535d)";
            readonly white: "var(--color-ansi-white, #66707b)";
            readonly whiteBright: "var(--color-ansi-white-bright, #88929d)";
            readonly gray: "var(--color-ansi-gray, #66707b)";
            readonly red: "var(--color-ansi-red, #a0111f)";
            readonly redBright: "var(--color-ansi-red-bright, #86061d)";
            readonly green: "var(--color-ansi-green, #024c1a)";
            readonly greenBright: "var(--color-ansi-green-bright, #055d20)";
            readonly yellow: "var(--color-ansi-yellow, #3f2200)";
            readonly yellowBright: "var(--color-ansi-yellow-bright, #4e2c00)";
            readonly blue: "var(--color-ansi-blue, #0349b4)";
            readonly blueBright: "var(--color-ansi-blue-bright, #1168e3)";
            readonly magenta: "var(--color-ansi-magenta, #622cbc)";
            readonly magentaBright: "var(--color-ansi-magenta-bright, #844ae7)";
            readonly cyan: "var(--color-ansi-cyan, #1b7c83)";
            readonly cyanBright: "var(--color-ansi-cyan-bright, #3192aa)";
        };
        readonly btn: {
            readonly text: "var(--button-default-fgColor-rest, var(--color-btn-text, #0e1116))";
            readonly bg: "var(--button-default-bgColor-rest, var(--color-btn-bg, #e7ecf0))";
            readonly border: "var(--button-default-borderColor-rest, var(--color-btn-border, rgba(1,4,9,0.8)))";
            readonly shadow: "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 1px 0 rgba(1,4,9,0.04)))";
            readonly insetShadow: "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.25)))";
            readonly hoverBg: "var(--button-default-bgColor-hover, var(--color-btn-hover-bg, #ced5dc))";
            readonly hoverBorder: "var(--button-default-borderColor-hover, var(--color-btn-hover-border, rgba(1,4,9,0.8)))";
            readonly activeBg: "var(--button-default-bgColor-active, var(--color-btn-active-bg, #acb6c0))";
            readonly activeBorder: "var(--button-default-borderColor-active, var(--color-btn-active-border, rgba(1,4,9,0.8)))";
            readonly selectedBg: "var(--button-default-bgColor-selected, var(--color-btn-selected-bg, #acb6c0))";
            readonly counterBg: "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, rgba(1,4,9,0.08)))";
            readonly primary: {
                readonly text: "var(--button-primary-fgColor-rest, var(--color-btn-primary-text, #ffffff))";
                readonly bg: "var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, #055d20))";
                readonly border: "var(--button-primary-borderColor-rest, var(--color-btn-primary-border, #013d14))";
                readonly shadow: "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 1px 0 rgba(1,4,9,0.1)))";
                readonly insetShadow: "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))";
                readonly hoverBg: "var(--button-primary-bgColor-hover, var(--color-btn-primary-hover-bg, #024c1a))";
                readonly hoverBorder: "var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, #013d14))";
                readonly selectedBg: "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, hsla(139,95%,13%,1)))";
                readonly selectedShadow: "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, inset 0 1px 0 rgba(0,35,11,0.2)))";
                readonly disabledText: "var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, rgba(255,255,255,0.8)))";
                readonly disabledBg: "var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, #94d3a2))";
                readonly disabledBorder: "var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, rgba(1,4,9,0.8)))";
                readonly icon: "var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, rgba(255,255,255,0.8)))";
                readonly counterBg: "var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, rgba(0,35,11,0.2)))";
            };
            readonly outline: {
                readonly text: "var(--button-outline-fgColor-rest, var(--color-btn-outline-text, #023b95))";
                readonly hoverText: "var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, #ffffff))";
                readonly hoverBg: "var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, #0349b4))";
                readonly hoverBorder: "var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, #022f7a))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))";
                readonly hoverCounterBg: "var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, rgba(255,255,255,0.2)))";
                readonly selectedText: "var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, #ffffff))";
                readonly selectedBg: "var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, #022f7a))";
                readonly selectedBorder: "var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, #022f7a))";
                readonly selectedShadow: "var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, inset 0 1px 0 rgba(2,26,74,0.2)))";
                readonly disabledText: "var(--button-outline-fgColor-disabled, var(--color-btn-outline-disabled-text, rgba(3,73,180,0.5)))";
                readonly disabledBg: "var(--button-outline-bgColor-disabled, var(--color-btn-outline-disabled-bg, #e7ecf0))";
                readonly disabledCounterBg: "var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, rgba(3,73,180,0.05)))";
                readonly counterBg: "var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, #0969da1a))";
                readonly counterFg: "var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, #023b95))";
                readonly hoverCounterFg: "var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, #ffffff))";
                readonly disabledCounterFg: "var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, rgba(3,73,180,0.5)))";
            };
            readonly danger: {
                readonly text: "var(--button-danger-fgColor-rest, var(--color-btn-danger-text, #86061d))";
                readonly hoverText: "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, #ffffff))";
                readonly hoverBg: "var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, #a0111f))";
                readonly hoverBorder: "var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, #6e011a))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))";
                readonly hoverCounterBg: "var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, rgba(255,255,255,0.2)))";
                readonly selectedText: "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))";
                readonly selectedBg: "var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, #6e011a))";
                readonly selectedBorder: "var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, #6e011a))";
                readonly selectedShadow: "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, inset 0 1px 0 rgba(67,0,17,0.2)))";
                readonly disabledText: "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(160,17,31,0.5)))";
                readonly disabledBg: "var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, #e7ecf0))";
                readonly disabledCounterBg: "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(160,17,31,0.05)))";
                readonly counterBg: "var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, rgba(160,17,31,0.1)))";
                readonly icon: "var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, #86061d))";
                readonly hoverIcon: "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, #ffffff))";
                readonly counterFg: "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, #86061d))";
                readonly hoverCounterFg: "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #ffffff))";
                readonly disabledCounterFg: "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, rgba(160,17,31,0.5)))";
            };
            readonly inactive: {
                readonly bg: "var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, #e7ecf0))";
                readonly text: "var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, #4b535d))";
            };
        };
        readonly underlinenav: {
            readonly icon: "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, #66707b))";
            readonly borderHover: "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, rgba(172,182,192,0.2)))";
        };
        readonly actionListItem: {
            readonly inlineDivider: "var(--borderColor-muted, var(--color-action-list-item-inline-divider, #88929d))";
            readonly default: {
                readonly hoverBg: "var(--control-transparent-bgColor-hover, var(--color-action-list-item-default-hover-bg, #e7ecf0))";
                readonly hoverBorder: "var(--control-transparent-borderColor-hover, var(--color-action-list-item-default-hover-border, #88929d))";
                readonly activeBg: "var(--control-transparent-bgColor-active, var(--color-action-list-item-default-active-bg, #ced5dc))";
                readonly activeBorder: "var(--control-transparent-borderColor-active, var(--color-action-list-item-default-active-border, #20252c))";
                readonly selectedBg: "var(--control-transparent-bgColor-selected, var(--color-action-list-item-default-selected-bg, #ced5dc))";
            };
            readonly danger: {
                readonly hoverBg: "var(--control-danger-bgColor-hover, var(--color-action-list-item-danger-hover-bg, #a0111f))";
                readonly activeBg: "var(--control-danger-bgColor-active, var(--color-action-list-item-danger-active-bg, #6e011a))";
                readonly hoverText: "var(--control-danger-fgColor-hover, var(--color-action-list-item-danger-hover-text, #ffffff))";
            };
        };
        readonly switchTrack: {
            readonly bg: "var(--controlTrack-bgColor-rest, var(--color-switch-track-bg, #66707b))";
            readonly hoverBg: "var(--controlTrack-bgColor-hover, var(--color-switch-track-hover-bg, hsla(211,9%,47%,1)))";
            readonly activeBg: "var(--controlTrack-bgColor-active, var(--color-switch-track-active-bg, hsla(211,9%,49%,1)))";
            readonly disabledBg: "var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, #88929d))";
            readonly fg: "var(--controlTrack-fgColor-rest, var(--color-switch-track-fg, #ffffff))";
            readonly disabledFg: "var(--controlTrack-fgColor-disabled, var(--color-switch-track-disabled-fg, #ffffff))";
            readonly border: "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))";
            readonly checked: {
                readonly bg: "var(--control-checked-bgColor-rest, var(--color-switch-track-checked-bg, #0349b4))";
                readonly hoverBg: "var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, #0860CA))";
                readonly activeBg: "var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, #0757BA))";
                readonly fg: "var(--control-checked-fgColor-rest, var(--color-switch-track-checked-fg, #ffffff))";
                readonly disabledFg: "var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, #ffffff))";
                readonly border: "var(--borderColor-transparent, var(--color-switch-track-checked-border, transparent))";
            };
        };
        readonly switchKnob: {
            readonly bg: "var(--controlKnob-bgColor-rest, var(--color-switch-knob-bg, #ffffff))";
            readonly disabledBg: "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-disabled-bg, #e7ecf0))";
            readonly border: "var(--controlKnob-borderColor-rest, var(--color-switch-knob-border, #20252c))";
            readonly checked: {
                readonly bg: "var(--controlKnob-bgColor-checked, var(--color-switch-knob-checked-bg, #ffffff))";
                readonly disabledBg: "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-checked-disabled-bg, #e7ecf0))";
                readonly border: "var(--controlKnob-borderColor-checked, var(--color-switch-knob-checked-border, #0349b4))";
            };
        };
        readonly segmentedControl: {
            readonly bg: "var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, #e7ecf0))";
            readonly button: {
                readonly bg: "var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, #ffffff))";
                readonly hover: {
                    readonly bg: "var(--controlTrack-bgColor-hover, var(--color-segmented-control-button-hover-bg, rgba(172,182,192,0.2)))";
                };
                readonly active: {
                    readonly bg: "var(--controlTrack-bgColor-active, var(--color-segmented-control-button-hover-active-bg, rgba(172,182,192,0.4)))";
                };
                readonly selected: {
                    readonly border: "var(--controlKnob-borderColor-rest, var(--color-segmented-control-button-hover-active-selected-border, #88929d))";
                };
            };
        };
        readonly treeViewItem: {
            readonly chevron: {
                readonly hoverBg: "var(--control-transparent-bgColor-hover, var(--color-tree-view-item-chevron-hover-bg, #ced5dc))";
            };
            readonly directory: {
                readonly fill: "var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-chevron-directory-fill, #368cf9))";
            };
        };
        readonly fg: {
            readonly default: "var(--fgColor-default, var(--color-fg-default, #0e1116))";
            readonly muted: "var(--fgColor-muted, var(--color-fg-muted, #0e1116))";
            readonly subtle: "var(--fgColor-muted, var(--color-fg-subtle, #66707b))";
            readonly onEmphasis: "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))";
        };
        readonly canvas: {
            readonly default: "var(--bgColor-default, var(--color-canvas-default, #ffffff))";
            readonly overlay: "var(--overlay-bgColor, var(--color-canvas-overlay, #ffffff))";
            readonly inset: "var(--bgColor-inset, var(--color-canvas-inset, #ffffff))";
            readonly subtle: "var(--bgColor-muted, var(--color-canvas-subtle, #e7ecf0))";
        };
        readonly border: {
            readonly default: "var(--borderColor-default, var(--color-border-default, #20252c))";
            readonly muted: "var(--borderColor-muted, var(--color-border-muted, #88929d))";
            readonly subtle: "var(--borderColor-muted, var(--color-border-subtle, rgba(1,4,9,0.8)))";
        };
        readonly shadow: {
            readonly small: "var(--shadow-resting-small, var(--color-shadow-small, 0 1px 0 rgba(1,4,9,0.04)))";
            readonly medium: "var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px rgba(136,146,157,0.15)))";
            readonly large: "var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px rgba(136,146,157,0.2)))";
            readonly extraLarge: "var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 28px rgba(136,146,157,0.3)))";
        };
        readonly neutral: {
            readonly emphasisPlus: "var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, #0e1116))";
            readonly emphasis: "var(--bgColor-neutral-emphasis, var(--color-neutral-emphasis, #66707b))";
            readonly muted: "var(--bgColor-neutral-muted, var(--color-neutral-muted, rgba(172,182,192,0.2)))";
            readonly subtle: "var(--bgColor-neutral-muted, var(--color-neutral-subtle, #e7ecf0))";
        };
        readonly accent: {
            readonly fg: "var(--fgColor-accent, var(--color-accent-fg, #0349b4))";
            readonly emphasis: "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #0349b4))";
            readonly muted: "var(--borderColor-accent-muted, var(--color-accent-muted, #368cf9))";
            readonly subtle: "var(--bgColor-accent-muted, var(--color-accent-subtle, #dff7ff))";
        };
        readonly success: {
            readonly fg: "var(--fgColor-success, var(--color-success-fg, #055d20))";
            readonly emphasis: "var(--bgColor-success-emphasis, var(--color-success-emphasis, #055d20))";
            readonly muted: "var(--borderColor-success-muted, var(--color-success-muted, #26a148))";
            readonly subtle: "var(--bgColor-success-muted, var(--color-success-subtle, #d2fedb))";
        };
        readonly attention: {
            readonly fg: "var(--fgColor-attention, var(--color-attention-fg, #744500))";
            readonly emphasis: "var(--bgColor-attention-emphasis, var(--color-attention-emphasis, #744500))";
            readonly muted: "var(--borderColor-attention-muted, var(--color-attention-muted, #b58407))";
            readonly subtle: "var(--bgColor-attention-muted, var(--color-attention-subtle, #fcf7be))";
        };
        readonly severe: {
            readonly fg: "var(--fgColor-severe, var(--color-severe-fg, #873800))";
            readonly emphasis: "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #873800))";
            readonly muted: "var(--borderColor-severe-muted, var(--color-severe-muted, #dc6d1a))";
            readonly subtle: "var(--bgColor-severe-muted, var(--color-severe-subtle, #fff2d5))";
        };
        readonly danger: {
            readonly fg: "var(--fgColor-danger, var(--color-danger-fg, #d1242f))";
            readonly emphasis: "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #a0111f))";
            readonly muted: "var(--borderColor-danger-muted, var(--color-danger-muted, #ee5a5d))";
            readonly subtle: "var(--bgColor-danger-muted, var(--color-danger-subtle, #fff0ee))";
        };
        readonly open: {
            readonly fg: "var(--fgColor-open, var(--color-open-fg, #055d20))";
            readonly emphasis: "var(--bgColor-open-emphasis, var(--color-open-emphasis, #055d20))";
            readonly muted: "var(--borderColor-open-muted, var(--color-open-muted, rgba(38,161,72,0.4)))";
            readonly subtle: "var(--bgColor-open-muted, var(--color-open-subtle, #d2fedb))";
        };
        readonly closed: {
            readonly fg: "var(--fgColor-closed, var(--color-closed-fg, #d1242f))";
            readonly emphasis: "var(--bgColor-closed-emphasis, var(--color-closed-emphasis, #a0111f))";
            readonly muted: "var(--borderColor-closed-muted, var(--color-closed-muted, rgba(238,90,93,0.4)))";
            readonly subtle: "var(--bgColor-closed-muted, var(--color-closed-subtle, #fff0ee))";
        };
        readonly done: {
            readonly fg: "var(--fgColor-done, var(--color-done-fg, #622cbc))";
            readonly emphasis: "var(--bgColor-done-emphasis, var(--color-done-emphasis, #622cbc))";
            readonly muted: "var(--borderColor-done-muted, var(--color-done-muted, #a371f7))";
            readonly subtle: "var(--bgColor-done-muted, var(--color-done-subtle, #faf0fe))";
        };
        readonly sponsors: {
            readonly fg: "var(--fgColor-sponsors, var(--color-sponsors-fg, #971368))";
            readonly emphasis: "var(--bgColor-sponsors-emphasis, var(--color-sponsors-emphasis, #971368))";
            readonly muted: "var(--borderColor-sponsors-muted, var(--color-sponsors-muted, #ed4baf))";
            readonly subtle: "var(--bgColor-sponsors-muted, var(--color-sponsors-subtle, #feeff7))";
        };
        readonly primer: {
            readonly fg: {
                readonly disabled: "var(--fgColor-disabled, var(--color-primer-fg-disabled, #88929d))";
            };
            readonly canvas: {
                readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-primer-fg-canvas-backdrop, rgba(1,4,9,0.5)))";
                readonly sticky: "var(--color-primer-canvas-sticky, rgba(255,255,255,0.95))";
            };
            readonly border: {
                readonly active: "var(--underlineNav-borderColor-active, var(--color-primer-border-active, #ef5b48))";
                readonly contrast: "var(--borderColor-muted, var(--color-primer-border-contrast, rgba(1,4,9,0.1)))";
            };
            readonly shadow: {
                readonly highlight: "var(--shadow-highlight, var(--color-primer-shadow-highlight, inset 0 1px 0 rgba(255,255,255,0.25)))";
                readonly inset: "var(--shadow-inset, var(--color-primer-shadow-inset, inset 0 1px 0 rgba(206,213,220,0.2)))";
            };
        };
        readonly scale: {
            readonly black: "#010409";
            readonly white: "#ffffff";
            readonly gray: readonly ["#ffffff", "#e7ecf0", "#ced5dc", "#acb6c0", "#88929d", "#66707b", "#4b535d", "#343b43", "#20252c", "#0e1116"];
            readonly blue: readonly ["#dff7ff", "#9cd7ff", "#67b3fd", "#368cf9", "#1168e3", "#0349b4", "#023b95", "#022f7a", "#032563", "#021a4a"];
            readonly green: readonly ["#d2fedb", "#82e596", "#43c663", "#26a148", "#117f32", "#055d20", "#024c1a", "#013d14", "#003110", "#00230b"];
            readonly yellow: readonly ["#fcf7be", "#f0ce53", "#d5a824", "#b58407", "#956400", "#744500", "#603700", "#4e2c00", "#3f2200", "#2e1800"];
            readonly orange: readonly ["#fff2d5", "#ffc67b", "#f99636", "#dc6d1a", "#b45105", "#873800", "#702c00", "#5b2300", "#491b00", "#361200"];
            readonly red: readonly ["#fff0ee", "#ffc1bc", "#ff8e8a", "#ee5a5d", "#d5232c", "#a0111f", "#86061d", "#6e011a", "#5a0016", "#430011"];
            readonly purple: readonly ["#faf0fe", "#e0c5ff", "#c49bff", "#a371f7", "#844ae7", "#622cbc", "#512598", "#411d7b", "#341763", "#260f49"];
            readonly pink: readonly ["#feeff7", "#ffbde0", "#fc87ca", "#ed4baf", "#c9248e", "#971368", "#7d0c57", "#660847", "#53043a", "#3e022b"];
            readonly coral: readonly ["#fff0ed", "#ffc2b6", "#ff8f7e", "#ef5b48", "#cd3425", "#9f1710", "#870706", "#6f0107", "#5b0002", "#430200"];
        };
    };
    light_colorblind: {
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
    light_tritanopia: {
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
                readonly numBg: "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, rgba(255,129,130,0.4)))";
                readonly lineBg: "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, rgba(255,235,233,0.5)))";
                readonly wordBg: "var(--diffBlob-deletion-bgColor-word, var(--color-diff-blob-deletion-word-bg, rgba(255,171,168,0.5)))";
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
                readonly keyword: "var(--color-prettylights-syntax-keyword, #cf222e)";
                readonly string: "var(--color-prettylights-syntax-string, #0a3069)";
                readonly variable: "var(--color-prettylights-syntax-variable, #a40e26)";
                readonly brackethighlighterUnmatched: "var(--color-prettylights-syntax-brackethighlighter-unmatched, #82071e)";
                readonly invalidIllegalText: "var(--color-prettylights-syntax-invalid-illegal-text, #f6f8fa)";
                readonly invalidIllegalBg: "var(--color-prettylights-syntax-invalid-illegal-bg, #82071e)";
                readonly carriageReturnText: "var(--color-prettylights-syntax-carriage-return-text, #f6f8fa)";
                readonly carriageReturnBg: "var(--color-prettylights-syntax-carriage-return-bg, #cf222e)";
                readonly stringRegexp: "var(--color-prettylights-syntax-string-regexp, #0550ae)";
                readonly markupList: "var(--color-prettylights-syntax-markup-list, #3b2300)";
                readonly markupHeading: "var(--color-prettylights-syntax-markup-heading, #0550ae)";
                readonly markupItalic: "var(--color-prettylights-syntax-markup-italic, #24292f)";
                readonly markupBold: "var(--color-prettylights-syntax-markup-bold, #24292f)";
                readonly markupDeletedText: "var(--color-prettylights-syntax-markup-deleted-text, #82071e)";
                readonly markupDeletedBg: "var(--color-prettylights-syntax-markup-deleted-bg, #ffebe9)";
                readonly markupInsertedText: "var(--color-prettylights-syntax-markup-inserted-text, #0550ae)";
                readonly markupInsertedBg: "var(--color-prettylights-syntax-markup-inserted-bg, #ddf4ff)";
                readonly markupChangedText: "var(--color-prettylights-syntax-markup-changed-text, #a40e26)";
                readonly markupChangedBg: "var(--color-prettylights-syntax-markup-changed-bg, #ffcecb)";
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
                readonly keyword: "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #cf222e))";
                readonly storage: "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #cf222e))";
                readonly string: "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #0a3069))";
                readonly support: "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #0550ae))";
                readonly variable: "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #a40e26))";
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
            readonly donutError: "var(--color-checks-donut-error, #fa4549)";
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
            readonly stepErrorText: "var(--color-checks-step-error-text, #ff8182)";
            readonly stepWarningText: "var(--color-checks-step-warning-text, #d4a72c)";
            readonly loglineText: "var(--color-checks-logline-text, #8c959f)";
            readonly loglineNumText: "var(--color-checks-logline-num-text, rgba(140,149,159,0.75))";
            readonly loglineDebugText: "var(--color-checks-logline-debug-text, #c297ff)";
            readonly loglineErrorText: "var(--color-checks-logline-error-text, #d0d7de)";
            readonly loglineErrorNumText: "var(--color-checks-logline-error-num-text, #ff8182)";
            readonly loglineErrorBg: "var(--color-checks-logline-error-bg, rgba(164,14,38,0.15))";
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
                readonly red: "var(--color-checks-ansi-red, #ff8182)";
                readonly redBright: "var(--color-checks-ansi-red-bright, #ffaba8)";
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
            readonly red: "var(--color-ansi-red, #cf222e)";
            readonly redBright: "var(--color-ansi-red-bright, #a40e26)";
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
                readonly text: "var(--button-danger-fgColor-rest, var(--color-btn-danger-text, #cf222e))";
                readonly hoverText: "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, #ffffff))";
                readonly hoverBg: "var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, #a40e26))";
                readonly hoverBorder: "var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, rgba(27,31,36,0.15)))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 1px 0 rgba(27,31,36,0.1)))";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))";
                readonly hoverCounterBg: "var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, rgba(255,255,255,0.2)))";
                readonly selectedText: "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))";
                readonly selectedBg: "var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, hsla(356,72%,44%,1)))";
                readonly selectedBorder: "var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, rgba(27,31,36,0.15)))";
                readonly selectedShadow: "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, inset 0 1px 0 rgba(76,0,20,0.2)))";
                readonly disabledText: "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(207,34,46,0.5)))";
                readonly disabledBg: "var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, #f6f8fa))";
                readonly disabledCounterBg: "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(207,34,46,0.05)))";
                readonly counterBg: "var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, rgba(207,34,46,0.1)))";
                readonly icon: "var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, #cf222e))";
                readonly hoverIcon: "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, #ffffff))";
                readonly counterFg: "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, #a40e26))";
                readonly hoverCounterFg: "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #ffffff))";
                readonly disabledCounterFg: "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, rgba(207,34,46,0.5)))";
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
                readonly hoverBg: "var(--control-danger-bgColor-hover, var(--color-action-list-item-default-danger-hover-bg, rgba(255,235,233,0.64)))";
                readonly activeBg: "var(--control-danger-bgColor-active, var(--color-action-list-item-default-danger-active-bg, #ffebe9))";
                readonly hoverText: "var(--control-danger-fgColor-hover, var(--color-action-list-item-default-danger-hover-text, #cf222e))";
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
            readonly fg: "var(--fgColor-severe, var(--color-severe-fg, #cf222e))";
            readonly emphasis: "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #cf222e))";
            readonly muted: "var(--borderColor-severe-muted, var(--color-severe-muted, rgba(255,129,130,0.4)))";
            readonly subtle: "var(--bgColor-severe-muted, var(--color-severe-subtle, #ffebe9))";
        };
        readonly danger: {
            readonly fg: "var(--fgColor-danger, var(--color-danger-fg, #cf222e))";
            readonly emphasis: "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #cf222e))";
            readonly muted: "var(--borderColor-danger-muted, var(--color-danger-muted, rgba(255,129,130,0.4)))";
            readonly subtle: "var(--bgColor-danger-muted, var(--color-danger-subtle, #ffebe9))";
        };
        readonly open: {
            readonly fg: "var(--fgColor-open, var(--color-open-fg, #cf222e))";
            readonly emphasis: "var(--bgColor-open-emphasis, var(--color-open-emphasis, #fa4549))";
            readonly muted: "var(--borderColor-open-muted, var(--color-open-muted, rgba(255,129,130,0.4)))";
            readonly subtle: "var(--bgColor-open-muted, var(--color-open-subtle, #ffebe9))";
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
            readonly orange: readonly ["#ffebe9", "#ffcecb", "#ffaba8", "#ff8182", "#fa4549", "#cf222e", "#a40e26", "#82071e", "#660018", "#4c0014"];
            readonly red: readonly ["#ffebe9", "#ffcecb", "#ffaba8", "#ff8182", "#fa4549", "#cf222e", "#a40e26", "#82071e", "#660018", "#4c0014"];
            readonly purple: readonly ["#fbefff", "#ecd8ff", "#d8b9ff", "#c297ff", "#a475f9", "#8250df", "#6639ba", "#512a97", "#3e1f79", "#2e1461"];
            readonly pink: readonly ["#ffeff7", "#ffd3eb", "#ffadda", "#ff80c8", "#e85aad", "#bf3989", "#99286e", "#772057", "#611347", "#4d0336"];
            readonly coral: readonly ["#fff0eb", "#ffd6cc", "#ffb4a1", "#fd8c73", "#ec6547", "#c4432b", "#9e2f1c", "#801f0f", "#691105", "#510901"];
        };
    };
    dark: {
        readonly canvasDefaultTransparent: "var(--bgColor-transparent, var(--color-canvas-default-transparent, rgba(13,17,23,0)))";
        readonly pageHeaderBg: "var(--page-header-bgColor, var(--color-page-header-bg, #0d1117))";
        readonly marketingIcon: {
            readonly primary: "var(--color-marketing-icon-primary, #79c0ff)";
            readonly secondary: "var(--color-marketing-icon-secondary, #1f6feb)";
        };
        readonly diffBlob: {
            readonly addition: {
                readonly numText: "var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, #e6edf3))";
                readonly fg: "var(--diffBlob-addition-fgColor-text, var(--color-diff-blob-addition-fg, #e6edf3))";
                readonly numBg: "var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg, rgba(63,185,80,0.3)))";
                readonly lineBg: "var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg, rgba(46,160,67,0.15)))";
                readonly wordBg: "var(--diffBlob-addition-bgColor-word, var(--color-diff-blob-addition-word-bg, rgba(46,160,67,0.4)))";
            };
            readonly deletion: {
                readonly numText: "var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, #e6edf3))";
                readonly fg: "var(--diffBlob-deletion-fgColor-text, var(--color-diff-blob-deletion-fg, #e6edf3))";
                readonly numBg: "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, rgba(248,81,73,0.3)))";
                readonly lineBg: "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, rgba(248,81,73,0.1)))";
                readonly wordBg: "var(--diffBlob-deletion-bgColor-word, var(--color-diff-blob-deletion-word-bg, rgba(248,81,73,0.4)))";
            };
            readonly hunk: {
                readonly numBg: "var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg, rgba(56,139,253,0.4)))";
            };
            readonly expander: {
                readonly icon: "var(--diffBlob-expander-iconColor, var(--color-diff-blob-expander-icon, #848d97))";
            };
            readonly selectedLineHighlightMixBlendMode: "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, screen)";
        };
        readonly diffstat: {
            readonly deletionBorder: "var(--color-diffstat-deletion-border, rgba(240,246,252,0.1))";
            readonly additionBorder: "var(--color-diffstat-addition-border, rgba(240,246,252,0.1))";
            readonly additionBg: "var(--diffStat-addition-bgColor, var(--color-diffstat-addition-bg, #3fb950))";
        };
        readonly searchKeyword: {
            readonly hl: "var(--highlight-neutral-bgColor, var(--color-search-keyword-hl, rgba(210,153,34,0.4)))";
        };
        readonly prettylights: {
            readonly syntax: {
                readonly comment: "var(--color-prettylights-syntax-comment, #8b949e)";
                readonly constant: "var(--color-prettylights-syntax-constant, #79c0ff)";
                readonly entity: "var(--color-prettylights-syntax-entity, #d2a8ff)";
                readonly storageModifierImport: "var(--color-prettylights-syntax-storage-modifier-import, #c9d1d9)";
                readonly entityTag: "var(--color-prettylights-syntax-entity-tag, #7ee787)";
                readonly keyword: "var(--color-prettylights-syntax-keyword, #ff7b72)";
                readonly string: "var(--color-prettylights-syntax-string, #a5d6ff)";
                readonly variable: "var(--color-prettylights-syntax-variable, #ffa657)";
                readonly brackethighlighterUnmatched: "var(--color-prettylights-syntax-brackethighlighter-unmatched, #f85149)";
                readonly invalidIllegalText: "var(--color-prettylights-syntax-invalid-illegal-text, #f0f6fc)";
                readonly invalidIllegalBg: "var(--color-prettylights-syntax-invalid-illegal-bg, #8e1519)";
                readonly carriageReturnText: "var(--color-prettylights-syntax-carriage-return-text, #f0f6fc)";
                readonly carriageReturnBg: "var(--color-prettylights-syntax-carriage-return-bg, #b62324)";
                readonly stringRegexp: "var(--color-prettylights-syntax-string-regexp, #7ee787)";
                readonly markupList: "var(--color-prettylights-syntax-markup-list, #f2cc60)";
                readonly markupHeading: "var(--color-prettylights-syntax-markup-heading, #1f6feb)";
                readonly markupItalic: "var(--color-prettylights-syntax-markup-italic, #c9d1d9)";
                readonly markupBold: "var(--color-prettylights-syntax-markup-bold, #c9d1d9)";
                readonly markupDeletedText: "var(--color-prettylights-syntax-markup-deleted-text, #ffdcd7)";
                readonly markupDeletedBg: "var(--color-prettylights-syntax-markup-deleted-bg, #67060c)";
                readonly markupInsertedText: "var(--color-prettylights-syntax-markup-inserted-text, #aff5b4)";
                readonly markupInsertedBg: "var(--color-prettylights-syntax-markup-inserted-bg, #033a16)";
                readonly markupChangedText: "var(--color-prettylights-syntax-markup-changed-text, #ffdfb6)";
                readonly markupChangedBg: "var(--color-prettylights-syntax-markup-changed-bg, #5a1e02)";
                readonly markupIgnoredText: "var(--color-prettylights-syntax-markup-ignored-text, #c9d1d9)";
                readonly markupIgnoredBg: "var(--color-prettylights-syntax-markup-ignored-bg, #1158c7)";
                readonly metaDiffRange: "var(--color-prettylights-syntax-meta-diff-range, #d2a8ff)";
                readonly brackethighlighterAngle: "var(--color-prettylights-syntax-brackethighlighter-angle, #8b949e)";
                readonly sublimelinterGutterMark: "var(--color-prettylights-syntax-sublimelinter-gutter-mark, #484f58)";
                readonly constantOtherReferenceLink: "var(--color-prettylights-syntax-constant-other-reference-link, #a5d6ff)";
            };
        };
        readonly codemirror: {
            readonly text: "var(--codeMirror-fgColor, var(--color-codemirror-text, #e6edf3))";
            readonly bg: "var(--codeMirror-bgColor, var(--color-codemirror-bg, #0d1117))";
            readonly guttersBg: "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, #0d1117))";
            readonly guttermarkerText: "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, #0d1117))";
            readonly guttermarkerSubtleText: "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, #6e7681))";
            readonly linenumberText: "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, #848d97))";
            readonly cursor: "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, #e6edf3))";
            readonly selectionBg: "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, rgba(56,139,253,0.4)))";
            readonly activelineBg: "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, rgba(110,118,129,0.1)))";
            readonly matchingbracketText: "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, #e6edf3))";
            readonly linesBg: "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, #0d1117))";
            readonly syntax: {
                readonly comment: "var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, #8b949e))";
                readonly constant: "var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, #79c0ff))";
                readonly entity: "var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, #d2a8ff))";
                readonly keyword: "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #ff7b72))";
                readonly storage: "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #ff7b72))";
                readonly string: "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #a5d6ff))";
                readonly support: "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #79c0ff))";
                readonly variable: "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #ffa657))";
            };
        };
        readonly checks: {
            readonly bg: "var(--color-checks-bg, #010409)";
            readonly runBorderWidth: "var(--color-checks-run-border-width, 1px)";
            readonly containerBorderWidth: "var(--color-checks-container-border-width, 1px)";
            readonly textPrimary: "var(--color-checks-text-primary, #e6edf3)";
            readonly textSecondary: "var(--color-checks-text-secondary, #848d97)";
            readonly textLink: "var(--color-checks-text-link, #2f81f7)";
            readonly btnIcon: "var(--color-checks-btn-icon, #848d97)";
            readonly btnHoverIcon: "var(--color-checks-btn-hover-icon, #e6edf3)";
            readonly btnHoverBg: "var(--color-checks-btn-hover-bg, rgba(110,118,129,0.1))";
            readonly inputText: "var(--color-checks-input-text, #848d97)";
            readonly inputPlaceholderText: "var(--color-checks-input-placeholder-text, #6e7681)";
            readonly inputFocusText: "var(--color-checks-input-focus-text, #e6edf3)";
            readonly inputBg: "var(--color-checks-input-bg, #161b22)";
            readonly inputShadow: "var(--color-checks-input-shadow, 0 0 0 1px #30363d)";
            readonly donutError: "var(--color-checks-donut-error, #f85149)";
            readonly donutPending: "var(--color-checks-donut-pending, #d29922)";
            readonly donutSuccess: "var(--color-checks-donut-success, #2ea043)";
            readonly donutNeutral: "var(--color-checks-donut-neutral, #8b949e)";
            readonly dropdownText: "var(--color-checks-dropdown-text, #e6edf3)";
            readonly dropdownBg: "var(--color-checks-dropdown-bg, #161b22)";
            readonly dropdownBorder: "var(--color-checks-dropdown-border, #30363d)";
            readonly dropdownShadow: "var(--color-checks-dropdown-shadow, rgba(1,4,9,0.3))";
            readonly dropdownHoverText: "var(--color-checks-dropdown-hover-text, #e6edf3)";
            readonly dropdownHoverBg: "var(--color-checks-dropdown-hover-bg, rgba(110,118,129,0.1))";
            readonly dropdownBtnHoverText: "var(--color-checks-dropdown-btn-hover-text, #e6edf3)";
            readonly dropdownBtnHoverBg: "var(--color-checks-dropdown-btn-hover-bg, rgba(110,118,129,0.1))";
            readonly scrollbarThumbBg: "var(--color-checks-scrollbar-thumb-bg, rgba(110,118,129,0.4))";
            readonly headerLabelText: "var(--color-checks-header-label-text, #848d97)";
            readonly headerLabelOpenText: "var(--color-checks-header-label-open-text, #e6edf3)";
            readonly headerBorder: "var(--color-checks-header-border, #21262d)";
            readonly headerIcon: "var(--color-checks-header-icon, #848d97)";
            readonly lineText: "var(--color-checks-line-text, #848d97)";
            readonly lineNumText: "var(--color-checks-line-num-text, #6e7681)";
            readonly lineTimestampText: "var(--color-checks-line-timestamp-text, #6e7681)";
            readonly lineHoverBg: "var(--color-checks-line-hover-bg, rgba(110,118,129,0.1))";
            readonly lineSelectedBg: "var(--color-checks-line-selected-bg, rgba(56,139,253,0.1))";
            readonly lineSelectedNumText: "var(--color-checks-line-selected-num-text, #2f81f7)";
            readonly lineDtFmText: "var(--color-checks-line-dt-fm-text, #ffffff)";
            readonly lineDtFmBg: "var(--color-checks-line-dt-fm-bg, #9e6a03)";
            readonly gateBg: "var(--color-checks-gate-bg, rgba(187,128,9,0.15))";
            readonly gateText: "var(--color-checks-gate-text, #848d97)";
            readonly gateWaitingText: "var(--color-checks-gate-waiting-text, #d29922)";
            readonly stepHeaderOpenBg: "var(--color-checks-step-header-open-bg, #161b22)";
            readonly stepErrorText: "var(--color-checks-step-error-text, #f85149)";
            readonly stepWarningText: "var(--color-checks-step-warning-text, #d29922)";
            readonly loglineText: "var(--color-checks-logline-text, #848d97)";
            readonly loglineNumText: "var(--color-checks-logline-num-text, #6e7681)";
            readonly loglineDebugText: "var(--color-checks-logline-debug-text, #a371f7)";
            readonly loglineErrorText: "var(--color-checks-logline-error-text, #848d97)";
            readonly loglineErrorNumText: "var(--color-checks-logline-error-num-text, #6e7681)";
            readonly loglineErrorBg: "var(--color-checks-logline-error-bg, rgba(248,81,73,0.1))";
            readonly loglineWarningText: "var(--color-checks-logline-warning-text, #848d97)";
            readonly loglineWarningNumText: "var(--color-checks-logline-warning-num-text, #d29922)";
            readonly loglineWarningBg: "var(--color-checks-logline-warning-bg, rgba(187,128,9,0.15))";
            readonly loglineCommandText: "var(--color-checks-logline-command-text, #2f81f7)";
            readonly loglineSectionText: "var(--color-checks-logline-section-text, #3fb950)";
            readonly ansi: {
                readonly black: "var(--color-checks-ansi-black, #0d1117)";
                readonly blackBright: "var(--color-checks-ansi-black-bright, #161b22)";
                readonly white: "var(--color-checks-ansi-white, #b1bac4))";
                readonly whiteBright: "var(--color-checks-ansi-white-bright, #b1bac4)";
                readonly gray: "var(--color-checks-ansi-gray, #6e7681)";
                readonly red: "var(--color-checks-ansi-red, #ff7b72)";
                readonly redBright: "var(--color-checks-ansi-red-bright, #ffa198)";
                readonly green: "var(--color-checks-ansi-green, #3fb950)";
                readonly greenBright: "var(--color-checks-ansi-green-bright, #56d364)";
                readonly yellow: "var(--color-checks-ansi-yellow, #d29922)";
                readonly yellowBright: "var(--color-checks-ansi-yellow-bright, #e3b341)";
                readonly blue: "var(--color-checks-ansi-blue, #58a6ff)";
                readonly blueBright: "var(--color-checks-ansi-blue-bright, #79c0ff)";
                readonly magenta: "var(--color-checks-ansi-magenta, #bc8cff)";
                readonly magentaBright: "var(--color-checks-ansi-magenta-bright, #d2a8ff)";
                readonly cyan: "var(--color-checks-ansi-cyan, #76e3ea)";
                readonly cyanBright: "var(--color-checks-ansi-cyan-bright, #b3f0ff)";
            };
        };
        readonly project: {
            readonly headerBg: "var(--color-project-header-bg, #0d1117)";
            readonly sidebarBg: "var(--color-project-sidebar-bg, #161b22)";
            readonly gradientIn: "var(--color-project-gradient-in, #161b22)";
            readonly gradientOut: "var(--color-project-gradient-out, rgba(22,27,34,0))";
        };
        readonly mktg: {
            readonly btn: {
                readonly bg: "var(--color-mktg-btn-bg, #f6f8fa))";
                readonly shadow: {
                    readonly outline: "var(--color-mktg-btn-shadow-outline, rgb(255 255 255 / 25%) 0 0 0 1px inset))";
                    readonly focus: "var(--color-mktg-btn-shadow-focus, rgb(255 255 255 / 25%) 0 0 0 4px))";
                    readonly hover: "var(--color-mktg-btn-shadow-hover, 0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)))";
                    readonly hoverMuted: "var(--color-mktg-btn-shadow-hover-muted, rgb(255 255 255) 0 0 0 2px inset))";
                };
            };
        };
        readonly control: {
            readonly borderColor: {
                readonly emphasis: "var(--control-borderColor-emphasis, var(--color-control-border-color-emphasis, #606771))";
            };
        };
        readonly avatar: {
            readonly bg: "var(--avatar-bgColor, var(--color-avatar-bg, rgba(255,255,255,0.1)))";
            readonly border: "var(--avatar-borderColor, var(--color-avatar-border, rgba(240,246,252,0.1)))";
            readonly stackFade: "var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, #30363d))";
            readonly stackFadeMore: "var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, #21262d))";
            readonly childShadow: "var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px #0d1117))";
        };
        readonly topicTag: {
            readonly border: "var(--topicTag-borderColor, var(--color-topic-tag-border, transparent))";
        };
        readonly counter: {
            readonly border: "var(--counter-borderColor, var(--color-counter-border, transparent))";
        };
        readonly selectMenu: {
            readonly backdropBorder: "var(--selectMenu-borderColor, var(--color-select-menu-backdrop-border, #484f58))";
            readonly tapHighlight: "var(--control-bgColor-active, var(--color-select-menu-tap-highlight, rgba(48,54,61,0.5)))";
            readonly tapFocusBg: "var(--selectMenu-bgColor-active, var(--color-select-menu-tap-focus-bg, #0c2d6b))";
        };
        readonly overlay: {
            readonly shadow: "var(--shadow-floating-small, var(--color-overlay-shadow, 0 0 0 1px #30363d, 0 16px 32px rgba(1,4,9,0.85)))";
            readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, rgba(22,27,34,0.4)))";
        };
        readonly header: {
            readonly text: "var(--header-fgColor-default, var(--color-header-text, rgba(255,255,255,0.7)))";
            readonly bg: "var(--header-bgColor, var(--color-header-bg, #161b22))";
            readonly divider: "var(--header-borderColor-divider, var(--color-header-divider, #8b949e))";
            readonly logo: "var(--header-fgColor-logo, var(--color-header-logo, #f0f6fc))";
        };
        readonly headerSearch: {
            readonly bg: "var(--headerSearch-bgColor, var(--color-header-search-bg, #0d1117))";
            readonly border: "var(--headerSearch-borderColor, var(--color-header-search-border, #30363d))";
        };
        readonly sidenav: {
            readonly selectedBg: "var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, #21262d))";
        };
        readonly menu: {
            readonly bgActive: "var(--menu-bgColor-active, var(--color-menu-bg-active, #161b22))";
        };
        readonly input: {
            readonly disabledBg: "var(--control-bgColor-disabled, var(--color-input-disabled-bg, rgba(110,118,129,0)))";
        };
        readonly timeline: {
            readonly badgeBg: "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #21262d))";
        };
        readonly ansi: {
            readonly black: "var(--color-ansi-black, #484f58)";
            readonly blackBright: "var(--color-ansi-black-bright, #6e7681)";
            readonly white: "var(--color-ansi-white, #b1bac4)";
            readonly whiteBright: "var(--color-ansi-white-bright, #ffffff)";
            readonly gray: "var(--color-ansi-gray, #6e7681)";
            readonly red: "var(--color-ansi-red, #ff7b72)";
            readonly redBright: "var(--color-ansi-red-bright, #ffa198)";
            readonly green: "var(--color-ansi-green, #3fb950)";
            readonly greenBright: "var(--color-ansi-green-bright, #56d364)";
            readonly yellow: "var(--color-ansi-yellow, #d29922)";
            readonly yellowBright: "var(--color-ansi-yellow-bright, #e3b341)";
            readonly blue: "var(--color-ansi-blue, #58a6ff)";
            readonly blueBright: "var(--color-ansi-blue-bright, #79c0ff)";
            readonly magenta: "var(--color-ansi-magenta, #bc8cff)";
            readonly magentaBright: "var(--color-ansi-magenta-bright, #d2a8ff)";
            readonly cyan: "var(--color-ansi-cyan, #39c5cf)";
            readonly cyanBright: "var(--color-ansi-cyan-bright, #56d4dd)";
        };
        readonly btn: {
            readonly text: "var(--button-default-fgColor-rest, var(--color-btn-text, #c9d1d9))";
            readonly bg: "var(--button-default-bgColor-rest, var(--color-btn-bg, #21262d))";
            readonly border: "var(--button-default-borderColor-rest, var(--color-btn-border, rgba(240,246,252,0.1)))";
            readonly shadow: "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 0 transparent))";
            readonly insetShadow: "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, 0 0 transparent))";
            readonly hoverBg: "var(--button-default-bgColor-hover, var(--color-btn-hover-bg, #30363d))";
            readonly hoverBorder: "var(--button-default-borderColor-hover, var(--color-btn-hover-border, #8b949e))";
            readonly activeBg: "var(--button-default-bgColor-active, var(--color-btn-active-bg, hsla(212,12%,18%,1)))";
            readonly activeBorder: "var(--button-default-borderColor-active, var(--color-btn-active-border, #6e7681))";
            readonly selectedBg: "var(--button-default-bgColor-selected, var(--color-btn-selected-bg, #161b22))";
            readonly counterBg: "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, #30363d))";
            readonly primary: {
                readonly text: "var(--button-primary-fgColor-rest, var(--color-btn-primary-text, #ffffff))";
                readonly bg: "var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, #238636))";
                readonly border: "var(--button-primary-borderColor-rest, var(--color-btn-primary-border, rgba(240,246,252,0.1)))";
                readonly shadow: "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 0 transparent))";
                readonly insetShadow: "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, 0 0 transparent))";
                readonly hoverBg: "var(--button-primary-bgColor-hover, var(--color-btn-primary-hover-bg, #2ea043))";
                readonly hoverBorder: "var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, rgba(240,246,252,0.1)))";
                readonly selectedBg: "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, #238636))";
                readonly selectedShadow: "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, rgba(255,255,255,0.5)))";
                readonly disabledBg: "var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, rgba(35,134,54,0.6)))";
                readonly disabledBorder: "var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, rgba(240,246,252,0.1)))";
                readonly icon: "var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, #ffffff))";
                readonly counterBg: "var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, rgba(4,38,15,0.2)))";
            };
            readonly outline: {
                readonly text: "var(--button-outline-fgColor-rest, var(--color-btn-outline-text, #388bfd))";
                readonly hoverText: "var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, #58a6ff))";
                readonly hoverBg: "var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, #30363d))";
                readonly hoverBorder: "var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, rgba(240,246,252,0.1)))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))";
                readonly hoverCounterBg: "var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, rgba(5,29,77,0.2)))";
                readonly selectedText: "var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, #ffffff))";
                readonly selectedBg: "var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, #0d419d))";
                readonly selectedBorder: "var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, rgba(240,246,252,0.1)))";
                readonly selectedShadow: "var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-outline-fgColor-disabled, var(--color-btn-outline-disabled-text, rgba(88,166,255,0.5)))";
                readonly disabledBg: "var(--button-outline-bgColor-disabled, var(--color-btn-outline-disabled-bg, #0d1117))";
                readonly disabledCounterBg: "var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, rgba(31,111,235,0.05)))";
                readonly counterBg: "var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, rgba(5,29,77,0.2)))";
                readonly hoverCounterFg: "var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, #58a6ff))";
                readonly disabledCounterFg: "var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, rgba(47,129,247,0.5)))";
                readonly counterFg: "var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, #388bfd))";
            };
            readonly danger: {
                readonly text: "var(--button-danger-fgColor-rest, var(--color-btn-danger-text, #f85149))";
                readonly hoverText: "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, #ffffff))";
                readonly hoverBg: "var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, #da3633))";
                readonly hoverBorder: "var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, #f85149))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 0 transparent))";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, 0 0 transparent))";
                readonly hoverIcon: "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, #ffffff))";
                readonly hoverCounterBg: "var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, rgba(255,255,255,0.2)))";
                readonly selectedText: "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))";
                readonly selectedBg: "var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, #b62324))";
                readonly selectedBorder: "var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, #ff7b72))";
                readonly selectedShadow: "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(248,81,73,0.5)))";
                readonly disabledBg: "var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, #0d1117))";
                readonly disabledCounterBg: "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(218,54,51,0.05)))";
                readonly counterBg: "var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, rgba(73,2,2,0.2)))";
                readonly icon: "var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, #f85149))";
                readonly counterFg: "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, #f85149))";
                readonly disabledCounterFg: "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, rgba(248,81,73,0.5)))";
                readonly hoverCounterFg: "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #ffffff))";
            };
            readonly inactive: {
                readonly bg: "var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, #21262d))";
                readonly text: "var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, #8b949e))";
            };
        };
        readonly underlinenav: {
            readonly icon: "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, #6e7681))";
            readonly borderHover: "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, rgba(110,118,129,0.4)))";
        };
        readonly actionListItem: {
            readonly inlineDivider: "var(--borderColor-muted, var(--color-action-list-item-inline-divider, rgba(48,54,61,0.48)))";
            readonly default: {
                readonly hoverBg: "var(--control-transparent-bgColor-hover, var(--color-action-list-item-default-hover-bg, rgba(177,186,196,0.12)))";
                readonly hoverBorder: "var(--control-transparent-borderColor-hover, var(--color-action-list-item-default-hover-border, transparent))";
                readonly activeBg: "var(--control-transparent-bgColor-active, var(--color-action-list-item-default-active-bg, rgba(177,186,196,0.2)))";
                readonly activeBorder: "var(--control-transparent-borderColor-active, var(--color-action-list-item-default-active-border, transparent))";
                readonly selectedBg: "var(--control-transparent-bgColor-selected, var(--color-action-list-item-default-selected-bg, rgba(177,186,196,0.08)))";
            };
            readonly danger: {
                readonly hoverBg: "var(--control-danger-bgColor-hover, var(--color-action-list-item-danger-hover-bg, rgba(248,81,73,0.16)))";
                readonly activeBg: "var(--control-danger-bgColor-active, var(--color-action-list-item-danger-active-bg, rgba(248,81,73,0.24)))";
                readonly hoverText: "var(--control-danger-fgColor-hover, var(--color-action-list-item-danger-hover-text, #ff7b72))";
            };
        };
        readonly switchTrack: {
            readonly bg: "var(--controlTrack-bgColor-rest, var(--color-switch-track-bg, rgba(110,118,129,0.1)))";
            readonly hoverBg: "var(--controlTrack-bgColor-hover, var(--color-switch-track-hover-bg, hsla(215,8%,72%,0.1)))";
            readonly activeBg: "var(--controlTrack-bgColor-active, var(--color-switch-track-active-bg, rgba(110,118,129,0.4)))";
            readonly disabledBg: "var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, #21262d))";
            readonly fg: "var(--controlTrack-fgColor-rest, var(--color-switch-track-fg, #848d97))";
            readonly disabledFg: "var(--controlTrack-fgColor-disabled, var(--color-switch-track-disabled-fg, #010409))";
            readonly border: "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))";
            readonly checked: {
                readonly bg: "var(--control-checked-bgColor-rest, var(--color-switch-track-checked-bg, rgba(31,111,235,0.35)))";
                readonly hoverBg: "var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, rgba(31,111,235,0.5)))";
                readonly activeBg: "var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, rgba(31,111,235,0.65)))";
                readonly fg: "var(--control-checked-fgColor-rest, var(--color-switch-track-checked-fg, #ffffff))";
                readonly disabledFg: "var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, #010409))";
                readonly border: "var(--borderColor-transparent, var(--color-switch-track-checked-border, transparent))";
            };
        };
        readonly switchKnob: {
            readonly bg: "var(--controlKnob-bgColor-rest, var(--color-switch-knob-bg, #0d1117))";
            readonly border: "var(--controlKnob-borderColor-rest, var(--color-switch-knob-border, #606771))";
            readonly disabledBg: "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-disabled-bg, #161b22))";
            readonly checked: {
                readonly bg: "var(--controlKnob-bgColor-checked, var(--color-switch-knob-checked-bg, #0d1117))";
                readonly disabledBg: "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-checked-disabled-bg, #161b22))";
                readonly border: "var(--controlKnob-borderColor-checked, var(--color-switch-knob-checked-border, rgba(31,111,235,0.35)))";
            };
        };
        readonly segmentedControl: {
            readonly bg: "var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, rgba(110,118,129,0.1)))";
            readonly button: {
                readonly bg: "var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, #0d1117))";
                readonly hover: {
                    readonly bg: "var(--controlTrack-bgColor-hover, var(--color-segmented-control-button-hover-bg, #30363d))";
                };
                readonly active: {
                    readonly bg: "var(--controlTrack-bgColor-active, var(--color-segmented-control-button-active-bg, #21262d))";
                };
                readonly selected: {
                    readonly border: "var(--controlKnob-borderColor-rest, var(--color-segmented-control-button-selected-border, #6e7681))";
                };
            };
        };
        readonly treeViewItem: {
            readonly chevron: {
                readonly hoverBg: "var(--control-transparent-bgColor-hover, var(--color-tree-view-item-chevron-hover-bg, rgba(177,186,196,0.12)))";
            };
            readonly directory: {
                readonly fill: "var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-directory-fill, #848d97))";
            };
        };
        readonly fg: {
            readonly default: "var(--fgColor-default, var(--color-fg-default, #e6edf3))";
            readonly muted: "var(--fgColor-muted, var(--color-fg-muted, #848d97))";
            readonly subtle: "var(--fgColor-muted, var(--color-fg-subtle, #6e7681))";
            readonly onEmphasis: "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))";
        };
        readonly canvas: {
            readonly default: "var(--bgColor-default, var(--color-canvas-default, #0d1117))";
            readonly overlay: "var(--overlay-bgColor, var(--color-canvas-overlay, #161b22))";
            readonly inset: "var(--bgColor-inset, var(--color-canvas-inset, #010409))";
            readonly subtle: "var(--bgColor-muted, var(--color-canvas-subtle, #161b22))";
        };
        readonly border: {
            readonly default: "var(--borderColor-default, var(--color-border-default, #30363d))";
            readonly muted: "var(--borderColor-muted, var(--color-border-muted, #21262d))";
            readonly subtle: "var(--borderColor-muted, var(--color-border-subtle, rgba(240,246,252,0.1)))";
        };
        readonly shadow: {
            readonly small: "var(--shadow-resting-small, var(--color-shadow-small, 0 0 transparent))";
            readonly medium: "var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px #010409))";
            readonly large: "var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px #010409))";
            readonly extraLarge: "var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 48px #010409))";
        };
        readonly neutral: {
            readonly emphasisPlus: "var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, #6e7681))";
            readonly emphasis: "var(--bgColor-neutral-emphasis, var(--color-neutral-emphasis, #6e7681))";
            readonly muted: "var(--bgColor-neutral-muted, var(--color-neutral-muted, rgba(110,118,129,0.4)))";
            readonly subtle: "var(--bgColor-neutral-muted, var(--color-neutral-subtle, rgba(110,118,129,0.1)))";
        };
        readonly accent: {
            readonly fg: "var(--fgColor-accent, var(--color-accent-fg, #2f81f7))";
            readonly emphasis: "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #1f6feb))";
            readonly muted: "var(--borderColor-accent-muted, var(--color-accent-muted, rgba(56,139,253,0.4)))";
            readonly subtle: "var(--bgColor-accent-muted, var(--color-accent-subtle, rgba(56,139,253,0.1)))";
        };
        readonly success: {
            readonly fg: "var(--fgColor-success, var(--color-success-fg, #3fb950))";
            readonly emphasis: "var(--bgColor-success-emphasis, var(--color-success-emphasis, #238636))";
            readonly muted: "var(--borderColor-success-muted, var(--color-success-muted, rgba(46,160,67,0.4)))";
            readonly subtle: "var(--bgColor-success-muted, var(--color-success-subtle, rgba(46,160,67,0.15)))";
        };
        readonly attention: {
            readonly fg: "var(--fgColor-attention, var(--color-attention-fg, #d29922))";
            readonly emphasis: "var(--bgColor-attention-emphasis, var(--color-attention-emphasis, #9e6a03))";
            readonly muted: "var(--borderColor-attention-muted, var(--color-attention-muted, rgba(187,128,9,0.4)))";
            readonly subtle: "var(--bgColor-attention-muted, var(--color-attention-subtle, rgba(187,128,9,0.15)))";
        };
        readonly severe: {
            readonly fg: "var(--fgColor-severe, var(--color-severe-fg, #db6d28))";
            readonly emphasis: "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #bd561d))";
            readonly muted: "var(--borderColor-severe-muted, var(--color-severe-muted, rgba(219,109,40,0.4)))";
            readonly subtle: "var(--bgColor-severe-muted, var(--color-severe-subtle, rgba(219,109,40,0.1)))";
        };
        readonly danger: {
            readonly fg: "var(--fgColor-danger, var(--color-danger-fg, #f85149))";
            readonly emphasis: "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #da3633))";
            readonly muted: "var(--borderColor-danger-muted, var(--color-danger-muted, rgba(248,81,73,0.4)))";
            readonly subtle: "var(--bgColor-danger-muted, var(--color-danger-subtle, rgba(248,81,73,0.1)))";
        };
        readonly open: {
            readonly fg: "var(--fgColor-open, var(--color-open-fg, #3fb950))";
            readonly emphasis: "var(--bgColor-open-emphasis, var(--color-open-emphasis, #238636))";
            readonly muted: "var(--borderColor-open-muted, var(--color-open-muted, rgba(46,160,67,0.4)))";
            readonly subtle: "var(--bgColor-open-muted, var(--color-open-subtle, rgba(46,160,67,0.15)))";
        };
        readonly closed: {
            readonly fg: "var(--fgColor-closed, var(--color-closed-fg, #f85149))";
            readonly emphasis: "var(--bgColor-closed-emphasis, var(--color-closed-emphasis, #da3633))";
            readonly muted: "var(--borderColor-closed-muted, var(--color-closed-muted, rgba(248,81,73,0.4)))";
            readonly subtle: "var(--bgColor-closed-muted, var(--color-closed-subtle, rgba(248,81,73,0.15)))";
        };
        readonly done: {
            readonly fg: "var(--fgColor-done, var(--color-done-fg, #a371f7))";
            readonly emphasis: "var(--bgColor-done-emphasis, var(--color-done-emphasis, #8957e5))";
            readonly muted: "var(--borderColor-done-muted, var(--color-done-muted, rgba(163,113,247,0.4)))";
            readonly subtle: "var(--bgColor-done-muted, var(--color-done-subtle, rgba(163,113,247,0.1)))";
        };
        readonly sponsors: {
            readonly fg: "var(--fgColor-sponsors, var(--color-sponsors-fg, #db61a2))";
            readonly emphasis: "var(--bgColor-sponsors-emphasis, var(--color-sponsors-emphasis, #bf4b8a))";
            readonly muted: "var(--borderColor-sponsors-muted, var(--color-sponsors-muted, rgba(219,97,162,0.4)))";
            readonly subtle: "var(--bgColor-sponsors-muted, var(--color-sponsors-subtle, rgba(219,97,162,0.1)))";
        };
        readonly primer: {
            readonly fg: {
                readonly disabled: "var(--fgColor-disabled, var(--color-primer-fg-disabled, #484f58))";
            };
            readonly canvas: {
                readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-primer-canvas-backdrop, rgba(1,4,9,0.8)))";
                readonly sticky: "var(--color-primer-canvas-sticky, rgba(13,17,23,0.95))";
            };
            readonly border: {
                readonly active: "var(--underlineNav-borderColor-active, var(--color-primer-border-active, #f78166))";
                readonly contrast: "var(--borderColor-muted, var(--color-primer-border-contrast, rgba(255,255,255,0.2)))";
            };
            readonly shadow: {
                readonly highlight: "var(--shadow-highlight, var(--color-primer-shadow-highlight, 0 0 transparent))";
                readonly inset: "var(--shadow-inset, var(--color-primer-shadow-inset, 0 0 transparent))";
            };
        };
        readonly scale: {
            readonly black: "#010409";
            readonly white: "#ffffff";
            readonly gray: readonly ["#f0f6fc", "#c9d1d9", "#b1bac4", "#8b949e", "#6e7681", "#484f58", "#30363d", "#21262d", "#161b22", "#0d1117"];
            readonly blue: readonly ["#cae8ff", "#a5d6ff", "#79c0ff", "#58a6ff", "#388bfd", "#1f6feb", "#1158c7", "#0d419d", "#0c2d6b", "#051d4d"];
            readonly green: readonly ["#aff5b4", "#7ee787", "#56d364", "#3fb950", "#2ea043", "#238636", "#196c2e", "#0f5323", "#033a16", "#04260f"];
            readonly yellow: readonly ["#f8e3a1", "#f2cc60", "#e3b341", "#d29922", "#bb8009", "#9e6a03", "#845306", "#693e00", "#4b2900", "#341a00"];
            readonly orange: readonly ["#ffdfb6", "#ffc680", "#ffa657", "#f0883e", "#db6d28", "#bd561d", "#9b4215", "#762d0a", "#5a1e02", "#3d1300"];
            readonly red: readonly ["#ffdcd7", "#ffc1ba", "#ffa198", "#ff7b72", "#f85149", "#da3633", "#b62324", "#8e1519", "#67060c", "#490202"];
            readonly purple: readonly ["#eddeff", "#e2c5ff", "#d2a8ff", "#bc8cff", "#a371f7", "#8957e5", "#6e40c9", "#553098", "#3c1e70", "#271052"];
            readonly pink: readonly ["#ffdaec", "#ffbedd", "#ff9bce", "#f778ba", "#db61a2", "#bf4b8a", "#9e3670", "#7d2457", "#5e103e", "#42062a"];
            readonly coral: readonly ["#ffddd2", "#ffc2b2", "#ffa28b", "#f78166", "#ea6045", "#cf462d", "#ac3220", "#872012", "#640d04", "#460701"];
        };
    };
    dark_dimmed: {
        readonly canvasDefaultTransparent: "var(--bgColor-transparent, var(--color-canvas-default-transparent, rgba(34,39,46,0)))";
        readonly pageHeaderBg: "var(--page-header-bgColor, var(--color-page-header-bg, #22272e))";
        readonly marketingIcon: {
            readonly primary: "var(--color-marketing-icon-primary, #6cb6ff)";
            readonly secondary: "var(--color-marketing-icon-secondary, #316dca)";
        };
        readonly diffBlob: {
            readonly addition: {
                readonly numText: "var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, #adbac7))";
                readonly fg: "var(--diffBlob-addition-fgColor-text, var(--color-diff-blob-addition-fg, #adbac7))";
                readonly numBg: "var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg, rgba(87,171,90,0.3)))";
                readonly lineBg: "var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg, rgba(70,149,74,0.15)))";
                readonly wordBg: "var(--diffBlob-addition-bgColor-word, var(--color-diff-blob-addition-word-bg, rgba(70,149,74,0.4)))";
            };
            readonly deletion: {
                readonly numText: "var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, #adbac7))";
                readonly fg: "var(--diffBlob-deletion-fgColor-text, var(--color-diff-blob-deletion-fg, #adbac7))";
                readonly numBg: "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, rgba(229,83,75,0.3)))";
                readonly lineBg: "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, rgba(229,83,75,0.1)))";
                readonly wordBg: "var(--diffBlob-deletion-bgColor-word, var(--color-diff-blob-deletion-word-bg, rgba(229,83,75,0.4)))";
            };
            readonly hunk: {
                readonly numBg: "var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg, rgba(65,132,228,0.4)))";
            };
            readonly expander: {
                readonly icon: "#adbac7";
            };
            readonly selectedLineHighlightMixBlendMode: "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, screen)";
        };
        readonly diffstat: {
            readonly deletionBorder: "var(--color-diffstat-deletion-border, rgba(205,217,229,0.1))";
            readonly additionBorder: "var(--color-diffstat-addition-border, rgba(205,217,229,0.1))";
            readonly additionBg: "var(--diffStat-addition-bgColor, var(--color-diffstat-addition-bg, #57ab5a))";
        };
        readonly searchKeyword: {
            readonly hl: "var(--highlight-neutral-bgColor, var(--color-search-keyword-hl, rgba(198,144,38,0.4)))";
        };
        readonly prettylights: {
            readonly syntax: {
                readonly comment: "var(--color-prettylights-syntax-comment, #768390)";
                readonly constant: "var(--color-prettylights-syntax-constant, #6cb6ff)";
                readonly entity: "var(--color-prettylights-syntax-entity, #dcbdfb)";
                readonly storageModifierImport: "var(--color-prettylights-syntax-storage-modifier-import, #adbac7)";
                readonly entityTag: "var(--color-prettylights-syntax-entity-tag, #8ddb8c)";
                readonly keyword: "var(--color-prettylights-syntax-keyword, #f47067)";
                readonly string: "var(--color-prettylights-syntax-string, #96d0ff)";
                readonly variable: "var(--color-prettylights-syntax-variable, #f69d50)";
                readonly brackethighlighterUnmatched: "var(--color-prettylights-syntax-brackethighlighter-unmatched, #e5534b)";
                readonly invalidIllegalText: "var(--color-prettylights-syntax-invalid-illegal-text, #cdd9e5)";
                readonly invalidIllegalBg: "var(--color-prettylights-syntax-invalid-illegal-bg, #922323)";
                readonly carriageReturnText: "var(--color-prettylights-syntax-carriage-return-text, #cdd9e5)";
                readonly carriageReturnBg: "var(--color-prettylights-syntax-carriage-return-bg, #ad2e2c)";
                readonly stringRegexp: "var(--color-prettylights-syntax-string-regexp, #8ddb8c)";
                readonly markupList: "var(--color-prettylights-syntax-markup-list, #eac55f)";
                readonly markupHeading: "var(--color-prettylights-syntax-markup-heading, #316dca)";
                readonly markupItalic: "var(--color-prettylights-syntax-markup-italic, #adbac7)";
                readonly markupBold: "var(--color-prettylights-syntax-markup-bold, #adbac7)";
                readonly markupDeletedText: "var(--color-prettylights-syntax-markup-deleted-text, #ffd8d3)";
                readonly markupDeletedBg: "var(--color-prettylights-syntax-markup-deleted-bg, #78191b)";
                readonly markupInsertedText: "var(--color-prettylights-syntax-markup-inserted-text, #b4f1b4)";
                readonly markupInsertedBg: "var(--color-prettylights-syntax-markup-inserted-bg, #1b4721)";
                readonly markupChangedText: "var(--color-prettylights-syntax-markup-changed-text, #ffddb0)";
                readonly markupChangedBg: "var(--color-prettylights-syntax-markup-changed-bg, #682d0f)";
                readonly markupIgnoredText: "var(--color-prettylights-syntax-markup-ignored-text, #adbac7)";
                readonly markupIgnoredBg: "var(--color-prettylights-syntax-markup-ignored-bg, #255ab2)";
                readonly metaDiffRange: "var(--color-prettylights-syntax-meta-diff-range, #dcbdfb)";
                readonly brackethighlighterAngle: "var(--color-prettylights-syntax-brackethighlighter-angle, #768390)";
                readonly sublimelinterGutterMark: "var(--color-prettylights-syntax-sublimelinter-gutter-mark, #545d68)";
                readonly constantOtherReferenceLink: "var(--color-prettylights-syntax-constant-other-reference-link, #96d0ff)";
            };
        };
        readonly codemirror: {
            readonly text: "var(--codeMirror-fgColor, var(--color-codemirror-text, #adbac7))";
            readonly bg: "var(--codeMirror-bgColor, var(--color-codemirror-bg, #22272e))";
            readonly guttersBg: "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, #22272e))";
            readonly guttermarkerText: "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, #22272e))";
            readonly guttermarkerSubtleText: "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, #636e7b))";
            readonly linenumberText: "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, #768390))";
            readonly cursor: "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, #adbac7))";
            readonly selectionBg: "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, rgba(65,132,228,0.4)))";
            readonly activelineBg: "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, rgba(99,110,123,0.1)))";
            readonly matchingbracketText: "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, #adbac7))";
            readonly linesBg: "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, #22272e))";
            readonly syntax: {
                readonly comment: "var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, #768390))";
                readonly constant: "var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, #6cb6ff))";
                readonly entity: "var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, #dcbdfb))";
                readonly keyword: "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #f47067))";
                readonly storage: "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #f47067))";
                readonly string: "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #96d0ff))";
                readonly support: "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #6cb6ff))";
                readonly variable: "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #f69d50))";
            };
        };
        readonly checks: {
            readonly bg: "var(--color-checks-bg, #1c2128)";
            readonly runBorderWidth: "var(--color-checks-run-border-width, 1px)";
            readonly containerBorderWidth: "var(--color-checks-container-border-width, 1px)";
            readonly textPrimary: "var(--color-checks-text-primary, #adbac7)";
            readonly textSecondary: "var(--color-checks-text-secondary, #768390)";
            readonly textLink: "var(--color-checks-text-link, #539bf5)";
            readonly btnIcon: "var(--color-checks-btn-icon, #768390)";
            readonly btnHoverIcon: "var(--color-checks-btn-hover-icon, #adbac7)";
            readonly btnHoverBg: "var(--color-checks-btn-hover-bg, rgba(99,110,123,0.1))";
            readonly inputText: "var(--color-checks-input-text, #768390)";
            readonly inputPlaceholderText: "var(--color-checks-input-placeholder-text, #636e7b)";
            readonly inputFocusText: "var(--color-checks-input-focus-text, #adbac7)";
            readonly inputBg: "var(--color-checks-input-bg, #2d333b)";
            readonly inputShadow: "var(--color-checks-input-shadow, 0 0 0 1px #444c56)";
            readonly donutError: "var(--color-checks-donut-error, #e5534b)";
            readonly donutPending: "var(--color-checks-donut-pending, #c69026)";
            readonly donutSuccess: "var(--color-checks-donut-success, #46954a)";
            readonly donutNeutral: "var(--color-checks-donut-neutral, #768390)";
            readonly dropdownText: "var(--color-checks-dropdown-text, #adbac7)";
            readonly dropdownBg: "var(--color-checks-dropdown-bg, #2d333b)";
            readonly dropdownBorder: "var(--color-checks-dropdown-border, #444c56)";
            readonly dropdownShadow: "var(--color-checks-dropdown-shadow, rgba(28,33,40,0.3))";
            readonly dropdownHoverText: "var(--color-checks-dropdown-hover-text, #adbac7)";
            readonly dropdownHoverBg: "var(--color-checks-dropdown-hover-bg, rgba(99,110,123,0.1))";
            readonly dropdownBtnHoverText: "var(--color-checks-dropdown-btn-hover-text, #adbac7)";
            readonly dropdownBtnHoverBg: "var(--color-checks-dropdown-btn-hover-bg, rgba(99,110,123,0.1))";
            readonly scrollbarThumbBg: "var(--color-checks-scrollbar-thumb-bg, rgba(99,110,123,0.4))";
            readonly headerLabelText: "var(--color-checks-header-label-text, #768390)";
            readonly headerLabelOpenText: "var(--color-checks-header-label-open-text, #adbac7)";
            readonly headerBorder: "var(--color-checks-header-border, #373e47)";
            readonly headerIcon: "var(--color-checks-header-icon, #768390)";
            readonly lineText: "var(--color-checks-line-text, #768390)";
            readonly lineNumText: "var(--color-checks-line-num-text, #636e7b)";
            readonly lineTimestampText: "var(--color-checks-line-timestamp-text, #636e7b)";
            readonly lineHoverBg: "var(--color-checks-line-hover-bg, rgba(99,110,123,0.1))";
            readonly lineSelectedBg: "var(--color-checks-line-selected-bg, rgba(65,132,228,0.1))";
            readonly lineSelectedNumText: "var(--color-checks-line-selected-num-text, #539bf5)";
            readonly lineDtFmText: "var(--color-checks-line-dt-fm-text, #cdd9e5)";
            readonly lineDtFmBg: "var(--color-checks-line-dt-fm-bg, #966600)";
            readonly gateBg: "var(--color-checks-gate-bg, rgba(174,124,20,0.15))";
            readonly gateText: "var(--color-checks-gate-text, #768390)";
            readonly gateWaitingText: "var(--color-checks-gate-waiting-text, #c69026)";
            readonly stepHeaderOpenBg: "var(--color-checks-step-header-open-bg, #2d333b)";
            readonly stepErrorText: "var(--color-checks-step-error-text, #e5534b)";
            readonly stepWarningText: "var(--color-checks-step-warning-text, #c69026)";
            readonly loglineText: "var(--color-checks-logline-text, #768390)";
            readonly loglineNumText: "var(--color-checks-logline-num-text, #636e7b)";
            readonly loglineDebugText: "var(--color-checks-logline-debug-text, #986ee2)";
            readonly loglineErrorText: "var(--color-checks-logline-error-text, #768390)";
            readonly loglineErrorNumText: "var(--color-checks-logline-error-num-text, #636e7b)";
            readonly loglineErrorBg: "var(--color-checks-logline-error-bg, rgba(229,83,75,0.1))";
            readonly loglineWarningText: "var(--color-checks-logline-warning-text, #768390)";
            readonly loglineWarningNumText: "var(--color-checks-logline-warning-num-text, #c69026)";
            readonly loglineWarningBg: "var(--color-checks-logline-warning-bg, rgba(174,124,20,0.15))";
            readonly loglineCommandText: "var(--color-checks-logline-command-text, #539bf5)";
            readonly loglineSectionText: "var(--color-checks-logline-section-text, #57ab5a)";
            readonly ansi: {
                readonly black: "var(--color-checks-ansi-black, #22272e)";
                readonly blackBright: "var(--color-checks-ansi-black-bright, #2d333b)";
                readonly white: "var(--color-checks-ansi-white, #909dab))";
                readonly whiteBright: "var(--color-checks-ansi-white-bright, #909dab)";
                readonly gray: "var(--color-checks-ansi-gray, #636e7b)";
                readonly red: "var(--color-checks-ansi-red, #f47067)";
                readonly redBright: "var(--color-checks-ansi-red-bright, #ff938a)";
                readonly green: "var(--color-checks-ansi-green, #57ab5a)";
                readonly greenBright: "var(--color-checks-ansi-green-bright, #6bc46d)";
                readonly yellow: "var(--color-checks-ansi-yellow, #c69026)";
                readonly yellowBright: "var(--color-checks-ansi-yellow-bright, #daaa3f)";
                readonly blue: "var(--color-checks-ansi-blue, #539bf5)";
                readonly blueBright: "var(--color-checks-ansi-blue-bright, #6cb6ff)";
                readonly magenta: "var(--color-checks-ansi-magenta, #b083f0)";
                readonly magentaBright: "var(--color-checks-ansi-magenta-bright, #dcbdfb)";
                readonly cyan: "var(--color-checks-ansi-cyan, #76e3ea)";
                readonly cyanBright: "var(--color-checks-ansi-cyan-bright, #b3f0ff)";
            };
        };
        readonly project: {
            readonly headerBg: "var(--color-project-header-bg, #22272e)";
            readonly sidebarBg: "var(--color-project-sidebar-bg, #2d333b)";
            readonly gradientIn: "var(--color-project-gradient-in, #2d333b)";
            readonly gradientOut: "var(--color-project-gradient-out, rgba(45,51,59,0))";
        };
        readonly mktg: {
            readonly btn: {
                readonly bg: "var(--color-mktg-btn-bg, #f6f8fa))";
                readonly shadow: {
                    readonly outline: "var(--color-mktg-btn-shadow-outline, rgb(255 255 255 / 25%) 0 0 0 1px inset))";
                    readonly focus: "var(--color-mktg-btn-shadow-focus, rgb(255 255 255 / 25%) 0 0 0 4px))";
                    readonly hover: "var(--color-mktg-btn-shadow-hover, 0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)))";
                    readonly hoverMuted: "var(--color-mktg-btn-shadow-hover-muted, rgb(255 255 255) 0 0 0 2px inset))";
                };
            };
        };
        readonly control: {
            readonly borderColor: {
                readonly emphasis: "var(--control-borderColor-emphasis, var(--color-control-border-color-emphasis, #606771))";
            };
        };
        readonly avatar: {
            readonly bg: "var(--avatar-bgColor, var(--color-avatar-bg, rgba(205,217,229,0.1)))";
            readonly border: "var(--avatar-borderColor, var(--color-avatar-border, rgba(205,217,229,0.1)))";
            readonly stackFade: "var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, #444c56))";
            readonly stackFadeMore: "var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, #373e47))";
            readonly childShadow: "var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px #22272e))";
        };
        readonly topicTag: {
            readonly border: "var(--topicTag-borderColor, var(--color-topic-tag-border, transparent))";
        };
        readonly counter: {
            readonly border: "var(--counter-borderColor, var(--color-counter-border, transparent))";
        };
        readonly selectMenu: {
            readonly backdropBorder: "var(--selectMenu-borderColor, var(--color-select-menu-backdrop-border, #545d68))";
            readonly tapHighlight: "var(--control-bgColor-active, var(--color-select-menu-tap-highlight, rgba(68,76,86,0.5)))";
            readonly tapFocusBg: "var(--selectMenu-bgColor-active, var(--color-select-menu-tap-focus-bg, #143d79))";
        };
        readonly overlay: {
            readonly shadow: "var(--shadow-floating-small, var(--color-overlay-shadow, 0 0 0 1px #444c56, 0 16px 32px rgba(28,33,40,0.85)))";
            readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, rgba(45,51,59,0.4)))";
        };
        readonly header: {
            readonly text: "var(--header-fgColor-default, var(--color-header-text, rgba(205,217,229,0.7)))";
            readonly bg: "var(--header-bgColor, var(--color-header-bg, #2d333b))";
            readonly divider: "var(--header-borderColor-divider, var(--color-header-divider, #768390))";
            readonly logo: "var(--header-fgColor-logo, var(--color-header-logo, #cdd9e5))";
        };
        readonly headerSearch: {
            readonly bg: "var(--headerSearch-bgColor, var(--color-header-search-bg, #22272e))";
            readonly border: "var(--headerSearch-borderColor, var(--color-header-search-border, #444c56))";
        };
        readonly sidenav: {
            readonly selectedBg: "var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, #373e47))";
        };
        readonly menu: {
            readonly bgActive: "var(--menu-bgColor-active, var(--color-menu-bg-active, #2d333b))";
        };
        readonly input: {
            readonly disabledBg: "var(--control-bgColor-disabled, var(--color-input-disabled-bg, rgba(99,110,123,0)))";
        };
        readonly timeline: {
            readonly badgeBg: "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #373e47))";
        };
        readonly ansi: {
            readonly black: "var(--color-ansi-black, #545d68)";
            readonly blackBright: "var(--color-ansi-black-bright, #636e7b)";
            readonly white: "var(--color-ansi-white, #909dab)";
            readonly whiteBright: "var(--color-ansi-white-bright, #cdd9e5)";
            readonly gray: "var(--color-ansi-gray, #636e7b)";
            readonly red: "var(--color-ansi-red, #f47067)";
            readonly redBright: "var(--color-ansi-red-bright, #ff938a)";
            readonly green: "var(--color-ansi-green, #57ab5a)";
            readonly greenBright: "var(--color-ansi-green-bright, #6bc46d)";
            readonly yellow: "var(--color-ansi-yellow, #c69026)";
            readonly yellowBright: "var(--color-ansi-yellow-bright, #daaa3f)";
            readonly blue: "var(--color-ansi-blue, #539bf5)";
            readonly blueBright: "var(--color-ansi-blue-bright, #6cb6ff)";
            readonly magenta: "var(--color-ansi-magenta, #b083f0)";
            readonly magentaBright: "var(--color-ansi-magenta-bright, #dcbdfb)";
            readonly cyan: "var(--color-ansi-cyan, #39c5cf)";
            readonly cyanBright: "var(--color-ansi-cyan-bright, #56d4dd)";
        };
        readonly btn: {
            readonly text: "var(--button-default-fgColor-rest, var(--color-btn-text, #adbac7))";
            readonly bg: "var(--button-default-bgColor-rest, var(--color-btn-bg, #373e47))";
            readonly border: "var(--button-default-borderColor-rest, var(--color-btn-border, rgba(205,217,229,0.1)))";
            readonly shadow: "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 0 transparent))";
            readonly insetShadow: "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, 0 0 transparent))";
            readonly hoverBg: "var(--button-default-bgColor-hover, var(--color-btn-hover-bg, #444c56))";
            readonly hoverBorder: "var(--button-default-borderColor-hover, var(--color-btn-hover-border, #768390))";
            readonly activeBg: "var(--button-default-bgColor-active, var(--color-btn-active-bg, hsla(213,12%,27%,1)))";
            readonly activeBorder: "var(--button-default-borderColor-active, var(--color-btn-active-border, #636e7b))";
            readonly selectedBg: "var(--button-default-bgColor-selected, var(--color-btn-selected-bg, #2d333b))";
            readonly counterBg: "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, #444c56))";
            readonly primary: {
                readonly text: "var(--button-primary-fgColor-rest, var(--color-btn-primary-text, #ffffff))";
                readonly bg: "var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, #347d39))";
                readonly border: "var(--button-primary-borderColor-rest, var(--color-btn-primary-border, rgba(205,217,229,0.1)))";
                readonly shadow: "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 0 transparent))";
                readonly insetShadow: "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, 0 0 transparent))";
                readonly hoverBg: "var(--button-primary-bgColor-hover, var(--color-btn-primary-hover-bg, #46954a))";
                readonly hoverBorder: "var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, rgba(205,217,229,0.1)))";
                readonly selectedBg: "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, #347d39))";
                readonly selectedShadow: "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, rgba(205,217,229,0.5)))";
                readonly disabledBg: "var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, rgba(52,125,57,0.6)))";
                readonly disabledBorder: "var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, rgba(205,217,229,0.1)))";
                readonly icon: "var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, #cdd9e5))";
                readonly counterBg: "var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, rgba(17,52,23,0.2)))";
            };
            readonly outline: {
                readonly text: "var(--button-outline-fgColor-rest, var(--color-btn-outline-text, #4184e4))";
                readonly hoverText: "var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, #539bf5))";
                readonly hoverBg: "var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, #444c56))";
                readonly hoverBorder: "var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, rgba(205,217,229,0.1)))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 rgba(28,33,40,0.1)))// HI_KATIE: no matches";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 rgba(205,217,229,0.03)))// HI_KATIE: no matches";
                readonly hoverCounterBg: "var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, rgba(15,45,92,0.2)))";
                readonly selectedText: "var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, #cdd9e5))";
                readonly selectedBg: "var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, #1b4b91))";
                readonly selectedBorder: "var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, rgba(205,217,229,0.1)))";
                readonly selectedShadow: "var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-outline-fgColor-disabled, var(--color-btn-outline-disabled-text, rgba(83,155,245,0.5)))";
                readonly disabledBg: "var(--button-outline-bgColor-disabled, var(--color-btn-outline-disabled-bg, #22272e))";
                readonly disabledCounterBg: "var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, rgba(49,109,202,0.05)))";
                readonly counterBg: "var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, rgba(15,45,92,0.2)))";
                readonly hoverCounterFg: "var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, #539bf5))";
                readonly disabledCounterFg: "var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, rgba(83,155,245,0.5)))";
                readonly counterFg: "var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, #4184e4))";
            };
            readonly danger: {
                readonly text: "var(--button-danger-fgColor-rest, var(--color-btn-danger-text, #e5534b))";
                readonly hoverText: "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, #cdd9e5))";
                readonly hoverBg: "var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, #c93c37))";
                readonly hoverBorder: "var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, #e5534b))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 0 transparent))";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, 0 0 transparent))";
                readonly hoverIcon: "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, #cdd9e5))";
                readonly hoverCounterBg: "var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, rgba(255,255,255,0.2)))";
                readonly selectedText: "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))";
                readonly selectedBg: "var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, #ad2e2c))";
                readonly selectedBorder: "var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, #f47067))";
                readonly selectedShadow: "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(229,83,75,0.5)))";
                readonly disabledBg: "var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, #22272e))";
                readonly disabledCounterBg: "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(201,60,55,0.05)))";
                readonly counterBg: "var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, rgba(93,15,18,0.2)))";
                readonly icon: "var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, #e5534b))";
                readonly counterFg: "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, #e5534b))";
                readonly disabledCounterFg: "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, rgba(229,83,75,0.5)))";
                readonly hoverCounterFg: "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #cdd9e5))";
            };
            readonly inactive: {
                readonly bg: "var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, #373e47))";
                readonly text: "var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, #768390))";
            };
        };
        readonly underlinenav: {
            readonly icon: "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, #636e7b))";
            readonly borderHover: "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, rgba(99,110,123,0.4)))";
        };
        readonly actionListItem: {
            readonly inlineDivider: "var(--borderColor-muted, var(--color-action-list-item-inline-divider, rgba(68,76,86,0.48)))";
            readonly default: {
                readonly hoverBg: "var(--control-transparent-bgColor-hover, var(--color-action-list-item-default-hover-bg, rgba(144,157,171,0.12)))";
                readonly hoverBorder: "var(--control-transparent-borderColor-hover, var(--color-action-list-item-default-hover-border, transparent))";
                readonly activeBg: "var(--control-transparent-bgColor-active, var(--color-action-list-item-default-active-bg, rgba(144,157,171,0.2)))";
                readonly activeBorder: "var(--control-transparent-borderColor-active, var(--color-action-list-item-default-active-border, transparent))";
                readonly selectedBg: "var(--control-transparent-bgColor-selected, var(--color-action-list-item-default-selected-bg, rgba(144,157,171,0.08)))";
            };
            readonly danger: {
                readonly hoverBg: "var(--control-danger-bgColor-hover, var(--color-action-list-item-danger-hover-bg, rgba(229,83,75,0.16)))";
                readonly activeBg: "var(--control-danger-bgColor-active, var(--color-action-list-item-danger-active-bg, rgba(229,83,75,0.24)))";
                readonly hoverText: "var(--control-danger-fgColor-hover, var(--color-action-list-item-danger-hover-text, #f47067))";
            };
        };
        readonly switchTrack: {
            readonly bg: "var(--controlTrack-bgColor-rest, var(--color-switch-track-bg, rgba(99,110,123,0.1)))";
            readonly hoverBg: "var(--controlTrack-bgColor-hover, var(--color-switch-track-hover-bg, hsla(213,11%,69%,0.1)))";
            readonly activeBg: "var(--controlTrack-bgColor-active, var(--color-switch-track-active-bg, rgba(99,110,123,0.4)))";
            readonly disabledBg: "var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, #373e47))";
            readonly fg: "var(--controlTrack-fgColor-rest, var(--color-switch-track-fg, #768390))";
            readonly disabledFg: "var(--controlTrack-fgColor-disabled, var(--color-switch-track-disabled-fg, #1c2128))";
            readonly border: "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))";
            readonly checked: {
                readonly bg: "var(--control-checked-bgColor-rest, var(--color-switch-track-checked-bg, rgba(49,109,202,0.35)))";
                readonly hoverBg: "var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, rgba(49,109,202,0.5)))";
                readonly activeBg: "var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, rgba(49,109,202,0.65)))";
                readonly fg: "var(--control-checked-fgColor-rest, var(--color-switch-track-checked-fg, #cdd9e5))";
                readonly disabledFg: "var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, #1c2128))";
                readonly border: "var(--borderColor-transparent, var(--color-switch-track-checked-border, transparent))";
            };
        };
        readonly switchKnob: {
            readonly bg: "var(--controlKnob-bgColor-rest, var(--color-switch-knob-bg, #22272e))";
            readonly border: "var(--controlKnob-borderColor-rest, var(--color-switch-knob-border, #606771))";
            readonly disabledBg: "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-disabled-bg, #2d333b))";
            readonly checked: {
                readonly bg: "var(--controlKnob-bgColor-checked, var(--color-switch-knob-checked-bg, #22272e))";
                readonly disabledBg: "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-checked-disabled-bg, #2d333b))";
                readonly border: "var(--controlKnob-borderColor-checked, var(--color-switch-knob-checked-border, rgba(49,109,202,0.35)))";
            };
        };
        readonly segmentedControl: {
            readonly bg: "var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, rgba(99,110,123,0.1)))";
            readonly button: {
                readonly bg: "var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, #22272e))";
                readonly hover: {
                    readonly bg: "var(--controlTrack-bgColor-hover, var(--color-segmented-control-button-hover-bg, #444c56))";
                };
                readonly active: {
                    readonly bg: "var(--controlTrack-bgColor-active, var(--color-segmented-control-button-active-bg, #373e47))";
                };
                readonly selected: {
                    readonly border: "var(--controlKnob-borderColor-rest, var(--color-segmented-control-button-selected-border, #636e7b))";
                };
            };
        };
        readonly treeViewItem: {
            readonly chevron: {
                readonly hoverBg: "var(--control-transparent-bgColor-hover, var(--color-tree-view-item-chevron-hover-bg, rgba(144,157,171,0.12)))";
            };
            readonly directory: {
                readonly fill: "var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-directory-fill, #768390))";
            };
        };
        readonly fg: {
            readonly default: "var(--fgColor-default, var(--color-fg-default, #adbac7))";
            readonly muted: "var(--fgColor-muted, var(--color-fg-muted, #768390))";
            readonly subtle: "var(--fgColor-muted, var(--color-fg-subtle, #636e7b))";
            readonly onEmphasis: "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #cdd9e5))";
        };
        readonly canvas: {
            readonly default: "var(--bgColor-default, var(--color-canvas-default, #22272e))";
            readonly overlay: "var(--overlay-bgColor, var(--color-canvas-overlay, #2d333b))";
            readonly inset: "var(--bgColor-inset, var(--color-canvas-inset, #1c2128))";
            readonly subtle: "var(--bgColor-muted, var(--color-canvas-subtle, #2d333b))";
        };
        readonly border: {
            readonly default: "var(--borderColor-default, var(--color-border-default, #444c56))";
            readonly muted: "var(--borderColor-muted, var(--color-border-muted, #373e47))";
            readonly subtle: "var(--borderColor-muted, var(--color-border-subtle, rgba(205,217,229,0.1)))";
        };
        readonly shadow: {
            readonly small: "var(--shadow-resting-small, var(--color-shadow-small, 0 0 transparent))";
            readonly medium: "var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px #1c2128))";
            readonly large: "var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px #1c2128))";
            readonly extraLarge: "var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 48px #1c2128))";
        };
        readonly neutral: {
            readonly emphasisPlus: "var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, #636e7b))";
            readonly emphasis: "var(--bgColor-neutral-emphasis, var(--color-neutral-emphasis, #636e7b))";
            readonly muted: "var(--bgColor-neutral-muted, var(--color-neutral-muted, rgba(99,110,123,0.4)))";
            readonly subtle: "var(--bgColor-neutral-muted, var(--color-neutral-subtle, rgba(99,110,123,0.1)))";
        };
        readonly accent: {
            readonly fg: "var(--fgColor-acccent, var(--color-accent-fg, #539bf5))";
            readonly emphasis: "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #316dca))";
            readonly muted: "var(--borderColor-accent-muted, var(--color-accent-muted, rgba(65,132,228,0.4)))";
            readonly subtle: "var(--bgColor-accent-muted, var(--color-accent-subtle, rgba(65,132,228,0.1)))";
        };
        readonly success: {
            readonly fg: "var(--fgColor-success, var(--color-success-fg, #57ab5a))";
            readonly emphasis: "var(--bgColor-success-emphasis, var(--color-success-emphasis, #347d39))";
            readonly muted: "var(--borderColor-success-muted, var(--color-success-muted, rgba(70,149,74,0.4)))";
            readonly subtle: "var(--bgColor-success-muted, var(--color-success-subtle, rgba(70,149,74,0.15)))";
        };
        readonly attention: {
            readonly fg: "var(--fgColor-attention, var(--color-attention-fg, #c69026))";
            readonly emphasis: "var(--bgColor-attention-emphasis, var(--color-attention-emphasis, #966600))";
            readonly muted: "var(--borderColor-attention-muted, var(--color-attention-muted, rgba(174,124,20,0.4)))";
            readonly subtle: "var(--bgColor-attention-muted, var(--color-attention-subtle, rgba(174,124,20,0.15)))";
        };
        readonly severe: {
            readonly fg: "var(--fgColor-severe, var(--color-severe-fg, #cc6b2c))";
            readonly emphasis: "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #ae5622))";
            readonly muted: "var(--borderColor-severe-muted, var(--color-severe-muted, rgba(204,107,44,0.4)))";
            readonly subtle: "var(--bgColor-severe-muted, var(--color-severe-subtle, rgba(204,107,44,0.1)))";
        };
        readonly danger: {
            readonly fg: "var(--fgColor-danger, var(--color-danger-fg, #e5534b))";
            readonly emphasis: "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #c93c37))";
            readonly muted: "var(--borderColor-danger-muted, var(--color-danger-muted, rgba(229,83,75,0.4)))";
            readonly subtle: "var(--bgColor-danger-muted, var(--color-danger-subtle, rgba(229,83,75,0.1)))";
        };
        readonly open: {
            readonly fg: "var(--fgColor-open, var(--color-open-fg, #57ab5a))";
            readonly emphasis: "var(--bgColor-open-emphasis, var(--color-open-emphasis, #347d39))";
            readonly muted: "var(--borderColor-open-muted, var(--color-open-muted, rgba(70,149,74,0.4)))";
            readonly subtle: "var(--bgColor-open-muted, var(--color-open-subtle, rgba(70,149,74,0.15)))";
        };
        readonly closed: {
            readonly fg: "var(--fgColor-closed, var(--color-closed-fg, #e5534b))";
            readonly emphasis: "var(--bgColor-closed-emphasis, var(--color-closed-emphasis, #c93c37))";
            readonly muted: "var(--borderColor-closed-muted, var(--color-closed-muted, rgba(229,83,75,0.4)))";
            readonly subtle: "var(--bgColor-closed-muted, var(--color-closed-subtle, rgba(229,83,75,0.15)))";
        };
        readonly done: {
            readonly fg: "var(--fgColor-done, var(--color-done-fg, #986ee2))";
            readonly emphasis: "var(--bgColor-done-emphasis, var(--color-done-emphasis, #8256d0))";
            readonly muted: "var(--borderColor-done-muted, var(--color-done-muted, rgba(152,110,226,0.4)))";
            readonly subtle: "var(--bgColor-done-muted, var(--color-done-subtle, rgba(152,110,226,0.1)))";
        };
        readonly sponsors: {
            readonly fg: "var(--fgColor-sponsors, var(--color-sponsors-fg, #c96198))";
            readonly emphasis: "var(--bgColor-sponsors-emphasis, var(--color-sponsors-emphasis, #ae4c82))";
            readonly muted: "var(--borderColor-sponsors-muted, var(--color-sponsors-muted, rgba(201,97,152,0.4)))";
            readonly subtle: "var(--bgColor-sponsors-muted, var(--color-sponsors-subtle, rgba(201,97,152,0.1)))";
        };
        readonly primer: {
            readonly fg: {
                readonly disabled: "var(--fgColor-disabled, var(--color-primer-fg-disabled, #545d68))";
            };
            readonly canvas: {
                readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-primer-canvas-backdrop, rgba(28,33,40,0.8)))";
                readonly sticky: "var(--color-primer-canvas-sticky, rgba(34,39,46,0.95))";
            };
            readonly border: {
                readonly active: "var(--underlineNav-borderColor-active, var(--color-primer-border-active, #ec775c))";
                readonly contrast: "var(--borderColor-muted, var(--color-primer-border-contrast, rgba(205,217,229,0.2)))";
            };
            readonly shadow: {
                readonly highlight: "var(--shadow-highlight, var(--color-primer-shadow-highlight, 0 0 transparent))";
                readonly inset: "var(--shadow-inset, var(--color-primer-shadow-inset, 0 0 transparent))";
            };
        };
        readonly scale: {
            readonly black: "#1c2128";
            readonly white: "#cdd9e5";
            readonly gray: readonly ["#cdd9e5", "#adbac7", "#909dab", "#768390", "#636e7b", "#545d68", "#444c56", "#373e47", "#2d333b", "#22272e"];
            readonly blue: readonly ["#c6e6ff", "#96d0ff", "#6cb6ff", "#539bf5", "#4184e4", "#316dca", "#255ab2", "#1b4b91", "#143d79", "#0f2d5c"];
            readonly green: readonly ["#b4f1b4", "#8ddb8c", "#6bc46d", "#57ab5a", "#46954a", "#347d39", "#2b6a30", "#245829", "#1b4721", "#113417"];
            readonly yellow: readonly ["#fbe090", "#eac55f", "#daaa3f", "#c69026", "#ae7c14", "#966600", "#805400", "#6c4400", "#593600", "#452700"];
            readonly orange: readonly ["#ffddb0", "#ffbc6f", "#f69d50", "#e0823d", "#cc6b2c", "#ae5622", "#94471b", "#7f3913", "#682d0f", "#4d210c"];
            readonly red: readonly ["#ffd8d3", "#ffb8b0", "#ff938a", "#f47067", "#e5534b", "#c93c37", "#ad2e2c", "#922323", "#78191b", "#5d0f12"];
            readonly purple: readonly ["#eedcff", "#dcbdfb", "#dcbdfb", "#b083f0", "#986ee2", "#8256d0", "#6b44bc", "#5936a2", "#472c82", "#352160"];
            readonly pink: readonly ["#ffd7eb", "#ffb3d8", "#fc8dc7", "#e275ad", "#c96198", "#ae4c82", "#983b6e", "#7e325a", "#69264a", "#551639"];
            readonly coral: readonly ["#ffdacf", "#ffb9a5", "#f79981", "#ec775c", "#de5b41", "#c2442d", "#a93524", "#8d291b", "#771d13", "#5d1008"];
        };
    };
    dark_high_contrast: {
        readonly canvasDefaultTransparent: "var(--bgColor-transparent, var(--color-canvas-default-transparent, rgba(10,12,16,0)))";
        readonly pageHeaderBg: "var(--page-header-bgColor, var(--color-page-header-bg, #0a0c10))";
        readonly marketingIcon: {
            readonly primary: "var(--color-marketing-icon-primary, #91cbff)";
            readonly secondary: "var(--color-marketing-icon-secondary, #409eff)";
        };
        readonly diffBlob: {
            readonly addition: {
                readonly numText: "var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, #f0f3f6))";
                readonly fg: "var(--diffBlob-addition-fgColor-text, var(--color-diff-blob-addition-fg, #0a0c10))";
                readonly numBg: "var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg, rgba(38,205,77,0.3)))";
                readonly lineBg: "var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg, rgba(9,180,58,0.15)))";
                readonly wordBg: "var(--diffBlob-addition-bgColor-word, var(--color-diff-blob-addition-word-bg, #09b43a))";
            };
            readonly deletion: {
                readonly numText: "var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, #f0f3f6))";
                readonly fg: "var(--diffBlob-deletion-fgColor-text, var(--color-diff-blob-deletion-fg, #0a0c10))";
                readonly numBg: "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, rgba(255,106,105,0.3)))";
                readonly lineBg: "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, rgba(255,106,105,0.1)))";
                readonly wordBg: "var(--diffBlob-deletion-bgColor-word, var(--color-diff-blob-deletion-word-bg, #ff6a69))";
            };
            readonly hunk: {
                readonly numBg: "var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg, rgba(64,158,255,0.4)))";
            };
            readonly expander: {
                readonly icon: "var(--diffBlob-expander-iconColor, var(--color-diff-blob-expander-icon, #f0f3f6))";
            };
            readonly selectedLineHighlightMixBlendMode: "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, screen)";
        };
        readonly diffstat: {
            readonly deletionBorder: "var(--color-diffstat-deletion-border, #ffb1af)";
            readonly additionBorder: "var(--color-diffstat-addition-border, #4ae168)";
            readonly additionBg: "var(--diffStat-addition-bgColor, var(--color-diffstat-addition-bg, #26cd4d))";
        };
        readonly searchKeyword: {
            readonly hl: "var(--highlight-neutral-bgColor, var(--color-search-keyword-hl, rgba(240,183,47,0.4)))";
        };
        readonly prettylights: {
            readonly syntax: {
                readonly comment: "var(--color-prettylights-syntax-comment, #bdc4cc)";
                readonly constant: "var(--color-prettylights-syntax-constant, #91cbff)";
                readonly entity: "var(--color-prettylights-syntax-entity, #dbb7ff)";
                readonly storageModifierImport: "var(--color-prettylights-syntax-storage-modifier-import, #f0f3f6)";
                readonly entityTag: "var(--color-prettylights-syntax-entity-tag, #72f088)";
                readonly keyword: "var(--color-prettylights-syntax-keyword, #ff9492)";
                readonly string: "var(--color-prettylights-syntax-string, #addcff)";
                readonly variable: "var(--color-prettylights-syntax-variable, #ffb757)";
                readonly brackethighlighterUnmatched: "var(--color-prettylights-syntax-brackethighlighter-unmatched, #ff6a69)";
                readonly invalidIllegalText: "var(--color-prettylights-syntax-invalid-illegal-text, #ffffff)";
                readonly invalidIllegalBg: "var(--color-prettylights-syntax-invalid-illegal-bg, #e82a2f)";
                readonly carriageReturnText: "var(--color-prettylights-syntax-carriage-return-text, #ffffff)";
                readonly carriageReturnBg: "var(--color-prettylights-syntax-carriage-return-bg, #ff4445)";
                readonly stringRegexp: "var(--color-prettylights-syntax-string-regexp, #72f088)";
                readonly markupList: "var(--color-prettylights-syntax-markup-list, #fbd669)";
                readonly markupHeading: "var(--color-prettylights-syntax-markup-heading, #409eff)";
                readonly markupItalic: "var(--color-prettylights-syntax-markup-italic, #f0f3f6)";
                readonly markupBold: "var(--color-prettylights-syntax-markup-bold, #f0f3f6)";
                readonly markupDeletedText: "var(--color-prettylights-syntax-markup-deleted-text, #ffdedb)";
                readonly markupDeletedBg: "var(--color-prettylights-syntax-markup-deleted-bg, #cc1421)";
                readonly markupInsertedText: "var(--color-prettylights-syntax-markup-inserted-text, #acf7b6)";
                readonly markupInsertedBg: "var(--color-prettylights-syntax-markup-inserted-bg, #007728)";
                readonly markupChangedText: "var(--color-prettylights-syntax-markup-changed-text, #ffe1b4)";
                readonly markupChangedBg: "var(--color-prettylights-syntax-markup-changed-bg, #a74c00)";
                readonly markupIgnoredText: "var(--color-prettylights-syntax-markup-ignored-text, #f0f3f6)";
                readonly markupIgnoredBg: "var(--color-prettylights-syntax-markup-ignored-bg, #318bf8)";
                readonly metaDiffRange: "var(--color-prettylights-syntax-meta-diff-range, #dbb7ff)";
                readonly brackethighlighterAngle: "var(--color-prettylights-syntax-brackethighlighter-angle, #bdc4cc)";
                readonly sublimelinterGutterMark: "var(--color-prettylights-syntax-sublimelinter-gutter-mark, #7a828e)";
                readonly constantOtherReferenceLink: "var(--color-prettylights-syntax-constant-other-reference-link, #addcff)";
            };
        };
        readonly codemirror: {
            readonly text: "var(--codeMirror-fgColor, var(--color-codemirror-text, #f0f3f6))";
            readonly bg: "var(--codeMirror-bgColor, var(--color-codemirror-bg, #0a0c10))";
            readonly guttersBg: "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, #0a0c10))";
            readonly guttermarkerText: "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, #0a0c10))";
            readonly guttermarkerSubtleText: "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, #9ea7b3))";
            readonly linenumberText: "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, #f0f3f6))";
            readonly cursor: "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, #f0f3f6))";
            readonly selectionBg: "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, rgba(64,158,255,0.4)))";
            readonly activelineBg: "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, rgba(158,167,179,0.1)))";
            readonly matchingbracketText: "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, #f0f3f6))";
            readonly linesBg: "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, #0a0c10))";
            readonly syntax: {
                readonly comment: "var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, #bdc4cc))";
                readonly constant: "var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, #91cbff))";
                readonly entity: "var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, #dbb7ff))";
                readonly keyword: "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #ff9492))";
                readonly storage: "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #ff9492))";
                readonly string: "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #addcff))";
                readonly support: "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #91cbff))";
                readonly variable: "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #ffb757))";
            };
        };
        readonly checks: {
            readonly bg: "var(--color-checks-bg, #010409)";
            readonly runBorderWidth: "var(--color-checks-run-border-width, 1px)";
            readonly containerBorderWidth: "var(--color-checks-container-border-width, 1px)";
            readonly textPrimary: "var(--color-checks-text-primary, #f0f3f6)";
            readonly textSecondary: "var(--color-checks-text-secondary, #f0f3f6)";
            readonly textLink: "var(--color-checks-text-link, #71b7ff)";
            readonly btnIcon: "var(--color-checks-btn-icon, #f0f3f6)";
            readonly btnHoverIcon: "var(--color-checks-btn-hover-icon, #f0f3f6)";
            readonly btnHoverBg: "var(--color-checks-btn-hover-bg, rgba(158,167,179,0.1))";
            readonly inputText: "var(--color-checks-input-text, #f0f3f6)";
            readonly inputPlaceholderText: "var(--color-checks-input-placeholder-text, #9ea7b3)";
            readonly inputFocusText: "var(--color-checks-input-focus-text, #f0f3f6)";
            readonly inputBg: "var(--color-checks-input-bg, #272b33)";
            readonly inputShadow: "var(--color-checks-input-shadow, 0 0 0 1px #7a828e)";
            readonly donutError: "var(--color-checks-donut-error, #ff6a69)";
            readonly donutPending: "var(--color-checks-donut-pending, #f0b72f)";
            readonly donutSuccess: "var(--color-checks-donut-success, #09b43a)";
            readonly donutNeutral: "var(--color-checks-donut-neutral, #bdc4cc)";
            readonly dropdownText: "var(--color-checks-dropdown-text, #f0f3f6)";
            readonly dropdownBg: "var(--color-checks-dropdown-bg, #272b33)";
            readonly dropdownBorder: "var(--color-checks-dropdown-border, #7a828e)";
            readonly dropdownShadow: "var(--color-checks-dropdown-shadow, rgba(1,4,9,0.3))";
            readonly dropdownHoverText: "var(--color-checks-dropdown-hover-text, #f0f3f6)";
            readonly dropdownHoverBg: "var(--color-checks-dropdown-hover-bg, rgba(158,167,179,0.1))";
            readonly dropdownBtnHoverText: "var(--color-checks-dropdown-btn-hover-text, #f0f3f6)";
            readonly dropdownBtnHoverBg: "var(--color-checks-dropdown-btn-hover-bg, rgba(158,167,179,0.1))";
            readonly scrollbarThumbBg: "var(--color-checks-scrollbar-thumb-bg, rgba(158,167,179,0.4))";
            readonly headerLabelText: "var(--color-checks-header-label-text, #f0f3f6)";
            readonly headerLabelOpenText: "var(--color-checks-header-label-open-text, #f0f3f6)";
            readonly headerBorder: "var(--color-checks-header-border, #7a828e)";
            readonly headerIcon: "var(--color-checks-header-icon, #f0f3f6)";
            readonly lineText: "var(--color-checks-line-text, #f0f3f6)";
            readonly lineNumText: "var(--color-checks-line-num-text, #9ea7b3)";
            readonly lineTimestampText: "var(--color-checks-line-timestamp-text, #9ea7b3)";
            readonly lineHoverBg: "var(--color-checks-line-hover-bg, rgba(158,167,179,0.1))";
            readonly lineSelectedBg: "var(--color-checks-line-selected-bg, rgba(64,158,255,0.1))";
            readonly lineSelectedNumText: "var(--color-checks-line-selected-num-text, #71b7ff)";
            readonly lineDtFmText: "var(--color-checks-line-dt-fm-text, #0a0c10)";
            readonly lineDtFmBg: "var(--color-checks-line-dt-fm-bg, #e09b13)";
            readonly gateBg: "var(--color-checks-gate-bg, rgba(224,155,19,0.15))";
            readonly gateText: "var(--color-checks-gate-text, #f0f3f6)";
            readonly gateWaitingText: "var(--color-checks-gate-waiting-text, #f0b72f)";
            readonly stepHeaderOpenBg: "var(--color-checks-step-header-open-bg, #272b33)";
            readonly stepErrorText: "var(--color-checks-step-error-text, #ff6a69)";
            readonly stepWarningText: "var(--color-checks-step-warning-text, #f0b72f)";
            readonly loglineText: "var(--color-checks-logline-text, #f0f3f6)";
            readonly loglineNumText: "var(--color-checks-logline-num-text, #9ea7b3)";
            readonly loglineDebugText: "var(--color-checks-logline-debug-text, #b780ff)";
            readonly loglineErrorText: "var(--color-checks-logline-error-text, #f0f3f6)";
            readonly loglineErrorNumText: "var(--color-checks-logline-error-num-text, #9ea7b3)";
            readonly loglineErrorBg: "var(--color-checks-logline-error-bg, rgba(255,106,105,0.1))";
            readonly loglineWarningText: "var(--color-checks-logline-warning-text, #f0f3f6)";
            readonly loglineWarningNumText: "var(--color-checks-logline-warning-num-text, #f0b72f)";
            readonly loglineWarningBg: "var(--color-checks-logline-warning-bg, rgba(224,155,19,0.15))";
            readonly loglineCommandText: "var(--color-checks-logline-command-text, #71b7ff)";
            readonly loglineSectionText: "var(--color-checks-logline-section-text, #26cd4d)";
            readonly ansi: {
                readonly black: "var(--color-checks-ansi-black, #0a0c10)";
                readonly blackBright: "var(--color-checks-ansi-black-bright, #272b33)";
                readonly white: "var(--color-checks-ansi-white, #d9dee3))";
                readonly whiteBright: "var(--color-checks-ansi-white-bright, #d9dee3)";
                readonly gray: "var(--color-checks-ansi-gray, #9ea7b3)";
                readonly red: "var(--color-checks-ansi-red, #ff9492)";
                readonly redBright: "var(--color-checks-ansi-red-bright, #ffb1af)";
                readonly green: "var(--color-checks-ansi-green, #26cd4d)";
                readonly greenBright: "var(--color-checks-ansi-green-bright, #4ae168)";
                readonly yellow: "var(--color-checks-ansi-yellow, #f0b72f)";
                readonly yellowBright: "var(--color-checks-ansi-yellow-bright, #f7c843)";
                readonly blue: "var(--color-checks-ansi-blue, #71b7ff)";
                readonly blueBright: "var(--color-checks-ansi-blue-bright, #91cbff)";
                readonly magenta: "var(--color-checks-ansi-magenta, #cb9eff)";
                readonly magentaBright: "var(--color-checks-ansi-magenta-bright, #dbb7ff)";
                readonly cyan: "var(--color-checks-ansi-cyan, #76e3ea)";
                readonly cyanBright: "var(--color-checks-ansi-cyan-bright, #b3f0ff)";
            };
        };
        readonly project: {
            readonly headerBg: "var(--color-project-header-bg, #0a0c10)";
            readonly sidebarBg: "var(--color-project-sidebar-bg, #272b33)";
            readonly gradientIn: "var(--color-project-gradient-in, #272b33)";
            readonly gradientOut: "var(--color-project-gradient-out, rgba(39,43,51,0))";
        };
        readonly mktg: {
            readonly btn: {
                readonly bg: "var(--color-mktg-btn-bg, #f6f8fa))";
                readonly shadow: {
                    readonly outline: "var(--color-mktg-btn-shadow-outline, rgb(255 255 255 / 25%) 0 0 0 1px inset))";
                    readonly focus: "var(--color-mktg-btn-shadow-focus, rgb(255 255 255 / 25%) 0 0 0 4px))";
                    readonly hover: "var(--color-mktg-btn-shadow-hover, 0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)))";
                    readonly hoverMuted: "var(--color-mktg-btn-shadow-hover-muted, rgb(255 255 255) 0 0 0 2px inset))";
                };
            };
        };
        readonly control: {
            readonly borderColor: {
                readonly emphasis: "var(--control-borderColor-emphasis, var(--color-control-border-color-emphasis, #9ea7b3))";
            };
        };
        readonly avatar: {
            readonly bg: "var(--avatar-bgColor, var(--color-avatar-bg, rgba(255,255,255,0.1)))";
            readonly border: "var(--avatar-borderColor, var(--color-avatar-border, rgba(255,255,255,0.9)))";
            readonly stackFade: "var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, #525964))";
            readonly stackFadeMore: "var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, #272b33))";
            readonly childShadow: "var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px #0a0c10))";
        };
        readonly topicTag: {
            readonly border: "var(--topicTag-borderColor, var(--color-topic-tag-border, #409eff))";
        };
        readonly counter: {
            readonly border: "var(--counter-borderColor, var(--color-counter-border, transparent))";
        };
        readonly selectMenu: {
            readonly backdropBorder: "var(--selectMenu-borderColor, var(--color-select-menu-backdrop-border, #7a828e))";
            readonly tapHighlight: "var(--control-bgColor-active, var(--color-select-menu-tap-highlight, rgba(82,89,100,0.5)))";
            readonly tapFocusBg: "var(--selectMenu-bgColor-active, var(--color-select-menu-tap-focus-bg, #1e60d5))";
        };
        readonly overlay: {
            readonly shadow: "var(--shadow-floating-small, var(--color-overlay-shadow, 0 0 0 1px #525964, 0 16px 32px rgba(1,4,9,0.85)))";
            readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, rgba(39,43,51,0.4)))";
        };
        readonly header: {
            readonly text: "var(--header-fgColor-default, var(--color-header-text, rgba(255,255,255,0.7)))";
            readonly bg: "var(--header-bgColor, var(--color-header-bg, #272b33))";
            readonly divider: "var(--header-borderColor-divider, var(--color-header-divider, #bdc4cc))";
            readonly logo: "var(--header-fgColor-logo, var(--color-header-logo, #ffffff))";
        };
        readonly headerSearch: {
            readonly bg: "var(--headerSearch-bgColor, var(--color-header-search-bg, #0a0c10))";
            readonly border: "var(--headerSearch-borderColor, var(--color-header-search-border, #525964))";
        };
        readonly sidenav: {
            readonly selectedBg: "var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, #272b33))";
        };
        readonly menu: {
            readonly bgActive: "var(--menu-bgColor-active, var(--color-menu-bg-active, #272b33))";
        };
        readonly input: {
            readonly disabledBg: "var(--control-bgColor-disabled, var(--color-input-disabled-bg, rgba(158,167,179,0)))";
        };
        readonly timeline: {
            readonly badgeBg: "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #272b33))";
        };
        readonly ansi: {
            readonly black: "var(--color-ansi-black, #7a828e)";
            readonly blackBright: "var(--color-ansi-black-bright, #9ea7b3)";
            readonly white: "var(--color-ansi-white, #d9dee3)";
            readonly whiteBright: "var(--color-ansi-white-bright, #ffffff)";
            readonly gray: "var(--color-ansi-gray, #9ea7b3)";
            readonly red: "var(--color-ansi-red, #ff9492)";
            readonly redBright: "var(--color-ansi-red-bright, #ffb1af)";
            readonly green: "var(--color-ansi-green, #26cd4d)";
            readonly greenBright: "var(--color-ansi-green-bright, #4ae168)";
            readonly yellow: "var(--color-ansi-yellow, #f0b72f)";
            readonly yellowBright: "var(--color-ansi-yellow-bright, #f7c843)";
            readonly blue: "var(--color-ansi-blue, #71b7ff)";
            readonly blueBright: "var(--color-ansi-blue-bright, #91cbff)";
            readonly magenta: "var(--color-ansi-magenta, #cb9eff)";
            readonly magentaBright: "var(--color-ansi-magenta-bright, #dbb7ff)";
            readonly cyan: "var(--color-ansi-cyan, #39c5cf)";
            readonly cyanBright: "var(--color-ansi-cyan-bright, #56d4dd)";
        };
        readonly btn: {
            readonly text: "var(--button-default-fgColor-rest, var(--color-btn-text, #f0f3f6))";
            readonly bg: "var(--button-default-bgColor-rest, var(--color-btn-bg, #272b33))";
            readonly border: "var(--button-default-borderColor-rest, var(--color-btn-border, #7a828e))";
            readonly shadow: "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 0 transparent))";
            readonly insetShadow: "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, 0 0 transparent))";
            readonly hoverBg: "var(--button-default-bgColor-hover, var(--color-btn-hover-bg, #525964))";
            readonly hoverBorder: "var(--button-default-borderColor-hover, var(--color-btn-hover-border, #bdc4cc))";
            readonly activeBg: "var(--button-default-bgColor-active, var(--color-btn-active-bg, hsla(217,10%,33%,1)))";
            readonly activeBorder: "var(--button-default-borderColor-active, var(--color-btn-active-border, #9ea7b3))";
            readonly selectedBg: "var(--button-default-bgColor-selected, var(--color-btn-selected-bg, rgba(82,89,100,0.9)))";
            readonly counterBg: "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, #525964))";
            readonly primary: {
                readonly text: "var(--button-primary-fgColor-rest, var(--color-btn-primary-text, #0a0c10))";
                readonly bg: "var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, #09b43a))";
                readonly border: "var(--button-primary-borderColor-rest, var(--color-btn-primary-border, #4ae168))";
                readonly shadow: "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 0 transparent))";
                readonly insetShadow: "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, 0 0 transparent))";
                readonly hoverBg: "var(--button-primary-bgColor-hover, var(--color-btn-primary-hover-bg, #26cd4d))";
                readonly hoverBorder: "var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, #4ae168))";
                readonly selectedBg: "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, #09b43a))";
                readonly selectedShadow: "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, rgba(10,12,16,0.5)))";
                readonly disabledBg: "var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, rgba(9,180,58,0.6)))";
                readonly disabledBorder: "var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, rgba(74,225,104,0.4)))";
                readonly icon: "var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, #0a0c10))";
                readonly counterBg: "var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, rgba(1,4,9,0.15)))";
            };
            readonly outline: {
                readonly text: "var(--button-outline-fgColor-rest, var(--color-btn-outline-text, #409eff))";
                readonly hoverText: "var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, #71b7ff))";
                readonly hoverBg: "var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, #525964))";
                readonly hoverBorder: "var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, #7a828e))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))// HI_KATIE: no matches";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))// HI_KATIE: no matches";
                readonly hoverCounterBg: "var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, rgba(25,79,177,0.2)))";
                readonly selectedText: "var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, #ffffff))";
                readonly selectedBg: "var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, #2672f3))";
                readonly selectedBorder: "var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, #7a828e))";
                readonly selectedShadow: "var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-outline-fgColor-disabled, var(--color-btn-outline-disabled-text, rgba(113,183,255,0.5)))";
                readonly disabledBg: "var(--button-outline-bgColor-disabled, var(--color-btn-outline-disabled-bg, #0a0c10))";
                readonly disabledCounterBg: "var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, rgba(64,158,255,0.05)))";
                readonly counterBg: "var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, rgba(25,79,177,0.2)))";
                readonly hoverCounterFg: "var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, #71b7ff))";
                readonly disabledCounterFg: "var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, rgba(113,183,255,0.5)))";
                readonly counterFg: "var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, #409eff))";
            };
            readonly danger: {
                readonly text: "var(--button-danger-fgColor-rest, var(--color-btn-danger-text, #ff6a69))";
                readonly hoverText: "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, #0a0c10))";
                readonly hoverBg: "var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, #ff6a69))";
                readonly hoverBorder: "var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, #ff6a69))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 0 transparent))";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, 0 0 transparent))";
                readonly hoverIcon: "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, #0a0c10))";
                readonly hoverCounterBg: "var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, rgba(1,4,9,0.15)))";
                readonly selectedText: "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))";
                readonly selectedBg: "var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, #ff4445))";
                readonly selectedBorder: "var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, #ff9492))";
                readonly selectedShadow: "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(255,106,105,0.5)))";
                readonly disabledBg: "var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, #0a0c10))";
                readonly disabledCounterBg: "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(255,106,105,0.05)))";
                readonly counterBg: "var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, rgba(1,4,9,0.15)))";
                readonly icon: "var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, #ff6a69))";
                readonly counterFg: "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, #ff6a69))";
                readonly disabledCounterFg: "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, rgba(255,106,105,0.5)))";
                readonly hoverCounterFg: "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #ffffff))";
            };
            readonly inactive: {
                readonly bg: "var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, #272b33))";
                readonly text: "var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, #bdc4cc))";
            };
        };
        readonly underlinenav: {
            readonly icon: "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, #f0f3f6))";
            readonly borderHover: "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, #bdc4cc))";
        };
        readonly actionListItem: {
            readonly inlineDivider: "var(--borderColor-muted, var(--color-action-list-item-inline-divider, #7a828e))";
            readonly default: {
                readonly hoverBg: "var(--control-transparent-bgColor-hover, var(--color-action-list-item-default-hover-bg, #272b33))";
                readonly hoverBorder: "var(--control-transparent-borderColor-hover, var(--color-action-list-item-default-hover-border, #7a828e))";
                readonly activeBg: "var(--control-transparent-bgColor-active, var(--color-action-list-item-default-active-bg, #525964))";
                readonly activeBorder: "var(--control-transparent-borderColor-active, var(--color-action-list-item-default-active-border, #9ea7b3))";
                readonly selectedBg: "var(--control-transparent-bgColor-selected, var(--color-action-list-item-default-selected-bg, #525964))";
            };
            readonly danger: {
                readonly hoverBg: "var(--control-danger-bgColor-hover, var(--color-action-list-item-danger-hover-bg, #ff6a69))";
                readonly activeBg: "var(--control-danger-bgColor-active, var(--color-action-list-item-danger-active-bg, #ff4445))";
                readonly hoverText: "var(--control-danger-fgColor-hover, var(--color-action-list-item-danger-hover-text, #0a0c10))";
            };
        };
        readonly switchTrack: {
            readonly bg: "var(--controlTrack-bgColor-rest, var(--color-switch-track-bg, #9ea7b3))";
            readonly hoverBg: "var(--controlTrack-bgColor-hover, var(--color-switch-track-hover-bg, hsla(214,12%,61%,1)))";
            readonly activeBg: "var(--controlTrack-bgColor-active, var(--color-switch-track-active-bg, hsla(214,12%,58%,1)))";
            readonly disabledBg: "var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, #272b33))";
            readonly fg: "var(--controlTrack-fgColor-rest, var(--color-switch-track-fg, #0a0c10))";
            readonly disabledFg: "var(--controlTrack-fgColor-disabled, var(--color-switch-track-disabled-fg, #010409))";
            readonly border: "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))";
            readonly checked: {
                readonly bg: "var(--control-checked-bgColor-rest, var(--color-switch-track-checked-bg, #409eff))";
                readonly hoverBg: "var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, rgba(64,158,255,0.5)))";
                readonly activeBg: "var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, rgba(64,158,255,0.65)))";
                readonly fg: "var(--control-checked-fgColor-rest, var(--color-switch-track-checked-fg, #0a0c10))";
                readonly disabledFg: "var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, #010409))";
                readonly border: "var(--borderColor-transparent, var(--color-switch-track-checked-border, transparent))";
            };
        };
        readonly switchKnob: {
            readonly bg: "var(--controlKnob-bgColor-rest, var(--color-switch-knob-bg, #0a0c10))";
            readonly border: "var(--controlKnob-borderColor-rest, var(--color-switch-knob-border, #9ea7b3))";
            readonly disabledBg: "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-disabled-bg, #272b33))";
            readonly checked: {
                readonly bg: "var(--controlKnob-bgColor-checked, var(--color-switch-knob-checked-bg, #0a0c10))";
                readonly disabledBg: "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-checked-disabled-bg, #272b33))";
                readonly border: "var(--controlKnob-borderColor-checked, var(--color-switch-knob-checked-border, #409eff))";
            };
        };
        readonly segmentedControl: {
            readonly bg: "var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, rgba(158,167,179,0.1)))";
            readonly button: {
                readonly bg: "var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, #0a0c10))";
                readonly hover: {
                    readonly bg: "var(--controlTrack-bgColor-hover, var(--color-segmented-control-button-hover-bg, #525964))";
                };
                readonly active: {
                    readonly bg: "var(--controlTrack-bgColor-active, var(--color-segmented-control-button-active-bg, #272b33))";
                };
                readonly selected: {
                    readonly border: "var(--controlKnob-borderColor-rest, var(--color-segmented-control-button-selected-border, #9ea7b3))";
                };
            };
        };
        readonly treeViewItem: {
            readonly chevron: {
                readonly hoverBg: "var(--control-transparent-bgColor-hover, var(--color-tree-view-item-chevron-hover-bg, #525964))";
            };
            readonly directory: {
                readonly fill: "var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-directory-fill, #f0f3f6))";
            };
        };
        readonly fg: {
            readonly default: "var(--fgColor-default, var(--color-fg-default, #f0f3f6))";
            readonly muted: "var(--fgColor-muted, var(--color-fg-muted, #f0f3f6))";
            readonly subtle: "var(--fgColor-muted, var(--color-fg-subtle, #9ea7b3))";
            readonly onEmphasis: "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #0a0c10))";
        };
        readonly canvas: {
            readonly default: "var(--bgColor-default, var(--color-canvas-default, #0a0c10))";
            readonly overlay: "var(--overlay-bgColor, var(--color-canvas-overlay, #272b33))";
            readonly inset: "var(--bgColor-inset, var(--color-canvas-inset, #010409))";
            readonly subtle: "var(--bgColor-muted, var(--color-canvas-subtle, #272b33))";
        };
        readonly border: {
            readonly default: "var(--borderColor-default, var(--color-border-default, #7a828e))";
            readonly muted: "var(--borderColor-muted, var(--color-border-muted, #7a828e))";
            readonly subtle: "var(--borderColor-muted, var(--color-border-subtle, #7a828e))";
        };
        readonly shadow: {
            readonly small: "var(--shadow-resting-small, var(--color-shadow-small, 0 0 transparent))";
            readonly medium: "var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px #010409))";
            readonly large: "var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px #010409))";
            readonly extraLarge: "var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 48px #010409))";
        };
        readonly neutral: {
            readonly emphasisPlus: "var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, #ffffff))";
            readonly emphasis: "var(--bgColor-neutral-emphasis, var(--color-neutral-emphasis, #9ea7b3))";
            readonly muted: "var(--bgColor-neutral-muted, var(--color-neutral-muted, rgba(158,167,179,0.4)))";
            readonly subtle: "var(--bgColor-neutral-muted, var(--color-neutral-subtle, rgba(158,167,179,0.1)))";
        };
        readonly accent: {
            readonly fg: "var(--fgColor-accent, var(--color-accent-fg, #71b7ff))";
            readonly emphasis: "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #409eff))";
            readonly muted: "var(--borderColor-accent-muted, var(--color-accent-muted, #409eff))";
            readonly subtle: "var(--bgColor-accent-muted, var(--color-accent-subtle, rgba(64,158,255,0.1)))";
        };
        readonly success: {
            readonly fg: "var(--fgColor-success, var(--color-success-fg, #26cd4d))";
            readonly emphasis: "var(--bgColor-success-emphasis, var(--color-success-emphasis, #09b43a))";
            readonly muted: "var(--borderColor-success-muted, var(--color-success-muted, #09b43a))";
            readonly subtle: "var(--bgColor-success-muted, var(--color-success-subtle, rgba(9,180,58,0.15)))";
        };
        readonly attention: {
            readonly fg: "var(--fgColor-attention, var(--color-attention-fg, #f0b72f))";
            readonly emphasis: "var(--bgColor-attention-emphasis, var(--color-attention-emphasis, #e09b13))";
            readonly muted: "var(--borderColor-attention-muted, var(--color-attention-muted, #e09b13))";
            readonly subtle: "var(--bgColor-attention-muted, var(--color-attention-subtle, rgba(224,155,19,0.15)))";
        };
        readonly severe: {
            readonly fg: "var(--fgColor-severe, var(--color-severe-fg, #e7811d))";
            readonly emphasis: "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #e7811d))";
            readonly muted: "var(--borderColor-severe-muted, var(--color-severe-muted, #e7811d))";
            readonly subtle: "var(--bgColor-severe-muted, var(--color-severe-subtle, rgba(231,129,29,0.1)))";
        };
        readonly danger: {
            readonly fg: "var(--fgColor-danger, var(--color-danger-fg, #ff6a69))";
            readonly emphasis: "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #ff6a69))";
            readonly muted: "var(--borderColor-danger-muted, var(--color-danger-muted, #ff6a69))";
            readonly subtle: "var(--bgColor-danger-muted, var(--color-danger-subtle, rgba(255,106,105,0.1)))";
        };
        readonly open: {
            readonly fg: "var(--fgColor-open, var(--color-open-fg, #26cd4d))";
            readonly emphasis: "var(--bgColor-open-emphasis, var(--color-open-emphasis, #09b43a))";
            readonly muted: "var(--borderColor-open-muted, var(--color-open-muted, rgba(9,180,58,0.4)))";
            readonly subtle: "var(--bgColor-open-muted, var(--color-open-subtle, rgba(9,180,58,0.15)))";
        };
        readonly closed: {
            readonly fg: "var(--fgColor-closed, var(--color-closed-fg, #ff6a69))";
            readonly emphasis: "var(--bgColor-closed-emphasis, var(--color-closed-emphasis, #ff6a69))";
            readonly muted: "var(--borderColor-closed-muted, var(--color-closed-muted, rgba(255,106,105,0.4)))";
            readonly subtle: "var(--bgColor-closed-muted, var(--color-closed-subtle, rgba(255,106,105,0.15)))";
        };
        readonly done: {
            readonly fg: "var(--fgColor-done, var(--color-done-fg, #b780ff))";
            readonly emphasis: "var(--bgColor-done-emphasis, var(--color-done-emphasis, #b87fff))";
            readonly muted: "var(--borderColor-done-muted, var(--color-done-muted, #b780ff))";
            readonly subtle: "var(--bgColor-done-muted, var(--color-done-subtle, rgba(183,128,255,0.1)))";
        };
        readonly sponsors: {
            readonly fg: "var(--fgColor-sponsors, var(--color-sponsors-fg, #ef6eb1))";
            readonly emphasis: "var(--bgColor-sponsors-emphasis, var(--color-sponsors-emphasis, #ef6eb1))";
            readonly muted: "var(--borderColor-sponsors-muted, var(--color-sponsors-muted, #ef6eb1))";
            readonly subtle: "var(--bgColor-sponsors-muted, var(--color-sponsors-subtle, rgba(239,110,177,0.1)))";
        };
        readonly primer: {
            readonly fg: {
                readonly disabled: "var(--fgColor-disabled, var(--color-primer-fg-disabled, #7a828e))";
            };
            readonly canvas: {
                readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-primer-canvas-backdrop, rgba(1,4,9,0.8)))";
                readonly sticky: "var(--color-primer-canvas-sticky, rgba(10,12,16,0.95))";
            };
            readonly border: {
                readonly active: "var(--underlineNav-borderColor-active, var(--color-primer-border-active, #ff967d))";
                readonly contrast: "var(--borderColor-muted, var(--color-primer-border-contrast, rgba(255,255,255,0.2)))";
            };
            readonly shadow: {
                readonly highlight: "var(--shadow-highlight, var(--color-primer-shadow-highlight, 0 0 transparent))";
                readonly inset: "var(--shadow-inset, var(--color-primer-shadow-inset, 0 0 transparent))";
            };
        };
        readonly scale: {
            readonly black: "#010409";
            readonly white: "#ffffff";
            readonly gray: readonly ["#ffffff", "#f0f3f6", "#d9dee3", "#bdc4cc", "#9ea7b3", "#7a828e", "#525964", "#272b33", "#272b33", "#0a0c10"];
            readonly blue: readonly ["#caeaff", "#addcff", "#91cbff", "#71b7ff", "#409eff", "#409eff", "#318bf8", "#2672f3", "#1e60d5", "#194fb1"];
            readonly green: readonly ["#acf7b6", "#72f088", "#4ae168", "#26cd4d", "#09b43a", "#09b43a", "#02a232", "#008c2c", "#007728", "#006222"];
            readonly yellow: readonly ["#fbe59e", "#fbd669", "#f7c843", "#f0b72f", "#e09b13", "#e09b13", "#c88508", "#ae7104", "#945d02", "#7b4900"];
            readonly orange: readonly ["#ffe1b4", "#ffcf86", "#ffb757", "#fe9a2d", "#e7811d", "#e7811d", "#d57014", "#bf5e0a", "#a74c00", "#8f3c00"];
            readonly red: readonly ["#ffdedb", "#ffc9c7", "#ffb1af", "#ff9492", "#ff6a69", "#ff6a69", "#ff4445", "#e82a2f", "#cc1421", "#ad0116"];
            readonly purple: readonly ["#f0dfff", "#e6ccff", "#dbb7ff", "#cb9eff", "#b780ff", "#b87fff", "#a66bff", "#954ffd", "#8031f7", "#6921d7"];
            readonly pink: readonly ["#ffdceb", "#ffc7e1", "#ffadd4", "#ff8dc7", "#ef6eb1", "#ef6eb1", "#e456a3", "#d23d91", "#b72c7d", "#9c1d6a"];
            readonly coral: readonly ["#ffded4", "#ffcbb9", "#ffb39b", "#ff967d", "#fc704f", "#fc704f", "#f75133", "#e03b21", "#c62612", "#a91500"];
        };
    };
    dark_colorblind: {
        readonly canvasDefaultTransparent: "var(--bgColor-transparent, var(--color-canvas-default-transparent, rgba(13,17,23,0)))";
        readonly pageHeaderBg: "var(--page-header-bgColor, var(--color-page-header-bg, #0d1117))";
        readonly marketingIcon: {
            readonly primary: "var(--color-marketing-icon-primary, #79c0ff)";
            readonly secondary: "var(--color-marketing-icon-secondary, #1f6feb)";
        };
        readonly diffBlob: {
            readonly addition: {
                readonly numText: "var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, #c9d1d9))";
                readonly fg: "var(--diffBlob-addition-fgColor-text, var(--color-diff-blob-addition-fg, #c9d1d9))";
                readonly numBg: "var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg, rgba(88,166,255,0.3)))";
                readonly lineBg: "var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg, rgba(56,139,253,0.15)))";
                readonly wordBg: "var(--diffBlob-addition-bgColor-word, var(--color-diff-blob-addition-word-bg, rgba(56,139,253,0.4)))";
            };
            readonly deletion: {
                readonly numText: "var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, #c9d1d9))";
                readonly fg: "var(--diffBlob-deletion-fgColor-text, var(--color-diff-blob-deletion-fg, #c9d1d9))";
                readonly numBg: "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, rgba(212,118,22,0.3)))";
                readonly lineBg: "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, rgba(212,118,22,0.1)))";
                readonly wordBg: "var(--diffBlob-deletion-bgColor-word, var(--color-diff-blob-deletion-word-bg, rgba(212,118,22,0.4)))";
            };
            readonly hunk: {
                readonly numBg: "var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg, rgba(56,139,253,0.4)))";
            };
            readonly expander: {
                readonly icon: "var(--diffBlob-expander-iconColor, var(--color-diff-blob-expander-icon, #8b949e))";
            };
            readonly selectedLineHighlightMixBlendMode: "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, screen)";
        };
        readonly diffstat: {
            readonly deletionBorder: "var(--color-diffstat-deletion-border, rgba(240,246,252,0.1))";
            readonly additionBorder: "var(--color-diffstat-addition-border, rgba(240,246,252,0.1))";
            readonly additionBg: "var(--diffStat-addition-bgColor, var(--color-diffstat-addition-bg, #58a6ff))";
        };
        readonly searchKeyword: {
            readonly hl: "var(--highlight-neutral-bgColor, var(--color-search-keyword-hl, rgba(210,153,34,0.4)))";
        };
        readonly prettylights: {
            readonly syntax: {
                readonly comment: "var(--color-prettylights-syntax-comment, #8b949e)";
                readonly constant: "var(--color-prettylights-syntax-constant, #79c0ff)";
                readonly entity: "var(--color-prettylights-syntax-entity, #d2a8ff)";
                readonly storageModifierImport: "var(--color-prettylights-syntax-storage-modifier-import, #c9d1d9)";
                readonly entityTag: "var(--color-prettylights-syntax-entity-tag, #a5d6ff)";
                readonly keyword: "var(--color-prettylights-syntax-keyword, #ec8e2c)";
                readonly string: "var(--color-prettylights-syntax-string, #a5d6ff)";
                readonly variable: "var(--color-prettylights-syntax-variable, #fdac54)";
                readonly brackethighlighterUnmatched: "var(--color-prettylights-syntax-brackethighlighter-unmatched, #d47616)";
                readonly invalidIllegalText: "var(--color-prettylights-syntax-invalid-illegal-text, #f0f6fc)";
                readonly invalidIllegalBg: "var(--color-prettylights-syntax-invalid-illegal-bg, #6c3906)";
                readonly carriageReturnText: "var(--color-prettylights-syntax-carriage-return-text, #f0f6fc)";
                readonly carriageReturnBg: "var(--color-prettylights-syntax-carriage-return-bg, #914d04)";
                readonly stringRegexp: "var(--color-prettylights-syntax-string-regexp, #a5d6ff)";
                readonly markupList: "var(--color-prettylights-syntax-markup-list, #f2cc60)";
                readonly markupHeading: "var(--color-prettylights-syntax-markup-heading, #1f6feb)";
                readonly markupItalic: "var(--color-prettylights-syntax-markup-italic, #c9d1d9)";
                readonly markupBold: "var(--color-prettylights-syntax-markup-bold, #c9d1d9)";
                readonly markupDeletedText: "var(--color-prettylights-syntax-markup-deleted-text, #ffe2bb)";
                readonly markupDeletedBg: "var(--color-prettylights-syntax-markup-deleted-bg, #4e2906)";
                readonly markupInsertedText: "var(--color-prettylights-syntax-markup-inserted-text, #cae8ff)";
                readonly markupInsertedBg: "var(--color-prettylights-syntax-markup-inserted-bg, #0c2d6b)";
                readonly markupChangedText: "var(--color-prettylights-syntax-markup-changed-text, #ffe2bb)";
                readonly markupChangedBg: "var(--color-prettylights-syntax-markup-changed-bg, #4e2906)";
                readonly markupIgnoredText: "var(--color-prettylights-syntax-markup-ignored-text, #c9d1d9)";
                readonly markupIgnoredBg: "var(--color-prettylights-syntax-markup-ignored-bg, #1158c7)";
                readonly metaDiffRange: "var(--color-prettylights-syntax-meta-diff-range, #d2a8ff)";
                readonly brackethighlighterAngle: "var(--color-prettylights-syntax-brackethighlighter-angle, #8b949e)";
                readonly sublimelinterGutterMark: "var(--color-prettylights-syntax-sublimelinter-gutter-mark, #484f58)";
                readonly constantOtherReferenceLink: "var(--color-prettylights-syntax-constant-other-reference-link, #a5d6ff)";
            };
        };
        readonly codemirror: {
            readonly text: "var(--codeMirror-fgColor, var(--color-codemirror-text, #c9d1d9))";
            readonly bg: "var(--codeMirror-bgColor, var(--color-codemirror-bg, #0d1117))";
            readonly guttersBg: "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, #0d1117))";
            readonly guttermarkerText: "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, #0d1117))";
            readonly guttermarkerSubtleText: "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, #6e7681))";
            readonly linenumberText: "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, #8b949e))";
            readonly cursor: "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, #c9d1d9))";
            readonly selectionBg: "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, rgba(56,139,253,0.4)))";
            readonly activelineBg: "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, rgba(110,118,129,0.1)))";
            readonly matchingbracketText: "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, #c9d1d9))";
            readonly linesBg: "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, #0d1117))";
            readonly syntax: {
                readonly comment: "var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, #8b949e))";
                readonly constant: "var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, #79c0ff))";
                readonly entity: "var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, #d2a8ff))";
                readonly keyword: "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #ec8e2c))";
                readonly storage: "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #ec8e2c))";
                readonly string: "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #a5d6ff))";
                readonly support: "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #79c0ff))";
                readonly variable: "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #fdac54))";
            };
        };
        readonly checks: {
            readonly bg: "var(--color-checks-bg, #010409)";
            readonly runBorderWidth: "var(--color-checks-run-border-width, 1px)";
            readonly containerBorderWidth: "var(--color-checks-container-border-width, 1px)";
            readonly textPrimary: "var(--color-checks-text-primary, #c9d1d9)";
            readonly textSecondary: "var(--color-checks-text-secondary, #8b949e)";
            readonly textLink: "var(--color-checks-text-link, #58a6ff)";
            readonly btnIcon: "var(--color-checks-btn-icon, #8b949e)";
            readonly btnHoverIcon: "var(--color-checks-btn-hover-icon, #c9d1d9)";
            readonly btnHoverBg: "var(--color-checks-btn-hover-bg, rgba(110,118,129,0.1))";
            readonly inputText: "var(--color-checks-input-text, #8b949e)";
            readonly inputPlaceholderText: "var(--color-checks-input-placeholder-text, #6e7681)";
            readonly inputFocusText: "var(--color-checks-input-focus-text, #c9d1d9)";
            readonly inputBg: "var(--color-checks-input-bg, #161b22)";
            readonly inputShadow: "var(--color-checks-input-shadow, 0 0 0 1px #30363d)";
            readonly donutError: "var(--color-checks-donut-error, #d47616)";
            readonly donutPending: "var(--color-checks-donut-pending, #d29922)";
            readonly donutSuccess: "var(--color-checks-donut-success, #388bfd)";
            readonly donutNeutral: "var(--color-checks-donut-neutral, #8b949e)";
            readonly dropdownText: "var(--color-checks-dropdown-text, #c9d1d9)";
            readonly dropdownBg: "var(--color-checks-dropdown-bg, #161b22)";
            readonly dropdownBorder: "var(--color-checks-dropdown-border, #30363d)";
            readonly dropdownShadow: "var(--color-checks-dropdown-shadow, rgba(1,4,9,0.3))";
            readonly dropdownHoverText: "var(--color-checks-dropdown-hover-text, #c9d1d9)";
            readonly dropdownHoverBg: "var(--color-checks-dropdown-hover-bg, rgba(110,118,129,0.1))";
            readonly dropdownBtnHoverText: "var(--color-checks-dropdown-btn-hover-text, #c9d1d9)";
            readonly dropdownBtnHoverBg: "var(--color-checks-dropdown-btn-hover-bg, rgba(110,118,129,0.1))";
            readonly scrollbarThumbBg: "var(--color-checks-scrollbar-thumb-bg, rgba(110,118,129,0.4))";
            readonly headerLabelText: "var(--color-checks-header-label-text, #8b949e)";
            readonly headerLabelOpenText: "var(--color-checks-header-label-open-text, #c9d1d9)";
            readonly headerBorder: "var(--color-checks-header-border, #21262d)";
            readonly headerIcon: "var(--color-checks-header-icon, #8b949e)";
            readonly lineText: "var(--color-checks-line-text, #8b949e)";
            readonly lineNumText: "var(--color-checks-line-num-text, #6e7681)";
            readonly lineTimestampText: "var(--color-checks-line-timestamp-text, #6e7681)";
            readonly lineHoverBg: "var(--color-checks-line-hover-bg, rgba(110,118,129,0.1))";
            readonly lineSelectedBg: "var(--color-checks-line-selected-bg, rgba(56,139,253,0.1))";
            readonly lineSelectedNumText: "var(--color-checks-line-selected-num-text, #58a6ff)";
            readonly lineDtFmText: "var(--color-checks-line-dt-fm-text, #ffffff)";
            readonly lineDtFmBg: "var(--color-checks-line-dt-fm-bg, #9e6a03)";
            readonly gateBg: "var(--color-checks-gate-bg, rgba(187,128,9,0.15))";
            readonly gateText: "var(--color-checks-gate-text, #8b949e)";
            readonly gateWaitingText: "var(--color-checks-gate-waiting-text, #d29922)";
            readonly stepHeaderOpenBg: "var(--color-checks-step-header-open-bg, #161b22)";
            readonly stepErrorText: "var(--color-checks-step-error-text, #d47616)";
            readonly stepWarningText: "var(--color-checks-step-warning-text, #d29922)";
            readonly loglineText: "var(--color-checks-logline-text, #8b949e)";
            readonly loglineNumText: "var(--color-checks-logline-num-text, #6e7681)";
            readonly loglineDebugText: "var(--color-checks-logline-debug-text, #a371f7)";
            readonly loglineErrorText: "var(--color-checks-logline-error-text, #8b949e)";
            readonly loglineErrorNumText: "var(--color-checks-logline-error-num-text, #6e7681)";
            readonly loglineErrorBg: "var(--color-checks-logline-error-bg, rgba(212,118,22,0.1))";
            readonly loglineWarningText: "var(--color-checks-logline-warning-text, #8b949e)";
            readonly loglineWarningNumText: "var(--color-checks-logline-warning-num-text, #d29922)";
            readonly loglineWarningBg: "var(--color-checks-logline-warning-bg, rgba(187,128,9,0.15))";
            readonly loglineCommandText: "var(--color-checks-logline-command-text, #58a6ff)";
            readonly loglineSectionText: "var(--color-checks-logline-section-text, #58a6ff)";
            readonly ansi: {
                readonly black: "var(--color-checks-ansi-black, #0d1117)";
                readonly blackBright: "var(--color-checks-ansi-black-bright, #161b22)";
                readonly white: "var(--color-checks-ansi-white, #b1bac4))";
                readonly whiteBright: "var(--color-checks-ansi-white-bright, #b1bac4)";
                readonly gray: "var(--color-checks-ansi-gray, #6e7681)";
                readonly red: "var(--color-checks-ansi-red, #ec8e2c)";
                readonly redBright: "var(--color-checks-ansi-red-bright, #fdac54)";
                readonly green: "var(--color-checks-ansi-green, #58a6ff)";
                readonly greenBright: "var(--color-checks-ansi-green-bright, #79c0ff)";
                readonly yellow: "var(--color-checks-ansi-yellow, #d29922)";
                readonly yellowBright: "var(--color-checks-ansi-yellow-bright, #e3b341)";
                readonly blue: "var(--color-checks-ansi-blue, #58a6ff)";
                readonly blueBright: "var(--color-checks-ansi-blue-bright, #79c0ff)";
                readonly magenta: "var(--color-checks-ansi-magenta, #bc8cff)";
                readonly magentaBright: "var(--color-checks-ansi-magenta-bright, #d2a8ff)";
                readonly cyan: "var(--color-checks-ansi-cyan, #76e3ea)";
                readonly cyanBright: "var(--color-checks-ansi-cyan-bright, #b3f0ff)";
            };
        };
        readonly project: {
            readonly headerBg: "var(--color-project-header-bg, #0d1117)";
            readonly sidebarBg: "var(--color-project-sidebar-bg, #161b22)";
            readonly gradientIn: "var(--color-project-gradient-in, #161b22)";
            readonly gradientOut: "var(--color-project-gradient-out, rgba(22,27,34,0))";
        };
        readonly mktg: {
            readonly btn: {
                readonly bg: "var(--color-mktg-btn-bg, #f6f8fa))";
                readonly shadow: {
                    readonly outline: "var(--color-mktg-btn-shadow-outline, rgb(255 255 255 / 25%) 0 0 0 1px inset))";
                    readonly focus: "var(--color-mktg-btn-shadow-focus, rgb(255 255 255 / 25%) 0 0 0 4px))";
                    readonly hover: "var(--color-mktg-btn-shadow-hover, 0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)))";
                    readonly hoverMuted: "var(--color-mktg-btn-shadow-hover-muted, rgb(255 255 255) 0 0 0 2px inset))";
                };
            };
        };
        readonly control: {
            readonly borderColor: {
                readonly emphasis: "var(--control-borderColor-emphasis, var(--color-control-border-color-emphasis, #606771))";
            };
        };
        readonly avatar: {
            readonly bg: "var(--avatar-bgColor, var(--color-avatar-bg, rgba(255,255,255,0.1)))";
            readonly border: "var(--avatar-borderColor, var(--color-avatar-border, rgba(240,246,252,0.1)))";
            readonly stackFade: "var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, #30363d))";
            readonly stackFadeMore: "var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, #21262d))";
            readonly childShadow: "var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px #0d1117))";
        };
        readonly topicTag: {
            readonly border: "var(--topicTag-borderColor, var(--color-topic-tag-border, transparent))";
        };
        readonly counter: {
            readonly border: "var(--counter-borderColor, var(--color-counter-border, transparent))";
        };
        readonly selectMenu: {
            readonly backdropBorder: "var(--selectMenu-borderColor, var(--color-select-menu-backdrop-border, #484f58))";
            readonly tapHighlight: "var(--control-bgColor-active, var(--color-select-menu-tap-highlight, rgba(48,54,61,0.5)))";
            readonly tapFocusBg: "var(--selectMenu-bgColor-active, var(--color-select-menu-tap-focus-bg, #0c2d6b))";
        };
        readonly overlay: {
            readonly shadow: "var(--shadow-floating-small, var(--color-overlay-shadow, 0 0 0 1px #30363d, 0 16px 32px rgba(1,4,9,0.85)))";
            readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, rgba(22,27,34,0.4)))";
        };
        readonly header: {
            readonly text: "var(--header-fgColor-default, var(--color-header-text, rgba(255,255,255,0.7)))";
            readonly bg: "var(--header-bgColor, var(--color-header-bg, #161b22))";
            readonly divider: "var(--header-borderColor-divider, var(--color-header-divider, #8b949e))";
            readonly logo: "var(--header-fgColor-logo, var(--color-header-logo, #f0f6fc))";
        };
        readonly headerSearch: {
            readonly bg: "var(--headerSearch-bgColor, var(--color-header-search-bg, #0d1117))";
            readonly border: "var(--headerSearch-borderColor, var(--color-header-search-border, #30363d))";
        };
        readonly sidenav: {
            readonly selectedBg: "var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, #21262d))";
        };
        readonly menu: {
            readonly bgActive: "var(--menu-bgColor-active, var(--color-menu-bg-active, #161b22))";
        };
        readonly input: {
            readonly disabledBg: "var(--control-bgColor-disabled, var(--color-input-disabled-bg, rgba(110,118,129,0)))";
        };
        readonly timeline: {
            readonly badgeBg: "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #21262d))";
        };
        readonly ansi: {
            readonly black: "var(--color-ansi-black, #484f58)";
            readonly blackBright: "var(--color-ansi-black-bright, #6e7681)";
            readonly white: "var(--color-ansi-white, #b1bac4)";
            readonly whiteBright: "var(--color-ansi-white-bright, #ffffff)";
            readonly gray: "var(--color-ansi-gray, #6e7681)";
            readonly red: "var(--color-ansi-red, #ec8e2c)";
            readonly redBright: "var(--color-ansi-red-bright, #fdac54)";
            readonly green: "var(--color-ansi-green, #58a6ff)";
            readonly greenBright: "var(--color-ansi-green-bright, #79c0ff)";
            readonly yellow: "var(--color-ansi-yellow, #d29922)";
            readonly yellowBright: "var(--color-ansi-yellow-bright, #e3b341)";
            readonly blue: "var(--color-ansi-blue, #58a6ff)";
            readonly blueBright: "var(--color-ansi-blue-bright, #79c0ff)";
            readonly magenta: "var(--color-ansi-magenta, #bc8cff)";
            readonly magentaBright: "var(--color-ansi-magenta-bright, #d2a8ff)";
            readonly cyan: "var(--color-ansi-cyan, #39c5cf)";
            readonly cyanBright: "var(--color-ansi-cyan-bright, #56d4dd)";
        };
        readonly btn: {
            readonly text: "var(--button-default-fgColor-rest, var(--color-btn-text, #c9d1d9))";
            readonly bg: "var(--button-default-bgColor-rest, var(--color-btn-bg, #21262d))";
            readonly border: "var(--button-default-borderColor-rest, var(--color-btn-border, rgba(240,246,252,0.1)))";
            readonly shadow: "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 0 transparent))";
            readonly insetShadow: "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, 0 0 transparent))";
            readonly hoverBg: "var(--button-default-bgColor-hover, var(--color-btn-hover-bg, #30363d))";
            readonly hoverBorder: "var(--button-default-borderColor-hover, var(--color-btn-hover-border, #8b949e))";
            readonly activeBg: "var(--button-default-bgColor-active, var(--color-btn-active-bg, hsla(212,12%,18%,1)))";
            readonly activeBorder: "var(--button-default-borderColor-active, var(--color-btn-active-border, #6e7681))";
            readonly selectedBg: "var(--button-default-bgColor-selected, var(--color-btn-selected-bg, #161b22))";
            readonly counterBg: "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, #30363d))";
            readonly primary: {
                readonly text: "var(--button-primary-fgColor-rest, var(--color-btn-primary-text, #ffffff))";
                readonly bg: "var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, #1f6feb))";
                readonly border: "var(--button-primary-borderColor-rest, var(--color-btn-primary-border, rgba(240,246,252,0.1)))";
                readonly shadow: "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 0 transparent))";
                readonly insetShadow: "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, 0 0 transparent))";
                readonly hoverBg: "var(--button-primary-bgColor-hover, var(--color-btn-primary-hover-bg, #388bfd))";
                readonly hoverBorder: "var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, rgba(240,246,252,0.1)))";
                readonly selectedBg: "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, #1f6feb))";
                readonly selectedShadow: "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, rgba(255,255,255,0.5)))";
                readonly disabledBg: "var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, rgba(31,111,235,0.6)))";
                readonly disabledBorder: "var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, rgba(240,246,252,0.1)))";
                readonly icon: "var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, #ffffff))";
                readonly counterBg: "var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, rgba(5,29,77,0.2)))";
            };
            readonly outline: {
                readonly text: "var(--button-outline-fgColor-rest, var(--color-btn-outline-text, #388bfd))";
                readonly hoverText: "var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, #58a6ff))";
                readonly hoverBg: "var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, #30363d))";
                readonly hoverBorder: "var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, rgba(240,246,252,0.1)))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))// HI_KATIE: no matches";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))// HI_KATIE: no matches";
                readonly hoverCounterBg: "var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, rgba(5,29,77,0.2)))";
                readonly selectedText: "var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, #ffffff))";
                readonly selectedBg: "var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, #0d419d))";
                readonly selectedBorder: "var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, rgba(240,246,252,0.1)))";
                readonly selectedShadow: "var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-outline-fgColor-disabled, var(--color-btn-outline-disabled-text, rgba(88,166,255,0.5)))";
                readonly disabledBg: "var(--button-outline-bgColor-disabled, var(--color-btn-outline-disabled-bg, #0d1117))";
                readonly disabledCounterBg: "var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, rgba(31,111,235,0.05)))";
                readonly counterBg: "var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, rgba(5,29,77,0.2)))";
                readonly hoverCounterFg: "var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, #58a6ff))";
                readonly disabledCounterFg: "var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, rgba(88,166,255,0.5)))";
                readonly counterFg: "var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, #388bfd))";
            };
            readonly danger: {
                readonly text: "var(--button-danger-fgColor-rest, var(--color-btn-danger-text, #d47616))";
                readonly hoverText: "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, #ffffff))";
                readonly hoverBg: "var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, #b76100))";
                readonly hoverBorder: "var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, #d47616))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 0 transparent))";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, 0 0 transparent))";
                readonly hoverIcon: "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, #ffffff))";
                readonly hoverCounterBg: "var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, rgba(255,255,255,0.2)))";
                readonly selectedText: "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))";
                readonly selectedBg: "var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, #914d04))";
                readonly selectedBorder: "var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, #ec8e2c))";
                readonly selectedShadow: "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(212,118,22,0.5)))";
                readonly disabledBg: "var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, #0d1117))";
                readonly disabledCounterBg: "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(183,97,0,0.05)))";
                readonly counterBg: "var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, rgba(51,28,4,0.2)))";
                readonly icon: "var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, #d47616))";
                readonly counterFg: "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, #d47616))";
                readonly disabledCounterFg: "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, rgba(212,118,22,0.5)))";
                readonly hoverCounterFg: "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #ffffff))";
            };
            readonly inactive: {
                readonly bg: "var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, #21262d))";
                readonly text: "var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, #8b949e))";
            };
        };
        readonly underlinenav: {
            readonly icon: "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, #6e7681))";
            readonly borderHover: "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, rgba(110,118,129,0.4)))";
        };
        readonly actionListItem: {
            readonly inlineDivider: "var(--borderColor-muted, var(--color-action-list-item-inline-divider, rgba(48,54,61,0.48)))";
            readonly default: {
                readonly hoverBg: "var(--control-transparent-bgColor-hover, var(--color-action-list-item-default-hover-bg, rgba(177,186,196,0.12)))";
                readonly hoverBorder: "var(--control-transparent-borderColor-hover, var(--color-action-list-item-default-hover-border, transparent))";
                readonly activeBg: "var(--control-transparent-bgColor-active, var(--color-action-list-item-default-active-bg, rgba(177,186,196,0.2)))";
                readonly activeBorder: "var(--control-transparent-borderColor-active, var(--color-action-list-item-default-active-border, transparent))";
                readonly selectedBg: "var(--control-transparent-bgColor-selected, var(--color-action-list-item-default-selected-bg, rgba(177,186,196,0.08)))";
            };
            readonly danger: {
                readonly hoverBg: "var(--control-danger-bgColor-hover, var(--color-action-list-item-danger-hover-bg, rgba(212,118,22,0.16)))";
                readonly activeBg: "var(--control-danger-bgColor-active, var(--color-action-list-item-danger-active-bg, rgba(212,118,22,0.24)))";
                readonly hoverText: "var(--control-danger-fgColor-hover, var(--color-action-list-item-danger-hover-text, #ec8e2c))";
            };
        };
        readonly switchTrack: {
            readonly bg: "var(--controlTrack-bgColor-rest, var(--color-switch-track-bg, rgba(110,118,129,0.1)))";
            readonly hoverBg: "var(--controlTrack-bgColor-hover, var(--color-switch-track-hover-bg, hsla(215,8%,72%,0.1)))";
            readonly activeBg: "var(--controlTrack-bgColor-active, var(--color-switch-track-active-bg, rgba(110,118,129,0.4)))";
            readonly disabledBg: "var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, #21262d))";
            readonly fg: "var(--controlTrack-fgColor-rest, var(--color-switch-track-fg, #8b949e))";
            readonly disabledFg: "var(--controlTrack-fgColor-disabled, var(--color-switch-track-disabled-fg, #010409))";
            readonly border: "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))";
            readonly checked: {
                readonly bg: "var(--control-checked-bgColor-rest, var(--color-switch-track-checked-bg, rgba(31,111,235,0.35)))";
                readonly hoverBg: "var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, rgba(31,111,235,0.5)))";
                readonly activeBg: "var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, rgba(31,111,235,0.65)))";
                readonly fg: "var(--control-checked-fgColor-rest, var(--color-switch-track-checked-fg, #ffffff))";
                readonly disabledFg: "var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, #010409))";
                readonly border: "var(--borderColor-transparent, var(--color-switch-track-checked-border, transparent))";
            };
        };
        readonly switchKnob: {
            readonly bg: "var(--controlKnob-bgColor-rest, var(--color-switch-knob-bg, #0d1117))";
            readonly border: "var(--controlKnob-borderColor-rest, var(--color-switch-knob-border, #606771))";
            readonly disabledBg: "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-disabled-bg, #161b22))";
            readonly checked: {
                readonly bg: "var(--controlKnob-bgColor-checked, var(--color-switch-knob-checked-bg, #0d1117))";
                readonly disabledBg: "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-checked-disabled-bg, #161b22))";
                readonly border: "var(--controlKnob-borderColor-checked, var(--color-switch-knob-checked-border, rgba(31,111,235,0.35)))";
            };
        };
        readonly segmentedControl: {
            readonly bg: "var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, rgba(110,118,129,0.1)))";
            readonly button: {
                readonly bg: "var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, #0d1117))";
                readonly hover: {
                    readonly bg: "var(--controlTrack-bgColor-hover, var(--color-segmented-control-button-hover-bg, #30363d))";
                };
                readonly active: {
                    readonly bg: "var(--controlTrack-bgColor-active, var(--color-segmented-control-button-active-bg, #21262d))";
                };
                readonly selected: {
                    readonly border: "var(--controlKnob-borderColor-rest, var(--color-segmented-control-button-selected-border, #6e7681))";
                };
            };
        };
        readonly treeViewItem: {
            readonly chevron: {
                readonly hoverBg: "var(--control-transparent-bgColor-hover, var(--color-tree-view-item-chevron-hover-bg, rgba(177,186,196,0.12)))";
            };
            readonly directory: {
                readonly fill: "var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-directory-fill, #8b949e))";
            };
        };
        readonly fg: {
            readonly default: "var(--fgColor-default, var(--color-fg-default, #c9d1d9))";
            readonly muted: "var(--fgColor-muted, var(--color-fg-muted, #8b949e))";
            readonly subtle: "var(--fgColor-muted, var(--color-fg-subtle, #6e7681))";
            readonly onEmphasis: "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))";
        };
        readonly canvas: {
            readonly default: "var(--bgColor-default, var(--color-canvas-default, #0d1117))";
            readonly overlay: "var(--overlay-bgColor, var(--color-canvas-overlay, #161b22))";
            readonly inset: "var(--bgColor-inset, var(--color-canvas-inset, #010409))";
            readonly subtle: "var(--bgColor-muted, var(--color-canvas-subtle, #161b22))";
        };
        readonly border: {
            readonly default: "var(--borderColor-default, var(--color-border-default, #30363d))";
            readonly muted: "var(--borderColor-muted, var(--color-border-muted, #21262d))";
            readonly subtle: "var(--borderColor-muted, var(--color-border-subtle, rgba(240,246,252,0.1)))";
        };
        readonly shadow: {
            readonly small: "var(--shadow-resting-small, var(--color-shadow-small, 0 0 transparent))";
            readonly medium: "var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px #010409))";
            readonly large: "var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px #010409))";
            readonly extraLarge: "var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 48px #010409))";
        };
        readonly neutral: {
            readonly emphasisPlus: "var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, #6e7681))";
            readonly emphasis: "var(--bgColor-neutral-emphasis, var(--color-neutral-emphasis, #6e7681))";
            readonly muted: "var(--bgColor-neutral-muted, var(--color-neutral-muted, rgba(110,118,129,0.4)))";
            readonly subtle: "var(--bgColor-neutral-muted, var(--color-neutral-subtle, rgba(110,118,129,0.1)))";
        };
        readonly accent: {
            readonly fg: "var(--fgColor-accent, var(--color-accent-fg, #58a6ff))";
            readonly emphasis: "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #1f6feb))";
            readonly muted: "var(--borderColor-accent-muted, var(--color-accent-muted, rgba(56,139,253,0.4)))";
            readonly subtle: "var(--bgColor-accent-muted, var(--color-accent-subtle, rgba(56,139,253,0.1)))";
        };
        readonly success: {
            readonly fg: "var(--fgColor-success, var(--color-success-fg, #58a6ff))";
            readonly emphasis: "var(--bgColor-success-emphasis, var(--color-success-emphasis, #1f6feb))";
            readonly muted: "var(--borderColor-success-muted, var(--color-success-muted, rgba(56,139,253,0.4)))";
            readonly subtle: "var(--bgColor-success-muted, var(--color-success-subtle, rgba(56,139,253,0.15)))";
        };
        readonly attention: {
            readonly fg: "var(--fgColor-attention, var(--color-attention-fg, #d29922))";
            readonly emphasis: "var(--bgColor-attention-emphasis, var(--color-attention-emphasis, #9e6a03))";
            readonly muted: "var(--borderColor-attention-muted, var(--color-attention-muted, rgba(187,128,9,0.4)))";
            readonly subtle: "var(--bgColor-attention-muted, var(--color-attention-subtle, rgba(187,128,9,0.15)))";
        };
        readonly severe: {
            readonly fg: "var(--fgColor-severe, var(--color-severe-fg, #d47616))";
            readonly emphasis: "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #b76100))";
            readonly muted: "var(--borderColor-severe-muted, var(--color-severe-muted, rgba(212,118,22,0.4)))";
            readonly subtle: "var(--bgColor-severe-muted, var(--color-severe-subtle, rgba(212,118,22,0.1)))";
        };
        readonly danger: {
            readonly fg: "var(--fgColor-danger, var(--color-danger-fg, #d47616))";
            readonly emphasis: "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #b76100))";
            readonly muted: "var(--borderColor-danger-muted, var(--color-danger-muted, rgba(212,118,22,0.4)))";
            readonly subtle: "var(--bgColor-danger-muted, var(--color-danger-subtle, rgba(212,118,22,0.1)))";
        };
        readonly open: {
            readonly fg: "var(--fgColor-open, var(--color-open-fg, #ec8e2c))";
            readonly emphasis: "var(--borderColor-open-emphasis, var(--color-open-emphasis, #b76100))";
            readonly muted: "var(--borderColor-open-muted, var(--color-open-muted, rgba(212,118,22,0.4)))";
            readonly subtle: "var(--bgColor-open-muted, var(--color-open-subtle, rgba(212,118,22,0.15)))";
        };
        readonly closed: {
            readonly fg: "var(--fgColor-closed, var(--color-open-fg, #8b949e))";
            readonly emphasis: "var(--borderColor-closed-emphasis, var(--color-closed-emphasis, #6e7681))";
            readonly muted: "var(--borderColor-closed-muted, var(--color-closed-muted, rgba(110,118,129,0.4)))";
            readonly subtle: "var(--bgColor-closed-muted, var(--color-closed-subtle, rgba(110,118,129,0.1)))";
        };
        readonly done: {
            readonly fg: "var(--fgColor-done, var(--color-done-fg, #a371f7))";
            readonly emphasis: "var(--bgColor-done-emphasis, var(--color-done-emphasis, #8957e5))";
            readonly muted: "var(--borderColor-done-muted, var(--color-done-muted, rgba(163,113,247,0.4)))";
            readonly subtle: "var(--bgColor-done-muted, var(--color-done-subtle, rgba(163,113,247,0.1)))";
        };
        readonly sponsors: {
            readonly fg: "var(--fgColor-sponsors, var(--color-sponsors-fg, #db61a2))";
            readonly emphasis: "var(--bgColor-sponsors-emphasis, var(--color-sponsors-emphasis, #bf4b8a))";
            readonly muted: "var(--borderColor-sponsors-muted, var(--color-sponsors-muted, rgba(219,97,162,0.4)))";
            readonly subtle: "var(--bgColor-sponsors-muted, var(--color-sponsors-subtle, rgba(219,97,162,0.1)))";
        };
        readonly primer: {
            readonly fg: {
                readonly disabled: "var(--fgColor-disabled, var(--color-primer-fg-disabled, #484f58))";
            };
            readonly canvas: {
                readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-primer-canvas-backdrop, rgba(1,4,9,0.8)))";
                readonly sticky: "var(--color-primer-canvas-sticky, rgba(13,17,23,0.95))";
            };
            readonly border: {
                readonly active: "var(--underlineNav-borderColor-active, var(--color-primer-border-active, #f78166))";
                readonly contrast: "var(--borderColor-muted, var(--color-primer-border-contrast, rgba(255,255,255,0.2)))";
            };
            readonly shadow: {
                readonly highlight: "var(--shadow-highlight, var(--color-primer-shadow-highlight, 0 0 transparent))";
                readonly inset: "var(--shadow-inset, var(--color-primer-shadow-inset, 0 0 transparent))";
            };
        };
        readonly scale: {
            readonly black: "#010409";
            readonly white: "#ffffff";
            readonly gray: readonly ["#f0f6fc", "#c9d1d9", "#b1bac4", "#8b949e", "#6e7681", "#484f58", "#30363d", "#21262d", "#161b22", "#0d1117"];
            readonly blue: readonly ["#cae8ff", "#a5d6ff", "#79c0ff", "#58a6ff", "#388bfd", "#1f6feb", "#1158c7", "#0d419d", "#0c2d6b", "#051d4d"];
            readonly green: readonly ["#cae8ff", "#a5d6ff", "#79c0ff", "#58a6ff", "#388bfd", "#1f6feb", "#1158c7", "#0d419d", "#0c2d6b", "#051d4d"];
            readonly yellow: readonly ["#f8e3a1", "#f2cc60", "#e3b341", "#d29922", "#bb8009", "#9e6a03", "#845306", "#693e00", "#4b2900", "#341a00"];
            readonly orange: readonly ["#ffe2bb", "#ffc981", "#fdac54", "#ec8e2c", "#d47616", "#b76100", "#914d04", "#6c3906", "#4e2906", "#331c04"];
            readonly red: readonly ["#ffe2bb", "#ffc981", "#fdac54", "#ec8e2c", "#d47616", "#b76100", "#914d04", "#6c3906", "#4e2906", "#331c04"];
            readonly purple: readonly ["#eddeff", "#e2c5ff", "#d2a8ff", "#bc8cff", "#a371f7", "#8957e5", "#6e40c9", "#553098", "#3c1e70", "#271052"];
            readonly pink: readonly ["#ffdaec", "#ffbedd", "#ff9bce", "#f778ba", "#db61a2", "#bf4b8a", "#9e3670", "#7d2457", "#5e103e", "#42062a"];
            readonly coral: readonly ["#ffddd2", "#ffc2b2", "#ffa28b", "#f78166", "#ea6045", "#cf462d", "#ac3220", "#872012", "#640d04", "#460701"];
        };
    };
    dark_tritanopia: {
        readonly canvasDefaultTransparent: "var(--bgColor-transparent, var(--color-canvas-default-transparent, rgba(13,17,23,0)))";
        readonly pageHeaderBg: "var(--page-header-bgColor, var(--color-page-header-bg, #0d1117))";
        readonly marketingIcon: {
            readonly primary: "var(--color-marketing-icon-primary, #79c0ff)";
            readonly secondary: "var(--color-marketing-icon-secondary, #1f6feb)";
        };
        readonly diffBlob: {
            readonly addition: {
                readonly numText: "var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, #c9d1d9))";
                readonly fg: "var(--diffBlob-addition-fgColor-text, var(--color-diff-blob-addition-fg, #c9d1d9))";
                readonly numBg: "var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg, rgba(88,166,255,0.3)))";
                readonly lineBg: "var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg, rgba(56,139,253,0.15)))";
                readonly wordBg: "var(--diffBlob-addition-bgColor-word, var(--color-diff-blob-addition-word-bg, rgba(56,139,253,0.4)))";
            };
            readonly deletion: {
                readonly numText: "var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, #c9d1d9))";
                readonly fg: "var(--diffBlob-deletion-fgColor-text, var(--color-diff-blob-deletion-fg, #c9d1d9))";
                readonly numBg: "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, rgba(248,81,73,0.3)))";
                readonly lineBg: "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, rgba(248,81,73,0.1)))";
                readonly wordBg: "var(--diffBlob-deletion-bgColor-word, var(--color-diff-blob-deletion-word-bg, rgba(248,81,73,0.4)))";
            };
            readonly hunk: {
                readonly numBg: "var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg, rgba(56,139,253,0.4)))";
            };
            readonly expander: {
                readonly icon: "var(--diffBlob-expander-iconColor, var(--color-diff-blob-expander-icon, #8b949e))";
            };
            readonly selectedLineHighlightMixBlendMode: "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, screen)";
        };
        readonly diffstat: {
            readonly deletionBorder: "var(--color-diffstat-deletion-border, rgba(240,246,252,0.1))";
            readonly additionBorder: "var(--color-diffstat-addition-border, rgba(240,246,252,0.1))";
            readonly additionBg: "var(--diffStat-addition-bgColor, var(--color-diffstat-addition-bg, #58a6ff))";
        };
        readonly searchKeyword: {
            readonly hl: "var(--highlight-neutral-bgColor, var(--color-search-keyword-hl, rgba(210,153,34,0.4)))";
        };
        readonly prettylights: {
            readonly syntax: {
                readonly comment: "var(--color-prettylights-syntax-comment, #8b949e)";
                readonly constant: "var(--color-prettylights-syntax-constant, #79c0ff)";
                readonly entity: "var(--color-prettylights-syntax-entity, #d2a8ff)";
                readonly storageModifierImport: "var(--color-prettylights-syntax-storage-modifier-import, #c9d1d9)";
                readonly entityTag: "var(--color-prettylights-syntax-entity-tag, #a5d6ff)";
                readonly keyword: "var(--color-prettylights-syntax-keyword, #ff7b72)";
                readonly string: "var(--color-prettylights-syntax-string, #a5d6ff)";
                readonly variable: "var(--color-prettylights-syntax-variable, #ffa198)";
                readonly brackethighlighterUnmatched: "var(--color-prettylights-syntax-brackethighlighter-unmatched, #f85149)";
                readonly invalidIllegalText: "var(--color-prettylights-syntax-invalid-illegal-text, #f0f6fc)";
                readonly invalidIllegalBg: "var(--color-prettylights-syntax-invalid-illegal-bg, #8e1519)";
                readonly carriageReturnText: "var(--color-prettylights-syntax-carriage-return-text, #f0f6fc)";
                readonly carriageReturnBg: "var(--color-prettylights-syntax-carriage-return-bg, #b62324)";
                readonly stringRegexp: "var(--color-prettylights-syntax-string-regexp, #a5d6ff)";
                readonly markupList: "var(--color-prettylights-syntax-markup-list, #f2cc60)";
                readonly markupHeading: "var(--color-prettylights-syntax-markup-heading, #1f6feb)";
                readonly markupItalic: "var(--color-prettylights-syntax-markup-italic, #c9d1d9)";
                readonly markupBold: "var(--color-prettylights-syntax-markup-bold, #c9d1d9)";
                readonly markupDeletedText: "var(--color-prettylights-syntax-markup-deleted-text, #ffdcd7)";
                readonly markupDeletedBg: "var(--color-prettylights-syntax-markup-deleted-bg, #67060c)";
                readonly markupInsertedText: "var(--color-prettylights-syntax-markup-inserted-text, #cae8ff)";
                readonly markupInsertedBg: "var(--color-prettylights-syntax-markup-inserted-bg, #0c2d6b)";
                readonly markupChangedText: "var(--color-prettylights-syntax-markup-changed-text, #ffdcd7)";
                readonly markupChangedBg: "var(--color-prettylights-syntax-markup-changed-bg, #67060c)";
                readonly markupIgnoredText: "var(--color-prettylights-syntax-markup-ignored-text, #c9d1d9)";
                readonly markupIgnoredBg: "var(--color-prettylights-syntax-markup-ignored-bg, #1158c7)";
                readonly metaDiffRange: "var(--color-prettylights-syntax-meta-diff-range, #d2a8ff)";
                readonly brackethighlighterAngle: "var(--color-prettylights-syntax-brackethighlighter-angle, #8b949e)";
                readonly sublimelinterGutterMark: "var(--color-prettylights-syntax-sublimelinter-gutter-mark, #484f58)";
                readonly constantOtherReferenceLink: "var(--color-prettylights-syntax-constant-other-reference-link, #a5d6ff)";
            };
        };
        readonly codemirror: {
            readonly text: "var(--codeMirror-fgColor, var(--color-codemirror-text, #c9d1d9))";
            readonly bg: "var(--codeMirror-bgColor, var(--color-codemirror-bg, #0d1117))";
            readonly guttersBg: "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, #0d1117))";
            readonly guttermarkerText: "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, #0d1117))";
            readonly guttermarkerSubtleText: "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, #6e7681))";
            readonly linenumberText: "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, #8b949e))";
            readonly cursor: "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, #c9d1d9))";
            readonly selectionBg: "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, rgba(56,139,253,0.4)))";
            readonly activelineBg: "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, rgba(110,118,129,0.1)))";
            readonly matchingbracketText: "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, #c9d1d9))";
            readonly linesBg: "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, #0d1117))";
            readonly syntax: {
                readonly comment: "var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, #8b949e))";
                readonly constant: "var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, #79c0ff))";
                readonly entity: "var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, #d2a8ff))";
                readonly keyword: "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #ff7b72))";
                readonly storage: "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #ff7b72))";
                readonly string: "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #a5d6ff))";
                readonly support: "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #79c0ff))";
                readonly variable: "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #ffa198))";
            };
        };
        readonly checks: {
            readonly bg: "var(--color-checks-bg, #010409)";
            readonly runBorderWidth: "var(--color-checks-run-border-width, 1px)";
            readonly containerBorderWidth: "var(--color-checks-container-border-width, 1px)";
            readonly textPrimary: "var(--color-checks-text-primary, #c9d1d9)";
            readonly textSecondary: "var(--color-checks-text-secondary, #8b949e)";
            readonly textLink: "var(--color-checks-text-link, #58a6ff)";
            readonly btnIcon: "var(--color-checks-btn-icon, #8b949e)";
            readonly btnHoverIcon: "var(--color-checks-btn-hover-icon, #c9d1d9)";
            readonly btnHoverBg: "var(--color-checks-btn-hover-bg, rgba(110,118,129,0.1))";
            readonly inputText: "var(--color-checks-input-text, #8b949e)";
            readonly inputPlaceholderText: "var(--color-checks-input-placeholder-text, #6e7681)";
            readonly inputFocusText: "var(--color-checks-input-focus-text, #c9d1d9)";
            readonly inputBg: "var(--color-checks-input-bg, #161b22)";
            readonly inputShadow: "var(--color-checks-input-shadow, 0 0 0 1px #30363d)";
            readonly donutError: "var(--color-checks-donut-error, #f85149)";
            readonly donutPending: "var(--color-checks-donut-pending, #d29922)";
            readonly donutSuccess: "var(--color-checks-donut-success, #388bfd)";
            readonly donutNeutral: "var(--color-checks-donut-neutral, #8b949e)";
            readonly dropdownText: "var(--color-checks-dropdown-text, #c9d1d9)";
            readonly dropdownBg: "var(--color-checks-dropdown-bg, #161b22)";
            readonly dropdownBorder: "var(--color-checks-dropdown-border, #30363d)";
            readonly dropdownShadow: "var(--color-checks-dropdown-shadow, rgba(1,4,9,0.3))";
            readonly dropdownHoverText: "var(--color-checks-dropdown-hover-text, #c9d1d9)";
            readonly dropdownHoverBg: "var(--color-checks-dropdown-hover-bg, rgba(110,118,129,0.1))";
            readonly dropdownBtnHoverText: "var(--color-checks-dropdown-btn-hover-text, #c9d1d9)";
            readonly dropdownBtnHoverBg: "var(--color-checks-dropdown-btn-hover-bg, rgba(110,118,129,0.1))";
            readonly scrollbarThumbBg: "var(--color-checks-scrollbar-thumb-bg, rgba(110,118,129,0.4))";
            readonly headerLabelText: "var(--color-checks-header-label-text, #8b949e)";
            readonly headerLabelOpenText: "var(--color-checks-header-label-open-text, #c9d1d9)";
            readonly headerBorder: "var(--color-checks-header-border, #21262d)";
            readonly headerIcon: "var(--color-checks-header-icon, #8b949e)";
            readonly lineText: "var(--color-checks-line-text, #8b949e)";
            readonly lineNumText: "var(--color-checks-line-num-text, #6e7681)";
            readonly lineTimestampText: "var(--color-checks-line-timestamp-text, #6e7681)";
            readonly lineHoverBg: "var(--color-checks-line-hover-bg, rgba(110,118,129,0.1))";
            readonly lineSelectedBg: "var(--color-checks-line-selected-bg, rgba(56,139,253,0.1))";
            readonly lineSelectedNumText: "var(--color-checks-line-selected-num-text, #58a6ff)";
            readonly lineDtFmText: "var(--color-checks-line-dt-fm-text, #ffffff)";
            readonly lineDtFmBg: "var(--color-checks-line-dt-fm-bg, #9e6a03)";
            readonly gateBg: "var(--color-checks-gate-bg, rgba(187,128,9,0.15))";
            readonly gateText: "var(--color-checks-gate-text, #8b949e)";
            readonly gateWaitingText: "var(--color-checks-gate-waiting-text, #d29922)";
            readonly stepHeaderOpenBg: "var(--color-checks-step-header-open-bg, #161b22)";
            readonly stepErrorText: "var(--color-checks-step-error-text, #f85149)";
            readonly stepWarningText: "var(--color-checks-step-warning-text, #d29922)";
            readonly loglineText: "var(--color-checks-logline-text, #8b949e)";
            readonly loglineNumText: "var(--color-checks-logline-num-text, #6e7681)";
            readonly loglineDebugText: "var(--color-checks-logline-debug-text, #a371f7)";
            readonly loglineErrorText: "var(--color-checks-logline-error-text, #8b949e)";
            readonly loglineErrorNumText: "var(--color-checks-logline-error-num-text, #6e7681)";
            readonly loglineErrorBg: "var(--color-checks-logline-error-bg, rgba(248,81,73,0.1))";
            readonly loglineWarningText: "var(--color-checks-logline-warning-text, #8b949e)";
            readonly loglineWarningNumText: "var(--color-checks-logline-warning-num-text, #d29922)";
            readonly loglineWarningBg: "var(--color-checks-logline-warning-bg, rgba(187,128,9,0.15))";
            readonly loglineCommandText: "var(--color-checks-logline-command-text, #58a6ff)";
            readonly loglineSectionText: "var(--color-checks-logline-section-text, #58a6ff)";
            readonly ansi: {
                readonly black: "var(--color-checks-ansi-black, #0d1117)";
                readonly blackBright: "var(--color-checks-ansi-black-bright, #161b22)";
                readonly white: "var(--color-checks-ansi-white, #b1bac4))";
                readonly whiteBright: "var(--color-checks-ansi-white-bright, #b1bac4)";
                readonly gray: "var(--color-checks-ansi-gray, #6e7681)";
                readonly red: "var(--color-checks-ansi-red, #ff7b72)";
                readonly redBright: "var(--color-checks-ansi-red-bright, #ffa198)";
                readonly green: "var(--color-checks-ansi-green, #58a6ff)";
                readonly greenBright: "var(--color-checks-ansi-green-bright, #79c0ff)";
                readonly yellow: "var(--color-checks-ansi-yellow, #d29922)";
                readonly yellowBright: "var(--color-checks-ansi-yellow-bright, #e3b341)";
                readonly blue: "var(--color-checks-ansi-blue, #58a6ff)";
                readonly blueBright: "var(--color-checks-ansi-blue-bright, #79c0ff)";
                readonly magenta: "var(--color-checks-ansi-magenta, #bc8cff)";
                readonly magentaBright: "var(--color-checks-ansi-magenta-bright, #d2a8ff)";
                readonly cyan: "var(--color-checks-ansi-cyan, #76e3ea)";
                readonly cyanBright: "var(--color-checks-ansi-cyan-bright, #b3f0ff)";
            };
        };
        readonly project: {
            readonly headerBg: "var(--color-project-header-bg, #0d1117)";
            readonly sidebarBg: "var(--color-project-sidebar-bg, #161b22)";
            readonly gradientIn: "var(--color-project-gradient-in, #161b22)";
            readonly gradientOut: "var(--color-project-gradient-out, rgba(22,27,34,0))";
        };
        readonly mktg: {
            readonly btn: {
                readonly bg: "var(--color-mktg-btn-bg, #f6f8fa))";
                readonly shadow: {
                    readonly outline: "var(--color-mktg-btn-shadow-outline, rgb(255 255 255 / 25%) 0 0 0 1px inset))";
                    readonly focus: "var(--color-mktg-btn-shadow-focus, rgb(255 255 255 / 25%) 0 0 0 4px))";
                    readonly hover: "var(--color-mktg-btn-shadow-hover, 0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)))";
                    readonly hoverMuted: "var(--color-mktg-btn-shadow-hover-muted, rgb(255 255 255) 0 0 0 2px inset))";
                };
            };
        };
        readonly control: {
            readonly borderColor: {
                readonly emphasis: "var(--control-borderColor-emphasis, var(--color-control-border-color-emphasis, #606771))";
            };
        };
        readonly avatar: {
            readonly bg: "var(--avatar-bgColor, var(--color-avatar-bg, rgba(255,255,255,0.1)))";
            readonly border: "var(--avatar-borderColor, var(--color-avatar-border, rgba(240,246,252,0.1)))";
            readonly stackFade: "var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, #30363d))";
            readonly stackFadeMore: "var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, #21262d))";
            readonly childShadow: "var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px #0d1117))";
        };
        readonly topicTag: {
            readonly border: "var(--topicTag-borderColor, var(--color-topic-tag-border, transparent))";
        };
        readonly counter: {
            readonly border: "var(--counter-borderColor, var(--color-counter-border, transparent))";
        };
        readonly selectMenu: {
            readonly backdropBorder: "var(--selectMenu-borderColor, var(--color-select-menu-backdrop-border, #484f58))";
            readonly tapHighlight: "var(--control-bgColor-active, var(--color-select-menu-tap-highlight, rgba(48,54,61,0.5)))";
            readonly tapFocusBg: "var(--selectMenu-bgColor-active, var(--color-select-menu-tap-focus-bg, #0c2d6b))";
        };
        readonly overlay: {
            readonly shadow: "var(--shadow-floating-small, var(--color-overlay-shadow, 0 0 0 1px #30363d, 0 16px 32px rgba(1,4,9,0.85)))";
            readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, rgba(22,27,34,0.4)))";
        };
        readonly header: {
            readonly text: "var(--header-fgColor-default, var(--color-header-text, rgba(255,255,255,0.7)))";
            readonly bg: "var(--header-bgColor, var(--color-header-bg, #161b22))";
            readonly divider: "var(--header-borderColor-divider, var(--color-header-divider, #8b949e))";
            readonly logo: "var(--header-fgColor-logo, var(--color-header-logo, #f0f6fc))";
        };
        readonly headerSearch: {
            readonly bg: "var(--headerSearch-bgColor, var(--color-header-search-bg, #0d1117))";
            readonly border: "var(--headerSearch-borderColor, var(--color-header-search-border, #30363d))";
        };
        readonly sidenav: {
            readonly selectedBg: "var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, #21262d))";
        };
        readonly menu: {
            readonly bgActive: "var(--menu-bgColor-active, var(--color-menu-bg-active, #161b22))";
        };
        readonly input: {
            readonly disabledBg: "var(--control-bgColor-disabled, var(--color-input-disabled-bg, rgba(110,118,129,0)))";
        };
        readonly timeline: {
            readonly badgeBg: "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #21262d))";
        };
        readonly ansi: {
            readonly black: "var(--color-ansi-black, #484f58)";
            readonly blackBright: "var(--color-ansi-black-bright, #6e7681)";
            readonly white: "var(--color-ansi-white, #b1bac4)";
            readonly whiteBright: "var(--color-ansi-white-bright, #ffffff)";
            readonly gray: "var(--color-ansi-gray, #6e7681)";
            readonly red: "var(--color-ansi-red, #ff7b72)";
            readonly redBright: "var(--color-ansi-red-bright, #ffa198)";
            readonly green: "var(--color-ansi-green, #58a6ff)";
            readonly greenBright: "var(--color-ansi-green-bright, #79c0ff)";
            readonly yellow: "var(--color-ansi-yellow, #d29922)";
            readonly yellowBright: "var(--color-ansi-yellow-bright, #e3b341)";
            readonly blue: "var(--color-ansi-blue, #58a6ff)";
            readonly blueBright: "var(--color-ansi-blue-bright, #79c0ff)";
            readonly magenta: "var(--color-ansi-magenta, #bc8cff)";
            readonly magentaBright: "var(--color-ansi-magenta-bright, #d2a8ff)";
            readonly cyan: "var(--color-ansi-cyan, #39c5cf)";
            readonly cyanBright: "var(--color-ansi-cyan-bright, #56d4dd)";
        };
        readonly btn: {
            readonly text: "var(--button-default-fgColor-rest, var(--color-btn-text, #c9d1d9))";
            readonly bg: "var(--button-default-bgColor-rest, var(--color-btn-bg, #21262d))";
            readonly border: "var(--button-default-borderColor-rest, var(--color-btn-border, rgba(240,246,252,0.1)))";
            readonly shadow: "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 0 transparent))";
            readonly insetShadow: "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, 0 0 transparent))";
            readonly hoverBg: "var(--button-default-bgColor-hover, var(--color-btn-hover-bg, #30363d))";
            readonly hoverBorder: "var(--button-default-borderColor-hover, var(--color-btn-hover-border, #8b949e))";
            readonly activeBg: "var(--button-default-bgColor-active, var(--color-btn-active-bg, hsla(212,12%,18%,1)))";
            readonly activeBorder: "var(--button-default-borderColor-active, var(--color-btn-active-border, #6e7681))";
            readonly selectedBg: "var(--button-default-bgColor-selected, var(--color-btn-selected-bg, #161b22))";
            readonly counterBg: "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, #30363d))";
            readonly primary: {
                readonly text: "var(--button-primary-fgColor-rest, var(--color-btn-primary-text, #ffffff))";
                readonly bg: "var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, #1f6feb))";
                readonly border: "var(--button-primary-borderColor-rest, var(--color-btn-primary-border, rgba(240,246,252,0.1)))";
                readonly shadow: "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 0 transparent))";
                readonly insetShadow: "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, 0 0 transparent))";
                readonly hoverBg: "var(--button-primary-bgColor-hover, var(--color-btn-primary-hover-bg, #388bfd))";
                readonly hoverBorder: "var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, rgba(240,246,252,0.1)))";
                readonly selectedBg: "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, #1f6feb))";
                readonly selectedShadow: "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, rgba(255,255,255,0.5)))";
                readonly disabledBg: "var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, rgba(31,111,235,0.6)))";
                readonly disabledBorder: "var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, rgba(240,246,252,0.1)))";
                readonly icon: "var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, #ffffff))";
                readonly counterBg: "var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, rgba(5,29,77,0.2)))";
            };
            readonly outline: {
                readonly text: "var(--button-outline-fgColor-rest, var(--color-btn-outline-text, #388bfd))";
                readonly hoverText: "var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, #58a6ff))";
                readonly hoverBg: "var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, #30363d))";
                readonly hoverBorder: "var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, rgba(240,246,252,0.1)))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))// HI_KATIE: no matches";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))// HI_KATIE: no matches";
                readonly hoverCounterBg: "var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, rgba(5,29,77,0.2)))";
                readonly selectedText: "var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, #ffffff))";
                readonly selectedBg: "var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, #0d419d))";
                readonly selectedBorder: "var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, rgba(240,246,252,0.1)))";
                readonly selectedShadow: "var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-outline-fgColor-disabled, var(--color-btn-outline-disabled-text, rgba(88,166,255,0.5)))";
                readonly disabledBg: "var(--button-outline-bgColor-disabled, var(--color-btn-outline-disabled-bg, #0d1117))";
                readonly disabledCounterBg: "var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, rgba(31,111,235,0.05)))";
                readonly counterBg: "var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, rgba(5,29,77,0.2)))";
                readonly hoverCounterFg: "var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, #58a6ff))";
                readonly disabledCounterFg: "var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, rgba(88,166,255,0.5)))";
                readonly counterFg: "var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, #388bfd))";
            };
            readonly danger: {
                readonly text: "var(--button-danger-fgColor-rest, var(--color-btn-danger-text, #f85149))";
                readonly hoverText: "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, #ffffff))";
                readonly hoverBg: "var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, #da3633))";
                readonly hoverBorder: "var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, #f85149))";
                readonly hoverShadow: "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 0 transparent))";
                readonly hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, 0 0 transparent))";
                readonly hoverIcon: "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, #ffffff))";
                readonly hoverCounterBg: "var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, rgba(255,255,255,0.2)))";
                readonly selectedText: "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))";
                readonly selectedBg: "var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, #b62324))";
                readonly selectedBorder: "var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, #ff7b72))";
                readonly selectedShadow: "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, 0 0 transparent))";
                readonly disabledText: "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(248,81,73,0.5)))";
                readonly disabledBg: "var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, #0d1117))";
                readonly disabledCounterBg: "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(218,54,51,0.05)))";
                readonly counterBg: "var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, rgba(73,2,2,0.2)))";
                readonly icon: "var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, #f85149))";
                readonly counterFg: "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, #f85149))";
                readonly disabledCounterFg: "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, rgba(248,81,73,0.5)))";
                readonly hoverCounterFg: "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #ffffff))";
            };
            readonly inactive: {
                readonly bg: "var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, #21262d))";
                readonly text: "var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, #8b949e))";
            };
        };
        readonly underlinenav: {
            readonly icon: "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, #6e7681))";
            readonly borderHover: "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, rgba(110,118,129,0.4)))";
        };
        readonly actionListItem: {
            readonly inlineDivider: "var(--borderColor-muted, var(--color-action-list-item-inline-divider, rgba(48,54,61,0.48)))";
            readonly default: {
                readonly hoverBg: "var(--control-transparent-bgColor-hover, var(--color-action-list-item-default-hover-bg, rgba(177,186,196,0.12)))";
                readonly hoverBorder: "var(--control-transparent-borderColor-hover, var(--color-action-list-item-default-hover-border, transparent))";
                readonly activeBg: "var(--control-transparent-bgColor-active, var(--color-action-list-item-default-active-bg, rgba(177,186,196,0.2)))";
                readonly activeBorder: "var(--control-transparent-borderColor-active, var(--color-action-list-item-default-active-border, transparent))";
                readonly selectedBg: "var(--control-transparent-bgColor-selected, var(--color-action-list-item-default-selected-bg, rgba(177,186,196,0.08)))";
            };
            readonly danger: {
                readonly hoverBg: "var(--control-danger-bgColor-hover, var(--color-action-list-item-danger-hover-bg, rgba(248,81,73,0.16)))";
                readonly activeBg: "var(--control-danger-bgColor-active, var(--color-action-list-item-danger-active-bg, rgba(248,81,73,0.24)))";
                readonly hoverText: "var(--control-danger-fgColor-hover, var(--color-action-list-item-danger-hover-text, #ff7b72))";
            };
        };
        readonly switchTrack: {
            readonly bg: "var(--controlTrack-bgColor-rest, var(--color-switch-track-bg, rgba(110,118,129,0.1)))";
            readonly hoverBg: "var(--controlTrack-bgColor-hover, var(--color-switch-track-hover-bg, hsla(215,8%,72%,0.1)))";
            readonly activeBg: "var(--controlTrack-bgColor-active, var(--color-switch-track-active-bg, rgba(110,118,129,0.4)))";
            readonly disabledBg: "var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, #21262d))";
            readonly fg: "var(--controlTrack-fgColor-rest, var(--color-switch-track-fg, #8b949e))";
            readonly disabledFg: "var(--controlTrack-fgColor-disabled, var(--color-switch-track-disabled-fg, #010409))";
            readonly border: "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))";
            readonly checked: {
                readonly bg: "var(--control-checked-bgColor-rest, var(--color-switch-track-checked-bg, rgba(31,111,235,0.35)))";
                readonly hoverBg: "var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, rgba(31,111,235,0.5)))";
                readonly activeBg: "var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, rgba(31,111,235,0.65)))";
                readonly fg: "var(--control-checked-fgColor-rest, var(--color-switch-track-checked-fg, #ffffff))";
                readonly disabledFg: "var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, #010409))";
                readonly border: "var(--borderColor-transparent, var(--color-switch-track-checked-border, transparent))";
            };
        };
        readonly switchKnob: {
            readonly bg: "var(--controlKnob-bgColor-rest, var(--color-switch-knob-bg, #0d1117))";
            readonly border: "var(--controlKnob-borderColor-rest, var(--color-switch-knob-border, #606771))";
            readonly disabledBg: "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-disabled-bg, #161b22))";
            readonly checked: {
                readonly bg: "var(--controlKnob-bgColor-checked, var(--color-switch-knob-checked-bg, #0d1117))";
                readonly disabledBg: "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-checked-disabled-bg, #161b22))";
                readonly border: "var(--controlKnob-borderColor-checked, var(--color-switch-knob-checked-border, rgba(31,111,235,0.35)))";
            };
        };
        readonly segmentedControl: {
            readonly bg: "var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, rgba(110,118,129,0.1)))";
            readonly button: {
                readonly bg: "var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, #0d1117))";
                readonly hover: {
                    readonly bg: "var(--controlTrack-bgColor-hover, var(--color-segmented-control-button-hover-bg, #30363d))";
                };
                readonly active: {
                    readonly bg: "var(--controlTrack-bgColor-active, var(--color-segmented-control-button-active-bg, #21262d))";
                };
                readonly selected: {
                    readonly border: "var(--controlKnob-borderColor-rest, var(--color-segmented-control-button-selected-border, #6e7681))";
                };
            };
        };
        readonly treeViewItem: {
            readonly chevron: {
                readonly hoverBg: "var(--control-transparent-bgColor-hover, var(--color-tree-view-item-chevron-hover-bg, rgba(177,186,196,0.12)))";
            };
            readonly directory: {
                readonly fill: "var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-directory-fill, #8b949e))";
            };
        };
        readonly fg: {
            readonly default: "var(--fgColor-default, var(--color-fg-default, #c9d1d9))";
            readonly muted: "var(--fgColor-muted, var(--color-fg-muted, #8b949e))";
            readonly subtle: "var(--fgColor-muted, var(--color-fg-subtle, #6e7681))";
            readonly onEmphasis: "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))";
        };
        readonly canvas: {
            readonly default: "var(--bgColor-default, var(--color-canvas-default, #0d1117))";
            readonly overlay: "var(--overlay-bgColor, var(--color-canvas-overlay, #161b22))";
            readonly inset: "var(--bgColor-inset, var(--color-canvas-inset, #010409))";
            readonly subtle: "var(--bgColor-muted, var(--color-canvas-subtle, #161b22))";
        };
        readonly border: {
            readonly default: "var(--borderColor-default, var(--color-border-default, #30363d))";
            readonly muted: "var(--borderColor-muted, var(--color-border-muted, #21262d))";
            readonly subtle: "var(--borderColor-muted, var(--color-border-subtle, rgba(240,246,252,0.1)))";
        };
        readonly shadow: {
            readonly small: "var(--shadow-resting-small, var(--color-shadow-small, 0 0 transparent))";
            readonly medium: "var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px #010409))";
            readonly large: "var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px #010409))";
            readonly extraLarge: "var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 48px #010409))";
        };
        readonly neutral: {
            readonly emphasisPlus: "var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, #6e7681))";
            readonly emphasis: "var(--bgColor-neutral-emphasis, var(--color-neutral-emphasis, #6e7681))";
            readonly muted: "var(--bgColor-neutral-muted, var(--color-neutral-muted, rgba(110,118,129,0.4)))";
            readonly subtle: "var(--bgColor-neutral-muted, var(--color-neutral-subtle, rgba(110,118,129,0.1)))";
        };
        readonly accent: {
            readonly fg: "var(--fgColor-accent, var(--color-accent-fg, #58a6ff))";
            readonly emphasis: "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #1f6feb))";
            readonly muted: "var(--borderColor-accent-muted, var(--color-accent-muted, rgba(56,139,253,0.4)))";
            readonly subtle: "var(--bgColor-accent-muted, var(--color-accent-subtle, rgba(56,139,253,0.1)))";
        };
        readonly success: {
            readonly fg: "var(--fgColor-success, var(--color-success-fg, #58a6ff))";
            readonly emphasis: "var(--bgColor-success-emphasis, var(--color-success-emphasis, #1f6feb))";
            readonly muted: "var(--borderColor-success-muted, var(--color-success-muted, rgba(56,139,253,0.4)))";
            readonly subtle: "var(--bgColor-success-muted, var(--color-success-subtle, rgba(56,139,253,0.15)))";
        };
        readonly attention: {
            readonly fg: "var(--fgColor-attention, var(--color-attention-fg, #d29922))";
            readonly emphasis: "var(--bgColor-attention-emphasis, var(--color-attention-emphasis, #9e6a03))";
            readonly muted: "var(--borderColor-attention-muted, var(--color-attention-muted, rgba(187,128,9,0.4)))";
            readonly subtle: "var(--bgColor-attention-muted, var(--color-attention-subtle, rgba(187,128,9,0.15)))";
        };
        readonly severe: {
            readonly fg: "var(--fgColor-severe, var(--color-severe-fg, #f85149))";
            readonly emphasis: "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #da3633))";
            readonly muted: "var(--borderColor-severe-muted, var(--color-severe-muted, rgba(248,81,73,0.4)))";
            readonly subtle: "var(--bgColor-severe-muted, var(--color-severe-subtle, rgba(248,81,73,0.1)))";
        };
        readonly danger: {
            readonly fg: "var(--fgColor-danger, var(--color-danger-fg, #f85149))";
            readonly emphasis: "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #da3633))";
            readonly muted: "var(--borderColor-danger-muted, var(--color-danger-muted, rgba(248,81,73,0.4)))";
            readonly subtle: "var(--bgColor-danger-muted, var(--color-danger-subtle, rgba(248,81,73,0.1)))";
        };
        readonly open: {
            readonly fg: "var(--fgColor-open, var(--color-open-fg, #ff7b72))";
            readonly emphasis: "var(--bgColor-open-emphasis, var(--color-open-emphasis, #da3633))";
            readonly muted: "var(--borderColor-open-muted, var(--color-open-muted, rgba(248,81,73,0.4)))";
            readonly subtle: "var(--bgColor-open-muted, var(--color-open-subtle, rgba(248,81,73,0.15)))";
        };
        readonly closed: {
            readonly fg: "var(--fgColor-closed, var(--color-closed-fg, #8b949e))";
            readonly emphasis: "var(--bgColor-closed-emphasis, var(--color-closed-emphasis, #6e7681))";
            readonly muted: "var(--borderColor-closed-muted, var(--color-closed-muted, rgba(110,118,129,0.4)))";
            readonly subtle: "var(--bgColor-closed-muted, var(--color-closed-subtle, rgba(110,118,129,0.1)))";
        };
        readonly done: {
            readonly fg: "var(--fgColor-done, var(--color-done-fg, #a371f7))";
            readonly emphasis: "var(--bgColor-done-emphasis, var(--color-done-emphasis, #8957e5))";
            readonly muted: "var(--borderColor-done-muted, var(--color-done-muted, rgba(163,113,247,0.4)))";
            readonly subtle: "var(--bgColor-done-muted, var(--color-done-subtle, rgba(163,113,247,0.1)))";
        };
        readonly sponsors: {
            readonly fg: "var(--fgColor-sponsors, var(--color-sponsors-fg, #db61a2))";
            readonly emphasis: "var(--bgColor-sponsors-emphasis, var(--color-sponsors-emphasis, #bf4b8a))";
            readonly muted: "var(--borderColor-sponsors-muted, var(--color-sponsors-muted, rgba(219,97,162,0.4)))";
            readonly subtle: "var(--bgColor-sponsors-muted, var(--color-sponsors-subtle, rgba(219,97,162,0.1)))";
        };
        readonly primer: {
            readonly fg: {
                readonly disabled: "var(--fgColor-disabled, var(--color-primer-fg-disabled, #484f58))";
            };
            readonly canvas: {
                readonly backdrop: "var(--overlay-backdrop-bgColor, var(--color-primer-canvas-backdrop, rgba(1,4,9,0.8)))";
                readonly sticky: "var(--color-primer-canvas-sticky, rgba(13,17,23,0.95))";
            };
            readonly border: {
                readonly active: "var(--underlineNav-borderColor-active, var(--color-primer-border-active, #f78166))";
                readonly contrast: "var(--borderColor-muted, var(--color-primer-border-contrast, rgba(255,255,255,0.2)))";
            };
            readonly shadow: {
                readonly highlight: "var(--shadow-highlight, var(--color-primer-shadow-highlight, 0 0 transparent))";
                readonly inset: "var(--shadow-inset, var(--color-primer-shadow-inset, 0 0 transparent))";
            };
        };
        readonly scale: {
            readonly black: "#010409";
            readonly white: "#ffffff";
            readonly gray: readonly ["#f0f6fc", "#c9d1d9", "#b1bac4", "#8b949e", "#6e7681", "#484f58", "#30363d", "#21262d", "#161b22", "#0d1117"];
            readonly blue: readonly ["#cae8ff", "#a5d6ff", "#79c0ff", "#58a6ff", "#388bfd", "#1f6feb", "#1158c7", "#0d419d", "#0c2d6b", "#051d4d"];
            readonly green: readonly ["#cae8ff", "#a5d6ff", "#79c0ff", "#58a6ff", "#388bfd", "#1f6feb", "#1158c7", "#0d419d", "#0c2d6b", "#051d4d"];
            readonly yellow: readonly ["#f8e3a1", "#f2cc60", "#e3b341", "#d29922", "#bb8009", "#9e6a03", "#845306", "#693e00", "#4b2900", "#341a00"];
            readonly orange: readonly ["#ffdcd7", "#ffc1ba", "#ffa198", "#ff7b72", "#f85149", "#da3633", "#b62324", "#8e1519", "#67060c", "#490202"];
            readonly red: readonly ["#ffdcd7", "#ffc1ba", "#ffa198", "#ff7b72", "#f85149", "#da3633", "#b62324", "#8e1519", "#67060c", "#490202"];
            readonly purple: readonly ["#eddeff", "#e2c5ff", "#d2a8ff", "#bc8cff", "#a371f7", "#8957e5", "#6e40c9", "#553098", "#3c1e70", "#271052"];
            readonly pink: readonly ["#ffdaec", "#ffbedd", "#ff9bce", "#f778ba", "#db61a2", "#bf4b8a", "#9e3670", "#7d2457", "#5e103e", "#42062a"];
            readonly coral: readonly ["#ffddd2", "#ffc2b2", "#ffa28b", "#f78166", "#ea6045", "#cf462d", "#ac3220", "#872012", "#640d04", "#460701"];
        };
    };
};
//# sourceMappingURL=index.d.ts.map