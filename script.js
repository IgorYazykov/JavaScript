const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
do{
    length = prompt(`Введите количество символов в ключе`);
} while (isNaN(length));

let NewKey = generateKey (length, characters);
console.log(NewKey);

function generateKey (length, characters){
    let key = '';
    for (i=0; i< length ; i++){
        key += characters[Math.ceil(Math.random() * characters.length)];
    }
    return key;
}


// let a = 3 
//  function addTwo(x) { 
//  let ret = x + 2 
//  return ret 
//  } 
//  let b = addTwo(a) 
//  console.log(b)