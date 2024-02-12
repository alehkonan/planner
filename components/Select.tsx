import type { ComponentProps, ReactNode } from 'react';

type SelectOption = {
  value: string | number;
  label: string;
};

type SelectProps = ComponentProps<'select'> & {
  options: SelectOption[] | string[];
  label?: ReactNode;
};

export function Select({ options, label, ...props }: SelectProps) {
  return (
    <label className="form-field">
      {label}
      <select {...props}>
        {options.map((option) => {
          const value = typeof option === 'string' ? option : option.value;
          const label = typeof option === 'string' ? option : option.label;

          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </label>
  );
}
