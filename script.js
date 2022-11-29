const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let key = '';
do{
    length = prompt(`Введите количество символов в ключе`);
} while (isNaN(length));

generateKey (length, characters);
console.log(key);

function generateKey (length, characters){
    for (i=0; i< length ; i++){
        key += characters[Math.ceil(Math.random() * characters.length)];
    }
    return key;
}