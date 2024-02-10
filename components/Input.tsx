import type { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  label?: string;
  description?: string;
};

export function Input({ label, description, ...props }: InputProps) {
  return (
    <label>
      {label}
      <input {...props} />
      <p className="description">{description}</p>
    </label>
  );
}
