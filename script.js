const container = document.getElementById("smile");
const container1 = document.getElementById("smile_1");
const container2 = document.getElementById("smile_2");
const container3 = document.getElementById("smile_3");
const container4 = document.getElementById("smile_4");
let conter = 0;
let conter1 = 0;
let conter2 = 0;
let conter3 = 0;
let conter4 = 0;

container.addEventListener('click',function(){
    conter += createCounter(conter);
    return createEl(container,conter)
});

container1.addEventListener('click',function(){
    conter1 += createCounter(conter1);
    return createEl(container1,conter1);
});

container2.addEventListener('click',function(){
    conter2 += createCounter(conter2);
    return createEl(container2,conter2);
});

container3.addEventListener('click',function(){
    conter3 += createCounter(conter3);
    return createEl(container3,conter3);
});

container4.addEventListener('click',function(){
    conter4 += createCounter(conter4);
    return createEl(container4,conter4);
});

function createCounter (){
    return 1;
};

function createEl (item, cheslEl){
    if (cheslEl == 1){
        let pEl = document.createElement("p");
        pEl.innerText = `${cheslEl}`
        item.append(pEl)
    } else {
        let pElem = item.querySelector("p");
        pElem.textContent = `${cheslEl}`
    };
};