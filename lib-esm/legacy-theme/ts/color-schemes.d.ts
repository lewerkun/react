type Scheme = keyof typeof colors;
type SchemeValue = Record<'colors' | 'shadows', Partial<typeof colors.light>>;
declare const colors: {
    light: {
        colors: {
            canvasDefaultTransparent: string;
            pageHeaderBg: string;
            marketingIcon: {
                primary: string;
                secondary: string;
            };
            diffBlob: {
                addition: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                deletion: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                hunk: {
                    numBg: string;
                };
                expander: {
                    icon: string;
                };
                selectedLineHighlightMixBlendMode: string;
            };
            diffstat: {
                deletionBorder: string;
                additionBorder: string;
                additionBg: string;
            };
            searchKeyword: {
                hl: string;
            };
            prettylights: {
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    storageModifierImport: string;
                    entityTag: string;
                    keyword: string;
                    string: string;
                    variable: string;
                    brackethighlighterUnmatched: string;
                    invalidIllegalText: string;
                    invalidIllegalBg: string;
                    carriageReturnText: string;
                    carriageReturnBg: string;
                    stringRegexp: string;
                    markupList: string;
                    markupHeading: string;
                    markupItalic: string;
                    markupBold: string;
                    markupDeletedText: string;
                    markupDeletedBg: string;
                    markupInsertedText: string;
                    markupInsertedBg: string;
                    markupChangedText: string;
                    markupChangedBg: string;
                    markupIgnoredText: string;
                    markupIgnoredBg: string;
                    metaDiffRange: string;
                    brackethighlighterAngle: string;
                    sublimelinterGutterMark: string;
                    constantOtherReferenceLink: string;
                };
            };
            codemirror: {
                text: string;
                bg: string;
                guttersBg: string;
                guttermarkerText: string;
                guttermarkerSubtleText: string;
                linenumberText: string;
                cursor: string;
                selectionBg: string;
                activelineBg: string;
                matchingbracketText: string;
                linesBg: string;
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    keyword: string;
                    storage: string;
                    string: string;
                    support: string;
                    variable: string;
                };
            };
            checks: {
                bg: string;
                runBorderWidth: string;
                containerBorderWidth: string;
                textPrimary: string;
                textSecondary: string;
                textLink: string;
                btnIcon: string;
                btnHoverIcon: string;
                btnHoverBg: string;
                inputText: string;
                inputPlaceholderText: string;
                inputFocusText: string;
                inputBg: string;
                inputShadow: string;
                donutError: string;
                donutPending: string;
                donutSuccess: string;
                donutNeutral: string;
                dropdownText: string;
                dropdownBg: string;
                dropdownBorder: string;
                dropdownShadow: string;
                dropdownHoverText: string;
                dropdownHoverBg: string;
                dropdownBtnHoverText: string;
                dropdownBtnHoverBg: string;
                scrollbarThumbBg: string;
                headerLabelText: string;
                headerLabelOpenText: string;
                headerBorder: string;
                headerIcon: string;
                lineText: string;
                lineNumText: string;
                lineTimestampText: string;
                lineHoverBg: string;
                lineSelectedBg: string;
                lineSelectedNumText: string;
                lineDtFmText: string;
                lineDtFmBg: string;
                gateBg: string;
                gateText: string;
                gateWaitingText: string;
                stepHeaderOpenBg: string;
                stepErrorText: string;
                stepWarningText: string;
                loglineText: string;
                loglineNumText: string;
                loglineDebugText: string;
                loglineErrorText: string;
                loglineErrorNumText: string;
                loglineErrorBg: string;
                loglineWarningText: string;
                loglineWarningNumText: string;
                loglineWarningBg: string;
                loglineCommandText: string;
                loglineSectionText: string;
                ansi: {
                    black: string;
                    blackBright: string;
                    white: string;
                    whiteBright: string;
                    gray: string;
                    red: string;
                    redBright: string;
                    green: string;
                    greenBright: string;
                    yellow: string;
                    yellowBright: string;
                    blue: string;
                    blueBright: string;
                    magenta: string;
                    magentaBright: string;
                    cyan: string;
                    cyanBright: string;
                };
            };
            project: {
                headerBg: string;
                sidebarBg: string;
                gradientIn: string;
                gradientOut: string;
            };
            mktg: {
                btn: {
                    bg: string;
                };
            };
            control: {
                borderColor: {
                    emphasis: string;
                };
            };
            avatar: {
                bg: string;
                border: string;
                stackFade: string;
                stackFadeMore: string;
            };
            topicTag: {
                border: string;
            };
            counter: {
                border: string;
            };
            selectMenu: {
                backdropBorder: string;
                tapHighlight: string;
                tapFocusBg: string;
            };
            overlay: {
                backdrop: string;
            };
            header: {
                text: string;
                bg: string;
                divider: string;
                logo: string;
            };
            headerSearch: {
                bg: string;
                border: string;
            };
            sidenav: {
                selectedBg: string;
            };
            menu: {
                bgActive: string;
            };
            input: {
                disabledBg: string;
            };
            timeline: {
                badgeBg: string;
            };
            ansi: {
                black: string;
                blackBright: string;
                white: string;
                whiteBright: string;
                gray: string;
                red: string;
                redBright: string;
                green: string;
                greenBright: string;
                yellow: string;
                yellowBright: string;
                blue: string;
                blueBright: string;
                magenta: string;
                magentaBright: string;
                cyan: string;
                cyanBright: string;
            };
            btn: {
                text: string;
                bg: string;
                border: string;
                hoverBg: string;
                hoverBorder: string;
                activeBg: string;
                activeBorder: string;
                selectedBg: string;
                counterBg: string;
                primary: {
                    text: string;
                    bg: string;
                    border: string;
                    hoverBg: string;
                    hoverBorder: string;
                    selectedBg: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledBorder: string;
                    icon: string;
                    counterBg: string;
                };
                outline: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    counterFg: string;
                    hoverCounterFg: string;
                    disabledCounterFg: string;
                };
                danger: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    icon: string;
                    hoverIcon: string;
                    counterFg: string;
                    hoverCounterFg: string;
                    disabledCounterFg: string;
                };
                inactive: {
                    bg: string;
                    text: string;
                };
            };
            underlinenav: {
                icon: string;
                borderHover: string;
            };
            actionListItem: {
                inlineDivider: string;
                default: {
                    hoverBg: string;
                    hoverBorder: string;
                    activeBg: string;
                    activeBorder: string;
                    selectedBg: string;
                };
                danger: {
                    hoverBg: string;
                    activeBg: string;
                    hoverText: string;
                };
            };
            switchTrack: {
                bg: string;
                hoverBg: string;
                activeBg: string;
                disabledBg: string;
                fg: string;
                disabledFg: string;
                border: string;
                checked: {
                    bg: string;
                    hoverBg: string;
                    activeBg: string;
                    fg: string;
                    disabledFg: string;
                    border: string;
                };
            };
            switchKnob: {
                bg: string;
                disabledBg: string;
                border: string;
                checked: {
                    bg: string;
                    disabledBg: string;
                    border: string;
                };
            };
            segmentedControl: {
                bg: string;
                button: {
                    bg: string;
                    hover: {
                        bg: string;
                    };
                    active: {
                        bg: string;
                    };
                    selected: {
                        border: string;
                    };
                };
            };
            treeViewItem: {
                chevron: {
                    hoverBg: string;
                };
                directory: {
                    fill: string;
                };
            };
            fg: {
                default: string;
                muted: string;
                subtle: string;
                onEmphasis: string;
            };
            canvas: {
                default: string;
                overlay: string;
                inset: string;
                subtle: string;
            };
            border: {
                default: string;
                muted: string;
                subtle: string;
            };
            neutral: {
                emphasisPlus: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            accent: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            success: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            attention: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            severe: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            danger: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            open: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            closed: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            done: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            sponsors: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            primer: {
                fg: {
                    disabled: string;
                };
                canvas: {
                    backdrop: string;
                    sticky: string;
                };
                border: {
                    active: string;
                    contrast: string;
                };
            };
        };
        shadows: {
            mktg: {
                btn: {
                    shadow: {
                        outline: string;
                        focus: string;
                        hover: string;
                        hoverMuted: string;
                    };
                };
            };
            avatar: {
                childShadow: string;
            };
            overlay: {
                shadow: string;
            };
            btn: {
                shadow: string;
                insetShadow: string;
                primary: {
                    shadow: string;
                    insetShadow: string;
                    selectedShadow: string;
                };
                outline: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
                danger: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
            };
            shadow: {
                small: string;
                medium: string;
                large: string;
                extraLarge: string;
            };
            primer: {
                shadow: {
                    highlight: string;
                    inset: string;
                };
            };
        };
    };
    light_high_contrast: {
        colors: {
            canvasDefaultTransparent: string;
            pageHeaderBg: string;
            marketingIcon: {
                primary: string;
                secondary: string;
            };
            diffBlob: {
                addition: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                deletion: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                hunk: {
                    numBg: string;
                };
                expander: {
                    icon: string;
                };
                selectedLineHighlightMixBlendMode: string;
            };
            diffstat: {
                deletionBorder: string;
                additionBorder: string;
                additionBg: string;
            };
            searchKeyword: {
                hl: string;
            };
            prettylights: {
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    storageModifierImport: string;
                    entityTag: string;
                    keyword: string;
                    string: string;
                    variable: string;
                    brackethighlighterUnmatched: string;
                    invalidIllegalText: string;
                    invalidIllegalBg: string;
                    carriageReturnText: string;
                    carriageReturnBg: string;
                    stringRegexp: string;
                    markupList: string;
                    markupHeading: string;
                    markupItalic: string;
                    markupBold: string;
                    markupDeletedText: string;
                    markupDeletedBg: string;
                    markupInsertedText: string;
                    markupInsertedBg: string;
                    markupChangedText: string;
                    markupChangedBg: string;
                    markupIgnoredText: string;
                    markupIgnoredBg: string;
                    metaDiffRange: string;
                    brackethighlighterAngle: string;
                    sublimelinterGutterMark: string;
                    constantOtherReferenceLink: string;
                };
            };
            codemirror: {
                text: string;
                bg: string;
                guttersBg: string;
                guttermarkerText: string;
                guttermarkerSubtleText: string;
                linenumberText: string;
                cursor: string;
                selectionBg: string;
                activelineBg: string;
                matchingbracketText: string;
                linesBg: string;
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    keyword: string;
                    storage: string;
                    string: string;
                    support: string;
                    variable: string;
                };
            };
            checks: {
                bg: string;
                runBorderWidth: string;
                containerBorderWidth: string;
                textPrimary: string;
                textSecondary: string;
                textLink: string;
                btnIcon: string;
                btnHoverIcon: string;
                btnHoverBg: string;
                inputText: string;
                inputPlaceholderText: string;
                inputFocusText: string;
                inputBg: string;
                inputShadow: string;
                donutError: string;
                donutPending: string;
                donutSuccess: string;
                donutNeutral: string;
                dropdownText: string;
                dropdownBg: string;
                dropdownBorder: string;
                dropdownShadow: string;
                dropdownHoverText: string;
                dropdownHoverBg: string;
                dropdownBtnHoverText: string;
                dropdownBtnHoverBg: string;
                scrollbarThumbBg: string;
                headerLabelText: string;
                headerLabelOpenText: string;
                headerBorder: string;
                headerIcon: string;
                lineText: string;
                lineNumText: string;
                lineTimestampText: string;
                lineHoverBg: string;
                lineSelectedBg: string;
                lineSelectedNumText: string;
                lineDtFmText: string;
                lineDtFmBg: string;
                gateBg: string;
                gateText: string;
                gateWaitingText: string;
                stepHeaderOpenBg: string;
                stepErrorText: string;
                stepWarningText: string;
                loglineText: string;
                loglineNumText: string;
                loglineDebugText: string;
                loglineErrorText: string;
                loglineErrorNumText: string;
                loglineErrorBg: string;
                loglineWarningText: string;
                loglineWarningNumText: string;
                loglineWarningBg: string;
                loglineCommandText: string;
                loglineSectionText: string;
                ansi: {
                    black: string;
                    blackBright: string;
                    white: string;
                    whiteBright: string;
                    gray: string;
                    red: string;
                    redBright: string;
                    green: string;
                    greenBright: string;
                    yellow: string;
                    yellowBright: string;
                    blue: string;
                    blueBright: string;
                    magenta: string;
                    magentaBright: string;
                    cyan: string;
                    cyanBright: string;
                };
            };
            project: {
                headerBg: string;
                sidebarBg: string;
                gradientIn: string;
                gradientOut: string;
            };
            mktg: {
                btn: {
                    bg: string;
                };
            };
            control: {
                borderColor: {
                    emphasis: string;
                };
            };
            avatar: {
                bg: string;
                border: string;
                stackFade: string;
                stackFadeMore: string;
            };
            topicTag: {
                border: string;
            };
            counter: {
                border: string;
            };
            selectMenu: {
                backdropBorder: string;
                tapHighlight: string;
                tapFocusBg: string;
            };
            overlay: {
                backdrop: string;
            };
            header: {
                text: string;
                bg: string;
                divider: string;
                logo: string;
            };
            headerSearch: {
                bg: string;
                border: string;
            };
            sidenav: {
                selectedBg: string;
            };
            menu: {
                bgActive: string;
            };
            input: {
                disabledBg: string;
            };
            timeline: {
                badgeBg: string;
            };
            ansi: {
                black: string;
                blackBright: string;
                white: string;
                whiteBright: string;
                gray: string;
                red: string;
                redBright: string;
                green: string;
                greenBright: string;
                yellow: string;
                yellowBright: string;
                blue: string;
                blueBright: string;
                magenta: string;
                magentaBright: string;
                cyan: string;
                cyanBright: string;
            };
            btn: {
                text: string;
                bg: string;
                border: string;
                hoverBg: string;
                hoverBorder: string;
                activeBg: string;
                activeBorder: string;
                selectedBg: string;
                counterBg: string;
                primary: {
                    text: string;
                    bg: string;
                    border: string;
                    hoverBg: string;
                    hoverBorder: string;
                    selectedBg: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledBorder: string;
                    icon: string;
                    counterBg: string;
                };
                outline: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    counterFg: string;
                    hoverCounterFg: string;
                    disabledCounterFg: string;
                };
                danger: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    icon: string;
                    hoverIcon: string;
                    counterFg: string;
                    hoverCounterFg: string;
                    disabledCounterFg: string;
                };
                inactive: {
                    bg: string;
                    text: string;
                };
            };
            underlinenav: {
                icon: string;
                borderHover: string;
            };
            actionListItem: {
                inlineDivider: string;
                default: {
                    hoverBg: string;
                    hoverBorder: string;
                    activeBg: string;
                    activeBorder: string;
                    selectedBg: string;
                };
                danger: {
                    hoverBg: string;
                    activeBg: string;
                    hoverText: string;
                };
            };
            switchTrack: {
                bg: string;
                hoverBg: string;
                activeBg: string;
                disabledBg: string;
                fg: string;
                disabledFg: string;
                border: string;
                checked: {
                    bg: string;
                    hoverBg: string;
                    activeBg: string;
                    fg: string;
                    disabledFg: string;
                    border: string;
                };
            };
            switchKnob: {
                bg: string;
                disabledBg: string;
                border: string;
                checked: {
                    bg: string;
                    disabledBg: string;
                    border: string;
                };
            };
            segmentedControl: {
                bg: string;
                button: {
                    bg: string;
                    hover: {
                        bg: string;
                    };
                    active: {
                        bg: string;
                    };
                    selected: {
                        border: string;
                    };
                };
            };
            treeViewItem: {
                chevron: {
                    hoverBg: string;
                };
                directory: {
                    fill: string;
                };
            };
            fg: {
                default: string;
                muted: string;
                subtle: string;
                onEmphasis: string;
            };
            canvas: {
                default: string;
                overlay: string;
                inset: string;
                subtle: string;
            };
            border: {
                default: string;
                muted: string;
                subtle: string;
            };
            neutral: {
                emphasisPlus: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            accent: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            success: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            attention: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            severe: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            danger: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            open: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            closed: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            done: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            sponsors: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            primer: {
                fg: {
                    disabled: string;
                };
                canvas: {
                    backdrop: string;
                    sticky: string;
                };
                border: {
                    active: string;
                    contrast: string;
                };
            };
        };
        shadows: {
            mktg: {
                btn: {
                    shadow: {
                        outline: string;
                        focus: string;
                        hover: string;
                        hoverMuted: string;
                    };
                };
            };
            avatar: {
                childShadow: string;
            };
            overlay: {
                shadow: string;
            };
            btn: {
                shadow: string;
                insetShadow: string;
                primary: {
                    shadow: string;
                    insetShadow: string;
                    selectedShadow: string;
                };
                outline: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
                danger: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
            };
            shadow: {
                small: string;
                medium: string;
                large: string;
                extraLarge: string;
            };
            primer: {
                shadow: {
                    highlight: string;
                    inset: string;
                };
            };
        };
    };
    light_colorblind: {
        colors: {
            canvasDefaultTransparent: string;
            pageHeaderBg: string;
            marketingIcon: {
                primary: string;
                secondary: string;
            };
            diffBlob: {
                addition: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                deletion: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                hunk: {
                    numBg: string;
                };
                expander: {
                    icon: string;
                };
                selectedLineHighlightMixBlendMode: string;
            };
            diffstat: {
                deletionBorder: string;
                additionBorder: string;
                additionBg: string;
            };
            searchKeyword: {
                hl: string;
            };
            prettylights: {
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    storageModifierImport: string;
                    entityTag: string;
                    keyword: string;
                    string: string;
                    variable: string;
                    brackethighlighterUnmatched: string;
                    invalidIllegalText: string;
                    invalidIllegalBg: string;
                    carriageReturnText: string;
                    carriageReturnBg: string;
                    stringRegexp: string;
                    markupList: string;
                    markupHeading: string;
                    markupItalic: string;
                    markupBold: string;
                    markupDeletedText: string;
                    markupDeletedBg: string;
                    markupInsertedText: string;
                    markupInsertedBg: string;
                    markupChangedText: string;
                    markupChangedBg: string;
                    markupIgnoredText: string;
                    markupIgnoredBg: string;
                    metaDiffRange: string;
                    brackethighlighterAngle: string;
                    sublimelinterGutterMark: string;
                    constantOtherReferenceLink: string;
                };
            };
            codemirror: {
                text: string;
                bg: string;
                guttersBg: string;
                guttermarkerText: string;
                guttermarkerSubtleText: string;
                linenumberText: string;
                cursor: string;
                selectionBg: string;
                activelineBg: string;
                matchingbracketText: string;
                linesBg: string;
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    keyword: string;
                    storage: string;
                    string: string;
                    support: string;
                    variable: string;
                };
            };
            checks: {
                bg: string;
                runBorderWidth: string;
                containerBorderWidth: string;
                textPrimary: string;
                textSecondary: string;
                textLink: string;
                btnIcon: string;
                btnHoverIcon: string;
                btnHoverBg: string;
                inputText: string;
                inputPlaceholderText: string;
                inputFocusText: string;
                inputBg: string;
                inputShadow: string;
                donutError: string;
                donutPending: string;
                donutSuccess: string;
                donutNeutral: string;
                dropdownText: string;
                dropdownBg: string;
                dropdownBorder: string;
                dropdownShadow: string;
                dropdownHoverText: string;
                dropdownHoverBg: string;
                dropdownBtnHoverText: string;
                dropdownBtnHoverBg: string;
                scrollbarThumbBg: string;
                headerLabelText: string;
                headerLabelOpenText: string;
                headerBorder: string;
                headerIcon: string;
                lineText: string;
                lineNumText: string;
                lineTimestampText: string;
                lineHoverBg: string;
                lineSelectedBg: string;
                lineSelectedNumText: string;
                lineDtFmText: string;
                lineDtFmBg: string;
                gateBg: string;
                gateText: string;
                gateWaitingText: string;
                stepHeaderOpenBg: string;
                stepErrorText: string;
                stepWarningText: string;
                loglineText: string;
                loglineNumText: string;
                loglineDebugText: string;
                loglineErrorText: string;
                loglineErrorNumText: string;
                loglineErrorBg: string;
                loglineWarningText: string;
                loglineWarningNumText: string;
                loglineWarningBg: string;
                loglineCommandText: string;
                loglineSectionText: string;
                ansi: {
                    black: string;
                    blackBright: string;
                    white: string;
                    whiteBright: string;
                    gray: string;
                    red: string;
                    redBright: string;
                    green: string;
                    greenBright: string;
                    yellow: string;
                    yellowBright: string;
                    blue: string;
                    blueBright: string;
                    magenta: string;
                    magentaBright: string;
                    cyan: string;
                    cyanBright: string;
                };
            };
            project: {
                headerBg: string;
                sidebarBg: string;
                gradientIn: string;
                gradientOut: string;
            };
            mktg: {
                btn: {
                    bg: string;
                };
            };
            control: {
                borderColor: {
                    emphasis: string;
                };
            };
            avatar: {
                bg: string;
                border: string;
                stackFade: string;
                stackFadeMore: string;
            };
            topicTag: {
                border: string;
            };
            counter: {
                border: string;
            };
            selectMenu: {
                backdropBorder: string;
                tapHighlight: string;
                tapFocusBg: string;
            };
            overlay: {
                backdrop: string;
            };
            header: {
                text: string;
                bg: string;
                divider: string;
                logo: string;
            };
            headerSearch: {
                bg: string;
                border: string;
            };
            sidenav: {
                selectedBg: string;
            };
            menu: {
                bgActive: string;
            };
            input: {
                disabledBg: string;
            };
            timeline: {
                badgeBg: string;
            };
            ansi: {
                black: string;
                blackBright: string;
                white: string;
                whiteBright: string;
                gray: string;
                red: string;
                redBright: string;
                green: string;
                greenBright: string;
                yellow: string;
                yellowBright: string;
                blue: string;
                blueBright: string;
                magenta: string;
                magentaBright: string;
                cyan: string;
                cyanBright: string;
            };
            btn: {
                text: string;
                bg: string;
                border: string;
                hoverBg: string;
                hoverBorder: string;
                activeBg: string;
                activeBorder: string;
                selectedBg: string;
                counterBg: string;
                primary: {
                    text: string;
                    bg: string;
                    border: string;
                    hoverBg: string;
                    hoverBorder: string;
                    selectedBg: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledBorder: string;
                    icon: string;
                    counterBg: string;
                };
                outline: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    counterFg: string;
                    hoverCounterFg: string;
                    disabledCounterFg: string;
                };
                danger: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    icon: string;
                    hoverIcon: string;
                    counterFg: string;
                    hoverCounterFg: string;
                    disabledCounterFg: string;
                };
                inactive: {
                    bg: string;
                    text: string;
                };
            };
            underlinenav: {
                icon: string;
                borderHover: string;
            };
            actionListItem: {
                inlineDivider: string;
                default: {
                    hoverBg: string;
                    hoverBorder: string;
                    activeBg: string;
                    activeBorder: string;
                    selectedBg: string;
                };
                danger: {
                    hoverBg: string;
                    activeBg: string;
                    hoverText: string;
                };
            };
            switchTrack: {
                bg: string;
                hoverBg: string;
                activeBg: string;
                disabledBg: string;
                fg: string;
                disabledFg: string;
                border: string;
                checked: {
                    bg: string;
                    hoverBg: string;
                    activeBg: string;
                    fg: string;
                    disabledFg: string;
                    border: string;
                };
            };
            switchKnob: {
                bg: string;
                disabledBg: string;
                border: string;
                checked: {
                    bg: string;
                    disabledBg: string;
                    border: string;
                };
            };
            segmentedControl: {
                bg: string;
                button: {
                    bg: string;
                    hover: {
                        bg: string;
                    };
                    active: {
                        bg: string;
                    };
                    selected: {
                        border: string;
                    };
                };
            };
            treeViewItem: {
                chevron: {
                    hoverBg: string;
                };
                directory: {
                    fill: string;
                };
            };
            fg: {
                default: string;
                muted: string;
                subtle: string;
                onEmphasis: string;
            };
            canvas: {
                default: string;
                overlay: string;
                inset: string;
                subtle: string;
            };
            border: {
                default: string;
                muted: string;
                subtle: string;
            };
            neutral: {
                emphasisPlus: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            accent: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            success: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            attention: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            severe: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            danger: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            open: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            closed: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            done: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            sponsors: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            primer: {
                fg: {
                    disabled: string;
                };
                canvas: {
                    backdrop: string;
                    sticky: string;
                };
                border: {
                    active: string;
                    contrast: string;
                };
            };
        };
        shadows: {
            mktg: {
                btn: {
                    shadow: {
                        outline: string;
                        focus: string;
                        hover: string;
                        hoverMuted: string;
                    };
                };
            };
            avatar: {
                childShadow: string;
            };
            overlay: {
                shadow: string;
            };
            btn: {
                shadow: string;
                insetShadow: string;
                primary: {
                    shadow: string;
                    insetShadow: string;
                    selectedShadow: string;
                };
                outline: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
                danger: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
            };
            shadow: {
                small: string;
                medium: string;
                large: string;
                extraLarge: string;
            };
            primer: {
                shadow: {
                    highlight: string;
                    inset: string;
                };
            };
        };
    };
    light_tritanopia: {
        colors: {
            canvasDefaultTransparent: string;
            pageHeaderBg: string;
            marketingIcon: {
                primary: string;
                secondary: string;
            };
            diffBlob: {
                addition: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                deletion: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                hunk: {
                    numBg: string;
                };
                expander: {
                    icon: string;
                };
                selectedLineHighlightMixBlendMode: string;
            };
            diffstat: {
                deletionBorder: string;
                additionBorder: string;
                additionBg: string;
            };
            searchKeyword: {
                hl: string;
            };
            prettylights: {
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    storageModifierImport: string;
                    entityTag: string;
                    keyword: string;
                    string: string;
                    variable: string;
                    brackethighlighterUnmatched: string;
                    invalidIllegalText: string;
                    invalidIllegalBg: string;
                    carriageReturnText: string;
                    carriageReturnBg: string;
                    stringRegexp: string;
                    markupList: string;
                    markupHeading: string;
                    markupItalic: string;
                    markupBold: string;
                    markupDeletedText: string;
                    markupDeletedBg: string;
                    markupInsertedText: string;
                    markupInsertedBg: string;
                    markupChangedText: string;
                    markupChangedBg: string;
                    markupIgnoredText: string;
                    markupIgnoredBg: string;
                    metaDiffRange: string;
                    brackethighlighterAngle: string;
                    sublimelinterGutterMark: string;
                    constantOtherReferenceLink: string;
                };
            };
            codemirror: {
                text: string;
                bg: string;
                guttersBg: string;
                guttermarkerText: string;
                guttermarkerSubtleText: string;
                linenumberText: string;
                cursor: string;
                selectionBg: string;
                activelineBg: string;
                matchingbracketText: string;
                linesBg: string;
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    keyword: string;
                    storage: string;
                    string: string;
                    support: string;
                    variable: string;
                };
            };
            checks: {
                bg: string;
                runBorderWidth: string;
                containerBorderWidth: string;
                textPrimary: string;
                textSecondary: string;
                textLink: string;
                btnIcon: string;
                btnHoverIcon: string;
                btnHoverBg: string;
                inputText: string;
                inputPlaceholderText: string;
                inputFocusText: string;
                inputBg: string;
                inputShadow: string;
                donutError: string;
                donutPending: string;
                donutSuccess: string;
                donutNeutral: string;
                dropdownText: string;
                dropdownBg: string;
                dropdownBorder: string;
                dropdownShadow: string;
                dropdownHoverText: string;
                dropdownHoverBg: string;
                dropdownBtnHoverText: string;
                dropdownBtnHoverBg: string;
                scrollbarThumbBg: string;
                headerLabelText: string;
                headerLabelOpenText: string;
                headerBorder: string;
                headerIcon: string;
                lineText: string;
                lineNumText: string;
                lineTimestampText: string;
                lineHoverBg: string;
                lineSelectedBg: string;
                lineSelectedNumText: string;
                lineDtFmText: string;
                lineDtFmBg: string;
                gateBg: string;
                gateText: string;
                gateWaitingText: string;
                stepHeaderOpenBg: string;
                stepErrorText: string;
                stepWarningText: string;
                loglineText: string;
                loglineNumText: string;
                loglineDebugText: string;
                loglineErrorText: string;
                loglineErrorNumText: string;
                loglineErrorBg: string;
                loglineWarningText: string;
                loglineWarningNumText: string;
                loglineWarningBg: string;
                loglineCommandText: string;
                loglineSectionText: string;
                ansi: {
                    black: string;
                    blackBright: string;
                    white: string;
                    whiteBright: string;
                    gray: string;
                    red: string;
                    redBright: string;
                    green: string;
                    greenBright: string;
                    yellow: string;
                    yellowBright: string;
                    blue: string;
                    blueBright: string;
                    magenta: string;
                    magentaBright: string;
                    cyan: string;
                    cyanBright: string;
                };
            };
            project: {
                headerBg: string;
                sidebarBg: string;
                gradientIn: string;
                gradientOut: string;
            };
            mktg: {
                btn: {
                    bg: string;
                };
            };
            control: {
                borderColor: {
                    emphasis: string;
                };
            };
            avatar: {
                bg: string;
                border: string;
                stackFade: string;
                stackFadeMore: string;
            };
            topicTag: {
                border: string;
            };
            counter: {
                border: string;
            };
            selectMenu: {
                backdropBorder: string;
                tapHighlight: string;
                tapFocusBg: string;
            };
            overlay: {
                backdrop: string;
            };
            header: {
                text: string;
                bg: string;
                divider: string;
                logo: string;
            };
            headerSearch: {
                bg: string;
                border: string;
            };
            sidenav: {
                selectedBg: string;
            };
            menu: {
                bgActive: string;
            };
            input: {
                disabledBg: string;
            };
            timeline: {
                badgeBg: string;
            };
            ansi: {
                black: string;
                blackBright: string;
                white: string;
                whiteBright: string;
                gray: string;
                red: string;
                redBright: string;
                green: string;
                greenBright: string;
                yellow: string;
                yellowBright: string;
                blue: string;
                blueBright: string;
                magenta: string;
                magentaBright: string;
                cyan: string;
                cyanBright: string;
            };
            btn: {
                text: string;
                bg: string;
                border: string;
                hoverBg: string;
                hoverBorder: string;
                activeBg: string;
                activeBorder: string;
                selectedBg: string;
                counterBg: string;
                primary: {
                    text: string;
                    bg: string;
                    border: string;
                    hoverBg: string;
                    hoverBorder: string;
                    selectedBg: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledBorder: string;
                    icon: string;
                    counterBg: string;
                };
                outline: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    counterFg: string;
                    hoverCounterFg: string;
                    disabledCounterFg: string;
                };
                danger: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    icon: string;
                    hoverIcon: string;
                    counterFg: string;
                    hoverCounterFg: string;
                    disabledCounterFg: string;
                };
                inactive: {
                    bg: string;
                    text: string;
                };
            };
            underlinenav: {
                icon: string;
                borderHover: string;
            };
            actionListItem: {
                inlineDivider: string;
                default: {
                    hoverBg: string;
                    hoverBorder: string;
                    activeBg: string;
                    activeBorder: string;
                    selectedBg: string;
                };
                danger: {
                    hoverBg: string;
                    activeBg: string;
                    hoverText: string;
                };
            };
            switchTrack: {
                bg: string;
                hoverBg: string;
                activeBg: string;
                disabledBg: string;
                fg: string;
                disabledFg: string;
                border: string;
                checked: {
                    bg: string;
                    hoverBg: string;
                    activeBg: string;
                    fg: string;
                    disabledFg: string;
                    border: string;
                };
            };
            switchKnob: {
                bg: string;
                disabledBg: string;
                border: string;
                checked: {
                    bg: string;
                    disabledBg: string;
                    border: string;
                };
            };
            segmentedControl: {
                bg: string;
                button: {
                    bg: string;
                    hover: {
                        bg: string;
                    };
                    active: {
                        bg: string;
                    };
                    selected: {
                        border: string;
                    };
                };
            };
            treeViewItem: {
                chevron: {
                    hoverBg: string;
                };
                directory: {
                    fill: string;
                };
            };
            fg: {
                default: string;
                muted: string;
                subtle: string;
                onEmphasis: string;
            };
            canvas: {
                default: string;
                overlay: string;
                inset: string;
                subtle: string;
            };
            border: {
                default: string;
                muted: string;
                subtle: string;
            };
            neutral: {
                emphasisPlus: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            accent: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            success: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            attention: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            severe: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            danger: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            open: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            closed: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            done: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            sponsors: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            primer: {
                fg: {
                    disabled: string;
                };
                canvas: {
                    backdrop: string;
                    sticky: string;
                };
                border: {
                    active: string;
                    contrast: string;
                };
            };
        };
        shadows: {
            mktg: {
                btn: {
                    shadow: {
                        outline: string;
                        focus: string;
                        hover: string;
                        hoverMuted: string;
                    };
                };
            };
            avatar: {
                childShadow: string;
            };
            overlay: {
                shadow: string;
            };
            btn: {
                shadow: string;
                insetShadow: string;
                primary: {
                    shadow: string;
                    insetShadow: string;
                    selectedShadow: string;
                };
                outline: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
                danger: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
            };
            shadow: {
                small: string;
                medium: string;
                large: string;
                extraLarge: string;
            };
            primer: {
                shadow: {
                    highlight: string;
                    inset: string;
                };
            };
        };
    };
    dark: {
        colors: {
            canvasDefaultTransparent: string;
            pageHeaderBg: string;
            marketingIcon: {
                primary: string;
                secondary: string;
            };
            diffBlob: {
                addition: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                deletion: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                hunk: {
                    numBg: string;
                };
                expander: {
                    icon: string;
                };
                selectedLineHighlightMixBlendMode: string;
            };
            diffstat: {
                deletionBorder: string;
                additionBorder: string;
                additionBg: string;
            };
            searchKeyword: {
                hl: string;
            };
            prettylights: {
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    storageModifierImport: string;
                    entityTag: string;
                    keyword: string;
                    string: string;
                    variable: string;
                    brackethighlighterUnmatched: string;
                    invalidIllegalText: string;
                    invalidIllegalBg: string;
                    carriageReturnText: string;
                    carriageReturnBg: string;
                    stringRegexp: string;
                    markupList: string;
                    markupHeading: string;
                    markupItalic: string;
                    markupBold: string;
                    markupDeletedText: string;
                    markupDeletedBg: string;
                    markupInsertedText: string;
                    markupInsertedBg: string;
                    markupChangedText: string;
                    markupChangedBg: string;
                    markupIgnoredText: string;
                    markupIgnoredBg: string;
                    metaDiffRange: string;
                    brackethighlighterAngle: string;
                    sublimelinterGutterMark: string;
                    constantOtherReferenceLink: string;
                };
            };
            codemirror: {
                text: string;
                bg: string;
                guttersBg: string;
                guttermarkerText: string;
                guttermarkerSubtleText: string;
                linenumberText: string;
                cursor: string;
                selectionBg: string;
                activelineBg: string;
                matchingbracketText: string;
                linesBg: string;
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    keyword: string;
                    storage: string;
                    string: string;
                    support: string;
                    variable: string;
                };
            };
            checks: {
                bg: string;
                runBorderWidth: string;
                containerBorderWidth: string;
                textPrimary: string;
                textSecondary: string;
                textLink: string;
                btnIcon: string;
                btnHoverIcon: string;
                btnHoverBg: string;
                inputText: string;
                inputPlaceholderText: string;
                inputFocusText: string;
                inputBg: string;
                donutError: string;
                donutPending: string;
                donutSuccess: string;
                donutNeutral: string;
                dropdownText: string;
                dropdownBg: string;
                dropdownBorder: string;
                dropdownShadow: string;
                dropdownHoverText: string;
                dropdownHoverBg: string;
                dropdownBtnHoverText: string;
                dropdownBtnHoverBg: string;
                scrollbarThumbBg: string;
                headerLabelText: string;
                headerLabelOpenText: string;
                headerBorder: string;
                headerIcon: string;
                lineText: string;
                lineNumText: string;
                lineTimestampText: string;
                lineHoverBg: string;
                lineSelectedBg: string;
                lineSelectedNumText: string;
                lineDtFmText: string;
                lineDtFmBg: string;
                gateBg: string;
                gateText: string;
                gateWaitingText: string;
                stepHeaderOpenBg: string;
                stepErrorText: string;
                stepWarningText: string;
                loglineText: string;
                loglineNumText: string;
                loglineDebugText: string;
                loglineErrorText: string;
                loglineErrorNumText: string;
                loglineErrorBg: string;
                loglineWarningText: string;
                loglineWarningNumText: string;
                loglineWarningBg: string;
                loglineCommandText: string;
                loglineSectionText: string;
                ansi: {
                    black: string;
                    blackBright: string;
                    white: string;
                    whiteBright: string;
                    gray: string;
                    red: string;
                    redBright: string;
                    green: string;
                    greenBright: string;
                    yellow: string;
                    yellowBright: string;
                    blue: string;
                    blueBright: string;
                    magenta: string;
                    magentaBright: string;
                    cyan: string;
                    cyanBright: string;
                };
            };
            project: {
                headerBg: string;
                sidebarBg: string;
                gradientIn: string;
                gradientOut: string;
            };
            mktg: {
                btn: {
                    bg: string;
                };
            };
            control: {
                borderColor: {
                    emphasis: string;
                };
            };
            avatar: {
                bg: string;
                border: string;
                stackFade: string;
                stackFadeMore: string;
            };
            topicTag: {
                border: string;
            };
            counter: {
                border: string;
            };
            selectMenu: {
                backdropBorder: string;
                tapHighlight: string;
                tapFocusBg: string;
            };
            overlay: {
                backdrop: string;
            };
            header: {
                text: string;
                bg: string;
                divider: string;
                logo: string;
            };
            headerSearch: {
                bg: string;
                border: string;
            };
            sidenav: {
                selectedBg: string;
            };
            menu: {
                bgActive: string;
            };
            input: {
                disabledBg: string;
            };
            timeline: {
                badgeBg: string;
            };
            ansi: {
                black: string;
                blackBright: string;
                white: string;
                whiteBright: string;
                gray: string;
                red: string;
                redBright: string;
                green: string;
                greenBright: string;
                yellow: string;
                yellowBright: string;
                blue: string;
                blueBright: string;
                magenta: string;
                magentaBright: string;
                cyan: string;
                cyanBright: string;
            };
            btn: {
                text: string;
                bg: string;
                border: string;
                hoverBg: string;
                hoverBorder: string;
                activeBg: string;
                activeBorder: string;
                selectedBg: string;
                counterBg: string;
                primary: {
                    text: string;
                    bg: string;
                    border: string;
                    hoverBg: string;
                    hoverBorder: string;
                    selectedBg: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledBorder: string;
                    icon: string;
                    counterBg: string;
                };
                outline: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    hoverCounterFg: string;
                    disabledCounterFg: string;
                    counterFg: string;
                };
                danger: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverIcon: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    icon: string;
                    counterFg: string;
                    disabledCounterFg: string;
                    hoverCounterFg: string;
                };
                inactive: {
                    bg: string;
                    text: string;
                };
            };
            underlinenav: {
                icon: string;
                borderHover: string;
            };
            actionListItem: {
                inlineDivider: string;
                default: {
                    hoverBg: string;
                    hoverBorder: string;
                    activeBg: string;
                    activeBorder: string;
                    selectedBg: string;
                };
                danger: {
                    hoverBg: string;
                    activeBg: string;
                    hoverText: string;
                };
            };
            switchTrack: {
                bg: string;
                hoverBg: string;
                activeBg: string;
                disabledBg: string;
                fg: string;
                disabledFg: string;
                border: string;
                checked: {
                    bg: string;
                    hoverBg: string;
                    activeBg: string;
                    fg: string;
                    disabledFg: string;
                    border: string;
                };
            };
            switchKnob: {
                bg: string;
                border: string;
                disabledBg: string;
                checked: {
                    bg: string;
                    disabledBg: string;
                    border: string;
                };
            };
            segmentedControl: {
                bg: string;
                button: {
                    bg: string;
                    hover: {
                        bg: string;
                    };
                    active: {
                        bg: string;
                    };
                    selected: {
                        border: string;
                    };
                };
            };
            treeViewItem: {
                chevron: {
                    hoverBg: string;
                };
                directory: {
                    fill: string;
                };
            };
            fg: {
                default: string;
                muted: string;
                subtle: string;
                onEmphasis: string;
            };
            canvas: {
                default: string;
                overlay: string;
                inset: string;
                subtle: string;
            };
            border: {
                default: string;
                muted: string;
                subtle: string;
            };
            neutral: {
                emphasisPlus: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            accent: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            success: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            attention: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            severe: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            danger: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            open: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            closed: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            done: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            sponsors: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            primer: {
                fg: {
                    disabled: string;
                };
                canvas: {
                    backdrop: string;
                    sticky: string;
                };
                border: {
                    active: string;
                    contrast: string;
                };
            };
        };
        shadows: {
            checks: {
                inputShadow: string;
            };
            mktg: {
                btn: {
                    shadow: {
                        outline: string;
                        focus: string;
                        hover: string;
                        hoverMuted: string;
                    };
                };
            };
            avatar: {
                childShadow: string;
            };
            overlay: {
                shadow: string;
            };
            btn: {
                shadow: string;
                insetShadow: string;
                primary: {
                    shadow: string;
                    insetShadow: string;
                    selectedShadow: string;
                };
                outline: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
                danger: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
            };
            shadow: {
                small: string;
                medium: string;
                large: string;
                extraLarge: string;
            };
            primer: {
                shadow: {
                    highlight: string;
                    inset: string;
                };
            };
        };
    };
    dark_dimmed: {
        colors: {
            canvasDefaultTransparent: string;
            pageHeaderBg: string;
            marketingIcon: {
                primary: string;
                secondary: string;
            };
            diffBlob: {
                addition: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                deletion: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                hunk: {
                    numBg: string;
                };
                expander: {
                    icon: string;
                };
                selectedLineHighlightMixBlendMode: string;
            };
            diffstat: {
                deletionBorder: string;
                additionBorder: string;
                additionBg: string;
            };
            searchKeyword: {
                hl: string;
            };
            prettylights: {
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    storageModifierImport: string;
                    entityTag: string;
                    keyword: string;
                    string: string;
                    variable: string;
                    brackethighlighterUnmatched: string;
                    invalidIllegalText: string;
                    invalidIllegalBg: string;
                    carriageReturnText: string;
                    carriageReturnBg: string;
                    stringRegexp: string;
                    markupList: string;
                    markupHeading: string;
                    markupItalic: string;
                    markupBold: string;
                    markupDeletedText: string;
                    markupDeletedBg: string;
                    markupInsertedText: string;
                    markupInsertedBg: string;
                    markupChangedText: string;
                    markupChangedBg: string;
                    markupIgnoredText: string;
                    markupIgnoredBg: string;
                    metaDiffRange: string;
                    brackethighlighterAngle: string;
                    sublimelinterGutterMark: string;
                    constantOtherReferenceLink: string;
                };
            };
            codemirror: {
                text: string;
                bg: string;
                guttersBg: string;
                guttermarkerText: string;
                guttermarkerSubtleText: string;
                linenumberText: string;
                cursor: string;
                selectionBg: string;
                activelineBg: string;
                matchingbracketText: string;
                linesBg: string;
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    keyword: string;
                    storage: string;
                    string: string;
                    support: string;
                    variable: string;
                };
            };
            checks: {
                bg: string;
                runBorderWidth: string;
                containerBorderWidth: string;
                textPrimary: string;
                textSecondary: string;
                textLink: string;
                btnIcon: string;
                btnHoverIcon: string;
                btnHoverBg: string;
                inputText: string;
                inputPlaceholderText: string;
                inputFocusText: string;
                inputBg: string;
                donutError: string;
                donutPending: string;
                donutSuccess: string;
                donutNeutral: string;
                dropdownText: string;
                dropdownBg: string;
                dropdownBorder: string;
                dropdownShadow: string;
                dropdownHoverText: string;
                dropdownHoverBg: string;
                dropdownBtnHoverText: string;
                dropdownBtnHoverBg: string;
                scrollbarThumbBg: string;
                headerLabelText: string;
                headerLabelOpenText: string;
                headerBorder: string;
                headerIcon: string;
                lineText: string;
                lineNumText: string;
                lineTimestampText: string;
                lineHoverBg: string;
                lineSelectedBg: string;
                lineSelectedNumText: string;
                lineDtFmText: string;
                lineDtFmBg: string;
                gateBg: string;
                gateText: string;
                gateWaitingText: string;
                stepHeaderOpenBg: string;
                stepErrorText: string;
                stepWarningText: string;
                loglineText: string;
                loglineNumText: string;
                loglineDebugText: string;
                loglineErrorText: string;
                loglineErrorNumText: string;
                loglineErrorBg: string;
                loglineWarningText: string;
                loglineWarningNumText: string;
                loglineWarningBg: string;
                loglineCommandText: string;
                loglineSectionText: string;
                ansi: {
                    black: string;
                    blackBright: string;
                    white: string;
                    whiteBright: string;
                    gray: string;
                    red: string;
                    redBright: string;
                    green: string;
                    greenBright: string;
                    yellow: string;
                    yellowBright: string;
                    blue: string;
                    blueBright: string;
                    magenta: string;
                    magentaBright: string;
                    cyan: string;
                    cyanBright: string;
                };
            };
            project: {
                headerBg: string;
                sidebarBg: string;
                gradientIn: string;
                gradientOut: string;
            };
            mktg: {
                btn: {
                    bg: string;
                };
            };
            control: {
                borderColor: {
                    emphasis: string;
                };
            };
            avatar: {
                bg: string;
                border: string;
                stackFade: string;
                stackFadeMore: string;
            };
            topicTag: {
                border: string;
            };
            counter: {
                border: string;
            };
            selectMenu: {
                backdropBorder: string;
                tapHighlight: string;
                tapFocusBg: string;
            };
            overlay: {
                backdrop: string;
            };
            header: {
                text: string;
                bg: string;
                divider: string;
                logo: string;
            };
            headerSearch: {
                bg: string;
                border: string;
            };
            sidenav: {
                selectedBg: string;
            };
            menu: {
                bgActive: string;
            };
            input: {
                disabledBg: string;
            };
            timeline: {
                badgeBg: string;
            };
            ansi: {
                black: string;
                blackBright: string;
                white: string;
                whiteBright: string;
                gray: string;
                red: string;
                redBright: string;
                green: string;
                greenBright: string;
                yellow: string;
                yellowBright: string;
                blue: string;
                blueBright: string;
                magenta: string;
                magentaBright: string;
                cyan: string;
                cyanBright: string;
            };
            btn: {
                text: string;
                bg: string;
                border: string;
                hoverBg: string;
                hoverBorder: string;
                activeBg: string;
                activeBorder: string;
                selectedBg: string;
                counterBg: string;
                primary: {
                    text: string;
                    bg: string;
                    border: string;
                    hoverBg: string;
                    hoverBorder: string;
                    selectedBg: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledBorder: string;
                    icon: string;
                    counterBg: string;
                };
                outline: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    hoverCounterFg: string;
                    disabledCounterFg: string;
                    counterFg: string;
                };
                danger: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverIcon: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    icon: string;
                    counterFg: string;
                    disabledCounterFg: string;
                    hoverCounterFg: string;
                };
                inactive: {
                    bg: string;
                    text: string;
                };
            };
            underlinenav: {
                icon: string;
                borderHover: string;
            };
            actionListItem: {
                inlineDivider: string;
                default: {
                    hoverBg: string;
                    hoverBorder: string;
                    activeBg: string;
                    activeBorder: string;
                    selectedBg: string;
                };
                danger: {
                    hoverBg: string;
                    activeBg: string;
                    hoverText: string;
                };
            };
            switchTrack: {
                bg: string;
                hoverBg: string;
                activeBg: string;
                disabledBg: string;
                fg: string;
                disabledFg: string;
                border: string;
                checked: {
                    bg: string;
                    hoverBg: string;
                    activeBg: string;
                    fg: string;
                    disabledFg: string;
                    border: string;
                };
            };
            switchKnob: {
                bg: string;
                border: string;
                disabledBg: string;
                checked: {
                    bg: string;
                    disabledBg: string;
                    border: string;
                };
            };
            segmentedControl: {
                bg: string;
                button: {
                    bg: string;
                    hover: {
                        bg: string;
                    };
                    active: {
                        bg: string;
                    };
                    selected: {
                        border: string;
                    };
                };
            };
            treeViewItem: {
                chevron: {
                    hoverBg: string;
                };
                directory: {
                    fill: string;
                };
            };
            fg: {
                default: string;
                muted: string;
                subtle: string;
                onEmphasis: string;
            };
            canvas: {
                default: string;
                overlay: string;
                inset: string;
                subtle: string;
            };
            border: {
                default: string;
                muted: string;
                subtle: string;
            };
            neutral: {
                emphasisPlus: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            accent: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            success: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            attention: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            severe: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            danger: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            open: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            closed: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            done: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            sponsors: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            primer: {
                fg: {
                    disabled: string;
                };
                canvas: {
                    backdrop: string;
                    sticky: string;
                };
                border: {
                    active: string;
                    contrast: string;
                };
            };
        };
        shadows: {
            checks: {
                inputShadow: string;
            };
            mktg: {
                btn: {
                    shadow: {
                        outline: string;
                        focus: string;
                        hover: string;
                        hoverMuted: string;
                    };
                };
            };
            avatar: {
                childShadow: string;
            };
            overlay: {
                shadow: string;
            };
            btn: {
                shadow: string;
                insetShadow: string;
                primary: {
                    shadow: string;
                    insetShadow: string;
                    selectedShadow: string;
                };
                outline: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
                danger: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
            };
            shadow: {
                small: string;
                medium: string;
                large: string;
                extraLarge: string;
            };
            primer: {
                shadow: {
                    highlight: string;
                    inset: string;
                };
            };
        };
    };
    dark_high_contrast: {
        colors: {
            canvasDefaultTransparent: string;
            pageHeaderBg: string;
            marketingIcon: {
                primary: string;
                secondary: string;
            };
            diffBlob: {
                addition: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                deletion: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                hunk: {
                    numBg: string;
                };
                expander: {
                    icon: string;
                };
                selectedLineHighlightMixBlendMode: string;
            };
            diffstat: {
                deletionBorder: string;
                additionBorder: string;
                additionBg: string;
            };
            searchKeyword: {
                hl: string;
            };
            prettylights: {
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    storageModifierImport: string;
                    entityTag: string;
                    keyword: string;
                    string: string;
                    variable: string;
                    brackethighlighterUnmatched: string;
                    invalidIllegalText: string;
                    invalidIllegalBg: string;
                    carriageReturnText: string;
                    carriageReturnBg: string;
                    stringRegexp: string;
                    markupList: string;
                    markupHeading: string;
                    markupItalic: string;
                    markupBold: string;
                    markupDeletedText: string;
                    markupDeletedBg: string;
                    markupInsertedText: string;
                    markupInsertedBg: string;
                    markupChangedText: string;
                    markupChangedBg: string;
                    markupIgnoredText: string;
                    markupIgnoredBg: string;
                    metaDiffRange: string;
                    brackethighlighterAngle: string;
                    sublimelinterGutterMark: string;
                    constantOtherReferenceLink: string;
                };
            };
            codemirror: {
                text: string;
                bg: string;
                guttersBg: string;
                guttermarkerText: string;
                guttermarkerSubtleText: string;
                linenumberText: string;
                cursor: string;
                selectionBg: string;
                activelineBg: string;
                matchingbracketText: string;
                linesBg: string;
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    keyword: string;
                    storage: string;
                    string: string;
                    support: string;
                    variable: string;
                };
            };
            checks: {
                bg: string;
                runBorderWidth: string;
                containerBorderWidth: string;
                textPrimary: string;
                textSecondary: string;
                textLink: string;
                btnIcon: string;
                btnHoverIcon: string;
                btnHoverBg: string;
                inputText: string;
                inputPlaceholderText: string;
                inputFocusText: string;
                inputBg: string;
                donutError: string;
                donutPending: string;
                donutSuccess: string;
                donutNeutral: string;
                dropdownText: string;
                dropdownBg: string;
                dropdownBorder: string;
                dropdownShadow: string;
                dropdownHoverText: string;
                dropdownHoverBg: string;
                dropdownBtnHoverText: string;
                dropdownBtnHoverBg: string;
                scrollbarThumbBg: string;
                headerLabelText: string;
                headerLabelOpenText: string;
                headerBorder: string;
                headerIcon: string;
                lineText: string;
                lineNumText: string;
                lineTimestampText: string;
                lineHoverBg: string;
                lineSelectedBg: string;
                lineSelectedNumText: string;
                lineDtFmText: string;
                lineDtFmBg: string;
                gateBg: string;
                gateText: string;
                gateWaitingText: string;
                stepHeaderOpenBg: string;
                stepErrorText: string;
                stepWarningText: string;
                loglineText: string;
                loglineNumText: string;
                loglineDebugText: string;
                loglineErrorText: string;
                loglineErrorNumText: string;
                loglineErrorBg: string;
                loglineWarningText: string;
                loglineWarningNumText: string;
                loglineWarningBg: string;
                loglineCommandText: string;
                loglineSectionText: string;
                ansi: {
                    black: string;
                    blackBright: string;
                    white: string;
                    whiteBright: string;
                    gray: string;
                    red: string;
                    redBright: string;
                    green: string;
                    greenBright: string;
                    yellow: string;
                    yellowBright: string;
                    blue: string;
                    blueBright: string;
                    magenta: string;
                    magentaBright: string;
                    cyan: string;
                    cyanBright: string;
                };
            };
            project: {
                headerBg: string;
                sidebarBg: string;
                gradientIn: string;
                gradientOut: string;
            };
            mktg: {
                btn: {
                    bg: string;
                };
            };
            control: {
                borderColor: {
                    emphasis: string;
                };
            };
            avatar: {
                bg: string;
                border: string;
                stackFade: string;
                stackFadeMore: string;
            };
            topicTag: {
                border: string;
            };
            counter: {
                border: string;
            };
            selectMenu: {
                backdropBorder: string;
                tapHighlight: string;
                tapFocusBg: string;
            };
            overlay: {
                backdrop: string;
            };
            header: {
                text: string;
                bg: string;
                divider: string;
                logo: string;
            };
            headerSearch: {
                bg: string;
                border: string;
            };
            sidenav: {
                selectedBg: string;
            };
            menu: {
                bgActive: string;
            };
            input: {
                disabledBg: string;
            };
            timeline: {
                badgeBg: string;
            };
            ansi: {
                black: string;
                blackBright: string;
                white: string;
                whiteBright: string;
                gray: string;
                red: string;
                redBright: string;
                green: string;
                greenBright: string;
                yellow: string;
                yellowBright: string;
                blue: string;
                blueBright: string;
                magenta: string;
                magentaBright: string;
                cyan: string;
                cyanBright: string;
            };
            btn: {
                text: string;
                bg: string;
                border: string;
                hoverBg: string;
                hoverBorder: string;
                activeBg: string;
                activeBorder: string;
                selectedBg: string;
                counterBg: string;
                primary: {
                    text: string;
                    bg: string;
                    border: string;
                    hoverBg: string;
                    hoverBorder: string;
                    selectedBg: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledBorder: string;
                    icon: string;
                    counterBg: string;
                };
                outline: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    hoverCounterFg: string;
                    disabledCounterFg: string;
                    counterFg: string;
                };
                danger: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverIcon: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    icon: string;
                    counterFg: string;
                    disabledCounterFg: string;
                    hoverCounterFg: string;
                };
                inactive: {
                    bg: string;
                    text: string;
                };
            };
            underlinenav: {
                icon: string;
                borderHover: string;
            };
            actionListItem: {
                inlineDivider: string;
                default: {
                    hoverBg: string;
                    hoverBorder: string;
                    activeBg: string;
                    activeBorder: string;
                    selectedBg: string;
                };
                danger: {
                    hoverBg: string;
                    activeBg: string;
                    hoverText: string;
                };
            };
            switchTrack: {
                bg: string;
                hoverBg: string;
                activeBg: string;
                disabledBg: string;
                fg: string;
                disabledFg: string;
                border: string;
                checked: {
                    bg: string;
                    hoverBg: string;
                    activeBg: string;
                    fg: string;
                    disabledFg: string;
                    border: string;
                };
            };
            switchKnob: {
                bg: string;
                border: string;
                disabledBg: string;
                checked: {
                    bg: string;
                    disabledBg: string;
                    border: string;
                };
            };
            segmentedControl: {
                bg: string;
                button: {
                    bg: string;
                    hover: {
                        bg: string;
                    };
                    active: {
                        bg: string;
                    };
                    selected: {
                        border: string;
                    };
                };
            };
            treeViewItem: {
                chevron: {
                    hoverBg: string;
                };
                directory: {
                    fill: string;
                };
            };
            fg: {
                default: string;
                muted: string;
                subtle: string;
                onEmphasis: string;
            };
            canvas: {
                default: string;
                overlay: string;
                inset: string;
                subtle: string;
            };
            border: {
                default: string;
                muted: string;
                subtle: string;
            };
            neutral: {
                emphasisPlus: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            accent: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            success: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            attention: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            severe: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            danger: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            open: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            closed: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            done: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            sponsors: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            primer: {
                fg: {
                    disabled: string;
                };
                canvas: {
                    backdrop: string;
                    sticky: string;
                };
                border: {
                    active: string;
                    contrast: string;
                };
            };
        };
        shadows: {
            checks: {
                inputShadow: string;
            };
            mktg: {
                btn: {
                    shadow: {
                        outline: string;
                        focus: string;
                        hover: string;
                        hoverMuted: string;
                    };
                };
            };
            avatar: {
                childShadow: string;
            };
            overlay: {
                shadow: string;
            };
            btn: {
                shadow: string;
                insetShadow: string;
                primary: {
                    shadow: string;
                    insetShadow: string;
                    selectedShadow: string;
                };
                outline: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
                danger: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
            };
            shadow: {
                small: string;
                medium: string;
                large: string;
                extraLarge: string;
            };
            primer: {
                shadow: {
                    highlight: string;
                    inset: string;
                };
            };
        };
    };
    dark_colorblind: {
        colors: {
            canvasDefaultTransparent: string;
            pageHeaderBg: string;
            marketingIcon: {
                primary: string;
                secondary: string;
            };
            diffBlob: {
                addition: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                deletion: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                hunk: {
                    numBg: string;
                };
                expander: {
                    icon: string;
                };
                selectedLineHighlightMixBlendMode: string;
            };
            diffstat: {
                deletionBorder: string;
                additionBorder: string;
                additionBg: string;
            };
            searchKeyword: {
                hl: string;
            };
            prettylights: {
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    storageModifierImport: string;
                    entityTag: string;
                    keyword: string;
                    string: string;
                    variable: string;
                    brackethighlighterUnmatched: string;
                    invalidIllegalText: string;
                    invalidIllegalBg: string;
                    carriageReturnText: string;
                    carriageReturnBg: string;
                    stringRegexp: string;
                    markupList: string;
                    markupHeading: string;
                    markupItalic: string;
                    markupBold: string;
                    markupDeletedText: string;
                    markupDeletedBg: string;
                    markupInsertedText: string;
                    markupInsertedBg: string;
                    markupChangedText: string;
                    markupChangedBg: string;
                    markupIgnoredText: string;
                    markupIgnoredBg: string;
                    metaDiffRange: string;
                    brackethighlighterAngle: string;
                    sublimelinterGutterMark: string;
                    constantOtherReferenceLink: string;
                };
            };
            codemirror: {
                text: string;
                bg: string;
                guttersBg: string;
                guttermarkerText: string;
                guttermarkerSubtleText: string;
                linenumberText: string;
                cursor: string;
                selectionBg: string;
                activelineBg: string;
                matchingbracketText: string;
                linesBg: string;
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    keyword: string;
                    storage: string;
                    string: string;
                    support: string;
                    variable: string;
                };
            };
            checks: {
                bg: string;
                runBorderWidth: string;
                containerBorderWidth: string;
                textPrimary: string;
                textSecondary: string;
                textLink: string;
                btnIcon: string;
                btnHoverIcon: string;
                btnHoverBg: string;
                inputText: string;
                inputPlaceholderText: string;
                inputFocusText: string;
                inputBg: string;
                donutError: string;
                donutPending: string;
                donutSuccess: string;
                donutNeutral: string;
                dropdownText: string;
                dropdownBg: string;
                dropdownBorder: string;
                dropdownShadow: string;
                dropdownHoverText: string;
                dropdownHoverBg: string;
                dropdownBtnHoverText: string;
                dropdownBtnHoverBg: string;
                scrollbarThumbBg: string;
                headerLabelText: string;
                headerLabelOpenText: string;
                headerBorder: string;
                headerIcon: string;
                lineText: string;
                lineNumText: string;
                lineTimestampText: string;
                lineHoverBg: string;
                lineSelectedBg: string;
                lineSelectedNumText: string;
                lineDtFmText: string;
                lineDtFmBg: string;
                gateBg: string;
                gateText: string;
                gateWaitingText: string;
                stepHeaderOpenBg: string;
                stepErrorText: string;
                stepWarningText: string;
                loglineText: string;
                loglineNumText: string;
                loglineDebugText: string;
                loglineErrorText: string;
                loglineErrorNumText: string;
                loglineErrorBg: string;
                loglineWarningText: string;
                loglineWarningNumText: string;
                loglineWarningBg: string;
                loglineCommandText: string;
                loglineSectionText: string;
                ansi: {
                    black: string;
                    blackBright: string;
                    white: string;
                    whiteBright: string;
                    gray: string;
                    red: string;
                    redBright: string;
                    green: string;
                    greenBright: string;
                    yellow: string;
                    yellowBright: string;
                    blue: string;
                    blueBright: string;
                    magenta: string;
                    magentaBright: string;
                    cyan: string;
                    cyanBright: string;
                };
            };
            project: {
                headerBg: string;
                sidebarBg: string;
                gradientIn: string;
                gradientOut: string;
            };
            mktg: {
                btn: {
                    bg: string;
                };
            };
            control: {
                borderColor: {
                    emphasis: string;
                };
            };
            avatar: {
                bg: string;
                border: string;
                stackFade: string;
                stackFadeMore: string;
            };
            topicTag: {
                border: string;
            };
            counter: {
                border: string;
            };
            selectMenu: {
                backdropBorder: string;
                tapHighlight: string;
                tapFocusBg: string;
            };
            overlay: {
                backdrop: string;
            };
            header: {
                text: string;
                bg: string;
                divider: string;
                logo: string;
            };
            headerSearch: {
                bg: string;
                border: string;
            };
            sidenav: {
                selectedBg: string;
            };
            menu: {
                bgActive: string;
            };
            input: {
                disabledBg: string;
            };
            timeline: {
                badgeBg: string;
            };
            ansi: {
                black: string;
                blackBright: string;
                white: string;
                whiteBright: string;
                gray: string;
                red: string;
                redBright: string;
                green: string;
                greenBright: string;
                yellow: string;
                yellowBright: string;
                blue: string;
                blueBright: string;
                magenta: string;
                magentaBright: string;
                cyan: string;
                cyanBright: string;
            };
            btn: {
                text: string;
                bg: string;
                border: string;
                hoverBg: string;
                hoverBorder: string;
                activeBg: string;
                activeBorder: string;
                selectedBg: string;
                counterBg: string;
                primary: {
                    text: string;
                    bg: string;
                    border: string;
                    hoverBg: string;
                    hoverBorder: string;
                    selectedBg: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledBorder: string;
                    icon: string;
                    counterBg: string;
                };
                outline: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    hoverCounterFg: string;
                    disabledCounterFg: string;
                    counterFg: string;
                };
                danger: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverIcon: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    icon: string;
                    counterFg: string;
                    disabledCounterFg: string;
                    hoverCounterFg: string;
                };
                inactive: {
                    bg: string;
                    text: string;
                };
            };
            underlinenav: {
                icon: string;
                borderHover: string;
            };
            actionListItem: {
                inlineDivider: string;
                default: {
                    hoverBg: string;
                    hoverBorder: string;
                    activeBg: string;
                    activeBorder: string;
                    selectedBg: string;
                };
                danger: {
                    hoverBg: string;
                    activeBg: string;
                    hoverText: string;
                };
            };
            switchTrack: {
                bg: string;
                hoverBg: string;
                activeBg: string;
                disabledBg: string;
                fg: string;
                disabledFg: string;
                border: string;
                checked: {
                    bg: string;
                    hoverBg: string;
                    activeBg: string;
                    fg: string;
                    disabledFg: string;
                    border: string;
                };
            };
            switchKnob: {
                bg: string;
                border: string;
                disabledBg: string;
                checked: {
                    bg: string;
                    disabledBg: string;
                    border: string;
                };
            };
            segmentedControl: {
                bg: string;
                button: {
                    bg: string;
                    hover: {
                        bg: string;
                    };
                    active: {
                        bg: string;
                    };
                    selected: {
                        border: string;
                    };
                };
            };
            treeViewItem: {
                chevron: {
                    hoverBg: string;
                };
                directory: {
                    fill: string;
                };
            };
            fg: {
                default: string;
                muted: string;
                subtle: string;
                onEmphasis: string;
            };
            canvas: {
                default: string;
                overlay: string;
                inset: string;
                subtle: string;
            };
            border: {
                default: string;
                muted: string;
                subtle: string;
            };
            neutral: {
                emphasisPlus: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            accent: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            success: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            attention: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            severe: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            danger: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            open: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            closed: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            done: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            sponsors: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            primer: {
                fg: {
                    disabled: string;
                };
                canvas: {
                    backdrop: string;
                    sticky: string;
                };
                border: {
                    active: string;
                    contrast: string;
                };
            };
        };
        shadows: {
            checks: {
                inputShadow: string;
            };
            mktg: {
                btn: {
                    shadow: {
                        outline: string;
                        focus: string;
                        hover: string;
                        hoverMuted: string;
                    };
                };
            };
            avatar: {
                childShadow: string;
            };
            overlay: {
                shadow: string;
            };
            btn: {
                shadow: string;
                insetShadow: string;
                primary: {
                    shadow: string;
                    insetShadow: string;
                    selectedShadow: string;
                };
                outline: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
                danger: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
            };
            shadow: {
                small: string;
                medium: string;
                large: string;
                extraLarge: string;
            };
            primer: {
                shadow: {
                    highlight: string;
                    inset: string;
                };
            };
        };
    };
    dark_tritanopia: {
        colors: {
            canvasDefaultTransparent: string;
            pageHeaderBg: string;
            marketingIcon: {
                primary: string;
                secondary: string;
            };
            diffBlob: {
                addition: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                deletion: {
                    numText: string;
                    fg: string;
                    numBg: string;
                    lineBg: string;
                    wordBg: string;
                };
                hunk: {
                    numBg: string;
                };
                expander: {
                    icon: string;
                };
                selectedLineHighlightMixBlendMode: string;
            };
            diffstat: {
                deletionBorder: string;
                additionBorder: string;
                additionBg: string;
            };
            searchKeyword: {
                hl: string;
            };
            prettylights: {
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    storageModifierImport: string;
                    entityTag: string;
                    keyword: string;
                    string: string;
                    variable: string;
                    brackethighlighterUnmatched: string;
                    invalidIllegalText: string;
                    invalidIllegalBg: string;
                    carriageReturnText: string;
                    carriageReturnBg: string;
                    stringRegexp: string;
                    markupList: string;
                    markupHeading: string;
                    markupItalic: string;
                    markupBold: string;
                    markupDeletedText: string;
                    markupDeletedBg: string;
                    markupInsertedText: string;
                    markupInsertedBg: string;
                    markupChangedText: string;
                    markupChangedBg: string;
                    markupIgnoredText: string;
                    markupIgnoredBg: string;
                    metaDiffRange: string;
                    brackethighlighterAngle: string;
                    sublimelinterGutterMark: string;
                    constantOtherReferenceLink: string;
                };
            };
            codemirror: {
                text: string;
                bg: string;
                guttersBg: string;
                guttermarkerText: string;
                guttermarkerSubtleText: string;
                linenumberText: string;
                cursor: string;
                selectionBg: string;
                activelineBg: string;
                matchingbracketText: string;
                linesBg: string;
                syntax: {
                    comment: string;
                    constant: string;
                    entity: string;
                    keyword: string;
                    storage: string;
                    string: string;
                    support: string;
                    variable: string;
                };
            };
            checks: {
                bg: string;
                runBorderWidth: string;
                containerBorderWidth: string;
                textPrimary: string;
                textSecondary: string;
                textLink: string;
                btnIcon: string;
                btnHoverIcon: string;
                btnHoverBg: string;
                inputText: string;
                inputPlaceholderText: string;
                inputFocusText: string;
                inputBg: string;
                donutError: string;
                donutPending: string;
                donutSuccess: string;
                donutNeutral: string;
                dropdownText: string;
                dropdownBg: string;
                dropdownBorder: string;
                dropdownShadow: string;
                dropdownHoverText: string;
                dropdownHoverBg: string;
                dropdownBtnHoverText: string;
                dropdownBtnHoverBg: string;
                scrollbarThumbBg: string;
                headerLabelText: string;
                headerLabelOpenText: string;
                headerBorder: string;
                headerIcon: string;
                lineText: string;
                lineNumText: string;
                lineTimestampText: string;
                lineHoverBg: string;
                lineSelectedBg: string;
                lineSelectedNumText: string;
                lineDtFmText: string;
                lineDtFmBg: string;
                gateBg: string;
                gateText: string;
                gateWaitingText: string;
                stepHeaderOpenBg: string;
                stepErrorText: string;
                stepWarningText: string;
                loglineText: string;
                loglineNumText: string;
                loglineDebugText: string;
                loglineErrorText: string;
                loglineErrorNumText: string;
                loglineErrorBg: string;
                loglineWarningText: string;
                loglineWarningNumText: string;
                loglineWarningBg: string;
                loglineCommandText: string;
                loglineSectionText: string;
                ansi: {
                    black: string;
                    blackBright: string;
                    white: string;
                    whiteBright: string;
                    gray: string;
                    red: string;
                    redBright: string;
                    green: string;
                    greenBright: string;
                    yellow: string;
                    yellowBright: string;
                    blue: string;
                    blueBright: string;
                    magenta: string;
                    magentaBright: string;
                    cyan: string;
                    cyanBright: string;
                };
            };
            project: {
                headerBg: string;
                sidebarBg: string;
                gradientIn: string;
                gradientOut: string;
            };
            mktg: {
                btn: {
                    bg: string;
                };
            };
            control: {
                borderColor: {
                    emphasis: string;
                };
            };
            avatar: {
                bg: string;
                border: string;
                stackFade: string;
                stackFadeMore: string;
            };
            topicTag: {
                border: string;
            };
            counter: {
                border: string;
            };
            selectMenu: {
                backdropBorder: string;
                tapHighlight: string;
                tapFocusBg: string;
            };
            overlay: {
                backdrop: string;
            };
            header: {
                text: string;
                bg: string;
                divider: string;
                logo: string;
            };
            headerSearch: {
                bg: string;
                border: string;
            };
            sidenav: {
                selectedBg: string;
            };
            menu: {
                bgActive: string;
            };
            input: {
                disabledBg: string;
            };
            timeline: {
                badgeBg: string;
            };
            ansi: {
                black: string;
                blackBright: string;
                white: string;
                whiteBright: string;
                gray: string;
                red: string;
                redBright: string;
                green: string;
                greenBright: string;
                yellow: string;
                yellowBright: string;
                blue: string;
                blueBright: string;
                magenta: string;
                magentaBright: string;
                cyan: string;
                cyanBright: string;
            };
            btn: {
                text: string;
                bg: string;
                border: string;
                hoverBg: string;
                hoverBorder: string;
                activeBg: string;
                activeBorder: string;
                selectedBg: string;
                counterBg: string;
                primary: {
                    text: string;
                    bg: string;
                    border: string;
                    hoverBg: string;
                    hoverBorder: string;
                    selectedBg: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledBorder: string;
                    icon: string;
                    counterBg: string;
                };
                outline: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    hoverCounterFg: string;
                    disabledCounterFg: string;
                    counterFg: string;
                };
                danger: {
                    text: string;
                    hoverText: string;
                    hoverBg: string;
                    hoverBorder: string;
                    hoverIcon: string;
                    hoverCounterBg: string;
                    selectedText: string;
                    selectedBg: string;
                    selectedBorder: string;
                    disabledText: string;
                    disabledBg: string;
                    disabledCounterBg: string;
                    counterBg: string;
                    icon: string;
                    counterFg: string;
                    disabledCounterFg: string;
                    hoverCounterFg: string;
                };
                inactive: {
                    bg: string;
                    text: string;
                };
            };
            underlinenav: {
                icon: string;
                borderHover: string;
            };
            actionListItem: {
                inlineDivider: string;
                default: {
                    hoverBg: string;
                    hoverBorder: string;
                    activeBg: string;
                    activeBorder: string;
                    selectedBg: string;
                };
                danger: {
                    hoverBg: string;
                    activeBg: string;
                    hoverText: string;
                };
            };
            switchTrack: {
                bg: string;
                hoverBg: string;
                activeBg: string;
                disabledBg: string;
                fg: string;
                disabledFg: string;
                border: string;
                checked: {
                    bg: string;
                    hoverBg: string;
                    activeBg: string;
                    fg: string;
                    disabledFg: string;
                    border: string;
                };
            };
            switchKnob: {
                bg: string;
                border: string;
                disabledBg: string;
                checked: {
                    bg: string;
                    disabledBg: string;
                    border: string;
                };
            };
            segmentedControl: {
                bg: string;
                button: {
                    bg: string;
                    hover: {
                        bg: string;
                    };
                    active: {
                        bg: string;
                    };
                    selected: {
                        border: string;
                    };
                };
            };
            treeViewItem: {
                chevron: {
                    hoverBg: string;
                };
                directory: {
                    fill: string;
                };
            };
            fg: {
                default: string;
                muted: string;
                subtle: string;
                onEmphasis: string;
            };
            canvas: {
                default: string;
                overlay: string;
                inset: string;
                subtle: string;
            };
            border: {
                default: string;
                muted: string;
                subtle: string;
            };
            neutral: {
                emphasisPlus: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            accent: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            success: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            attention: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            severe: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            danger: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            open: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            closed: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            done: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            sponsors: {
                fg: string;
                emphasis: string;
                muted: string;
                subtle: string;
            };
            primer: {
                fg: {
                    disabled: string;
                };
                canvas: {
                    backdrop: string;
                    sticky: string;
                };
                border: {
                    active: string;
                    contrast: string;
                };
            };
        };
        shadows: {
            checks: {
                inputShadow: string;
            };
            mktg: {
                btn: {
                    shadow: {
                        outline: string;
                        focus: string;
                        hover: string;
                        hoverMuted: string;
                    };
                };
            };
            avatar: {
                childShadow: string;
            };
            overlay: {
                shadow: string;
            };
            btn: {
                shadow: string;
                insetShadow: string;
                primary: {
                    shadow: string;
                    insetShadow: string;
                    selectedShadow: string;
                };
                outline: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
                danger: {
                    hoverShadow: string;
                    hoverInsetShadow: string;
                    selectedShadow: string;
                };
            };
            shadow: {
                small: string;
                medium: string;
                large: string;
                extraLarge: string;
            };
            primer: {
                shadow: {
                    highlight: string;
                    inset: string;
                };
            };
        };
    };
};
export declare const colorSchemes: Record<Scheme, SchemeValue>;
export {};
//# sourceMappingURL=color-schemes.d.ts.map