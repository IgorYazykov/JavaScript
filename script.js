let list = [10, "fgt", 30, 50, true, 100];

function copy (list, func){
    let copyList = list.slice();
    if (typeof func === "function"){
        for (let i=0 ; i < copyList.length; i++){
            if (typeof copyList[i] === "number"){
                copyList[i] = func(copyList[i]);
            };
        }
        return copyList;
    };
    console.log(`функция не была передана`)
    return copyList;
}

function div (itemdiv){
    itemdiv /= 10
    return itemdiv
}

let copiListAlredy = copy (list, div);

console.log(list);
console.log(copiListAlredy);

copiListAlredy = copy (list, undefined);

console.log(list);
console.log(copiListAlredy);