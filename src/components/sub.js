import { Calculation } from "./calculator.js";
class subing extends Calculation{
    constructor(x, y){
        super(x, y);
    }

    sub () {
        return this.x - this.y
    }
}

export default subing 