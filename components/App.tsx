import { months, years } from 'data/constants';
import { Column } from './Column';
import { Input } from './Input';
import { Select } from './Select';

export const App = () => {
  return (
    <>
      <header className="header">
        <h1>Planner app</h1>
        <div className="inputs">
          <Select label="Год" options={years} />
          <Select label="Месяц" options={months} defaultValue="february" />
          <Input label="Курс доллара" type="number" defaultValue="2.67" />
        </div>
      </header>

      <main className="main">
        <Column title="Доходы">
          <Input label="Зарплата" type="number" />
          <h2>Депозиты</h2>
          <button>Добавить депозит</button>
          <div id="deposits"></div>
        </Column>
        <Column title="Расходы">
          <Input label="Аренда жилья" type="number" />
          <Input label="Пассивный доход" type="number" />
        </Column>
      </main>

      <footer className="footer">
        <h2>Годовой отчет</h2>
        <Input label="Начальный баланс" type="number" />
        <Input label="Планируемый годовой доход" type="number" />
        <Input label="Итоговый баланс" type="number" />
      </footer>
    </>
  );
};
