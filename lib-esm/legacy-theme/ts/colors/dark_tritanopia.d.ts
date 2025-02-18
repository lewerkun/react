declare const colors: {
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
export default colors;
//# sourceMappingURL=dark_tritanopia.d.ts.map