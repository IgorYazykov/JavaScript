const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
do{
    length = prompt(`Введите количество символов в ключе`);
} while (isNaN(length));

let NewKey = generateKey (length, characters);
console.log(NewKey);

function generateKey (length, characters){
    let key = '';
    for (i=0; i< length ; i++){
        key += characters[Math.floor(Math.random() * characters.length)];
        console.log(key)
    }
    return key;
}