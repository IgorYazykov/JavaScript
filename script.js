let finder = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let amountPol = 0;
let SumPol = 0;
let Dob = 1;
finder.forEach(function(num){
    if (num >= 0){
        amountPol++;
        SumPol += num;
        Dob *= num;
    }
    return amountPol , SumPol;
});

let min = 0;
finder.forEach(function(item){
    if (min > item){
        min = item;
    }
    return min;
});
let minInd = finder.indexOf(min);

let amountNeg = 0;
finder.forEach(function(num){
    if (num < 0){
        amountNeg++;
    }
    return amountNeg;
});

let unpairedPos = 0;
let SumUnpairedPos = 0;
finder.forEach(function(num){
    if (((num % 2)===1)){
        unpairedPos++;
        SumUnpairedPos += num;
    }
    return unpairedPos , SumUnpairedPos;
});

let pairedPos = 0;
let SumPairedPos = 0;
finder.forEach(function(num){
    if (num >= 0 && ((num % 2)===0)){
        pairedPos++;
        SumPairedPos += num;
    }
    return pairedPos , SumPairedPos;
});

let max = 0
finder.forEach(function(item){
    if (max < item){
        max = item;
    }
    return max;
});
let maxInd = finder.indexOf(max);

finder.forEach(function(item){
    if (finder.indexOf(item) != maxInd){
        item = 0;
    }
});

console.log(`
    Сумма позитивных элементов: ${SumPol}
    Количество позитивных элементов: ${amountPol}
    Минимальный элемент масива: ${min}
    Индекс минимального элемента: ${minInd}
    Максимальный элемент масива: ${max}
    Индекс максимального масива: ${maxInd}
    Количество негативных элементов: ${amountNeg}
    Количество непарных позитивных элементов: ${unpairedPos}
    Количество парных позитивных элементов масива: ${pairedPos}
    Сумма парных позитивных элементов масива: ${SumPairedPos}
    Сумма непарных позитивных элементво: ${SumUnpairedPos}
    Произведение позитивных элементов: ${Dob}
    Найбольший элемент: ${max}
`);