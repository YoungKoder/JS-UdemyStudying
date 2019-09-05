let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD","");
    
var appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};

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

appData.moneyPerDay = appData.budget/30;
alert('бюджет на день:' + appData.moneyPerDay)

if(appData.moneyPerDay <100){
    console.log("Minimum");
}else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
    console.log("middle");
}else if(appData.moneyPerDay>2000){
    console.log("Hight");
}else {
    console.log("smth went wrong");
}
