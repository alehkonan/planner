import { Input } from './Input';

type DepositProps = {
  name: string;
  balance: number;
  interestRate: number;
  openDate: string;
  closeDate: string;
};

export function Deposit({
  name,
  balance,
  interestRate,
  openDate,
  closeDate,
}: DepositProps) {
  return (
    <>
      <Input defaultValue={name} label="Название" />
      <Input defaultValue={balance} label="Баланс" type="number" />
      <Input defaultValue={interestRate} label="Ставка" type="number" />
      <Input defaultValue={openDate} label="Дата открытия" type="date" />
      <Input defaultValue={closeDate} label="Дата закрытия" type="date" />
      <hr />
    </>
  );
}
