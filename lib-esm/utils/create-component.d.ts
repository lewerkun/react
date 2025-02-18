/// <reference types="hoist-non-react-statics" />
import type { EventName } from '@lit-labs/react';
type EventNames = Record<string, EventName | string>;
export declare const createComponent: <I extends HTMLElement, E extends EventNames = {}>(elementClass: new () => I, tagName: string, events?: E | undefined) => string & import("styled-components").StyledComponentBase<import("@lit-labs/react").ReactWebComponent<I, E>, any, import("../sx").SxProp, never> & import("hoist-non-react-statics").NonReactStatics<import("@lit-labs/react").ReactWebComponent<I, E>, {}> & {
    displayName: string;
};
export default createComponent;
//# sourceMappingURL=create-component.d.ts.map