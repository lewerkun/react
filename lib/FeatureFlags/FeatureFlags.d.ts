import React from 'react';
import { type FeatureFlags } from './FeatureFlagScope';
export type FeatureFlagsProps = React.PropsWithChildren<{
    flags: FeatureFlags;
}>;
export declare function FeatureFlags({ children, flags }: FeatureFlagsProps): React.JSX.Element;
//# sourceMappingURL=FeatureFlags.d.ts.map