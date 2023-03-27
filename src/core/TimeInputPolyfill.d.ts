import React from 'react';
import type { String24hr } from '@time-input-polyfill/utils/npm/types';
export type TimeInputValue = String24hr | undefined;
export type SetTimeInputValue = React.Dispatch<React.SetStateAction<TimeInputValue>>;
export interface TimeInputPolyfillProps extends React.HTMLAttributes<HTMLInputElement> {
    /** The string value of the input in 24 hour time. */
    value: TimeInputValue;
    /** The setState function that updates the `value` prop. */
    setValue: SetTimeInputValue;
    /**
     * Set to true to force browsers that support input[type=time]
     * to use the polyfill.
     *
     * (Useful for testing and debugging)
     *
     * @default false */
    forcePolyfill?: boolean;
    /**
     * Determines where to load the polyfill utility functions from.
     *
     * @default 'https://cdn.jsdelivr.net/npm/@time-input-polyfill/utils@1'
     */
    polyfillSource?: string;
}
declare const _TimeInputPolyfill: React.MemoExoticComponent<({ value: value24hr, setValue: setValue24hr, forcePolyfill, onChange, onFocus, onBlur, onMouseDown, onMouseUp, onKeyDown, className, style, polyfillSource, ...restProps }: TimeInputPolyfillProps) => JSX.Element>;
export { _TimeInputPolyfill as TimeInputPolyfill };
export default _TimeInputPolyfill;
