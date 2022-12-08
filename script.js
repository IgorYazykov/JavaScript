let a = [1,2,3, 'hello',4,5];
let b = [1,2,3, true, 4, undefined,10];

function summArray (array1,array2){
    let sum1 = 0;
    let sum2 = 0;

    function coice (sum,array){
        array.forEach(function(item){
            if (isNaN(item)==false){
                sum += item;
            }
        });
        return sum;
    };

    let coiceValue1 = coice(sum1,array1);
    let coiceValue2 = coice(sum2,array2);

    if (coiceValue1 > coiceValue2){
        return array1;
    };
    return array2;
};

let res = summArray (a, b);
console.log(res);