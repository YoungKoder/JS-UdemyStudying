let start = document.getElementById('start'),
    result = document.querySelector('.result'),
    resultTable = result.querySelector('.result-table'),
    budgetValue = resultTable.querySelector('.budget-value'),
    dayBudgetValue = resultTable.querySelector('.daybudget-value'),
    levelValue = resultTable.querySelector('.level-value'),
    expensesValue = resultTable.querySelector('.expenses-value'),
    optionalExpensesValue = resultTable.querySelector('.optionalexpenses-value'),
    incomeValue = resultTable.querySelector('.income-value'),
    monthSavingsValue = resultTable.querySelector('.monthsavings-value'),
    yearSavings = resultTable.querySelector('.yearsavings-value'),
    expensesItems = document.getElementsByClassName('expenses-item');
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let money, time;

    function start(){
        money = +prompt("Ваш бюджет на месяц?", ""),
        time = prompt("Введите дату в формате YYYY-MM-DD","");
    
        while(isNaN(money) || money == '' || money == null){
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
        savings:false,
        chooseExpenses: function(){
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
            }
        },
        detectDayBudget: function(){
            appData.moneyPerDay = appData.budget/30;
            alert("Ваш бюджет на день:" + appData.moneyPerDay);
        },
        detectLevel: function(){
            if(appData.moneyPerDay <100){
                console.log("Minimum");
            }else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
                console.log("middle");
            }else if(appData.moneyPerDay>2000){
                console.log("Hight");
            }else {
                console.log("smth went wrong");
            }
        },
        checkSavings: function(){
            if(appData.savings == true){
                let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");
        
                    appData.monthIncome = save/100/12*percent;
                    alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
            }
        },
        chooseOptExpenses: function(){
            for (let i = 1; i <= 3; i++) {
                let questionOptExpenses = prompt("Статья необязательных расходов?");
                appData.optionalExpenses[i] = questionOptExpenses;
                console.log(appData.optionalExpenses);
            }
        },
        chooseIncome: function(){
            
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    
            if(typeof(items) == null || items == '' || typeof(items) != 'string'){
                alert("smth went wrong");
    
            } else{
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
            }
        
    
            appData.income.forEach(function(item,i){
                alert("Способы доп заработка: " + (i+1) + " - "+(item));
            });
            
        }
    };
    
    for(let key in appData){
        console.log("Наша програма включает в себя: " + key + " = " + appData[key]);
    }