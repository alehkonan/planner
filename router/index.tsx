import { App } from 'components/App';
import { renderToString } from 'react-dom/server';

export const router = async (req: Request) => {
  const url = new URL(req.url);

  switch (url.pathname) {
    case '/':
      const page = await Bun.file('static/index.html').text();
      const app = renderToString(<App />);
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
