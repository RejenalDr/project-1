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

var requiredExpenses = [],
    amount = [];

for (var i = 0; i < 2; i++) {
    requiredExpenses[i] = prompt('Введите обязательную статью расходов в этом месяце', '');
    amount[i] = +prompt('Во сколько обойдется?', '');

    if (typeof (requiredExpenses[i]) == 'string' && typeof (amount[i]) == 'number' && typeof (requiredExpenses[i]) != null && typeof (amount[i]) != null &&
        requiredExpenses[i].length < 50) {
        appData.expenses[requiredExpenses[i]] = amount[i];
    } else {
        alert('Введите значения обязательных расходов');
        i--;
    }
}

// var i = 0;
// while (i < 2){
//     requiredExpenses[i] = prompt('Введите обязательную статью расходов в этом месяце', '');
//     amount[i] = +prompt('Во сколько обойдется?', '');

//     if (typeof (requiredExpenses[i]) == 'string' && typeof (amount[i]) == 'number' && typeof (requiredExpenses[i]) != null && typeof (amount[i]) != null &&
//         requiredExpenses[i].length < 50) {
//         appData.expenses[requiredExpenses[i]] = amount[i];
//         i++;
//     } else {
//         alert('Введите значения обязательных расходов');
//     }
// }

// do {
//     requiredExpenses[i] = prompt('Введите обязательную статью расходов в этом месяце', '');
//     amount[i] = +prompt('Во сколько обойдется?', '');

//     if (typeof (requiredExpenses[i]) == 'string' && typeof (amount[i]) == 'number' && typeof (requiredExpenses[i]) != null && typeof (amount[i]) != null &&
//         requiredExpenses[i].length < 50) {
//         appData.expenses[requiredExpenses[i]] = amount[i];
//         i++;
//     } else {
//         alert('Введите значения обязательных расходов');
//     }
// } while (i < 2);
 
appData.moneyPerDay = (appData.budget - (appData.expenses[requiredExpenses[0]] + appData.expenses[requiredExpenses[1]])) / 30;

console.log(appData);

alert("Бюджет на 1 день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('минимальный уровень');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 300) {
    console.log('средний уровень');
} else if (appData.moneyPerDay > 300){
    console.log('высокый уровень');
} else {
    console.log('ошибка');
}
/*1. Сколько типов данных существует в JS? - 7: number, string, boolean, null, undefined, object, symbol 

2. Как вывести информацию в консоль? - console.log();

3. Какая функция операторов || и &&? - OR, AND */