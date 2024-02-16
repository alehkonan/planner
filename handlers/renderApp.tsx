import { renderToString } from 'react-dom/server';
import { Column } from 'components/Column';
import { Deposit } from 'components/Deposit';
import { Input } from 'components/Input';
import { Page } from 'components/Page';
import { Select } from 'components/Select';
import { months, years } from 'data/constants';
import { client } from 'prisma/client';

/**
 * @returns html that can be displayed by browser
 */
export async function renderApp() {
  const income = await client.income.findFirst({ include: { deposits: true } });

  return renderToString(
    <Page title="Planner app">
      <div className="app">
        <header className="header">
          <h1>Planner app</h1>
          <div className="inputs">
            <Select
              label="Год"
              options={years}
              defaultValue={new Date().getFullYear()}
            />
            <Select
              label="Месяц"
              options={months}
              defaultValue={new Date().getMonth()}
            />
            <Input label="Курс доллара" type="number" defaultValue="2.67" />
          </div>
        </header>

        <main className="main">
          <Column title="Доходы">
            <Input
              label="Зарплата"
              type="number"
              defaultValue={income?.salary}
              hx-patch="/change-salary"
              hx-target="#output"
            />
            <span id="output"></span>
            <Input label="Продажи" type="number" />
            <hr />
            <h2>Депозиты</h2>
            <button>Добавить депозит</button>
            {income?.deposits.map((deposit) => (
              <Deposit
                key={deposit.id}
                name={deposit.name}
                balance={deposit.balance}
                interestRate={deposit.interest_rate.toNumber()}
                openDate={deposit.open_date.toISOString().substring(0, 10)}
                closeDate={deposit.close_date.toISOString().substring(0, 10)}
              />
            ))}
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
          <div className="inputs">
            <Input label="Начальный баланс" type="number" />
            <Input label="Планируемый годовой доход" type="number" />
            <Input label="Итоговый баланс" type="number" />
          </div>
        </footer>
      </div>
    </Page>
  );
}
