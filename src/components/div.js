import { Calculation } from "./calculator.js";
class diving extends Calculation{
    constructor(x, y){
        super(x, y);
    }

    div() {
        return this.x / this.y
    }
}

export default diving 