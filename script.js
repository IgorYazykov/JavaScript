function summValue () {
    let sum = 0;
    return function ressum(value){
        sum  += value; 
        console.log(`sum(${value}) = ${sum}`)
    };
};

let res = summValue ();
res(3);
res(5);
res(20);