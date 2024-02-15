import { handleError } from 'handlers/handleError';
import { router } from 'router';

const port = process.env.PORT || 3000;

Bun.serve({
  fetch: router,
  error: handleError,
  port,
});

console.log(`Server is running on port ${port}`);
