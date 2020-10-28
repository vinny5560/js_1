let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце");
  let b = prompt("Во сколько обойдется?");

  if (typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
    appData.expenses[a] = b;
  } else {
    i--;
  }
}

appData.moneyPerDay = appData.budget / 30;

if (appData.moneyPerDay < 100) {
  console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
  console.log ("Это высокий уровень достатка!");
} else {
  console.log ("Произошла ошибка");
}