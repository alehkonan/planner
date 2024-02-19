import { changeSalary } from 'handlers/changeSalary';
import { getApp } from 'handlers/getApp';
import { handleStatic } from 'handlers/handleStatic';
import { response } from 'helpers';

export const router = async (req: Request) => {
  const { pathname } = new URL(req.url);

  switch (pathname) {
    case '/':
      switch (req.method) {
        case 'GET':
          return getApp();

        default:
          return response.methodNotAllowed();
      }

    case '/change-salary':
      switch (req.method) {
        case 'PATCH':
          return changeSalary(req);

        default:
          return response.methodNotAllowed();
      }

    default:
      return handleStatic(pathname);
  }
};
