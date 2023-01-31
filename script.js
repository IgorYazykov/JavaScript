let arrContainer = [];

function createArr (jsonData,arr){
    const xml = new XMLHttpRequest();
    xml.open("GET",`${jsonData}.json`,true);
    xml.send();
    xml.addEventListener("readystatechange",()=>{
        if(xml.readyState == 4){
            let localContainer = JSON.parse(xml.response);
            (localContainer.children).forEach(function (item) {
                arr.push(item);
            });
        }
    });
}

createArr("data",arrContainer);
createArr("data2",arrContainer);


setTimeout(()=>{
    console.log(arrContainer);
},100);