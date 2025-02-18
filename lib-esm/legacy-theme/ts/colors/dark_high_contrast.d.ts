declare const colors: {
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
export default colors;
//# sourceMappingURL=dark_high_contrast.d.ts.map