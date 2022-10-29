a = +prompt("введите первое число").trim();
b = +prompt("введиде второе число").trim();
c = null;
d = null;
e = null;
f = null;
c = a + b;
d = a - b;
e = a * b;
f = a / b;
alert(`
    Результаты:
    1) ${a} + ${b} = ${c}
    2) ${a} - ${b} = ${d}
    3) ${a} * ${b} = ${e}
    4) ${a} / ${b} = ${f}
`)
