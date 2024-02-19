import { PORT, USER_ID } from 'config';
import { handleError } from 'handlers/handleError';
import { client } from 'prisma/client';
import { router } from 'router';

await client.income.upsert({
  where: { id: USER_ID },
  create: { salary: 0 },
  update: {},
});

Bun.serve({
  fetch: router,
  error: handleError,
  port: PORT,
});

console.log(`Server is running on port ${PORT}`);
