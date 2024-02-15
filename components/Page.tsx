import type { PropsWithChildren } from 'react';

type PageProps = {
  title: string;
};

export function Page({ children, title }: PropsWithChildren<PageProps>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="style.css" />
        <script src="htmx.min.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
