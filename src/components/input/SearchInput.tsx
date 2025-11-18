import { forwardRef } from 'react';

import { CircularCloseIcon, SearchIcon } from '../icons';
import { Input } from './Input';
import type { InputProps } from './Input.types';

export interface SearchInputProps extends Omit<InputProps, 'shape' | 'startIcon'> {
  /**
   * Optional leading icon. Defaults to the library search icon.
   */
  startIcon?: InputProps['startIcon'];
  /**
   * Whether to render a clear button icon when the input has a value.
   * Use together with onClear to handle the action.
   */
  onClear?: () => void;
  /**
   * Icon rendered after the input. Defaults to a close glyph when onClear is provided.
   */
  endIcon?: InputProps['endIcon'];
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onClear, endIcon, value, startIcon, ...props }, ref) => {
    const hasValue =
      typeof value === 'number' ? value !== 0 : Boolean(value && `${value}`.length);
    const showClear = Boolean(onClear && hasValue);

    return (
      <Input
        ref={ref}
        shape="pill"
        startIcon={startIcon ?? <SearchIcon className="h-4 w-4" />}
        endIcon={
          showClear ? (
            <button
              type="button"
              onClick={onClear}
              className="flex h-6 w-6 items-center justify-center text-icon transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-field-border-active focus-visible:ring-opacity-30 focus-visible:ring-offset-2"
            >
              <span className="sr-only">Clear search</span>
              <CircularCloseIcon className="h-3.5 w-3.5" />
            </button>
          ) : (
            endIcon
          )
        }
        value={value}
        {...props}
      />
    );
  }
);

SearchInput.displayName = 'SearchInput';


