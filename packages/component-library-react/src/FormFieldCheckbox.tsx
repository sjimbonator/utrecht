import clsx from 'clsx';
import type { ForwardedRef, PropsWithChildren, ReactNode, Ref } from 'react';
import { forwardRef, useId } from 'react';
import type { CheckboxProps } from './Checkbox';
import { Checkbox } from './Checkbox';
import type { FormFieldProps } from './FormField';
import { FormField } from './FormField';
import { FormFieldDescription } from './FormFieldDescription';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';
import { FormLabel } from './FormLabel';

export interface FormFieldCheckboxProps
  extends Omit<FormFieldProps, 'type'>,
    Pick<
      CheckboxProps,
      | 'checked'
      | 'defaultChecked'
      | 'defaultValue'
      | 'disabled'
      | 'indeterminate'
      | 'inputRequired'
      | 'invalid'
      | 'name'
      | 'required'
      | 'value'
    > {
  description?: ReactNode;
  errorMessage?: ReactNode;
  inputRef?: Ref<HTMLInputElement>;
  label: ReactNode;
  status?: ReactNode;
}

export const FormFieldCheckbox = forwardRef(
  (
    {
      checked,
      children,
      defaultChecked,
      defaultValue,
      description,
      disabled,
      errorMessage,
      indeterminate,
      inputRef,
      inputRequired,
      invalid,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      onInput,
      required,
      status,
      value,
      ...props
    }: PropsWithChildren<FormFieldCheckboxProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const inputId = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    return (
      <FormField invalid={invalid} type="checkbox" ref={ref} {...props}>
        <div className="utrecht-form-field__label utrecht-form-field__label--checkbox">
          <FormLabel type="checkbox" htmlFor={inputId}>
            <Checkbox
              aria-describedby={
                clsx({
                  [descriptionId]: description,
                  [errorMessageId]: invalid,
                  [statusId]: status,
                }) || undefined
              }
              checked={checked}
              className="utrecht-form-field__input"
              defaultChecked={defaultChecked}
              defaultValue={defaultValue}
              disabled={disabled}
              id={inputId}
              indeterminate={indeterminate}
              ref={inputRef}
              inputRequired={inputRequired}
              invalid={invalid}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              onFocus={onFocus}
              onInput={onInput}
              required={required}
              value={value}
            />
            {label}
          </FormLabel>
        </div>
        {description && (
          <FormFieldDescription className="utrecht-form-field__description" id={descriptionId}>
            {description}
          </FormFieldDescription>
        )}
        {invalid && errorMessage && (
          <FormFieldErrorMessage className="utrecht-form-field__error-message" id={errorMessageId}>
            {errorMessage}
          </FormFieldErrorMessage>
        )}
        {status && (
          <div className="utrecht-form-field__status" id={statusId}>
            {status}
          </div>
        )}
        {children}
      </FormField>
    );
  },
);

FormFieldCheckbox.displayName = 'FormFieldCheckbox';
