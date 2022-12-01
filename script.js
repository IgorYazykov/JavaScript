function main (a = 2, b = 3 , c) { 
    if (typeof c == 'function'){
        return c(sum(a, b));
    }
    return sum(a, b);
};

function sum (a, b) { 
    return a + b; 
};

function multiplication (sum){
    return sum *= 100;
};

finalValue = main (10, 5, multiplication);
console.log(`В функцию переданы все аргументы. Результат работы функции main: ${finalValue}`);
finalValue = main (10, undefined, multiplication);
console.log(`В функцию переданы только 2 аргумента (число и функция). Результат работы функции main: ${finalValue}`);
finalValue = main (undefined, undefined, multiplication);
console.log(`В функцию передана только функция. Результат работы функции main: ${finalValue}`);
finalValue = main (10, 5, undefined);
console.log(`В функцию не передана функция. Результат работы функции main: ${finalValue}`);