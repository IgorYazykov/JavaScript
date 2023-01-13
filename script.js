const HAMBURGER = {
    "little": [5,20],
    "big": [10,40],
    "cheese": [1,20],
    "lettuce": [2,5],
    "potatoes": [1.5,10],
    "sprinkle with seasoning": [1.5,0],
    "sprinkle with mayonnaise": [2,5]
};

class Hamburger {
    constructor(){
    }

    choise () { 
        do{
            this.size = prompt("do you want little or big hamburger?").trim().toLowerCase();
        } while (this.size == "little" && this.size == "big");
        do{
            this.filling = prompt("do you want some cheese or lettuce or potatoes to your hamburger?").trim().toLowerCase();
        } while (this.filling == "cheese" && this.filling == "lettuce" && this.filling == "potatoes");
        do{
            this.additive = prompt("do you want sprinkle with seasoning or sprinkle with mayonnaise to your hamburger?").trim().toLowerCase();
        } while (this.additive == "sprinkle with seasoning" && this.additive == "sprinkle with mayonnaise");
        this.money = 0;
        this.calories = 0;
        this.accrual();
    }

    adding () {
        this.money += this.funk[0];
        this.calories += this.funk[1];
        return this.money, this.calories
    }

    accrual(){
        this.funk = HAMBURGER[this.size];
        this.adding();
        this.funk = HAMBURGER[this.filling];
        this.adding();
        this.funk = HAMBURGER[this.additive];
        this.adding();
        return alert(`
        your ${this.size} hamburger 
        and have filling ${this.filling} 
        and additive ${this.additive};

        the final price ${this.money} $ ; 
        and your hamburger have ${this.calories} calories;
        `);
    }
} 

const obj = new Hamburger();
obj.choise();