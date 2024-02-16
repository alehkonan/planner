import { changeSalary } from 'handlers/changeSalary';
import { handleStatic } from 'handlers/handleStatic';
import { renderApp } from 'handlers/renderApp';
import { response } from 'helpers';

export const router = async (req: Request) => {
  const { pathname } = new URL(req.url);

  switch (pathname) {
    case '/': {
      const app = await renderApp();
      return response.html(app);
    }

    case '/change-salary':
      switch (req.method) {
        case 'PATCH': {
          const salary = await changeSalary();
          return response.json(salary);
        }

        default:
          return response.methodNotAllowed();
      }

    default:
      return handleStatic(pathname);
  }
};
