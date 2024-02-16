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
export async function getApp() {
  const income = await client.income.findFirst({ include: { deposits: true } });

  return renderToString(
    <Page title="Planner app">
      <div className="app">
        <header className="header">
          <h1>Planner app</h1>
          <form className="inputs">
            <Select
              defaultValue={new Date().getFullYear()}
              label="Год"
              options={years}
            />
            <Select
              defaultValue={new Date().getMonth()}
              label="Месяц"
              options={months}
            />
            <Input defaultValue="2.67" label="Курс доллара" type="number" />
          </form>
        </header>

        <main className="main">
          <Column title="Доходы">
            <form className="stack">
              <Input
                defaultValue={income?.salary}
                hx-patch="/change-salary"
                label="Зарплата"
                name="salary"
                type="number"
              />
              <Input
                defaultValue="140"
                label="Продажи"
                name="sales"
                type="number"
              />
            </form>

            <hr />
            <h2>Депозиты</h2>
            <button>Добавить депозит</button>
            {income?.deposits.map((deposit) => (
              <Deposit
                key={deposit.id}
                balance={deposit.balance}
                closeDate={deposit.close_date.toISOString().substring(0, 10)}
                interestRate={deposit.interest_rate.toNumber()}
                name={deposit.name}
                openDate={deposit.open_date.toISOString().substring(0, 10)}
              />
            ))}
          </Column>
          <Column title="Расходы">
            <span>Базовые</span>
            <Input label="Аренда жилья" type="number" />
            <Input label="Еда" type="number" />
            <Input
              description="Например: коммунальные или обслуживание банковского счета"
              label="Платежи"
              type="number"
            />
            <Input label="Медицинская страховка" type="number" />
            <Input
              description="Например: средства гигиены или стрижка"
              label="Уход за собой"
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
              description="Например: фотографии на документы"
              label="Услуги"
              type="number"
            />
            <Input
              description="Например: мобильный интернет или подписка на Netflix"
              label="Сервисы"
              type="number"
            />
          </Column>
          <Column title="Flow">
            <Input label="Месячный доход" type="number" value="1500" readOnly />
            <Input
              description="Ваш пассивный доход составляет 10% от расходов"
              label="Пассивный доход"
              type="number"
              value="20"
              readOnly
            />
            <Input label="Расходы" type="number" value="1200" readOnly />
            <Input
              description="Оставшиеся деньги вы можете потратить на незапланированные расходы
            или вложить их для увеличения пассивного дохода"
              label="Остается в конце месяца"
              type="number"
              value="300"
              readOnly
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
