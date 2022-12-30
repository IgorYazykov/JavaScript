const OPERATION = {
    "+": function (x, y) { return x + y},
    "-": function (x, y) { return x - y},
    "*": function (x, y) { return x * y},
    "/": function (x, y) { return x / y},
    "%": function (x, y) { return x % y}
};

class SuperMath {
    constructor (){
    }

    check(){
        let sogl = confirm(`Введенные данные: ${this.X} ${this.znak} ${this.Y}. Хотите что-то изменить?`);
        if (sogl == true){
            return(this.input());
        } 
        return OPERATION[this.znak](this.X , this.Y);
    }

    input(){
        do{
            this.X = +prompt("введите первое число ");
        } while (isNaN(this.X));
        do{
            this.Y = +prompt("введите второе число ");
        }while (isNaN(this.Y));
        do{
            this.znak = prompt("введите знак ");
        } while (!OPERATION[this.znak]);

        return this.check(OPERATION[this.znak](this.X , this.Y));
    }
}

const obj = new SuperMath();

alert(`Результат ${obj.input()}`);