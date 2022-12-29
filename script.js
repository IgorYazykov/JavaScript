class SuperMath {
    constructor (X, Y, znak){
        this.X = X;
        this.Y = Y;
        this.znak = znak
    }

    check(){
        let sogl = confirm("хотите ввести свои данные?");
        if (sogl == true){
            return(this.input());
        } 
        return(this.MathOperat());
    }

    input(){
        this.X = +prompt("введите первое число ");
        this.Y = +prompt("введите второе число ");
        do{
            this.znak = prompt("введите знак ");
            let proverka = this.znak;
        } while (this.proverka == "+" || this.proverka == "-" || this.proverka == "*" || this.proverka == "/" || this.proverka == "%");

        return this.MathOperat();
    }

    MathOperat(){
        let res = 0;
        switch (this.znak){
            case "+":
                res = this.X+ + this.Y;
                break;
            case "-":
                res = this.X - this.Y;
                break;
            case "*":
                res = this.X * this.Y;
                break;
            case "%":
                res = this.X % this.Y;
                break;
            default:
                res = this.X / this.Y;
        }
        return res;
    }
}

const Example = new SuperMath (10, 5 , "/");

alert(`Результат ${Example.check()}`);