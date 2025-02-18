import type { TokenBaseProps } from './TokenBase';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
export interface AvatarTokenProps extends TokenBaseProps {
    avatarSrc: string;
}
declare const AvatarToken: PolymorphicForwardRefComponent<"button" | "a" | "span", AvatarTokenProps>;
export default AvatarToken;
//# sourceMappingURL=AvatarToken.d.ts.map