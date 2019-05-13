var money = +prompt('Ваш бюджет на месяц?', '');
var time = prompt('Введите дату в формате YYYY-MM-DD', '');


var appData = {
    budget: money,
    dataTime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var requiredExpenses = prompt('Введите обязательную статью расходов в этом месяце', ''),
    amount = +prompt('Во сколько обойдется?', ''),
    requiredExpenses2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    amount2 = +prompt('Во сколько обойдется?', '');

appData.expenses[requiredExpenses] = amount;
appData.expenses[requiredExpenses2] = amount2;    


console.log(appData);


var oneDayBudget = (appData.budget - (appData.expenses[requiredExpenses] + appData.expenses[requiredExpenses2])) / 30;

alert("Бюджет на 1 день" + oneDayBudget);


/*1. Сколько типов данных существует в JS? - 7: number, string, boolean, null, undefined, object, symbol 

2. Как вывести информацию в консоль? - console.log();

3. Какая функция операторов || и &&? - OR, AND */