import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  appearance?: string;
  indeterminate?: boolean;
  invalid?: boolean;
  inputRequired?: boolean;
}

export const Checkbox = forwardRef(
  (
    {
      appearance = 'custom',
      disabled,
      indeterminate,
      invalid,
      required,
      inputRequired,
      className,
      ...restProps
    }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => (
    <input
      {...restProps}
      ref={ref}
      type="checkbox"
      className={clsx(
        'utrecht-checkbox',
        'utrecht-checkbox--html-input',
        {
          'utrecht-checkbox--disabled': disabled,
          'utrecht-checkbox--custom': appearance === 'custom',
          'utrecht-checkbox--indeterminate': indeterminate,
          'utrecht-checkbox--invalid': invalid,
          'utrecht-checkbox--required': required || inputRequired,
        },
        className,
      )}
      aria-checked={indeterminate ? 'mixed' : undefined}
      aria-invalid={invalid || undefined}
      disabled={disabled}
      aria-required={required ? required : undefined}
      required={inputRequired}
    />
  ),
);

Checkbox.displayName = 'Checkbox';
