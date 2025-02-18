/// <reference types="hoist-non-react-statics" />
import React from 'react';
import type { SxProp } from '../sx';
import type { ComponentProps } from '../utils/types';
declare const Timeline: import("styled-components").StyledComponent<"div", any, {
    clipSidebar?: boolean | undefined;
} & SxProp, never>;
type StyledTimelineItemProps = {
    condensed?: boolean;
} & SxProp;
declare const TimelineItem: import("styled-components").StyledComponent<"div", any, StyledTimelineItemProps, never>;
export type TimelineBadgeProps = {
    children?: React.ReactNode;
} & SxProp;
declare const TimelineBody: import("styled-components").StyledComponent<"div", any, SxProp, never>;
declare const TimelineBreak: import("styled-components").StyledComponent<"div", any, SxProp, never>;
export type TimelineProps = ComponentProps<typeof Timeline>;
export type TimelineItemsProps = ComponentProps<typeof TimelineItem>;
export type TimelineBodyProps = ComponentProps<typeof TimelineBody>;
export type TimelineBreakProps = ComponentProps<typeof TimelineBreak>;
declare const _default: string & import("styled-components").StyledComponentBase<"div", any, {
    clipSidebar?: boolean | undefined;
} & SxProp, never> & import("hoist-non-react-statics").NonReactStatics<never, {}> & {
    Item: import("styled-components").StyledComponent<"div", any, StyledTimelineItemProps, never>;
    Badge: {
        (props: TimelineBadgeProps): React.JSX.Element;
        displayName: string;
    };
    Body: import("styled-components").StyledComponent<"div", any, SxProp, never>;
    Break: import("styled-components").StyledComponent<"div", any, SxProp, never>;
};
export default _default;
//# sourceMappingURL=Timeline.d.ts.map