const figure = document.getElementById("figure");
const select = document.getElementById("select");
const color = document.getElementById("color");
let selectValue = "";

selectValue = select.value;
figure.classList.add(selectValue);

select.addEventListener('change',function () {
    figure.classList.remove(selectValue);
    selectValue = select.value;
    figure.classList.add(selectValue);
});

color.addEventListener('blur',function(){
    let colorValue ; 
    colorValue = color.value;
    figure.style.backgroundColor = `${colorValue}`
});