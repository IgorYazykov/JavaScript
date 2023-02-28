import adding from "./components/add.js";
import diving from "./components/div.js";
import multing from "./components/mult.js";
import subing from "./components/sub.js";

const suming = new adding(7, 11);
console.log(`Сумма 7 и 11 : ${suming.sum()}`);
const division = new diving(9, 3);
console.log(`Деление 9 на 3 : ${division.div()}`);
const subtraction = new subing(19, 6);
console.log(`Вычитание 6 из 19 : ${subtraction.sub()}`);
const multiplication = new multing(4, 6);
console.log(`Умножение 4 на 6 : ${multiplication.mult()}`);