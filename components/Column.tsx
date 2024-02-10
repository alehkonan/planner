import type { PropsWithChildren } from 'react';

type ColumnProps = PropsWithChildren<{
  title: string;
}>;

export function Column({ children, title }: ColumnProps) {
  return (
    <div className="column">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
