import { client } from 'prisma/client';

export async function changeSalary(req: Request) {
  const { salary } = await client.income.update({
    where: { id: 1 },
    data: { salary: 1999 },
  });

  return salary;
}
