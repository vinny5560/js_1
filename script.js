let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?");
  time = prompt("Введите дату в формате YYYY-MM-DD");

  while (isNaN(money) || money == null || money == "") {
    money = +prompt("Ваш бюджет на месяц?");
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpences: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце");
      let b = prompt("Во сколько обойдется?");

      if (typeof a != null && typeof b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
        appData.expenses[a] = b;
      } else {
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Это высокий уровень достатка!");
    } else {
      console.log("Произошла ошибка");
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 4; i++) {
      appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Сумма накоплений");
      let percent = +prompt("Годовой процент");

      appData.monthIncome = ((save / 100) * 12) / percent;
    }
  },
  chooseIncome: function () {
    let items;
    items = prompt("Доп доходы");
    if (typeof items != "string" || items == null || items == "") {
      items = prompt("Доп доходы");
    }
    appData.income = items.split(", ");
    appData.income.push(prompt("Еще"));
    appData.income.sort();

    console.log("Способы доп заработка: ");
    appData.income.forEach(function (item, i) {
      console.log(i + 1 + ": " + item);
    });
  },
};
for (let key in appData) {
  console.log(key + ": " + appData[key]);
}
