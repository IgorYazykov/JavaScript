let numOrStr = prompt('input number or string');
console.log(numOrStr);
isANnmber = isNaN(numOrStr);
console.log(isANnmber);

switch (numOrStr ) {
    case null:
        console.log('ви скасували')
        break;
    case '':  
        console.log('Empty String')
        break;
    default:
        switch (isANnmber){
            case true:
                console.log(' number is Ba_NaN')
            break;
            default:
                console.log('OK!')
        }
}