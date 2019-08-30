let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD","");
    
let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};

let listExpense = prompt("Введите обязательную статью расходов в этом месяце", ''),
    cost = prompt("Во сколько обойдется?", '');

appData.expenses.listExpense = cost;

alert("Ваш бюджет на месяц:" + appData.budget/30);