var money, 
    time,
    save, 
    percent, 
    requiredExpenses = [], 
    amount = [],
    i = 0;
function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

var appData = {
    budget: money,
    dataTime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpences: function(){
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
        appData.moneyPerDay = ((appData.budget - (appData.expenses[requiredExpenses[0]] + appData.expenses[requiredExpenses[1]])) / 30).toFixed();
        console.log("Бюджет на 1 день: " + appData.moneyPerDay);
    },
    detectDayBudget: function(){
        if (appData.savings == true) {

            appData.dayIncome = save / 100 / 365 * percent;
            alert("Доход в день: " + appData.dayIncome);
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            save = +prompt('Какова сумма накоплений?', '');
            percent = +prompt('Под какой процент?', '');
            if (save != ''){
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц: " + appData.monthIncome);
            }
        }
    },
    wealthLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('минимальный уровень');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 300) {
            console.log('средний уровень');
        } else if (appData.moneyPerDay > 300) {
            console.log('высокый уровень');
        } else {
            console.log('ошибка');
        }
    },
    chooseOptionalExpenses: function() {
        while (i < 3){
            var optionalExpenses = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[1 + i++] = optionalExpenses;
        }
    },
    chooseIncome: function(){
        var items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)','');
        if( typeof(items) != 'string' || items == '' || typeof(items) != null){
            alert("Вы ввели некорректные данные или не ввели их вовсе");
        } else{
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        } 
        appData.income.forEach(function(itemArr, i) {
            alert('Способы оплаты: ' + (i+1) + itemArr);
        });  
    }

};

function dataInObj(){
    for (var key in appData){
        console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
    }
}

console.log(dataInObj());
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

  
    


console.log(appData);



