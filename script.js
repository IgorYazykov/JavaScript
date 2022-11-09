result = 0;

MathOperatorFix = true;
while (MathOperatorFix){
    MathOperator = prompt(`введите математический оператор(+ - / *) : `);
    if (MathOperator === null){
        alert(`Вы отменили ввод`);
    } else if (MathOperator.trim() === ``){
        alert(`Вы ничего не ввели`);
    } else if (isNaN(MathOperator) === true){
        if ( MathOperator.trim().length === 1 ){
            if (MathOperator.trim() === `+`){
                MathOperator = MathOperator.trim()
                MathOperatorFix = false;
            } else if (MathOperator.trim() === `-`){
                MathOperator = MathOperator.trim()
                MathOperatorFix = false;
            } else if (MathOperator.trim() === `*`){
                MathOperator = MathOperator.trim()
                MathOperatorFix = false;
            } else if (MathOperator.trim() === `/`){
                MathOperator = MathOperator.trim()
                MathOperatorFix = false;
            } else{
                alert(`Вы ввели другой символ`);
            }
        }else {
            alert(`Вы ввели слово или предложения`);
        }
    } else {
        alert(`Вы ввели число`);
    }
}

NumbersOk = true;
while (NumbersOk){
    Number = prompt(`Введите нужное вам количество цифр (больше 1 и меньше 7)`);
    if (Number === null){
        alert(`Вы отменили ввод`);
    } else if (MathOperator.trim() === ``){
        alert(`Вы ничего не ввели`);
    } else if (isNaN(+Number) === false){
        if (+Number > 1 && +Number < 7){
            NumbersOk = false;
        } else {
            alert(`Вы ввели или слишком большое число или слишком маленькое`)
        }
    } else {
        alert(`Вы ввели слово или предложения`)
    }
}

for (i = 0; i < Number; i++ ){
    variableOk = true;
    while (variableOk){
        variable = prompt(`Введите переменную № ${i+1}`)
        if (variable === null){
            alert(`Вы отменили ввод`);
        } else if (variable.trim() === ``){
            alert(`Вы ничего не ввели`);
        } else if ( isNaN(+variable) === true ) {
            alert(`Вы ввели слово или предложения`);
        }  else  {
            if (i === 0){
                result = +variable;
            } else {
                switch(MathOperator){
                case "+":
                    result += (+variable);
                    break;
                case "-":
                    result -= (+variable);
                    break;
                case "/":
                    result = result/(+variable);
                    break;
                default :
                    result *= (+variable);
                }
            }
            variableOk = false;
        }
    }
    
}

alert(`Результат вычеслений  : ${result}`);