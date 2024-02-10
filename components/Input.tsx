import type { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  label?: string;
};

export function Input({ label, ...props }: InputProps) {
  return (
    <label>
      {label}
      <input {...props} />
    </label>
  );
}
