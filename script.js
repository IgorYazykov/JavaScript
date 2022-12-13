let obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } }
let filterObj = {};

function opening (object){
    let objectCopi = {};
    for (let key in object){
        
        if (typeof object[key] == 'object'){
            const objectmini = opening (object[key]);
            for(let key in objectmini){
                objectCopi[key] = objectmini[key];
            }
        } else {
            objectCopi[key] = object[key];
        }
    }
    return objectCopi;
}

filterObj = opening (obj);
console.log(filterObj);