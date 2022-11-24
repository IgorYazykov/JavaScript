const array = [1, 2, 3, 4, 5, 6, 7];
do{
    item = (prompt(`введите номер элемента который хотите удалить `))
} while (isNaN(item) || item <= 0);

removeElement(array, item );
console.log(`Результат: [${array}]`);

function removeElement (array, item ){
    array.splice(item-1,1)
}

