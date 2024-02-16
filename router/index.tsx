import { changeSalary } from 'handlers/changeSalary';
import { getApp } from 'handlers/getApp';
import { handleStatic } from 'handlers/handleStatic';
import { response } from 'helpers';

export const router = async (req: Request) => {
  const { pathname } = new URL(req.url);

  switch (pathname) {
    case '/': {
      const app = await getApp();
      return response.html(app);
    }

    case '/change-salary':
      switch (req.method) {
        case 'PATCH': {
          const salary = await changeSalary(req);
          return response.json(salary);
        }

        default:
          return response.methodNotAllowed();
      }

    default:
      return handleStatic(pathname);
  }
};
