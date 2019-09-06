let money, time;


function start(){
    money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD","");

    while(isNan(money) || money == '' || monney == null){
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};

function chooseExpenses(){
    for(let i=0; i<2; i++){
        let listExpense = prompt("Введите обязательную статью расходов в этом месяце", ''),
            cost = +prompt("Во сколько обойдется?", '');
        if ( (typeof(listExpense)) != null && (typeof(cost)) != null && listExpense != '' && cost !=''){
            appData.expenses[listExpense] = cost;
        }
        else{
            alert("error, all fields must be filled");
            i--; 
        }  
    };
}


function detectDayBudget(){
    appData.moneyPerDay = appData.budget/30;
    alert("Ваш бюджет на день:" + appData.moneyPerDay)
}
detectDayBudget();

function detectLevel(){
    if(appData.moneyPerDay <100){
        console.log("Minimum");
    }else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
        console.log("middle");
    }else if(appData.moneyPerDay>2000){
        console.log("Hight");
    }else {
        console.log("smth went wrong");
    }
}

function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
}

function chooseOptExpenses() {                             // Функция для определения необязательных расходов
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();
