const body = document.getElementById("container");
const arr = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]],[13,14,15]];

let generateList = function (arr){
    return arr.reduce((ul, item) =>{ 
        let li = document.createElement("li");
        if(typeof(item) == "number"){
            li.innerText = item;
        } else {
            let secUl = generateList(item);
            li.append(secUl);
        }
        ul.append(li);
        return ul;
    },document.createElement('ul'));
};

body.append(generateList(arr));