declare const colors: {
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
export default colors;
//# sourceMappingURL=light_high_contrast.d.ts.map