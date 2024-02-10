import { months, years } from 'data/constants';
import { Column } from './Column';
import { Input } from './Input';
import { Select } from './Select';
import { Deposit } from './Deposit';

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
          <Input label="Продажи" type="number" />
          <hr />
          <h2>Депозиты</h2>
          <Deposit
            name="Первый депозит"
            balance={0}
            interestRate={0}
            openDate={new Date().toISOString().substring(0, 10)}
            closeDate={new Date().toISOString().substring(0, 10)}
          />
          <button>Добавить депозит</button>
          <div id="deposits"></div>
        </Column>
        <Column title="Расходы">
          <span>Базовые</span>
          <Input label="Аренда жилья" type="number" />
          <Input label="Еда" type="number" />
          <Input
            label="Платежи"
            description="Например: коммунальные или обслуживание банковского счета"
            type="number"
          />
          <Input label="Медицинская страховка" type="number" />
          <Input
            label="Уход за собой"
            description="Например: средства гигиены или стрижка"
            type="number"
          />
          <Input label="Транспорт" type="number" />
          <hr />
          <span>Саморазвитие</span>
          <Input label="Учеба" type="number" />
          <Input label="Спорт" type="number" />
          <hr />
          <span>Дополнительные</span>
          <Input label="Развлечения" type="number" />
          <Input label="Путешествия" type="number" />
          <Input label="Покупки" type="number" />
          <Input
            label="Услуги"
            description="Например: фотографии на документы"
            type="number"
          />
          <Input
            label="Сервисы"
            description="Например: мобильный интернет или подписка на Netflix"
            type="number"
          />
        </Column>
        <Column title="Flow">
          <Input label="Месячный доход" type="number" readOnly value="1500" />
          <Input
            label="Пассивный доход"
            description="Ваш пассивный доход составляет 10% от расходов"
            type="number"
            readOnly
            value="20"
          />
          <Input label="Расходы" type="number" readOnly value="1200" />
          <Input
            label="Остается в конце месяца"
            type="number"
            readOnly
            value="300"
            description="Оставшиеся деньги вы можете потратить на незапланированные расходы
            или вложить их для увеличения пассивного дохода"
          />
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
