import { Input } from './Input';

type DepositProps = {
  balance: number;
  interestRate: number;
  openDate: string;
  closeDate: string;
};

export function Deposit({
  balance,
  interestRate,
  openDate,
  closeDate,
}: DepositProps) {
  return (
    <div>
      <Input label="Баланс" type="number" value={balance} />
      <Input label="Ставка" type="number" value={interestRate} />
      <Input label="Дата открытия" type="date" value={openDate} />
      <Input label="Дата закрытия" type="date" value={closeDate} />
    </div>
  );
}
