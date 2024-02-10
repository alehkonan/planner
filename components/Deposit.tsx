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
    <div>
      <Input label="Название" defaultValue={name} />
      <Input label="Баланс" type="number" defaultValue={balance} />
      <Input label="Ставка" type="number" defaultValue={interestRate} />
      <Input label="Дата открытия" type="date" defaultValue={openDate} />
      <Input label="Дата закрытия" type="date" defaultValue={closeDate} />
    </div>
  );
}
