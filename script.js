do {
    quantity = prompt(`Введите количество элементов массива: `)
} while (isNaN(quantity) || quantity < 1);

document.write(`оригинальный массив: <br>`);
array=[];

// for ( i=0 ; i < quantity ; i++ ){
//     do{
//         array[i] = prompt(`Введите ${i+1} элемент массива: `)
//     } while (isNaN(array[i]));
//     document.write(`${array[i]}   `);
// }

for ( i=0 ; i < quantity ; i++ ){
    array[i] = Math.round(Math.random() * 100);
    document.write(`${array[i]}   `);
}

do{
    do {
        NotCorect = false;
        NumberOfElement = prompt(`Введите элемент массива который вы хотите удалить: `);
        if( NumberOfElement > quantity ){
            NotCorect = true;
        }
        deleteElement (NumberOfElement);
    } while (isNaN(quantity) || NotCorect );
    Choice=confirm("хотите удалить еще один элемент?")
}while (Choice);

document.write(`<br>отредактированный массив: <br>`);

for ( i=0 ; i < quantity ; i++ ){
    document.write(`${array[i]}   `);
};

function deleteElement (Number){
    array.splice(Number-1,1);
    quantity--;
};