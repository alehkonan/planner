import type { PropsWithChildren } from 'react';

type PageProps = {
  title: string;
};

export function Page({ children, title }: PropsWithChildren<PageProps>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>{title}</title>
        <link href="style.css" rel="stylesheet" />
        <script src="htmx.min.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
