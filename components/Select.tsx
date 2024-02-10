import type { ComponentProps, ReactNode } from 'react';

type SelectProps = ComponentProps<'select'> & {
  options: string[];
  label?: ReactNode;
};

export function Select({ options, label, ...props }: SelectProps) {
  return (
    <label>
      {label}
      <select {...props}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
