NumberOK = true
while (NumberOK){
    FerstNumberOk = true;
    while(FerstNumberOk){
        FerstNumber = prompt(`Введите первое число`);
        if(FerstNumber === null){
            alert(`вы отменили ввод`);
        } else if (FerstNumber.trim() === ""){
            alert(`вы ничего не ввели`);
        } else if (isNaN(+FerstNumber) === false){
            FerstNumberOk = false;
        } else {
            alert(`вы ввели слово или предложение`);
        }
    }

    SecondNumberOk = true;
    while(SecondNumberOk){
        SecondNumber = prompt(`Введите второе число`);
        if(SecondNumber === null){
            alert(`вы отменили ввод`);
        } else if (SecondNumber.trim() === ""){
            alert(`вы ничего не ввели`);
        } else if (isNaN(+SecondNumber) === false){
            SecondNumberOk = false;
        } else {
            alert(`вы ввели слово или предложение`);
        }
    }

    FerstNumberFix = +FerstNumber;
    SecondNumberFix = +SecondNumber + 1;

    if(FerstNumberFix < SecondNumberFix){
        NumberOK = false;
    } else{
        alert(`введенные числа не соответствуют условию a < b`);
    }
}

sumFactorial = 0;
factorial = 1;

for (i = FerstNumberFix ; i < SecondNumberFix ; i++){
    console.log(i);
    helpingI = i + 1 ;
    for(j = 1; j < helpingI; j++){
        factorial *= j;
        console.log(factorial);
    }
    sumFactorial += factorial;
    factorial = 1;
}

alert(`сумма факториалов введенных вами чисел (первое число ${FerstNumber.trim()} ; второе число ${SecondNumber.trim()} ) рвна ${sumFactorial}`);


