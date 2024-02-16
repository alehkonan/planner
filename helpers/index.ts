export const response = {
  html: (content: string) => {
    return new Response(content, { headers: { 'Content-Type': 'text/html' } });
  },
  json: (data: unknown) => {
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  },
  badRequest: (message?: string) => {
    return new Response(message ?? 'Bad request', { status: 400 });
  },
  methodNotAllowed: () => {
    return new Response('Method not allowed', { status: 405 });
  },
  notFound: () => {
    return new Response('Not found', { status: 404 });
  },
} as const;
