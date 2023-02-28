import { Calculation } from "./calculator.js";
class multing extends Calculation{
    constructor(x, y){
        super(x, y);
    }

    mult () {
        return this.x * this.y
    }
}

export default multing