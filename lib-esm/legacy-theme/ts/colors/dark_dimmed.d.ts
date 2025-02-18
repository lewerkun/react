declare const colors: {
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
export default colors;
//# sourceMappingURL=dark_dimmed.d.ts.map