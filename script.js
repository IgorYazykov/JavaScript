vegetables = [ 'cabbage' , 'avocado' , 'tomato' ];
fruits = [ 'grapes' , 'raspberry' , 'coconut' ];
vegetablesPrice = [ 8 , 30 , 10 ];
fruitsPrice = [ 20 , 25 , 50 ];

do{
    sezone = prompt('Winter or summer period?').replaceAll(" ",""); 
    lowerSezone = sezone.toLowerCase();
    if(lowerSezone == "winter"){
        sezonePrice = 2;
    } else if(lowerSezone == "summer"){
        sezonePrice = 0.8;
    } else{};
} while (lowerSezone !== "winter" && lowerSezone !== "summer");

do{
    eat = prompt('Choose category in which you want to buy products: vegetables or fruits?').replaceAll(" ",""); 
    lowerEat = eat.toLowerCase();
} while (lowerEat !== "vegetables" && lowerEat !== "fruits");

if (lowerEat == "vegetables"){
    do{
        choiceOfEat = prompt('Choose product from category vegetable: cabbage, avocado, tomato').replaceAll(" ",""); 
        lowerchoiceOfEat = choiceOfEat.toLowerCase();
    } while (lowerchoiceOfEat !== "cabbage" && lowerchoiceOfEat !== "avocado" && lowerchoiceOfEat !== "tomato");
    indexOfEat = vegetables.indexOf(lowerchoiceOfEat);
    FinalPrice = vegetablesPrice[indexOfEat];
} else if (lowerEat == "fruits"){
    do{
        choiceOfEat = prompt('Choose product from category fruits: grapes , raspberry , coconut').replaceAll(" ",""); 
        lowerchoiceOfEat = choiceOfEat.toLowerCase();
    } while (lowerchoiceOfEat !== "grapes" && lowerchoiceOfEat !== "raspberry" && lowerchoiceOfEat !== "coconut");
    indexOfEat = fruits.indexOf(lowerchoiceOfEat);
    FinalPrice = fruitsPrice[indexOfEat];
}

do{
    count = prompt(`Enter count of ${lowerEat}`).replaceAll(" ","");
} while (isNaN(count) || count < 1);

FinalPrice *= count;
FinalPrice *= sezonePrice;

document.write(`
    <div class = "card">
        <div>
            <img src="img/${lowerEat}/${choiceOfEat}.svg" alt="${choiceOfEat}" width="100" height="100">
            <p>Selected category: <b>${lowerEat}</b></p>
            <p>Selected product: <b>${lowerchoiceOfEat}</b></p>
            <p>Count of ${lowerchoiceOfEat}s: <b>${count}</b></p>
            <p>Selected period: <b>${lowerSezone}</b></p>
            <p>Final sum: <b>${FinalPrice} UAH</b></p>
        </div>
    </div>
`);


