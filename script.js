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
};

function chooseExpences() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько обойдется?");

    if (typeof a != null && typeof b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
      appData.expenses[a] = b;
    } else {
      i--;
    }
  }
}

chooseExpences();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
}

detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Это минимальный уровень достатка!");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Это средний уровень достатка!");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Это высокий уровень достатка!");
  } else {
    console.log("Произошла ошибка");
  }
}

detectLevel();

function chooseOptExpenses() {
  for (let i = 1; i < 4; i++) {
    appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
  }
}

chooseOptExpenses();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Сумма накоплений");
    let percent = +prompt("Годовой процент");

    appData.monthIncome = ((save / 100) * 12) / percent;
  }
}

checkSavings();
