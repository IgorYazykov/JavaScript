const body = document.querySelector("body");
const table = document.createElement("table");
table.classList.add("borderAndSize");

let number = 1

for (let i=0; i<10 ; i++){
    let tr = document.createElement("tr");
    for (let j=0; j<10 ; j++){
        let td = document.createElement("td");
        td.innerText = `${number}`;
        number++;
        td.classList.add("tr");
        tr.append(td);
    }
    table.append(tr);
}
body.append(table);