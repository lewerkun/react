/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { RelativeTimeElement } from '@github/relative-time-element';
import type { ComponentProps } from '../utils/types';
declare const RelativeTimeComponent: string & import("styled-components").StyledComponentBase<import("@lit-labs/react").ReactWebComponent<RelativeTimeElement, {}>, any, import("..").SxProp, never> & import("hoist-non-react-statics").NonReactStatics<import("@lit-labs/react").ReactWebComponent<RelativeTimeElement, {}>, {}> & {
    displayName: string;
};
declare function RelativeTime({ date, datetime, children, noTitle, ...props }: RelativeTimeProps): React.JSX.Element;
export type RelativeTimeProps = ComponentProps<typeof RelativeTimeComponent>;
export default RelativeTime;
//# sourceMappingURL=RelativeTime.d.ts.map