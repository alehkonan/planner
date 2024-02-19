import { parse, string, transform } from 'valibot';
import { USER_ID } from 'config';
import { response } from 'helpers';
import { client } from 'prisma/client';

export async function changeSalary(req: Request) {
  const formData = await req.formData();
  const input = formData.get('salary');

  const salary = parse(transform(string(), Number), input);

  const data = await client.income.update({
    where: { id: USER_ID },
    data: { salary },
  });

  return response.json(data.salary);
}
