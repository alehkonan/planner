import type { ErrorLike } from 'bun';

export const handleError = (error: ErrorLike) => {
  return new Response(`Server error: ${error.message}`, { status: 500 });
};
