export declare const callbackCancelledResult: unique symbol;
export type CallbackCancelledResult = typeof callbackCancelledResult;
/**
 * Making async callbacks within React components is risky and error-prone. It's easy to
 * accidentally call an outdated reference to the function, or to call it after the
 * component has unmounted.
 *
 * This hook solves these problems by returning a function that is referentially constant
 * (it can never be outdated) and will have no effect if called after unmounting. If the
 * callback is cancelled due to calling after unmounting, the returned value will be
 * the unique symbol `callbackCancelledResult`.
 *
 * This callback is safe to call after `await`ing a `Promise` (or in the `.then` clause of a
 * `Promise`) and in `setTimeout`.
 *
 * @param fn the function to call
 * @param allowCallingAfterUnmount If the component is unmounted, should this be called?
 * This should typically be `false` but may be desirable in cases where user's changes would
 * not get saved unless the call is made, so the call can be made in the background after
 * unmount. If this is `true`, it's very important not to set state in this callback!
 *
 * @deprecated Will be removed in v37 (https://github.com/primer/react/issues/3604)
 */
export declare const useSafeAsyncCallback: <A extends unknown[], R>(fn: (...args: A) => R, allowCallingAfterUnmount?: boolean) => ((...args: A) => R | CallbackCancelledResult);
//# sourceMappingURL=useSafeAsyncCallback.d.ts.map