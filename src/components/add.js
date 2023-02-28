import { Calculation } from "./calculator.js";
class adding extends Calculation{
    constructor(x, y){
        super(x, y);
    }

    sum () {
        return this.x + this.y
    }
}

export default adding 