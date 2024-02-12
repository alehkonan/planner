import { App } from 'components/App';
import { client } from 'prisma/client';
import { renderToString } from 'react-dom/server';

export const router = async (req: Request) => {
  const url = new URL(req.url);

  switch (url.pathname) {
    case '/':
      const income = await client.income.findFirst({
        include: { deposits: true },
      });

      if (!income) {
        return new Response('There is no income in database', {
          status: 404,
        });
      }

      const page = await Bun.file('static/index.html').text();
      const app = renderToString(
        <App salary={income.salary} deposits={income.deposits} />
      );
      const body = page.replace('{{app}}', app);

      return new Response(body, {
        headers: { 'Content-Type': 'text/html' },
      });

    default:
      const file = Bun.file(`static/${url.pathname}`);
      return file.size
        ? new Response(file)
        : new Response('Not found', { status: 404 });
  }
};
