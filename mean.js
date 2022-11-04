firstNumber = +prompt (`Введите первое число`);
secondNumber = +prompt (`Введите второе число`);
thirdNumber = +prompt (`Введите третье число`);
if( firstNumber == 0 && secondNumber == 0 && thirdNumber == 0){
    alert(`вы не ввели все числа или ввели 0`)
} 
else if ( isNaN(firstNumber) == false && isNaN(secondNumber) == false && isNaN(thirdNumber) == false ) {
    mean = ((firstNumber + secondNumber + thirdNumber )/3);
    alert(`среднее арифметическое число: ${mean}`);
}
else{
    alert(`вы ввели не число`)
}