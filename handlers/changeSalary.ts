import { client } from 'prisma/client';

export async function changeSalary(req: Request) {
  const formData = await req.formData();
  const salary = formData.get('salary');
  if (!salary) return response.badRequest('Salary is not defined');
  const { salary } = await client.income.update({
    where: { id: 1 },
    data: { salary: 1999 },
  });

  return salary;
}
