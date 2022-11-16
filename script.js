do{
    LengthOfAray = +prompt(`Введите количество элементов в масиве`).replaceAll(" ","");
} while ( isNaN ( LengthOfAray ) || LengthOfAray < 1 );

disorderedArray = [LengthOfAray];
orderedArray = [];
delitedValueArray = [];

document.write(`оригенальный масив <br>`);

for ( i=0 ; i < LengthOfAray ; i++){
    do{
        disorderedArray[i] = +prompt(`Введите элемент масива`).replaceAll(" ","");
    } while ( isNaN ( LengthOfAray ) || LengthOfAray < 1 );
    document.write(`элемент номер ${i+1} равен ${disorderedArray[i]}; <br>`);
}

document.write(`упорядоченый масив <br>`);

for ( i=0 ; i < LengthOfAray ; i++){
    ItsTrue = 0;
    TemporariValue = 0;
    TemporariValue = disorderedArray[0];
    for ( j=0 ; j < LengthOfAray; j++){
        if(TemporariValue > disorderedArray[j]){
            TemporariValue = disorderedArray[j];
        } else {};
    } 
    indexValue = disorderedArray.indexOf(TemporariValue);
    orderedArray[i] = disorderedArray.splice(indexValue,1); 
}

for ( i=0 ; i < LengthOfAray ; i++){
    document.write(`элемент номер ${i+1} равен ${orderedArray[i]}; <br>`);
}

document.write(`масив с удаленными элементами <br>`);

orderedArray.splice(1,3);

for ( i=0 ; i < LengthOfAray ; i++){
    if (orderedArray[i] !== undefined){
        document.write(`элемент номер ${i+1} равен ${orderedArray[i]}; <br>`)
    } else {
        document.write(`элемент пустой; <br>`)
    }
}